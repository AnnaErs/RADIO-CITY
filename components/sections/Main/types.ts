import {FC} from "react";

export type MainSectionHeadingsPropsType = {
    mainTitle: {
        firstPart: string;
        secondPart: string;
    };
    subTitle: string;
    buttonTitle: string;
};

type MainSectionPropsType = {};
export type MainSectionType = FC<MainSectionPropsType>;
