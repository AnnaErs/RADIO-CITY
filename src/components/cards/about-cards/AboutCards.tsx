import {memo} from 'react';

import AboutCard from './AboutCard';
import {AboutCardsType} from './types';

const AboutCards: AboutCardsType = ({aboutSegments}) => {
  return (
    <div className="flex flex-wrap gap-y-60 gap-x-36 justify-between items-center">
      {aboutSegments.map(segment => (
        <AboutCard aboutSegment={segment} key={segment.title} />
      ))}
    </div>
  );
};

export default memo(AboutCards);
