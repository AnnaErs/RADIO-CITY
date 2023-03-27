import {FC, PropsWithChildren} from "react";

type ButtonPropsType = PropsWithChildren<{
    title?: string;
    onClick?: () => void;
}>;
export type ButtonType = FC<ButtonPropsType>;
