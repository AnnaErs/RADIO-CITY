"use client";
import {memo, useEffect, useState} from "react";

import CurrentInfo from "@components/common-components/CurrentInfo";
import Accordeon from "@components/common-components/Accordeon";
import List, {ListItem, ListRow} from "@components/common-components/List";
import Container from "@components/layout/Container";
import {getClients, getClientsResponce} from "@api/clientsAPI";
import OrganizationTabs from "@components/OrganizationTabs/OrganizationTabs";
import {StatesButton} from "@components/common-components/Buttons";

import {CallManagerSectionType} from "./types";
import {ClientsState} from "../ClientsAdm/types";

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
            <div className=" flex flex-col gap-11">
                <CurrentInfo />
                <OrganizationTabs />
                <Accordeon title={GROUPS_TITLES.called}>
                    <List>
                        {clients.data?.map((client) => (
                            <ListRow key={client.client_id}>
                                <ListItem>{client.name}</ListItem>
                                <ListItem>{client.phone}</ListItem>
                                <ListItem>{client.call_time}</ListItem>
                                <ListItem>
                                    <StatesButton />
                                </ListItem>
                                <ListItem></ListItem>
                            </ListRow>
                        ))}
                    </List>
                </Accordeon>
            </div>
        </Container>
    );
};

export default memo(CallManagerSection);
