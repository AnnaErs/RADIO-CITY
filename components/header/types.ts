import {FC} from "react";

type Link = {
    id: number;
    name: string;
    href: string;
    target?: string;
};
type Links = Array<Link>;

type PagesNavigationType = Links;

export type HeaderLinksType = {
    head: Link;
    pages: PagesNavigationType;
};

type HeaderPropsType = {};
export type HeaderType = FC<HeaderPropsType>;
