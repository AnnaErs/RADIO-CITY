import React from "react";

import {getUsers} from "@api/usersAPI";
import List, {ListItem, ListRow} from "@components/common-components/List";
import Button from "@components/common-components/Buttons/Button/Button";
import Container from "@components/layout/Container";

import {UserPageType} from "./types";

const UsersPage: UserPageType = async () => {
    const {data: users} = await getUsers();

    return (
        <Container>
            <h4 className="text-h4-bold min-h-[64px]">Пользователи</h4>
            {users.length ? (
                <List>
                    {users.map((user) => (
                        <ListRow key={user.id}>
                            <ListItem>{user.login}</ListItem>
                            <ListItem>
                                <Button>{user.role}</Button>
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
