import React, {memo} from "react";

const UserButton = () => {
    return (
        <a href="/admin" className="mr-12">
            Админ. панель
        </a>
    );
};

export default memo(UserButton);
