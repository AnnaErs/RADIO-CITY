import {memo} from 'react';

import {SelectType} from './types';

const Select: SelectType = ({name, options, value}) => {
  return (
    <select id="clientsTypesSelector" className="border border-gray text-sm rounded-xl block w-full p-2.5" name={name}>
      <option selected disabled>
        Укажите тип клиента
      </option>
      {options?.map(type => (
        <option selected={type.value == value} value={type.value} key={type.value}>
          {type.label}
        </option>
      ))}
    </select>
  );
};

export default memo(Select);
