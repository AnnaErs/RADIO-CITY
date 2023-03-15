import { memo } from "react";

import { ListType } from "./types";

const List: ListType = ({ children }) => {
    return (
        <table className="border-separate border-spacing-y-3">
            <tbody>{children}</tbody>
        </table>
    );
};

export default memo(List);
