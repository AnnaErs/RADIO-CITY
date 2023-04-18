import {FC, PropsWithChildren} from 'react';

type BoxPropsType = PropsWithChildren<{
  gap?: 1 | 2 | 3 | 4 | 5 | 6;
  direction?: 'col' | 'row' | 'row-reverse' | 'col-reverse';
  wrap?: 'wrap' | 'nowrap';
  align?: 'center' | 'start' | 'end';
  justify?: 'center' | 'end' | 'start';
}>;

export type BoxType = FC<BoxPropsType>;
