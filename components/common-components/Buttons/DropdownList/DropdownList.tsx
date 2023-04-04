"use client";
import {forwardRef, memo, useCallback} from "react";

import {Option} from "@components/types";

import {DropdownListPropsType} from "./types";
import strToColor from "@utils/strToColor";

const DropdownList = forwardRef<HTMLDivElement, DropdownListPropsType>(
    ({options, onClick}, ref) => {
        const selectState = useCallback(
            (state: Option) => () => {
                onClick?.(state);
            },
            [onClick],
        );

        return (
            <div
                className="absolute bg-white w-[350px] max-h-[500px] overflow-auto shadow-md shadow-primary rounded-xl py-1 mt-2"
                ref={ref}
            >
                {options.map((option) => (
                    <div
                        key={option.value}
                        onClick={selectState(option)}
                        className="cursor-pointer flex flex-row justify-between px-6 py-2 items-center ease-in-out duration-200 hover:bg-slate-100"
                    >
                        <div className="text-xl text-ellipsis overflow-hidden whitespace-nowrap py-2 pr-3">
                            {option.label}
                        </div>
                        <div
                            className="flex bg-primary rounded-full h-8 aspect-square"
                            style={{backgroundColor: strToColor(option.value)}}
                        />
                    </div>
                ))}
            </div>
        );
    },
);

export default memo(DropdownList);
