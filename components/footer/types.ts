import { FC } from 'react';

type FooterLinkPropsType = {
    link: {
        name: string;
        href: string;
    }
};
type PagesNavigationType = FooterLinkPropsType[];

export type FooterLinksPropsType = {
    pages: PagesNavigationType;
    production: FooterLinkPropsType;
};

type FooterPropsType = {}
export type FooterType = FC<FooterPropsType>;

