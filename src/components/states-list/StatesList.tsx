import {memo, useCallback, useMemo} from 'react';

import {useGetCallTypes} from '@utils/api/call-types';
import {cn} from '@utils/cn';
import {makeOptions} from '@utils/common';
import {getColorByCallTypeId} from '@utils/string-to-color';

const DEFAULT_VALUE = 'Сменить статус';

type StatesListPropsType = {
  className?: string;
  onSelect: (value: string) => void;
};

const StatesList = memo<StatesListPropsType>(function StatesList({className, onSelect}) {
  const {data} = useGetCallTypes();
  const options = useMemo(
    () =>
      [
        {
          label: DEFAULT_VALUE,
          value: ''
        }
      ].concat(makeOptions(data, 'calls_type_id', 'name')),
    [data]
  );

  const selectValue = useCallback((value: string) => () => onSelect(value), [onSelect]);

  return (
    <div
      className={cn('', {
        [className ?? '']: !!className
      })}
    >
      {options.map(option => (
        <div
          key={option.value}
          onClick={selectValue(option.value)}
          className="cursor-pointer flex px-2 py-2 items-center ease-in-out duration-200 hover:bg-slate-100 whitespace-nowrap gap-4 rounded-md"
        >
          <div
            className="flex rounded-full h-8 aspect-square"
            style={{backgroundColor: getColorByCallTypeId(option.value)}}
          />
          <span className="text-ellipsis overflow-hidden">{option.label || option.value}</span>
        </div>
      ))}
    </div>
  );
});

export {StatesList};
