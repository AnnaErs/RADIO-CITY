import moment from 'moment';
import {memo, useCallback, useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import {OrgInfo} from '@components/org-info';
import Search from '@components/search/Search';
import {Date} from '@ui-kit/date';
import Container from '@ui-kit/layout/container';
import {addParams, filterParser, useQuery} from '@utils/search-params';

import {CurrentInfoType} from './types';

const CURRENT_INFO = {
  title: 'Текущая информация',
  date_subtitle: 'Диапазон:',
  time_subtitle: 'Время:'
};

const CURR_MOMENT = moment().utcOffset(0, true);

const CurrentInfo: CurrentInfoType = () => {
  const {filterStartDate, filterEndDate} = useQuery(filterParser);

  const [currMoment, setMoment] = useState(CURR_MOMENT);
  const [_, setSearchParams] = useSearchParams();

  const changeStartDate = useCallback(
    (date: string) => {
      setSearchParams(addParams({filterStartDate: date}));
    },
    [setSearchParams]
  );
  const changeEndDate = useCallback(
    (date: string) => {
      setSearchParams(addParams({filterEndDate: date}));
    },
    [setSearchParams]
  );

  useEffect(() => {
    const intervalId = setInterval(() => setMoment(moment().utcOffset(0, true)), 1000 * 60);

    return () => clearInterval(intervalId);
  }, [setMoment]);

  return (
    <Container isFullWidth>
      <div className="flex flex-col gap-4 mb-10">
        <div>
          <p className="text-h4-bold">{CURRENT_INFO.title}</p>
        </div>
        <div className="flex flex-col text-h4 gap-3 children:flex children:flex-row children:gap-2">
          <div className="flex items-center">
            <p className="text-h4-bold">{CURRENT_INFO.date_subtitle}</p>
            <div className="flex gap-2 items-center">
              <Date
                name="calls-from-date"
                value={moment.utc(filterStartDate).format('YYYY-MM-DD')}
                onChange={changeStartDate}
              />
              <span>—</span>
              <Date
                name="calls-to-date"
                value={moment.utc(filterEndDate).format('YYYY-MM-DD')}
                onChange={changeEndDate}
              />
            </div>
          </div>
          <div>
            <p className="text-h4-bold">{CURRENT_INFO.time_subtitle}</p>
            <div>{currMoment.format('H:mm')}</div>
          </div>
        </div>
      </div>

      <Search />
      <OrgInfo />
    </Container>
  );
};

export default memo(CurrentInfo);
