import {memo, useRef} from 'react';

import useOnOutsideClick from '@utils/hooks/useOnOutsideClick';

import {SidebarType} from './types';

const Sidebar: SidebarType = ({title, close, children}) => {
  const sidebar = useRef<HTMLDivElement>(null);
  useOnOutsideClick(sidebar, close);

  return (
    <div ref={sidebar} className="fixed top-0 right-0 shadow-lg shadow-blue bg-white py-5 px-14 w-[480px] h-full">
      <div className="text-h4-bold pb-3 border-b-2 border-gray">{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default memo(Sidebar);
