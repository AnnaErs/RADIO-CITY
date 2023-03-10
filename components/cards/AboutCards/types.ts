import {FC} from "react";

type AboutSegment = {
    title: string;
    paragraph: string;
};

type AboutSegments = Array<AboutSegment>;

export type AboutCardsPropsType = {
    aboutSegments: AboutSegments;
};
export type AboutCardsType = FC<AboutCardsPropsType>;

export type AboutCardPropsType = {
    aboutSegment: AboutSegment;
};
export type AboutCardType = FC<AboutCardPropsType>;
