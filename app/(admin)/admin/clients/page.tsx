import {memo} from "react";

import Clients from "@components/sections/admin/Clients";

import {ClientsPageType} from "./types";

const UsersPage: ClientsPageType = () => {
    return (
        <>
            <Clients/>
        </>
    );
};
export default memo(UsersPage);
