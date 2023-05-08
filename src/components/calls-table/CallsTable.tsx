import useSWR from 'swr';
import {memo, useMemo} from 'react';
import moment from 'moment';
import {groupBy, last} from 'lodash';

import Container from '@ui-kit/layout/container';
import {getCalls} from '@api/callsAPI';
import {getClients} from '@api/clientsAPI';
import {getCurrentMonthPeriod} from '@utils/times';
import {cn} from '@utils/cn';

import {CallsTableType} from './types';
import Loader from '@ui-kit/loader/Loader';

const CallsTable = memo<CallsTableType>(function CallsTable() {
  const {data: clientsData, isLoading: isLoadingClients} = useSWR('GET_CLIENTS', getClients);
  const {data: callsData, isLoading: isLoadingCalls} = useSWR('GET_MONTH_CALLS', () =>
    getCalls(getCurrentMonthPeriod())
  );

  const callsByClientId = useMemo(() => groupBy(callsData, 'client_id'), [callsData]);

  const today = moment().date();
  const arrayOfDays = useMemo(() => Array(moment().daysInMonth()).fill(undefined), []);

  return (
    <Container>
      {isLoadingClients || isLoadingCalls ? (
        <Loader />
      ) : (
        <table>
          <thead>
            <tr>
              <th className="text-left py-2 pr-3 whitespace-nowrap">Н.П. ТРС</th>
              <th className="text-left py-2 pr-3">Время</th>
              <th className="text-left py-2 pr-3">Р/ст №</th>
              {arrayOfDays.map((_, index) => (
                <th key={index}>{index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(clientsData ?? []).map(([clientId, client]) => {
              const lastRevisionOfClient = last(client);
              const calls = callsByClientId[clientId];
              const callsByDay = (calls ?? []).reduce<Record<string, boolean>>((acc, call) => {
                acc[moment(call['date-time']).date()] = true;
                return acc;
              }, {});

              return (
                <tr key={clientId}>
                  <td className="py-2 pr-3 whitespace-nowrap">{lastRevisionOfClient?.location}</td>
                  <td className="py-2 pr-3">{lastRevisionOfClient?.call_time}</td>
                  <td className="py-2 pr-3">{lastRevisionOfClient?.call_sign}</td>
                  {arrayOfDays.map((_, index) => {
                    const dayOfMonth = moment().date(index).day();

                    return (
                      <td
                        key={index}
                        className={cn('w-8 h-8 border border-gray-100', {
                          ['bg-lime-300']: callsByDay[index],
                          ['bg-white']: !callsByDay[index],
                          ['bg-zinc-300']: !lastRevisionOfClient?.schedule.includes(dayOfMonth + 1),
                          ['!bg-zinc-500']: today <= index
                        })}
                      />
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
