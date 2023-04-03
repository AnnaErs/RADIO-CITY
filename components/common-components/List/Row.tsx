import {memo} from "react";

import {ListType} from "./types";
import {cn} from "@utils/cn";

const Row: ListType = ({children, onClick}) => {
    return (
        <tr
            className={cn("active:bg-white ease-in-out duration-200", {
                "hover:bg-slate-100 cursor-pointer ": !!onClick,
            })}
            onClick={onClick}
        >
            {children}
        </tr>
    );
};

export default memo(Row);
