import React, {memo} from "react";

import {AboutCardType} from "./types";

const AboutCard: AboutCardType = ({aboutSegment}) => {
    return (
        <div className="flex basis-2/5 h-full flex-row items-stretch">
            <div className="h-14 aspect-square border-t-2 border-l-2 border-white" />
            <div className=" h-full text-white flex flex-col py-3 px-4">
                <h5 className="text-h2-bold mb-20">{aboutSegment.title}</h5>
                <div>{aboutSegment.paragraph}</div>
            </div>
            <div className="self-end h-14 aspect-square border-b-2 border-r-2 border-white" />
        </div>
    );
};

export default memo(AboutCard);
