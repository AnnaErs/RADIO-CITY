"use client";
import {memo, useEffect, useState} from "react";

import CurrentInfo from "@components/common-components/CurrentInfo";
import Accordeon from "@components/common-components/Accordeon";
import List, {ListItem, ListRow} from "@components/common-components/List";
import Button from "@components/common-components/Buttons/ButtonWithDropdownList";
import Container from "@components/layout/Container";

import {CallManagerSectionType} from "./types";
import {ClientsState} from "../ClientsAdm/types";
import {getClients, getClientsResponce} from "@api/getClients";

const convertClientsToClientList = (responseClients: getClientsResponce) => {
    const responceClientsArray = Object.values(responseClients);
    return responceClientsArray.map((versions) => {
        return versions[versions.length - 1];
    });
};

const GROUPS_TITLES = {
    missed: "Недоступные клиенты",
    future: "Будущие клиенты",
    called: "Обзвоненные клиенты",
};

const CallManagerSection: CallManagerSectionType = () => {
    const [clients, setClients] = useState<ClientsState>({
        loading: false,
        data: undefined,
    });
    useEffect(() => {
        if (!clients.loading) {
            getClients().then((res) => {
                const convertedClients = convertClientsToClientList(res.data);
                setClients({data: convertedClients, loading: false});
            });
        }
    }, []);

    return (
        <Container>
            <CurrentInfo />
            <Accordeon title={GROUPS_TITLES.called}>
                <List>
                    {clients.data?.map((client) => (
                        <ListRow key={client.client_id}>
                            <ListItem>{client.name}</ListItem>
                            <ListItem>{client.phone}</ListItem>
                            <ListItem>{client.call_time}</ListItem>
                            <ListItem>
                                <Button title="Дозвонились" />
                            </ListItem>
                            <ListItem></ListItem>
                        </ListRow>
                    ))}
                </List>
            </Accordeon>
        </Container>
    );
};

export default memo(CallManagerSection);
