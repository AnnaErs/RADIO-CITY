"use client";
import {memo, useCallback, useEffect, useState} from "react";
import moment from "moment";

import Accordeon from "@components/common-components/Accordeon";
import List, {ListItem, ListRow} from "@components/common-components/List";
import Sidebar from "@components/common-components/Sidebar";
import Container from "@components/layout/Container";
import useToggle from "@utils/useToggle";
import {getClients, getClientsResponce} from "@api/getClients";

import {ClientsSectionType, ClientsState} from "./types";

const GROUPS_TITLES = {
    activated: "Активные клиенты",
    deactivated: "Деактивные клиенты",
};

const convertClientsToClientList = (responseClients: getClientsResponce) => {
    const responceClientsArray = Object.values(responseClients);
    return responceClientsArray.map((versions) => {
        return versions[versions.length - 1];
    });
};

const ClientsSections: ClientsSectionType = () => {
    const [isSidebarOpen, toggleVisability, setOpenStatus] = useToggle(false);
    const [clients, setClients] = useState<ClientsState>({
        loading: false,
        data: undefined,
    });

    const clickHandle = useCallback(() => {
        setOpenStatus(true);
    }, [setOpenStatus]);

    useEffect(() => {
        if (!clients.loading) {
            getClients().then((res) => {
                const convertedClients = convertClientsToClientList(res.data);
                setClients({data: convertedClients, loading: false});
            });
        }
    }, []);

    const activeClients = clients.data?.filter((client) => {
        if (!client.active_period_to) {
            return true;
        }
        return moment(client.active_period_to).isAfter(moment());
    });
    const deactivatedClients = clients.data?.filter((client) => {
        return moment(client.active_period_to).isBefore(moment());
    });
    return (
        <Container>
            {!!activeClients?.length && (
                <Accordeon title={GROUPS_TITLES.activated}>
                    <List>
                        {activeClients?.map((client) => (
                            <ListRow
                                key={client.client_id}
                                onClick={clickHandle}
                            >
                                <ListItem>{client.name}</ListItem>
                                <ListItem>{client.phone}</ListItem>
                                <ListItem>{client.call_time}</ListItem>
                                <ListItem>{client.schedule.join()}</ListItem>
                                <ListItem></ListItem>
                            </ListRow>
                        ))}
                    </List>
                </Accordeon>
            )}
            {deactivatedClients && (
                <Accordeon title={GROUPS_TITLES.deactivated}>
                    <List>
                        {deactivatedClients?.map((client) => (
                            <ListRow
                                key={client.client_id}
                                onClick={clickHandle}
                            >
                                <ListItem>{client.name}</ListItem>
                                <ListItem>{client.phone}</ListItem>
                                <ListItem>{client.call_time}</ListItem>
                                <ListItem>{client.schedule.join()}</ListItem>
                                <ListItem></ListItem>
                            </ListRow>
                        ))}
                    </List>
                </Accordeon>
            )}
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
