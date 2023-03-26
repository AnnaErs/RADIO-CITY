import {cookies} from "next/headers";
import {redirect} from "next/navigation";

import {RootLayoutType} from "./types";

const RootLayout: RootLayoutType = ({children}) => {
    const isAuth = true;
    // const isAuth = !!cookies().get("token");
    return isAuth ? <>{children}</> : redirect("/");
};

export default RootLayout;
