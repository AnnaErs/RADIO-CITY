import {ChangeEvent, memo, useCallback, useState} from 'react';

import {DatePropsType} from './types';

const Date = memo<DatePropsType>(function Date({value: defaultValue, required, placeholder, name, min, disabled}) {
  const [value, setValue] = useState(defaultValue);

  const changeValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return (
    <input
      type="date"
      className="text-xl border border-gray rounded-xl px-5 py-2 flex-1 w-full"
      min={min}
      required={required}
      value={value}
      placeholder={placeholder}
      onChange={changeValue}
      name={name}
      disabled={disabled}
    />
  );
});

export {Date};
