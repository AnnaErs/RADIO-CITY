"use client";
// import {usePathname} from "next/navigation";

import Header from "@components/header";
import Footer from "@components/footer";

import "../globals.css";
import {RootLayoutType} from "./types";

const HEADER_LINKS = {
    left: [
        {
            id: 0,
            name: "Главная",
            href: "/",
        },
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
        {
            id: 3,
            name: "Пользователи",
            href: "/admin/users",
        },
    ],
};

const FOOTER_LINKS = {
    left: [
        {
            name: "Звонки",
            href: "/admin/call-manager",
        },
        {
            name: "Клиенты",
            href: "/clients",
        },
    ],
    right: [
        {
            name: "MARTIR.DEV",
            href: "https://t.me/maximmartyr",
        },
    ],
};

const RootLayout: RootLayoutType = ({children}) => {
    return (
        <html lang="en">
            <head>
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className="flex flex-col min-h-screen">
                <Header links={HEADER_LINKS} isAdmin />
                <div className="flex-1">{children}</div>
                <Footer links={FOOTER_LINKS} />
            </body>
        </html>
    );
};

export default RootLayout;
