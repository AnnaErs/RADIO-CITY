"use client";
// import {usePathname} from "next/navigation";

import HeaderAdmin from "@components/header/headerAdmin";
import FooterAdmin from "@components/footer/footerAdmin/FooterAdmin";

import "../globals.css";
import {RootLayoutType} from "./types";

const RootLayout: RootLayoutType = ({children}) => {
    // const router = usePathname();
    return (
        <html lang="en">
            <head>
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://api-maps.yandex.ru/3.0/?apikey=263e44fe-b036-4039-8e0d-5a94e01b864e&lang=ru_RU" />
            </head>
            <body>
                <HeaderAdmin />
                <div>{children}</div>
                <FooterAdmin />
            </body>
        </html>
    );
};

export default RootLayout;
