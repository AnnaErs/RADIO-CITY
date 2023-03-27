import {FC} from "react";

import {Client} from "@api/clientsAPI";

type ClientsSectionPropsType = {};
export type ClientsSectionType = FC<ClientsSectionPropsType>;

export type ClientsState = {
    data?: Array<Client>;
    loading: boolean;
};
