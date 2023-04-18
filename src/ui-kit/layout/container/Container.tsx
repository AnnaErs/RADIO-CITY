import {memo} from 'react';

import {ContainerType} from './types';

const Container: ContainerType = ({children}) => {
  return <div className="px-10 mx-auto w-[1360px]">{children}</div>;
};

export default memo(Container);
