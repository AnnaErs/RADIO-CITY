import {FC} from 'react';

export type Option = {
  label: string;
  value: string;
};
export type Options = Array<Option>;

type UserPropsType = {};
export type UserType = FC<UserPropsType>;
