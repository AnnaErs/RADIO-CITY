import {memo} from "react";
import Image from "next/image";

import map from "./map.png";

const Map = () => {
    return (
        <div>
            <Image src={map} alt="map" className="w-full" />
        </div>
    );
};

export default memo(Map);
