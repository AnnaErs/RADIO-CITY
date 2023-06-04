import moment from 'moment';
import {ClientWithCall, ConvertClientsToClientListType, GroupClientsType} from './types';
import {assign, fromPairs} from 'lodash';
import {CallsType} from './consts';

const BACKEND_FORMAT = 'YYYY-MM-DD';

export const getMonthPeriod = () => ({
  from: moment().utcOffset(0, true).startOf('month').format(BACKEND_FORMAT),
  to: moment().utcOffset(0, true).endOf('month').format(BACKEND_FORMAT)
});

const convertClientsToClientList: ConvertClientsToClientListType = (responseClients, callsData) => {
  const today = moment().utcOffset(0, true);
  const callsByClientId = fromPairs(callsData.map(call => [call.client_id, call]));
  const responceClientsArray = Object.values(responseClients);

  return responceClientsArray.reduce<Array<ClientWithCall>>((acc, versions) => {
    // Find active version of client
    const activeVersion = versions.find(version => {
      const isFromBeforeToday = moment.utc(version.active_period_from).isBefore(today);
      const isToAfterToday = !version.active_period_to || today.isBefore(moment.utc(version.active_period_to));

      return isFromBeforeToday && isToAfterToday;
    });

    // Add to active client call and add to show list
    if (activeVersion) {
      const clientCall = callsByClientId[activeVersion.client_id];
      const clientWithCall = assign({call: clientCall}, activeVersion);
      acc.push(clientWithCall);
    }

    return acc;
  }, []);
};

export const groupClients: GroupClientsType = (clients, calls, type, search) => {
  const allActiveClients = convertClientsToClientList(clients ?? {}, calls ?? []);

  const now = moment().utcOffset(0, true);
  return allActiveClients
    .filter(client => {
      return (
        (!type || client.type === type) &&
        (!search ||
          client.mo?.includes(search) ||
          client.location?.toLowerCase()?.includes(search.toLowerCase()) ||
          client.organization?.toLowerCase()?.includes(search.toLowerCase()) ||
          client.unit?.toLowerCase()?.includes(search.toLowerCase()) ||
          client.trunk_phone?.toLowerCase()?.includes(search.toLowerCase()) ||
          client.call_sign?.toLowerCase()?.includes(search.toLowerCase())) &&
        client.schedule.includes(moment().utcOffset(0, true).day() + 1)
      );
    })
    .sort((clientA, clientB) => {
      if (clientA.call_time && !clientB.call_time) {
        return 1;
      }
      if (!clientA.call_time && clientB.call_time) {
        return -1;
      }

      const aCallTime = moment.utc(clientA.call_time, 'H:mm');
      const bCallTime = moment.utc(clientB.call_time, 'H:mm');
      if (aCallTime.isAfter(bCallTime)) return 1;
      if (aCallTime.isBefore(bCallTime)) return -1;

      return clientA.location.localeCompare(clientB.location);
    })
    .reduce<[ClientWithCall[], ClientWithCall[], ClientWithCall[]]>(
      (acc, client) => {
        let type: 0 | 1 | 2 | undefined;
        const clientCallTime = moment.utc(client.call_time, 'H:mm');

        const clientHasCall = !!client.call?.['calls-type_id'];
        const clientCallTimeIsBeforeNow = client.call_time && clientCallTime.isBefore(now);
        const clientCallTimeIsAfterNow = !client.call_time || clientCallTime.isAfter(now);

        if (clientHasCall) {
          type = CallsType.Called;
        } else if (clientCallTimeIsBeforeNow) {
          type = CallsType.Missed;
        } else if (clientCallTimeIsAfterNow) {
          type = CallsType.Future;
        }

        if (typeof type === 'number') {
          acc[type].push(client);
        } else {
          console.error({client, date: now.format()});
        }

        return acc;
      },
      [
        [], // clientsWithCallStatus
        [], // clientsWithoutCallStatusAndBeforeNow
        [] // clientsWithoutCallStatusAndAfterNow
      ]
    );
};
