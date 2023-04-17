import {cn} from '@utils/cn';

import {BoxType} from './types';

const Box: BoxType = ({children, direction, align, wrap, justify, gap = 2}) => {
  return (
    <div
      className={cn(`flex gap-${gap * 2}`, {
        [`flex-${direction}`]: !!direction,
        [`justify-${justify}`]: !!justify,
        [`items-${align}`]: !!align,
        [`wrap-${wrap}`]: !!wrap
      })}
    >
      {children}
    </div>
  );
};

export default Box;
