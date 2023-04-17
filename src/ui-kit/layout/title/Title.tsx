import {memo} from 'react';

import {TitleType} from './types';

const SectionTitle: TitleType = ({title}) => {
  return (
    <div>
      <div className="inline-block mb-24">
        <h1 className="text-white text-3xl mb-5">{title}</h1>
        <div className="w-3/5 h-0.5 bg-white shadow-md shadow-pink" />
      </div>
    </div>
  );
};

export default memo(SectionTitle);
