import {FC} from "react";

type Link = {
    name: string;
    href: string;
    target?: string;
};
type Links = Array<Link>;

type HeaderPropsType = {
    links: {
        left?: Links;
        right?: Links;
    };
    isAdmin?: boolean;
    hasToken?: boolean;
};
export type HeaderType = FC<HeaderPropsType>;
