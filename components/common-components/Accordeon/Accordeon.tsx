"use client";
import {memo} from "react";
import Image from "next/image";

import useToggle from "@utils/useToggle";
import Switch from "@public/Switch.png";
import {cn} from "@utils/cn";

import {AccordeonType} from "./types";

const Accordeon: AccordeonType = ({title, children, defaultState = false}) => {
    const [isOpen, toggle] = useToggle(defaultState);

    return (
        <div>
            <div
                onClick={toggle}
                className="flex items-center text-h4-bold w-[550px] py-3 select-none"
            >
                <div>{title}</div>
                <div
                    className={cn("ml-auto ease-in-out duration-200", {
                        "rotate-180": isOpen,
                    })}
                >
                    <Image src={Switch} alt={title} width={24}></Image>
                </div>
            </div>
            {isOpen && <div>{children}</div>}
        </div>
    );
};

export default memo(Accordeon);
