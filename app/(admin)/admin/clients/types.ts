import {FC} from "react";

import { Client } from "@api/clientsAPI";

type ClientsPagePropsType = {};
export type ClientsPageType = FC<ClientsPagePropsType>;

type ClientPagePropsType = {
    client: Client;
    onOutsideClick: () => void;
};
export type ClientPageType = FC<ClientPagePropsType>;
