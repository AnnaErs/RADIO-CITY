import {redirect} from "next/navigation";

import {RootLayoutType} from "./types";

const isAuth = () => true;

const RootLayout: RootLayoutType = ({children}) => {
    return isAuth() ? <>{children}</> : redirect("/");
};

export default RootLayout;
