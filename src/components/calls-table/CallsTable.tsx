import {flatten} from 'lodash';
import moment from 'moment';
import {memo, useCallback, useMemo} from 'react';

import {ScrollWatcher} from '@components/scroll-watcher';
import Container from '@ui-kit/layout/container';
import Loader from '@ui-kit/loader/Loader';
import {useGetCallTimes} from '@utils/api/call-times';

import {ClientRow} from './ClientRow';
import {CallsTableType} from './types';

const CallsTable = memo<CallsTableType>(function CallsTable({startDate, endDate, isRadio}) {
  const {data, isLoading, isValidating, setSize} = useGetCallTimes();

  const arrayOfDays = useMemo(() => {
    return Array.from(
      {length: moment(endDate).diff(moment(startDate), 'days') + 1},
      (_, i) => moment(startDate).date() + i
    );
  }, [startDate, endDate]);

  const onScrollBottom = useCallback(() => {
    if (isValidating) {
      return;
    }
    setSize(prev => prev + 1);
  }, [isValidating, setSize]);

  const clients = useMemo(() => flatten(data), [data]);

  return (
    <Container className="flex-1" isRealFullWidth>
      <ScrollWatcher onScrollBottom={onScrollBottom}>
        <table>
          <thead>
            <tr>
              <th className="text-left py-2 pr-3 whitespace-nowrap">Время</th>
              {isRadio && <th className="text-left py-2 pr-3 whitespace-nowrap">Радиотренировка</th>}
              <th className="text-left py-2 pr-3 whitespace-nowrap">Нас. пункт</th>
              <th className="text-left py-2 pr-3 whitespace-nowrap">Организация</th>
              <th className="text-left py-2 pr-3 whitespace-nowrap">Подразделение</th>
              <th className="text-left py-2 pr-3 whitespace-nowrap">Категория</th>
              <th className="text-left py-2 pr-3 whitespace-nowrap">Номер</th>
              <th className="text-left py-2 pr-3 whitespace-nowrap">Позывной</th>
              {arrayOfDays.map((_, index) => {
                const startDay = moment.utc(startDate).date();
                return (
                  <th className="min-w-[48px] min-h-[48px]" key={index}>
                    {index + startDay}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {clients?.map((client, index) => (
              <ClientRow client={client} arrayOfDays={arrayOfDays} key={index} isRadio={isRadio} />
            ))}
          </tbody>
        </table>
        {(isLoading || isValidating) && <Loader />}
      </ScrollWatcher>
    </Container>
  );
});

export {CallsTable};
