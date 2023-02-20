import { memo } from "react";

import CalledClients from "../CalledClients";
import MissedClients from "../MissedClients";
import FutureClients from "../FutureClients";

import { ClientsType } from "../types";
import { ClientType } from "../types";

const CLIENTS: ClientsType = [
    {
        id: "0",
        name: "Артём Яковлев",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "10:30",
        },
        isCalled: false,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Президент Казахстана",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "19:50",
        },
        isCalled: false,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Виктор Кокшаров",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "19:40",
        },
        isCalled: false,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Надежда Бабкина",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "19:30",
        },
        isCalled: false,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Евгений Страшинин",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "10:30",
        },
        isCalled: true,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Илья Обабков",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "10:30",
        },
        isCalled: true,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Максим Пушкарев",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "10:30",
        },
        isCalled: true,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Юлия Бурдукова",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "10:30",
        },
        isCalled: false,
        phone: "+799999999",
    },

    {
        id: "0",
        name: "Сквозь баб",
        active_period: {
            from: "8:00",
            to: "20:00",
            time: "10:30",
        },
        isCalled: false,
        phone: "+799999999",
    },
];

const isMissed = (client: ClientType) => {
    return client.isCalled === false && client.active_period.time > "17:00";
};

const isFutureClient = (client: ClientType) => {
    return client.isCalled === false && client.active_period.time < "17:00";
};

const CalledClientsList: ClientsType = CLIENTS.filter(
    (client) => client.isCalled === true
);
const FutureClientsList: ClientsType = CLIENTS.filter(isFutureClient);
const MissedClientsList: ClientsType = CLIENTS.filter(isMissed);

const ClientsTable = () => {
    return (
        <div>
            <MissedClients MissedClientsList={MissedClientsList} />
            <FutureClients FutureClientsList={FutureClientsList} />
            <CalledClients CalledClientsList={CalledClientsList} />
        </div>
    );
};

export default memo(ClientsTable);
