import {FC} from 'react';

type InputPropsType = {
  name: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
};
export type InputType = FC<InputPropsType>;
