import moment from 'moment';
import {ClientWithCall, ConvertClientsToClientListType, GroupClientsType} from './types';
import {assign, fromPairs} from 'lodash';
import {CallsType} from './consts';

const BACKEND_FORMAT = 'YYYY-MM-DD';
export const getTodayPeriod = () => ({
  from: moment.utc().startOf('day').format(BACKEND_FORMAT),
  to: moment.utc().endOf('day').add(1, 'day').format(BACKEND_FORMAT)
});

export const getMonthPeriod = () => ({
  from: moment.utc().startOf('month').format(BACKEND_FORMAT),
  to: moment.utc().endOf('month').format(BACKEND_FORMAT)
});

const convertClientsToClientList: ConvertClientsToClientListType = (responseClients, callsData) => {
  const today = moment.utc();
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

export const groupClients: GroupClientsType = (clients, calls) => {
  const allActiveClients = convertClientsToClientList(clients ?? {}, calls ?? []);

  const now = moment.utc();
  return allActiveClients.reduce<[ClientWithCall[], ClientWithCall[], ClientWithCall[]]>(
    (acc, client) => {
      let type: 0 | 1 | 2 | undefined;
      const clientCallTime = moment.utc(client.call_time, 'HH:mm');

      const clientHasCall = !!client.call?.['calls-type_id'];
      const clientCallTimeIsBeforeNow = clientCallTime.isBefore(now);
      const clientCallTimeIsAfterNow = clientCallTime.isAfter(now);

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
