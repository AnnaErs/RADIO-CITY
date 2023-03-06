import { memo } from "react";

import { DropdownListType } from "./types";

const DropdownList: DropdownListType = ({ states }) => {
    return (
        <div className="w-[400px] max-h-[500px] overflow-auto shadow-md shadow-primary rounded-xl py-1">
            {states.map((state) => (
                <div
                    key={state}
                    className="flex flex-row justify-between px-6 py-2 items-center ease-in-out duration-200 hover:bg-slate-100"
                >
                    <div className="text-h4 text-ellipsis overflow-hidden whitespace-nowrap py-2 pr-3">
                        {state}
                    </div>
                    <div className="flex bg-primary rounded-full h-10 aspect-square" />
                </div>
            ))}
        </div>
    );
};

export default memo(DropdownList);
