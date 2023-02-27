import Link from "next/link";
import React, { memo } from "react";

import Container from "@components/layout/Container";

import { FooterType, FooterLinksPropsType } from "./types";

const FOOTER_LINKS: FooterLinksPropsType = {
    pages: [
        {
            link: {
                name: "Главная",
                href: "/#",
            },
        },
        {
            link: {
                name: "О нас",
                href: "/#about-us",
            },
        },
        {
            link: {
                name: "Клиентам",
                href: "/#clients",
            },
        },
        {
            link: {
                name: "Контакты",
                href: "/#contacts",
            },
        },
    ],
    production: {
        link: {
            name: "MARTIR.DEV",
            href: "https://t.me/maximmartyr",
        },
    },
};

const Footer: FooterType = () => {
    return (
        <Container>
            <div className="flex justify-between my-3">
                <div className=" text-lg">
                    {FOOTER_LINKS.pages.map((ar) => (
                        <a href={ar.link.href} className="mr-16 mx-3">
                            {ar.link.name}
                        </a>
                    ))}
                </div>
                <div>
                    {
                        <Link
                            href={FOOTER_LINKS.production.link.href}
                            target="_blank"
                        >
                            {FOOTER_LINKS.production.link.name}
                        </Link>
                    }
                </div>
            </div>
        </Container>
    );
};

export default memo(Footer);
