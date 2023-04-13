"use client";
import {memo, useEffect, useState} from "react";

import {getClientTypes} from "@api/clientsAPI";
import {ClientTypeState} from "@components/OrganizationTabs/types";
import Select from "../Select";

import {ClientTypeSelectType} from "./types";

const ClientTypeSelect: ClientTypeSelectType = ({name, idOfDefaultType}) => {
    const [types, setType] = useState<ClientTypeState>({
        loading: false,
        data: undefined,
    });

    useEffect(() => {
        if (!types.loading) {
            getClientTypes().then((res) => {
                setType({data: res.data, loading: false});
            });
        }
    }, []);
    return <Select name={name} options={types.data} value={idOfDefaultType} />;
};

export default memo(ClientTypeSelect);
