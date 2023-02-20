import { redirect } from "next/navigation";

const isAuth = () => true;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return isAuth() ? children : redirect("/auth");
}
