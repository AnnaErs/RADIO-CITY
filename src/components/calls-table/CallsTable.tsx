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

const CallsTable = memo<CallsTableType>(function CallsTable() {
  const {data: clientsData, isLoading: isLoadingClients} = useSWR('GET_CLIENTS', getClients);
  const {data: callsData, isLoading: isLoadingCalls} = useSWR('GET_MONTH_CALLS', () =>
    getCalls(getCurrentMonthPeriod())
  );

  const callsByClientId = useMemo(() => groupBy(callsData, 'client_id'), [callsData]);

  const today = moment().date();
  const arrayOfDays = useMemo(() => Array(moment().daysInMonth()).fill(undefined), []);

  return (
    <div className="overflow-auto">
      <Container>
        {isLoadingClients || isLoadingCalls ? (
          <Loader />
        ) : (
          <table>
            <thead>
              <tr>
                <th className="text-left py-2 pr-3">Время</th>
                <th className="text-left py-2 pr-3">Нас. пункт</th>
                <th className="text-left py-2 pr-3">Служба</th>
                <th className="text-left py-2 pr-3">Подразделение</th>
                <th className="text-left py-2 pr-3">Номер</th>
                <th className="text-left py-2 pr-3">Позывной</th>
                {arrayOfDays.map((_, index) => (
                  <th key={index}>{index + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(clientsData ?? []).map(([clientId, client]) => {
                const lastRevisionOfClient = last(client);
                const calls = callsByClientId[clientId];
                const callsByDay = (calls ?? []).reduce<Record<string, Call>>((acc, call) => {
                  acc[moment(call['date-time']).date()] = call;
                  return acc;
                }, {});

                return (
                  <tr key={clientId} className="hover:bg-slate-100">
                    <td className="py-2 pr-3">{lastRevisionOfClient?.call_time}</td>
                    <td className="py-2 pr-3 whitespace-nowrap">{lastRevisionOfClient?.location}</td>
                    <td className="py-2 pr-3">{lastRevisionOfClient?.unit}</td>
                    <td className="py-2 pr-3 whitespace-nowrap">
                      <OrgTypeToString value={lastRevisionOfClient?.type} />
                    </td>
                    <td className="py-2 pr-3">{lastRevisionOfClient?.trunk_phone}</td>
                    <td className="py-2 pr-3">{lastRevisionOfClient?.call_sign}</td>
                    {arrayOfDays.map((_, index) => {
                      const dayOfMonth = moment().date(index).day();

                      console.log(getColorByCallTypeId(callsByDay[index]?.['calls-type_id']));
                      return (
                        <td
                          key={index}
                          className={cn('min-w-[48px] min-h-[48px] border border-gray-100 text-center bg-white', {
                            ['bg-zinc-300']: !lastRevisionOfClient?.schedule.includes(dayOfMonth + 1),
                            ['!bg-zinc-500']: today <= index
                          })}
                          style={{backgroundColor: getColorByCallTypeId(callsByDay[index]?.['calls-type_id'])}}
                        >
                          {callsByDay[index] ? moment(callsByDay[index]?.['date-time']).format('H:mm') : undefined}
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
    </div>
  );
});

export {CallsTable};
