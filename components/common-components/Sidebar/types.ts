import {FC} from "react";

type SidebarPropsType = {
    clientInfo: {
        name: string,
        phone: string,
        time: string,
        days: string,
        history:Array<string>,
    };
    onOutsideClick: ()=>void;
};
export type SidebarType = FC<SidebarPropsType>;
