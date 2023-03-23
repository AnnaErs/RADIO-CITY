import {memo} from "react";

import {ListType} from "./types";

const Row: ListType = ({children, onClick}) => {
    return (
        <tr
            className="hover:bg-slate-100 active:bg-white cursor-pointer ease-in-out duration-200"
            onClick={onClick}
        >
            {children}
        </tr>
    );
};

export default memo(Row);
