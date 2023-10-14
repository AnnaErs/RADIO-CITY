import {Field, useField} from 'formik';
import {memo, useCallback, useState} from 'react';

import {cn} from '@utils/cn';

const DAYS_OF_WEEK = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

type DaysOfWeekPropsType = {
  name: string;
  defaultValue?: Array<number>;
  disabled?: boolean;
};

const DaysOfWeek = memo<DaysOfWeekPropsType>(function DaysOfWeek({name, defaultValue, disabled}) {
  const [field, _meta, helpers] = useField<number[]>(name);

  const selectDay = useCallback(
    (id: number) => () => {
      if (disabled) {
        return;
      }

      if (field.value.includes(id)) {
        helpers.setValue(field.value.filter(num => num !== id));
      } else {
        helpers.setValue([...field.value, id]);
      }
    },
    [field, disabled]
  );

  return (
    <div>
      <div className="flex items-center gap-2">
        {DAYS_OF_WEEK.map((day, index) => (
          <div
            className={cn(
              'rounded-xl w-[42px] h-[42px] flex items-center justify-center border  ease-in-out duration-200',
              {
                'border-primary font-semibold': field.value.includes(index + 1),
                'border-gray text-gray': !field.value.includes(index + 1),
                'cursor-pointer hover:shadow-primary hover:shadow': !disabled,
                'opacity-50': !!disabled
              }
            )}
            onClick={selectDay(index + 1)}
            key={day}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
});

export {DaysOfWeek};
