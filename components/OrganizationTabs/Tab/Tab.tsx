import {memo} from "react";
import {useSearchParams} from "next/navigation";

import {cn} from "@utils/cn";

import {TabType} from "../types";

const Tab: TabType = ({children, onClick, value}) => {
    const params = useSearchParams();

    const isActive = params.get("type")?.toString() === value.toString();
    return (
        <div
            className={cn(
                "border-blue border-2 text-h4 px-6 py-2 rounded-[20px] cursor-pointer hover:shadow-blueSmall text-blue ease-in-out duration-200",
                {
                    "bg-blue text-white": isActive,
                },
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default memo(Tab);
