import {useField} from 'formik';
import {ChangeEvent, memo, useCallback} from 'react';

import {SelectType} from './types';

const Select: SelectType = ({name, options, value, disabled}) => {
  const [_v, _e, helpers] = useField(name);

  const handleChangeValue = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      helpers.setValue(e.target.value);
    },
    [helpers.setValue]
  );

  return (
    <select
      id="clientsTypesSelector"
      className="text-xl border border-gray rounded-xl px-5 py-2 flex-1 w-full"
      defaultValue={value ?? ''}
      name={name}
      disabled={disabled}
      onChange={handleChangeValue}
    >
      {options?.map(type => (
        <option value={type.value} key={type.value} disabled={type.disabled}>
          {type.label}
        </option>
      ))}
    </select>
  );
};

export default memo(Select);
