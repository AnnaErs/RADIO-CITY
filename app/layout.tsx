import "./globals.css";

import Footer from "@components/footer/Footer";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
            <body className="bg-bg">
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
