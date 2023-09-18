import {memo} from 'react';

import map from './map.png';
import {MapType} from './types';

const Map: MapType = () => {
  return (
    <div>
      <img src={map} alt="map" className="w-full" />
    </div>
  );
};

export default memo(Map);
