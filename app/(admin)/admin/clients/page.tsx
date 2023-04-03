import {Metadata} from "next";
import {memo} from "react";

import Clients from "@components/sections/ClientsAdm";

import {ClientsPageType} from "./types";

const metadata: Metadata = {
    title: "Клиенты",
};

const UsersPage: ClientsPageType = () => {
    return (
        <>
            <Clients />
        </>
    );
};
export default memo(UsersPage);
export {metadata};
