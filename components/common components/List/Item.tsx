import { memo } from "react";

import { ListType } from "./types";

const Item: ListType = ({ children }) => {
    return (
        <td className="text-h4 pr-12 last:p-0 last:pl-32 last:border-2 last:border-white ">
            {children}
        </td>
    );
};

export default memo(Item);
