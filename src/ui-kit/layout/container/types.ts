import {FC, PropsWithChildren} from 'react';

type ContainerPropsType = PropsWithChildren<{
  isFullWidth?: boolean;
  isRealFullWidth?: boolean;
}>;
export type ContainerType = FC<ContainerPropsType>;
