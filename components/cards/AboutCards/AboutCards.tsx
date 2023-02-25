import React, { memo } from "react";

import AboutCard from "./AboutCard";
import { AboutCardsType } from "./types";

const AboutCards: AboutCardsType = ({ aboutSegments }) => {
    return (
        <div className="flex flex-row-mx-2 flex-wrap gap-y-60 gap-x-36 justify-center items-center children:px-2">
            {aboutSegments.map((segment) => (
                <AboutCard aboutSegment={segment} key={segment.title} />
            ))}
        </div>
    );
};

export default memo(AboutCards);
