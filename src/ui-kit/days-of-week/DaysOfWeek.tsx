import {Field} from 'formik';
import {memo, useCallback, useState} from 'react';

import {cn} from '@utils/cn';

const DAYS_OF_WEEK = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

type DaysOfWeekPropsType = {
  name: string;
  defaultValue?: Array<number>;
  disabled?: boolean;
};

const DaysOfWeek = memo<DaysOfWeekPropsType>(function DaysOfWeek({name, defaultValue, disabled}) {
  const [days, setDays] = useState(defaultValue ?? [1, 2, 3, 4, 5, 6, 7]);

  const selectDay = useCallback(
    (id: number) => () => {
      if (disabled) {
        return;
      }

      setDays(prev => {
        if (prev.includes(id)) {
          return prev.filter(num => num !== id);
        }

        return [...prev, id];
      });
    },
    [disabled, setDays]
  );

  return (
    <div>
      <Field name={name} className="-z-10 absolute opacity-0" value={days.join(',')} readOnly />
      <div className="flex items-center gap-2">
        {DAYS_OF_WEEK.map((day, index) => (
          <div
            className={cn(
              'rounded-xl w-[42px] h-[42px] flex items-center justify-center border  ease-in-out duration-200',
              {
                'border-primary font-semibold': days.includes(index + 1),
                'border-gray text-gray': !days.includes(index + 1),
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
