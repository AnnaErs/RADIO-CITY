import {FC, PropsWithChildren, MouseEvent} from 'react';

type ListPropsType = PropsWithChildren<{
  onClick?: (e: MouseEvent) => void;
}>;
export type ListType = FC<ListPropsType>;
