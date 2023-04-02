import {FC, PropsWithChildren} from "react";
import { Client } from "@api/clientsAPI";

type ListPropsType = PropsWithChildren<{
    onClick?: () => void;
    client?: Client;
}>;
export type ListType = FC<ListPropsType>;
