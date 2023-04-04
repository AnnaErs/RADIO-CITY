"use client";
import {memo, useCallback, useEffect, useState} from "react";

import {getClientTypes} from "@api/clientsAPI";
import {Option, Options} from "@components/types";

import Tab from "./Tab";
import {OrgTab, ClientTypeState} from "./types";
import {usePathname, useRouter} from "next/navigation";

const OrganizationTabs: OrgTab = () => {
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

    const router = useRouter();
    const pathName = usePathname();

    const changeType = useCallback(
        (option: Option) => () => {
            router.push(`${pathName}?type=${option.value}`);
        },
        [pathName, router],
    );

    if (!types.data) {
        return null;
    }

    const options: Options = types.data.map((type) => {
        return {
            value: type.id,
            label: type.name,
        };
    });

    return (
        <div className="flex flex-row flex-wrap gap-4">
            {options.map((option) => {
                return (
                    <Tab
                        onClick={changeType(option)}
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </Tab>
                );
            })}
        </div>
    );
};

export default memo(OrganizationTabs);
