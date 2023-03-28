import {FC, PropsWithChildren} from "react";

export type ClientRowCardsPropsType = {
    src: string;
    title: string;
    paragraph: string;
    isReverse: boolean;
};
export type ClientRowCardsType = FC<ClientRowCardsPropsType>;

export type ClientCardPropsType = PropsWithChildren<{}>;
export type ClientCardType = FC<ClientCardPropsType>;
