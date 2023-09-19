import {forwardRef, memo} from 'react';

import {cn} from '@utils/cn';

import {TextAreaPropsType} from './types';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaPropsType>(function TextArea(
  {className, value, required, placeholder, disabled, name},
  ref
) {
  return (
    <textarea
      className={cn('text-xl border border-gray rounded-xl px-5 py-2 min-h-[150px] w-full', {
        [className ?? '']: !!className
      })}
      required={required}
      defaultValue={value}
      placeholder={placeholder}
      name={name}
      disabled={disabled}
      ref={ref}
    />
  );
});

export default memo(TextArea);
