import {memo} from "react";

import Clients from "@components/sections/ClientsAdm";

import {ClientsPageType} from "./types";

const UsersPage: ClientsPageType = () => {
    return (
        <>
            <Clients />
        </>
    );
};
export default memo(UsersPage);
