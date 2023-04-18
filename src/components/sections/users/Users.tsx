import {useMemo} from 'react';
import useSWR from 'swr';

import {getUsers, getUserRoles} from '@api/usersAPI';
import List, {ListItem, ListRow} from '@ui-kit/list';
import Container from '@ui-kit/layout/container';
import {RolesButton} from '@ui-kit/buttons';

import {UserType, Options} from './types';

const ROLES: Record<string, string> = {
  worker: 'Оператор',
  admin: 'Администратор',
  guest: 'Гость'
};

const DEFAULT_USERS: [] = [];
const DEFAULT_ROLES: [] = [];

const Users: UserType = () => {
  const {data: users = DEFAULT_USERS, isLoading} = useSWR('GET_USERS', getUsers);
  const {data: roles = DEFAULT_ROLES} = useSWR('GET_ROLES', getUserRoles);

  const rolesOptions = useMemo(
    () =>
      roles.reduce<Options>((acc, role) => {
        acc.push({
          label: ROLES[role.name] ?? role.name,
          value: role.id
        });
        return acc;
      }, []),
    [roles]
  );

  return (
    <Container>
      <h4 className="text-h4-bold min-h-[64px]">Пользователи</h4>
      {users.length ? (
        <List>
          {users.map(user => (
            <ListRow key={user.id}>
              <ListItem>{user.login}</ListItem>
              <ListItem>
                <RolesButton options={rolesOptions} id={user.id} role={user.role} />
              </ListItem>
              <ListItem></ListItem>
            </ListRow>
          ))}
        </List>
      ) : (
        <p className="text-h4">{isLoading ? 'Загружается...' : 'Нет зарегестрированных пользователей'}</p>
      )}
    </Container>
  );
};
export default Users;
