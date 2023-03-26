import {FC} from "react";

import {Client} from "@api/getClients";

type ClientsSectionPropsType = {};
export type ClientsSectionType = FC<ClientsSectionPropsType>;

export type ClientsState = {
    data?: Array<Client>;
    loading: boolean;
}
