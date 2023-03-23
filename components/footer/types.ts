import {FC} from "react";

type Link = {
    name: string;
    href: string;
    target?: string;
};
type Links = Array<Link>;

type FooterPropsType = {
    links: {
        left?: Links;
        right?: Links;
    };
};
export type FooterType = FC<FooterPropsType>;
