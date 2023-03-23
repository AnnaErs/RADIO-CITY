import {FC, PropsWithChildren} from "react";

type ListPropsType = PropsWithChildren<{
    onClick?: () => void;
}>;
export type ListType = FC<ListPropsType>;
