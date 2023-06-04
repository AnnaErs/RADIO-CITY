import useSWR from 'swr';
import {memo, useMemo} from 'react';
import moment from 'moment';
import {groupBy, last} from 'lodash';

import Container from '@ui-kit/layout/container';
import {Call, getCalls} from '@api/callsAPI';
import {getClients} from '@api/clientsAPI';
import {getCurrentMonthPeriod} from '@utils/times';
import {cn} from '@utils/cn';

import {CallsTableType} from './types';
import Loader from '@ui-kit/loader/Loader';
import {getColorByCallTypeId} from './utils';
import {OrgTypeToString} from '@components/org-type-to-string';
import {useSearchParams} from 'react-router-dom';

const CallsTable = memo<CallsTableType>(function CallsTable() {
  const {data: clientsData, isLoading: isLoadingClients} = useSWR('GET_CLIENTS', getClients);
  const {data: callsData, isLoading: isLoadingCalls} = useSWR('GET_MONTH_CALLS', () =>
    getCalls(getCurrentMonthPeriod())
  );

  const [searchParams] = useSearchParams();
  const callsByClientId = useMemo(() => groupBy(callsData, 'client_id'), [callsData]);

  const today = moment().utcOffset(0, true).date();
  const arrayOfDays = useMemo(() => Array(moment().utcOffset(0, true).daysInMonth()).fill(undefined), []);

  const clients = useMemo(() => {
    const type = searchParams.get('type');
    const search = searchParams.get('search');

    return Object.values(clientsData ?? {})
      .map(versions => versions[versions.length - 1])
      .filter(
        client =>
          Boolean(client) &&
          (!type || client.type === type) &&
          (!search ||
            client.mo?.toLowerCase()?.includes(search.toLowerCase()) ||
            client.location?.toLowerCase()?.includes(search.toLowerCase()) ||
            client.organization?.toLowerCase()?.includes(search.toLowerCase()) ||
            client.unit?.toLowerCase()?.includes(search.toLowerCase()) ||
            client.trunk_phone?.toLowerCase()?.includes(search.toLowerCase()) ||
            client.call_sign?.toLowerCase()?.includes(search.toLowerCase()))
      )
      .sort((clientA, clientB) => {
        const now = moment().utcOffset(0, true);
        const aCallTime = clientA.call_time ? moment.utc(clientA.call_time, 'H:mm') : now;
        const bCallTime = clientB.call_time ? moment.utc(clientB.call_time, 'H:mm') : now;

        if (aCallTime.isAfter(bCallTime)) return 1;
        if (aCallTime.isBefore(bCallTime)) return -1;

        return (clientA.location || '').localeCompare(clientB.location || '');
      });
  }, [clientsData, searchParams]);

  return (
    <Container isRealFullWidth>
      {isLoadingClients || isLoadingCalls ? (
        <Loader />
      ) : (
        <table>
          <thead>
            <tr>
              <th className="text-left py-2 pr-3">Время</th>
              <th className="text-left py-2 pr-3">Нас. пункт</th>
              <th className="text-left py-2 pr-3">Организация</th>
              <th className="text-left py-2 pr-3">Подразделение</th>
              <th className="text-left py-2 pr-3">Категория</th>
              <th className="text-left py-2 pr-3">Номер</th>
              <th className="text-left py-2 pr-3">Позывной</th>
              {arrayOfDays.map((_, index) => (
                <th key={index}>{index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clients.map(client => {
              const lastRevisionOfClient = client;
              const calls = callsByClientId[client.client_id];
              const callsByDay = (calls ?? []).reduce<Record<string, Call>>((acc, call) => {
                acc[moment.utc(call['date-time']).date()] = call;
                return acc;
              }, {});

              return (
                <tr key={client.client_id} className="hover:bg-slate-100">
                  <td className="py-2 pr-3">{lastRevisionOfClient?.call_time}</td>
                  <td className="py-2 pr-3 whitespace-nowrap">{lastRevisionOfClient?.location}</td>
                  <td className="py-2 pr-3 whitespace-nowrap">{lastRevisionOfClient?.organization}</td>
                  <td className="py-2 pr-3 whitespace-nowrap">{lastRevisionOfClient?.unit}</td>
                  <td className="py-2 pr-3 whitespace-nowrap">
                    <OrgTypeToString value={lastRevisionOfClient?.type} />
                  </td>
                  <td className="py-2 pr-3">{lastRevisionOfClient?.trunk_phone}</td>
                  <td className="py-2 pr-3 whitespace-nowrap">{lastRevisionOfClient?.call_sign}</td>
                  {arrayOfDays.map((_, index) => {
                    const dayOfMonth = moment().utcOffset(0, true).date(index).day();

                    return (
                      <td
                        key={index}
                        className={cn('min-w-[48px] min-h-[48px] border border-gray-100 text-center bg-white', {
                          ['bg-zinc-300']: !lastRevisionOfClient?.schedule.includes(dayOfMonth + 1),
                          ['!bg-zinc-500']: today <= index
                        })}
                        style={{backgroundColor: getColorByCallTypeId(callsByDay[index]?.['calls-type_id'])}}
                      >
                        {callsByDay[index] ? moment.utc(callsByDay[index]?.['date-time']).format('H:mm') : undefined}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Container>
  );
});

export {CallsTable};
