import {FC} from "react";

type Link = {
    id: number;
    name: string;
    href: string;
};
type Links = Array<Link>;

type PagesNavigationType = Links;

export type FooterLinksType = {
    pages: PagesNavigationType;
    production: Link;
};

type FooterPropsType = {};
export type FooterType = FC<FooterPropsType>;
