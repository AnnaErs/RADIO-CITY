import {memo, useCallback} from 'react';
import {useSearchParams} from 'react-router-dom';
import useSWR from 'swr';

import Tab from '@ui-kit/tab';
import {getClientTypes} from '@api/clientsAPI';

import {OrgInfoType, Options, Option} from './types';

const OrgInfo: OrgInfoType = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {data} = useSWR('GET_ORGANIZATIONS', getClientTypes);

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

  if (!data) {
    return null;
  }

  const options: Options = data.map(type => {
    return {
      value: type.id,
      label: type.name
    };
  });

  return (
    <div className="flex flex-row flex-wrap gap-4">
      <Tab onClick={changeType()} isActive={!searchParams.has('type')}>
        Все
      </Tab>
      {options.map(option => {
        return (
          <Tab onClick={changeType(option)} key={option.value} isActive={searchParams.get('type') == option.value}>
            {option.label}
          </Tab>
        );
      })}
    </div>
  );
};

export default memo(OrgInfo);
