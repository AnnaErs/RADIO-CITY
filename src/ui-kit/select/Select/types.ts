import {FC} from 'react';

type Option = {
  label: string;
  value: string;
};
type Options = Array<Option>;

type SelectPropsType = {
  options?: Options;
  value?: string;
  name: string;
};
export type SelectType = FC<SelectPropsType>;
