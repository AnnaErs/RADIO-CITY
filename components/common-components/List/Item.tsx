import {memo} from "react";

import {ListType} from "./types";

const Item: ListType = ({children}) => {
    return (
        <td className="text-h4 text-start py-2 px-2 min-w-0 h-16 last:pr-0 border-b-2 last:border-transparent ">
            {children}
        </td>
    );
};

export default memo(Item);