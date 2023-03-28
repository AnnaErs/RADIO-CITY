import {StaticImageData} from "next/image";
import {FC, PropsWithChildren} from "react";

export type ClientRowCardsPropsType = {
    src: StaticImageData;
    title: string;
    paragraph: string;
    isReverse: boolean;
};
export type ClientRowCardsType = FC<ClientRowCardsPropsType>;

export type ClientCardPropsType = PropsWithChildren<{}>;
export type ClientCardType = FC<ClientCardPropsType>;
