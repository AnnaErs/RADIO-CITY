"use client";
import useToggle from "@utils/useToggle";
import {memo} from "react";

import DropdownList from "../DropdownList";
import Button from "../Button/Button";

import {ButtonType} from "../types";

const DROPDOWN_STATES = [
    "Всё ОК",
    "Неисправен",
    "Вызвал диспетчера, жду обратной связи",
    "Опоздал",
    "Дальние связи",
    "Не умеет работать",
];

const ButtonWithDropdownList: ButtonType = ({title}) => {
    const [modal, setModal] = useToggle(false);
    return (
        <div>
            <Button title={title} onClick={setModal} />
            {modal && <DropdownList states={DROPDOWN_STATES} />}
        </div>
    );
};

export default memo(ButtonWithDropdownList);
