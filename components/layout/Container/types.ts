import { FC, PropsWithChildren } from "react";

type ContainerPropsType = {
    title: string;
}
export type ContainerType = FC<PropsWithChildren<ContainerPropsType>>
