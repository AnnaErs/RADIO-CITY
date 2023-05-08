import {memo} from 'react';

import {TextAreaType} from './types';

const TextArea: TextAreaType = ({value, required, placeholder, disabled, name}) => {
  return (
    <textarea
      className="text-xl border border-gray rounded-xl px-5 py-2 min-h-[150px] w-full"
      required={required}
      defaultValue={value}
      placeholder={placeholder}
      name={name}
      disabled={disabled}
    />
  );
};

export default memo(TextArea);
