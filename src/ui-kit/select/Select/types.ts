import {FC} from 'react';

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};
type Options = Array<Option>;

type SelectPropsType = {
  options?: Options;
  value?: string;
  name: string;
  disabled?: boolean;
};
export type SelectType = FC<SelectPropsType>;
