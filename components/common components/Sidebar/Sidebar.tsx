import {memo, useRef} from "react";

import Button from "../Buttons/Button/Button";
import Input from "../Input";
import useOnOutsideClick from "@utils/useOnOutsideClick";

import {SidebarType} from "./types";

const Sidebar: SidebarType = ({clientInfo, onOutsideClick}) => {
    const sidebar = useRef<HTMLDivElement>(null);
    useOnOutsideClick(sidebar, onOutsideClick);
    return (
        <div
            ref={sidebar}
            className="fixed top-0 right-0 shadow-lg shadow-blue bg-white py-5 px-14 w-[480px] h-full"
        >
            <div className="text-h4-bold pb-3 border-b-2 border-gray">
                {clientInfo.name}
            </div>
            <div>
                <div className="flex flex-col gap-y-4 mt-6">
                    <Input value={clientInfo.name} />
                    <Input value={clientInfo.phone} />
                    <Input value={clientInfo.time} />
                    <Input value={clientInfo.days} />
                    <div>
                        <Button title="Cохранить" />
                    </div>
                </div>

                {/* <div className="mt-6">
                    <div className="text-h4-bold">
                        История изменений
                    </div>
                    <div>
                        {clientInfo.history}
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default memo(Sidebar);
