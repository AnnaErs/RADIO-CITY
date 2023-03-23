"use client";
import {memo, useCallback} from "react";

import Accordeon from "@components/common-components/Accordeon";
import List, {ListItem, ListRow} from "@components/common-components/List";
import Sidebar from "@components/common-components/Sidebar";
import Container from "@components/layout/Container";

import {ClientsSectionType} from "./types";
import useToggle from "@utils/useToggle";

const CLIENTS = [
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
        active_days: "пн, вт, ср, чт, пт, сб, вс",
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
        active_days: "пн, вт, ср, чт, пт, сб, вс",
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
        active_days: "пн, вт, ср, чт, пт, сб, вс",
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
        active_days: "пн, вт, ср, чт, пт, сб, вс",
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
        active_days: "пн, вт, ср, чт, пт, сб, вс",
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
        active_days: "пн, вт, ср, чт, пт, сб, вс",
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
        active_days: "пн, вт, ср, чт, пт, сб, вс",
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
        active_days: "пн, вт, ср, чт, пт, сб, вс",
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
        active_days: "пн, вт, ср, чт, пт, сб, вс",
    },
];

const GROUPS_TITLES = {
    activated: "Активные клиенты",
    deactivated: "Деактивные клиенты",
};

const ClientsSections: ClientsSectionType = () => {
    const [isSidebarOpen, toggleVisability, setOpenStatus] = useToggle(false);
    const clickHandle = useCallback(() => {
        setOpenStatus(true);
    }, [setOpenStatus]);
    return (
        <Container>
            <Accordeon title={GROUPS_TITLES.activated}>
                <List>
                    {CLIENTS.map((client) => (
                        <ListRow key={client.id} onClick={clickHandle}>
                            <ListItem>{client.name}</ListItem>
                            <ListItem>{client.phone}</ListItem>
                            <ListItem>{client.active_period.time}</ListItem>
                            <ListItem>{client.active_days}</ListItem>
                            <ListItem></ListItem>
                        </ListRow>
                    ))}
                </List>
            </Accordeon>
            <div id="sidebar">
                {isSidebarOpen && (
                    <Sidebar
                        clientInfo={{
                            name: "Анна Кондратова",
                            phone: "89993416196",
                            time: "10:30",
                            days: "пн вт ср чт",
                            history: [],
                        }}
                        onOutsideClick={toggleVisability}
                    />
                )}
            </div>
        </Container>
    );
};

export default memo(ClientsSections);
