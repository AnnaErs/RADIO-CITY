import {memo} from "react";

import CurrentInfo from "@components/common components/CurrentInfo";
import Accordeon from "@components/common components/Accordeon";
import List, {ListItem, ListRow} from "@components/common components/List";
import Button from "@components/common components/Buttons/ButtonWithDropdownList";
import Container from "@components/layout/Container";

import {CallManagerSectionType} from "./types";

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

const GROUPS_TITLES = {
    missed: "Недоступные клиенты",
    future: "Будущие клиенты",
    called: "Обзвоненные клиенты",
};

const CallManagerSection: CallManagerSectionType = () => {
    return (
        <Container>
            <CurrentInfo />
            <Accordeon title={GROUPS_TITLES.called}>
                <List>
                    {CLIENTS.map((client) => (
                        <ListRow key={client.id}>
                            <ListItem>{client.name}</ListItem>
                            <ListItem>{client.phone}</ListItem>
                            <ListItem>{client.active_period.time}</ListItem>
                            <ListItem>
                                <Button title="Дозвонились" />
                            </ListItem>
                        </ListRow>
                    ))}
                </List>
            </Accordeon>
        </Container>
    );
};

export default memo(CallManagerSection);
