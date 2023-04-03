import {FC} from "react";

import {Client} from "@api/clientsAPI";

type SidebarPropsType = {
    clientInfo?: Client;
    onOutsideClick: () => void;
};
export type SidebarType = FC<SidebarPropsType>;
