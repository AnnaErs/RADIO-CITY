import {Metadata} from "next";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

import {RootLayoutType} from "./types";

const metadata: Metadata = {
    title: "Админ панель",
};

const RootLayout: RootLayoutType = ({children}) => {
    const isAuth = true;
    // !!cookies().get("token");
    return isAuth ? <>{children}</> : redirect("/");
};

export default RootLayout;
export {metadata};
