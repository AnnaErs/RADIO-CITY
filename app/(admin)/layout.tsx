"use client";
import { usePathname } from "next/navigation";

import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

import "../globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = usePathname();
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
                {router === "/auth" ? "" : <Header />}
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
