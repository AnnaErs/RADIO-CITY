import {FC, PropsWithChildren} from 'react';

type TabPropsType = PropsWithChildren<{
  onClick: () => void;
  isActive: boolean;
}>;
export type TabType = FC<TabPropsType>;
