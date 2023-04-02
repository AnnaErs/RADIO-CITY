import { cookies } from "next/headers";

import Header from "@components/header";
import Footer from "@components/footer";

import "../globals.css";
import {RootLayoutType} from "./types";

const HEADER_LINKS = {
    left: [
        {
            id: 0,
            name: "Главная",
            href: "/#",
        },
    ],
    right: [
        {
            name: "О нас",
            href: "/#about-us",
        },
        {
            name: "Клиентам",
            href: "/#clients",
        },
        {
            name: "Контакты",
            href: "/#contacts",
        },
    ],
};

const FOOTER_LINKS = {
    left: [
        {
            name: "Главная",
            href: "/#",
        },
        {
            name: "О нас",
            href: "/#about-us",
        },
        {
            name: "Клиентам",
            href: "/#clients",
        },
        {
            name: "Контакты",
            href: "/#contacts",
        },
    ],
    right: [
        {
            name: "MARTIR.DEV",
            href: "https://t.me/maximmartyr",
            target: "_blank",
        },
    ],
};

const RootLayout: RootLayoutType = ({children}) => {
    const token = cookies().get('token');

    return (
        <html lang="ru">
            <head>
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js"></script>
            </head>
            <body className="bg-bg text-white flex flex-col min-h-screen">
                <Header links={HEADER_LINKS} hasToken={!!token} />
                <div className="flex-1">{children}</div>
                <Footer links={FOOTER_LINKS} />
            </body>
        </html>
    );
};

export default RootLayout;
