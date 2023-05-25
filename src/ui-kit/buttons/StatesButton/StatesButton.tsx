import useSWR from 'swr';
import {memo, useMemo} from 'react';

import {getCallTypes} from '@api/callsAPI';

import ButtonWithDropdownList from '../ButtonWithDropdownList';
import {StatesButtonPropsType} from './types';

const DEFAULT_VALUE = 'Сменить статус';

const optionColor = (option: {value: string}) => {
  switch (option.value.toString()) {
    case '1':
      return '#22c55e';
    case '2':
      return '#f43f5e';
    case '3':
      return '#f97316';
    case '4':
      return '#fde047';
    case '5':
      return '#3b82f6';
    case '6':
      return '#8b5cf6';
    default:
      return '#fff';
  }
};

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

  return (
    <ButtonWithDropdownList
      value={value ?? DEFAULT_VALUE}
      options={options}
      optionColor={optionColor}
      onClick={onChange}
    />
  );
});

export {StatesButton};
