import {FC, PropsWithChildren} from 'react';

export type Option = {
  label: string;
  value: string;
};
export type Options = Array<Option>;

type ButtonWithDropdownListPropsType = PropsWithChildren<{
  value: string;
  options: Options;
  optionColor?: (value: Option) => string;
  onClick?: (value: Option) => void;
}>;
export type ButtonWithDropdownListType = FC<ButtonWithDropdownListPropsType>;
