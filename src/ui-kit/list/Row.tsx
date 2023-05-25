import {memo} from 'react';

import {cn} from '@utils/cn';

import {ListType} from './types';

const Row: ListType = ({children, onClick, className}) => {
  return (
    <tr
      className={cn('active:bg-white ease-in-out duration-200', {
        'hover:bg-slate-100 cursor-pointer ': !!onClick,
        [className || '']: !!className
      })}
      onClick={onClick}
    >
      {children}
    </tr>
  );
};

export default memo(Row);
