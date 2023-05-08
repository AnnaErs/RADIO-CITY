import {FC} from 'react';

type CurrentInfoPropsType = {};
export type CurrentInfoType = FC<CurrentInfoPropsType>;

export type Option = {
  label: string;
  value: string;
};
export type Options = Array<Option>;
