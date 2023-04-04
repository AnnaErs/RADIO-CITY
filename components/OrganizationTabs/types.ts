import {FC, PropsWithChildren} from "react";

export type ClientType = {
    id: string;
    name: string;
};

export type ClientTypes = Array<ClientType>;

export type getClientTypesResponce = Record<string, ClientType>;

type TabPropsType = PropsWithChildren<{
    onClick?: () => void;
    value: string;
}>;
export type TabType = FC<TabPropsType>;

type OrgTabPropsType = {};
export type OrgTab = FC<OrgTabPropsType>;

export type ClientTypeState = {
    data?: Array<ClientType>;
    loading: boolean;
};
