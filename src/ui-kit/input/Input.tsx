import {memo} from 'react';

import {InputType} from './types';

const Input: InputType = ({value, required, placeholder, disabled, name}) => {
  return (
    <input
      type="text"
      className="text-xl border border-gray rounded-xl px-5 py-2 flex-1 w-full"
      required={required}
      defaultValue={value}
      placeholder={placeholder}
      name={name}
      disabled={disabled}
    />
  );
};

export default memo(Input);
