import {memo, useCallback, useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';

import Tab from '@ui-kit/tab';
import {useGetClientTypes} from '@utils/api/client-types';
import {makeOptions} from '@utils/common';
import {filterParser, useQuery} from '@utils/search-params';

import {Option, OrgInfoPropsType} from './types';

const RADIO_PRACTICE_OPTION = {
  label: 'Групповые радиотренировки',
  value: 'radio-practice'
};

const OrgInfo = memo<OrgInfoPropsType>(function OrgInfo() {
  const {type} = useQuery(filterParser);
  const [_, setSearchParams] = useSearchParams();

  const {data} = useGetClientTypes();

  const changeType = useCallback(
    (option?: Option) => () => {
      setSearchParams(prev => {
        const objectParams = Object.fromEntries(prev);
        if (!option) {
          delete objectParams.type;
          return objectParams;
        }
        return Object.assign({}, objectParams, {type: option?.value});
      });
    },
    [setSearchParams]
  );

  const options = useMemo(() => [RADIO_PRACTICE_OPTION].concat(makeOptions(data, 'client_type_id', 'name')), [data]);

  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-row flex-wrap gap-4">
      <Tab onClick={changeType()} isActive={!type}>
        Все
      </Tab>
      {options.map(option => {
        return (
          <Tab onClick={changeType(option)} key={option.value} isActive={type == option.value}>
            {option.label}
          </Tab>
        );
      })}
    </div>
  );
});

export {OrgInfo};
