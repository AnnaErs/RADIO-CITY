import {FC} from 'react';

type AboutSegment = {
  title: string;
  paragraph: string;
};
type AboutSegments = Array<AboutSegment>;

type AboutCardsPropsType = {
  aboutSegments: AboutSegments;
};
export type AboutCardsType = FC<AboutCardsPropsType>;

type AboutCardPropsType = {
  aboutSegment: AboutSegment;
};
export type AboutCardType = FC<AboutCardPropsType>;
