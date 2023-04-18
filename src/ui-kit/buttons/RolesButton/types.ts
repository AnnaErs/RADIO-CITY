import {FC} from 'react';

export type Option = {
  label: string;
  value: string;
};
export type Options = Array<Option>;

type RolesButtonPropsType = {
  id: string;
  role: string;
  options: Options;
};
export type RolesButtonType = FC<RolesButtonPropsType>;
