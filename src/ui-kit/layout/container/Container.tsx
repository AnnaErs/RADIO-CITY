import {memo} from 'react';

import {cn} from '@utils/cn';

import {ContainerType} from './types';

const Container: ContainerType = ({children, isFullWidth, isRealFullWidth, className}) => {
  return (
    <div
      className={cn('mx-auto', {
        'px-10': !isRealFullWidth,
        'w-[1360px]': !isFullWidth && !isRealFullWidth,
        'max-w-[1536px] w-full': !!isFullWidth,
        'w-full overflow-auto': !!isRealFullWidth,
        [className ? className : '']: !!className
      })}
    >
      <div
        className={cn('', {
          'max-w-[1536px] px-10 m-auto': !!isRealFullWidth
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default memo(Container);
