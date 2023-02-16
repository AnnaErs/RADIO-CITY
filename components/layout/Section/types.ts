import { FC, PropsWithChildren } from "react";

type SectionPropsType = {
    title: string;
}
export type SectionType = FC<PropsWithChildren<SectionPropsType>>
