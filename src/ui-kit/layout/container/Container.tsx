import {memo} from 'react';

import {ContainerType} from './types';
import {cn} from '@utils/cn';

const Container: ContainerType = ({children, isFullWidth, isRealFullWidth}) => {
  return (
    <div
      className={cn('mx-auto', {
        'px-10': !isRealFullWidth,
        'w-[1360px]': !isFullWidth && !isRealFullWidth,
        'max-w-[1536px] w-full': !!isFullWidth,
        'w-full overflow-auto': !!isRealFullWidth
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
