import {memo} from 'react';

import {LoaderType} from './types';

const Loader: LoaderType = () => {
  return <div className="loader" />;
};

export default memo(Loader);
