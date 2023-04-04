import {Options, Option} from "@components/types";

export type DropdownListPropsType = {
    options: Options;
    onClick?: (option: Option) => void;
};
