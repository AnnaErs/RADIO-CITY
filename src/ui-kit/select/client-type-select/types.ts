import {FC} from 'react';

type ClientTypeSelectPropsType = {
  name: string;
  value: string | undefined;
  disabled?: boolean;
};
export type ClientTypeSelectType = FC<ClientTypeSelectPropsType>;
