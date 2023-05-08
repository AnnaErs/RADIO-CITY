import moment from 'moment';
import {memo, useEffect, useState} from 'react';

import Container from '@ui-kit/layout/container';
import Search from '@ui-kit/search/Search';
import {OrgInfo} from '@components/org-info';

import {CurrentInfoType} from './types';

const CURRENT_INFO = {
  title: 'Текущая информация',
  date_subtitle: 'Сегодня:',
  time_subtitle: 'Время:'
};

const CURR_MOMENT = moment();

const CurrentInfo: CurrentInfoType = () => {
  const [currMoment, setMoment] = useState(CURR_MOMENT);

  useEffect(() => {
    const intervalId = setInterval(() => setMoment(moment()), 1000 * 60);

    return () => clearInterval(intervalId);
  }, [setMoment]);

  return (
    <Container>
      <div className="flex flex-col gap-4 mb-10">
        <div>
          <p className=" text-h4-bold">{CURRENT_INFO.title}</p>
        </div>
        <div className="flex flex-col text-h4 gap-3 children:flex children:flex-row children:gap-2">
          <div>
            <p className="text-h4-bold">{CURRENT_INFO.date_subtitle}</p>
            <div>{currMoment.format('DD MMMM YYYY')}</div>
          </div>
          <div>
            <p className="text-h4-bold">{CURRENT_INFO.time_subtitle}</p>
            <div>{currMoment.format('HH:mm')}</div>
          </div>
        </div>
      </div>

      <Search />
      <OrgInfo />
    </Container>
  );
};

export default memo(CurrentInfo);
