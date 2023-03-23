import {FC} from "react";

type ButtonPropsType = {
    title: string;
    onClick?: () => void;
};
export type ButtonType = FC<ButtonPropsType>;
