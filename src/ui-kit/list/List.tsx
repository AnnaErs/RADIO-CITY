import {memo} from 'react';

import {ListType} from './types';

const List: ListType = ({children}) => {
  return (
    <table className="border-separate">
      <tbody>{children}</tbody>
    </table>
  );
};

export default memo(List);
