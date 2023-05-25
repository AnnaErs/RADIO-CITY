import {memo} from 'react';

import useToggle from '@utils/hooks/useToggle';
import {cn} from '@utils/cn';

import {AccordeonType} from './types';
import switchArrow from './switch.png';

const Accordeon: AccordeonType = ({title, children, defaultState = false}) => {
  const [isOpen, toggle] = useToggle(defaultState);

  return (
    <div>
      <div onClick={toggle} className="flex items-center text-h4-bold w-full max-w-[550px] py-3 select-none">
        <div>{title}</div>
        <div
          className={cn('ml-auto ease-in-out duration-200', {
            'rotate-180': isOpen
          })}
        >
          <img src={switchArrow} alt={title} width={24} />
        </div>
      </div>
      {isOpen && <div className="overflow-auto w-full">{children}</div>}
    </div>
  );
};

export default memo(Accordeon);
