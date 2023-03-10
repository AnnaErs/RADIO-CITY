"use client";
import React, {memo, useEffect, useMemo, useState} from "react";

import Container from "@components/layout/Container";

import {HeaderType, HeaderLinksType} from "../types";

const HEADER_LINKS: HeaderLinksType = {
    head: {
        id: 0,
        name: "Вадим Ф.",
        href: "/",
    },
    pages: [
        {
            id: 1,
            name: "Звонки",
            href: "/admin/call-manager",
        },
        {
            id: 2,
            name: "Клиенты",
            href: "/admin/clients",
        },
    ],
};

const HeaderAdmin: HeaderType = () => {
    const [isOnTop, setOnTopStatus] = useState(window.pageYOffset < 200);

    useEffect(() => {
        const setScrollStatus = () => {
            setOnTopStatus(window.pageYOffset < 200);
        };

        window.addEventListener("scroll", setScrollStatus);

        return () => {
            window.removeEventListener("scroll", setScrollStatus);
        };
    }, [setOnTopStatus]);

    const classNames = useMemo(() => {
        const classes = ["sticky top-0 ease-in-out duration-200 bg-white"];

        if (!isOnTop) {
            classes.push("shadow-blue");
        }

        return classes.join(" ");
    }, [isOnTop]);

    return (
        <header className={classNames}>
            <Container>
                <div className="flex justify-between py-6 text-xl text-black">
                    <div>
                        {HEADER_LINKS.pages.map((ar) => (
                            <a
                                href={ar.href}
                                className="mr-12"
                                target={ar.target}
                                key={ar.id}
                            >
                                {ar.name}
                            </a>
                        ))}
                    </div>
                    <div>
                        <a
                            href={HEADER_LINKS.head.href}
                            id={HEADER_LINKS.head.name}
                        >
                            {HEADER_LINKS.head.name}
                        </a>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default memo(HeaderAdmin);
