import {FC, PropsWithChildren} from 'react';

type ButtonPropsType = PropsWithChildren<{
  title?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}>;
export type ButtonType = FC<ButtonPropsType>;
