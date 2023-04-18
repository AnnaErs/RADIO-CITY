import {memo} from 'react';

import {MapType} from './types';
import map from './map.png';

const Map: MapType = () => {
  return (
    <div>
      <img src={map} alt="map" className="w-full" />
    </div>
  );
};

export default memo(Map);
