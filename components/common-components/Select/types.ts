import {FC} from "react";
import { ClientType } from "@components/OrganizationTabs/types";

type SelectPropsType = {
    options?: Array<ClientType>;
    value?: string;
    name:string;
};
export type SelectType = FC<SelectPropsType>;
