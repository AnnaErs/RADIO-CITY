import moment from 'moment';
import {memo} from 'react';

import Container from '@ui-kit/layout/container';

import OrgInfo from './OrgInfo';
import {CurrentInfoType} from './types';

const CURRENT_INFO = {
  title: 'Текущая информация',
  date_subtitle: 'Сегодня:',
  time_subtitle: 'Время:'
};

const CurrentInfo: CurrentInfoType = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4 mb-10">
        <div>
          <p className=" text-h4-bold">{CURRENT_INFO.title}</p>
        </div>
        <div className="flex flex-col text-h4 gap-3 children:flex children:flex-row children:gap-2">
          <div>
            <p className="text-h4-bold">{CURRENT_INFO.date_subtitle}</p>
            <div>{moment().format('DD MMM YYYY')}</div>
          </div>
          <div>
            <p className="text-h4-bold">{CURRENT_INFO.time_subtitle}</p>
            <div>{moment().format('LT')}</div>
          </div>
        </div>
      </div>
      <OrgInfo />
    </Container>
  );
};

export default memo(CurrentInfo);
