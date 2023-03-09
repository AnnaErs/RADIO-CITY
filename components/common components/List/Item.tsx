import { memo } from "react";

import { ListType } from "./types";

const Item: ListType = ({ children }) => {
    return <td className="text-h4">{children}</td>;
};

export default memo(Item);
