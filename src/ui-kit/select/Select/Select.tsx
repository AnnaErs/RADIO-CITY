import {memo} from 'react';

import {SelectType} from './types';

const Select: SelectType = ({name, options, value, disabled}) => {
  return (
    <select
      id="clientsTypesSelector"
      className="text-xl border border-gray rounded-xl px-5 py-2 flex-1 w-full"
      defaultValue={value ?? ''}
      name={name}
      disabled={disabled}
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
