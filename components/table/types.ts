import { FC } from "react";

export type ClientType = {
    id: string;
    name: string;
    active_period: {
        from: string;
        to: string;
        time: string;
    }
    isCalled: boolean;
    phone: string;
};

export type ClientsType = ClientType[];

type CalledClientTablePropsType = {
    CalledClientsList: ClientsType;
}

type FutureClientTablePropsType = {
    FutureClientsList: ClientsType;
}

type MissedClientTablePropsType = {
    MissedClientsList: ClientsType;
}


export type CalledClientTableType = FC<CalledClientTablePropsType>
export type FutureClientTableType = FC<FutureClientTablePropsType>
export type MissedClientTableType = FC<MissedClientTablePropsType>



