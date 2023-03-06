import Link from "next/link";
import React, { memo } from "react";

import Container from "@components/layout/Container";

import { FooterType, FooterLinksType } from "../types";

const FOOTER_LINKS: FooterLinksType = {
    pages: [
        {
            id: 0,
            name: "Главная",
            href: "/#",
        },
        {
            id: 1,
            name: "О нас",
            href: "/#about-us",
        },
        {
            id: 2,
            name: "Клиентам",
            href: "/#clients",
        },
        {
            id: 3,
            name: "Контакты",
            href: "/#contacts",
        },
    ],
    production: {
        id: 4,
        name: "MARTIR.DEV",
        href: "https://t.me/maximmartyr",
    },
};

const FooterWeb: FooterType = () => {
    return (
        <Container>
            <div className="flex justify-between my-3">
                <div className=" text-lg">
                    {FOOTER_LINKS.pages.map((ar, key = ar.id) => (
                        <a href={ar.href} className="mr-16">
                            {ar.name}
                        </a>
                    ))}
                </div>
                <div>
                    {
                        <Link
                            href={FOOTER_LINKS.production.href}
                            target="_blank"
                        >
                            {FOOTER_LINKS.production.name}
                        </Link>
                    }
                </div>
            </div>
        </Container>
    );
};

export default memo(FooterWeb);
