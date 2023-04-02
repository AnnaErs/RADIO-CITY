"use client";
import {memo, useCallback, useEffect, useState} from "react";
import moment from "moment";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

import Accordeon from "@components/common-components/Accordeon";
import List, {ListItem, ListRow} from "@components/common-components/List";
import Container from "@components/layout/Container";
import {getClients, getClientsResponce} from "@api/clientsAPI";
import Button from "@components/common-components/Buttons/Button/Button";
import Sidebar from "@components/common-components/Sidebar";

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

const ClientsSectionAdmin: ClientsSectionType = () => {
    const router = useRouter();
    const pathName = usePathname();
    const params = useSearchParams();
    const closeSidebar = useCallback(() => {
        router.push(`${pathName}`);
    }, [router, pathName]);
    const [clients, setClients] = useState<ClientsState>({
        loading: false,
        data: undefined,
    });

    const sidebarClient =
        params.has(`mode`) && params.has("id")
            ? clients.data?.find((client) => {
                  return client.client_id == params.get("id");
              })
            : undefined;

    const openEditClient = useCallback(
        (id: string) => () => {
            router.push(`${pathName}?mode=edit&id=${id}`);
        },
        [router, pathName],
    );
    const openCreateClient = useCallback(() => {
        router.push(`${pathName}?mode=create`);
    }, [router, pathName]);

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
            <div className="flex">
                {!!activeClients?.length && (
                    <div className="flex-1">
                        <Accordeon title={GROUPS_TITLES.activated}>
                            <List>
                                {activeClients?.map((client) => (
                                    <ListRow
                                        key={client.client_id}
                                        onClick={openEditClient(
                                            client.client_id,
                                        )}
                                        client={client}
                                    >
                                        <ListItem>{client.name}</ListItem>
                                        <ListItem>{client.phone}</ListItem>
                                        <ListItem>{client.call_time}</ListItem>
                                        <ListItem>
                                            {client.schedule.join()}
                                        </ListItem>
                                        <ListItem></ListItem>
                                    </ListRow>
                                ))}
                            </List>
                        </Accordeon>
                    </div>
                )}
                <div className="ml-auto">
                    <Button onClick={openCreateClient}>Добавить клиента</Button>
                </div>
            </div>
            {deactivatedClients && (
                <Accordeon title={GROUPS_TITLES.deactivated}>
                    <List>
                        {deactivatedClients?.map((client) => (
                            <ListRow
                                key={client.client_id}
                                onClick={openEditClient(client.client_id)}
                                client={client}
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
            {params.has("mode") && (
                <Sidebar
                    clientInfo={sidebarClient}
                    onOutsideClick={closeSidebar}
                />
            )}
        </Container>
    );
};

export default memo(ClientsSectionAdmin);
