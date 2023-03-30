import {FC, PropsWithChildren} from "react";

type ButtonPropsType = PropsWithChildren<{
    title?: string;
    type?:"button" | "submit" | "reset" | undefined
    onClick?: () => void;
}>;
export type ButtonType = FC<ButtonPropsType>;
