import { memo } from "react";

import { UserPageType } from "./types";

const UsersPage: UserPageType = () => {
    return (
        <>
            <p>Пользователи</p>
        </>
    );
};
export default memo(UsersPage);
