import {useField} from 'formik';
import {forwardRef, memo, useCallback} from 'react';

import {cn} from '@utils/cn';

import {TextAreaPropsType} from './types';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaPropsType>(function TextArea(
  {className, required, placeholder, disabled, name},
  ref
) {
  const [field, _meta, helpers] = useField(name);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      helpers.setValue(e.target.value ?? '');
    },
    [helpers.setValue]
  );

  return (
    <textarea
      className={cn('text-xl border border-gray rounded-xl px-5 py-2 min-h-[150px] w-full', {
        [className ?? '']: !!className
      })}
      required={required}
      value={field.value}
      placeholder={placeholder}
      onChange={handleChange}
      name={name}
      disabled={disabled}
      ref={ref}
    />
  );
});

export const TextAreaWithoutForm = memo(
  forwardRef<HTMLTextAreaElement, TextAreaPropsType & {value: string}>(function TextArea(
    {className, required, placeholder, disabled, name, value},
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
  })
);

export default memo(TextArea);
