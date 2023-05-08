import {FC} from 'react';

type TextAreaPropsType = {
  name: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
};
export type TextAreaType = FC<TextAreaPropsType>;
