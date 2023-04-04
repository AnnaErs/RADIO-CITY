import {FC, PropsWithChildren} from "react";

type ButtonPropsType = PropsWithChildren<{
    title?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}>;
export type ButtonType = FC<ButtonPropsType>;
