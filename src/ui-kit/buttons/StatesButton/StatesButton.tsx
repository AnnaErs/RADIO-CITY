import useSWR from 'swr';
import {memo, useMemo} from 'react';

import {getCallTypes} from '@api/callsAPI';

import ButtonWithDropdownList from '../ButtonWithDropdownList';
import {StatesButtonPropsType} from './types';

const DEFAULT_VALUE = 'Сменить статус';

const StatesButton = memo<StatesButtonPropsType>(function StatesButton({value, onChange}) {
  const {data} = useSWR('GET_CLIENT_TYPES', getCallTypes);
  const options = useMemo(() => {
    return [
      {
        label: DEFAULT_VALUE,
        value: ''
      }
    ].concat(data?.map(type => ({value: type.id, label: type.name})) ?? []);
  }, [data]);

  return <ButtonWithDropdownList value={value ?? DEFAULT_VALUE} options={options} onClick={onChange} />;
});

export {StatesButton};
