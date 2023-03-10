import Link from "next/link";
import React, {memo} from "react";

import Container from "@components/layout/Container";

import {FooterType, FooterLinksType} from "../types";

const FOOTER_LINKS: FooterLinksType = {
    pages: [
        {
            id: 0,
            name: "Звонки",
            href: "/admin/call-manager",
        },
        {
            id: 1,
            name: "Клиенты",
            href: "/clients",
        },
    ],
    production: {
        id: 2,
        name: "MARTIR.DEV",
        href: "https://t.me/maximmartyr",
    },
};

const FooterAdmiin: FooterType = () => {
    return (
        <Container>
            <div className="flex justify-between my-3">
                <div className=" text-lg">
                    {FOOTER_LINKS.pages.map((ar) => (
                        <a href={ar.href} className="mr-16" key={ar.id}>
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

export default memo(FooterAdmiin);
