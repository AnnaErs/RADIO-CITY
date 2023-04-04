import {FC} from "react";

import {Options} from "@components/types";

type RolesButtonPropsType = {
    id: string;
    role: string;
    options: Options;
};
export type RolesButtonType = FC<RolesButtonPropsType>;
