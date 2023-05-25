import {FC, PropsWithChildren, MouseEvent} from 'react';

type ListPropsType = PropsWithChildren<{
  onClick?: (e: MouseEvent) => void;
  className?: string;
}>;
export type ListType = FC<ListPropsType>;
