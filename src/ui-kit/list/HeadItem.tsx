import {memo} from 'react';

import {ListType} from './types';

const HeadItem: ListType = ({children, onClick}) => {
  return (
    <td className="text-h4-bold text-start py-2 px-2 min-w-[90px] h-16 last:pr-0 border-b-2" onClick={onClick}>
      {children}
    </td>
  );
};

export default memo(HeadItem);
