import React from "react";

import {getUsers, getUserRoles} from "@api/usersAPI";
import List, {ListItem, ListRow} from "@components/common-components/List";
import Container from "@components/layout/Container";

import {UserPageType} from "./types";
import {Metadata} from "next";
import {RolesButton} from "@components/common-components/Buttons";
import {Options} from "@components/types";

const ROLES: Record<string, string> = {
    worker: "Оператор",
    admin: "Администратор",
    guest: "Гость",
};

const metadata: Metadata = {
    title: "Пользователи",
};

const UsersPage: UserPageType = async () => {
    const [{data: usersValue}, {data: rolesValue}] = await Promise.all([
        getUsers(),
        getUserRoles(),
    ]);

    const users = usersValue ?? [];
    const roles = rolesValue ?? [];

    const rolesOptions = roles.reduce<Options>((acc, role) => {
        acc.push({
            label: ROLES[role.name] ?? role.name,
            value: role.id,
        });
        return acc;
    }, []);

    return (
        <Container>
            <h4 className="text-h4-bold min-h-[64px]">Пользователи</h4>
            {users.length ? (
                <List>
                    {users.map((user) => (
                        <ListRow key={user.id}>
                            <ListItem>{user.login}</ListItem>
                            <ListItem>
                                <RolesButton
                                    options={rolesOptions}
                                    id={user.id}
                                    role={user.role}
                                />
                            </ListItem>
                            <ListItem></ListItem>
                        </ListRow>
                    ))}
                </List>
            ) : (
                <p className="text-h4">Нет зарегестрированных пользователей</p>
            )}
        </Container>
    );
};
export default UsersPage;
export {metadata};
