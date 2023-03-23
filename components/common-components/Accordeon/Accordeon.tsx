"use client";
import {memo, useMemo} from "react";
import Image from "next/image";

import useToggle from "@utils/useToggle";
import Switch from "@public/Switch.png";

import {AccordeonType} from "./types";

const Accordeon: AccordeonType = ({title, children, defaultState = false}) => {
    const [isOpen, toggle] = useToggle(defaultState);
    const classNames = useMemo(() => {
        const classes = ["self-center"];

        if (isOpen) {
            classes.push("rotate-180 ease-in-out duration-200");
        }

        return classes.join(" ");
    }, [isOpen]);
    return (
        <div>
            <div
                onClick={toggle}
                className="flex justify-between text-h4-bold w-1/3 py-3"
            >
                <div>{title}</div>
                <div className={classNames}>
                    <Image src={Switch} alt={title} width={24}></Image>
                </div>
            </div>
            {isOpen && <div>{children}</div>}
        </div>
    );
};

export default memo(Accordeon);
