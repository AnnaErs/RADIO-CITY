import {FC, PropsWithChildren} from 'react';

type AccordeonPropsType = PropsWithChildren<{
  title: string;
  defaultState?: boolean;
}>;
export type AccordeonType = FC<AccordeonPropsType>;
