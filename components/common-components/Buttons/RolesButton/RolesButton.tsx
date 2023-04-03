"use client";
import React, {memo, useCallback, useState} from "react";

import {Option} from "@components/types";
import {updateUser} from "@api/usersAPI";

import ButtonWithDropdownList from "../ButtonWithDropdownList";
import {RolesButtonType} from "./types";

const RolesButton: RolesButtonType = ({role, id, options}) => {
    const [curRole, setRole] = useState(role);

    const updateUserRole = useCallback(
        (userId: string) => (role: Option) => {
            updateUser({id: userId, role: role.value}).then(() => {
                setRole(role.value);
            });
        },
        [setRole],
    );

    return (
        <ButtonWithDropdownList
            value={curRole}
            options={options}
            onClick={updateUserRole(id)}
        />
    );
};

export default memo(RolesButton);
