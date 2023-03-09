import { memo } from "react";

import { ListType } from "./types";

const Row: ListType = ({ children }) => {
    return (
        <tr className="hover:bg-slate-100 active:bg-white ease-in-out duration-200">
            {children}
        </tr>
    );
};

export default memo(Row);
