"use client";
import {memo, useCallback, useRef} from "react";

import {Option} from "@components/types";
import useToggle from "@utils/useToggle";
import useOnOutsideClick from "@utils/useOnOutsideClick";

import DropdownList from "../DropdownList";
import Button from "../Button";
import {ButtonWithDropdownListType} from "./types";

const ButtonWithDropdownList: ButtonWithDropdownListType = ({
    value,
    options,
    onClick,
}) => {
    const ref = useRef(null);
    const [isOpened, toggle, setValue] = useToggle(false);

    useOnOutsideClick(
        ref,
        isOpened
            ? () => {
                  setValue(false);
              }
            : undefined,
    );

    const optionsDict = (options ?? []).reduce<Record<string, string>>(
        (acc, option) => {
            acc[option.value] = option.label;

            return acc;
        },
        {},
    );

    const clickHandler = useCallback(
        (option: Option) => {
            setValue(false);
            onClick?.(option);
        },
        [setValue, onClick],
    );

    return (
        <div>
            <Button title={optionsDict[value]} onClick={toggle} />
            {isOpened && (
                <DropdownList
                    options={options}
                    onClick={clickHandler}
                    ref={ref}
                />
            )}
        </div>
    );
};

export default memo(ButtonWithDropdownList);
