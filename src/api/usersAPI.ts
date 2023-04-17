import axios from 'axios';

export type User = {
  id: string;
  login: string;
  role: string;
};

type Users = Array<User>;

type GetUsersType = () => Promise<Users>;
export const getUsers: GetUsersType = () => {
  return axios.get(`https://d5dv6m23evl6lnv8gdu7.apigw.yandexcloud.net/users`).then(res => res.data);
};

type CreateUserType = (user: Omit<User, 'role'>) => Promise<'ok'>;
export const createUser: CreateUserType = user => {
  return axios.post(`https://d5dv6m23evl6lnv8gdu7.apigw.yandexcloud.net/users`, {
    user
  });
};

type UpdateUserType = (user: Omit<User, 'login'>) => Promise<'ok'>;
export const updateUser: UpdateUserType = user => {
  return axios.put(`https://d5dv6m23evl6lnv8gdu7.apigw.yandexcloud.net/users`, {
    user
  });
};

export type Role = {
  id: string;
  name: string;
};
type Roles = Array<Role>;

type GetUserRolesType = () => Promise<Roles>;
export const getUserRoles: GetUserRolesType = () => {
  return axios.get('https://d5dv6m23evl6lnv8gdu7.apigw.yandexcloud.net/user-roles').then(res => res.data);
};

type YAUser = {
  login: string;
  id: string;
};
type GetUserInfoByTokenType = (token: string) => Promise<{data: YAUser}>;
export const getUserInfoByToken: GetUserInfoByTokenType = token => {
  return axios.get('https://login.yandex.ru/info?format=json', {
    headers: {
      Authorization: `OAuth ${token}`
    }
  });
};
