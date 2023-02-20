import { memo } from "react";
import { redirect } from "next/navigation";

import { AuthPageType } from "./types";

const AuthPage: AuthPageType = () => {
    return (
        <>
            <p>Страница Аутентификации</p>
        </>
    );
};
export default memo(AuthPage);
