import {FC, PropsWithChildren} from 'react';

type SidebarPropsType = PropsWithChildren<{
  title: string;
  close: () => void;
}>;
export type SidebarType = FC<SidebarPropsType>;
