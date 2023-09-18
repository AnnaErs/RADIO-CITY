import {FC, PropsWithChildren} from 'react';

type ContainerPropsType = PropsWithChildren<{
  isFullWidth?: boolean;
  isRealFullWidth?: boolean;
  className?: string;
}>;
export type ContainerType = FC<ContainerPropsType>;
