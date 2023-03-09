import { memo } from "react";

import { ListType } from "./types";

const List: ListType = ({ children }) => {
    return (
        <table className="border-spacing-y-2">
            <tbody>{children}</tbody>
        </table>
    );
};

export default memo(List);
