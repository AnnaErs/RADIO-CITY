import axios from "axios";

export type Client = {
    active_period_from: string;
    active_period_to?: string;
    call_time: string;
    client_id: string;
    description: string;
    name: string;
    phone: string;
    revision: number;
    schedule: Array<number>;
    type: string;
};

type ClientVersions = Array<Client>;

export type getClientsResponce = Record<string, ClientVersions>;
export const getClients = () => {
    return axios.get(
        `https://d5dv6m23evl6lnv8gdu7.apigw.yandexcloud.net/clients`,
    );
};

type CreateClientType = (client: Omit<Client, 'client_id' | 'revision'>) => Promise<"ok">;
export const createClient: CreateClientType = (client) => {
    return axios.post(
        `https://d5dv6m23evl6lnv8gdu7.apigw.yandexcloud.net/clients`,
        {
            client,
        },
    );
};
