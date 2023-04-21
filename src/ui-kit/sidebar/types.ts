import {FC, PropsWithChildren} from 'react';

type SidebarPropsType = PropsWithChildren<{
  title: JSX.Element | string;
  close: () => void;
}>;
export type SidebarType = FC<SidebarPropsType>;
