"use client";
import React, { memo, useEffect, useMemo, useState } from "react";

import Container from "@components/layout/Container";

import { HeaderType, HeaderLinksType } from "../types";

const HEADER_LINKS: HeaderLinksType = {
    head: {
        id: 0,
        name: "Главная",
        href: "/#",
    },
    pages: [
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
        {
            id: 4,
            name: "Войти",
            href: "/auth",
            target: "_blank",
        },
    ],
};

const HeaderWeb: HeaderType = () => {
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
        const classes = ["sticky top-0 ease-in-out duration-200 bg-bg"];

        if (!isOnTop) {
            classes.push("shadow-blue");
        }

        return classes.join(" ");
    }, [isOnTop]);

    return (
        <header className={classNames}>
            <Container>
                <div className="flex justify-between py-6 text-xl text-gray">
                    <div>
                        {
                            <a
                                href={HEADER_LINKS.head.href}
                                id={HEADER_LINKS.head.name}
                            >
                                {HEADER_LINKS.head.name}
                            </a>
                        }
                    </div>
                    <div className="">
                        {HEADER_LINKS.pages.map((ar, key = ar.id) => (
                            <a
                                href={ar.href}
                                className="ml-20"
                                target={ar.target}
                            >
                                {ar.name}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default memo(HeaderWeb);
