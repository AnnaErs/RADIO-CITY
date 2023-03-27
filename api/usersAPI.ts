import axios from "axios";

export type User = {
    id: string;
    login: string;
    role: string;
};

type Users = Array<User>;

type GetUsersType = () => Promise<{data: Users}>;
export const getUsers: GetUsersType = () => {
    return axios.get(
        `https://d5dv6m23evl6lnv8gdu7.apigw.yandexcloud.net/users`,
    );
};

type CreateUserType = (user: Omit<User, "id" | "role">) => Promise<"ok">;
export const createUser: CreateUserType = (user) => {
    return axios.post(
        `https://d5dv6m23evl6lnv8gdu7.apigw.yandexcloud.net/users`,
        {
            data: user,
        },
    );
};

type UpdateUserType = (user: Omit<User, "login">) => Promise<"ok">;
export const updateUser: UpdateUserType = (user) => {
    return axios.put(
        `https://d5dv6m23evl6lnv8gdu7.apigw.yandexcloud.net/users`,
        {
            data: user,
        },
    );
};
