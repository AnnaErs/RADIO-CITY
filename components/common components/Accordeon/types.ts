import { FC, PropsWithChildren } from "react";

type AccordeonPropsType = PropsWithChildren<{
    title: string,
    defoaultState?: boolean,
}>;
export type AccordeonType = FC<AccordeonPropsType>;
