import {FC, PropsWithChildren} from 'react';

type ClientRowCardsPropsType = {
  src: string;
  title: string;
  paragraph: string;
  isReverse: boolean;
};
export type ClientRowCardsType = FC<ClientRowCardsPropsType>;

type ClientCardPropsType = PropsWithChildren<{}>;
export type ClientCardType = FC<ClientCardPropsType>;
