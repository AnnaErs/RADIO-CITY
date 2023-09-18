import {memo, useMemo} from 'react';

import {useGetCallTypes} from '@utils/api/call-types';
import {getColorByCallTypeId} from '@utils/string-to-color';

import ButtonWithDropdownList from '../ButtonWithDropdownList';
import {StatesButtonPropsType} from './types';

const DEFAULT_VALUE = 'Сменить статус';

const StatesButton = memo<StatesButtonPropsType>(function StatesButton({value, onChange}) {
  const {data} = useGetCallTypes();
  const options = useMemo(() => {
    return [
      {
        label: DEFAULT_VALUE,
        value: ''
      }
    ].concat(data?.map(type => ({value: type.calls_type_id, label: type.name})) ?? []);
  }, [data]);

  return (
    <ButtonWithDropdownList
      value={value ?? DEFAULT_VALUE}
      options={options}
      optionColor={getColorByCallTypeId}
      onClick={onChange}
    />
  );
});

export {StatesButton};
