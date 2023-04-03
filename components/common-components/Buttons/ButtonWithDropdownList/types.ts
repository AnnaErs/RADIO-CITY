import {FC, PropsWithChildren} from "react";

import {Options, Option} from "@components/types";

type ButtonWithDropdownListPropsType = PropsWithChildren<{
    value: string;
    options: Options;
    onClick?: (value: Option) => void;
}>;
export type ButtonWithDropdownListType = FC<ButtonWithDropdownListPropsType>;
