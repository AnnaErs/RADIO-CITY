import useToggle from "@utils/useToggle";
import { memo } from "react";
import DropdownList from "../../DropdownList";

import { ButtonType } from "../types";

const DROPDOWN_STATES = [
    "Всё ОК",
    "Неисправен",
    "Вызвал диспетчера, жду обратной связи",
    "Опоздал",
    "Дальние связи",
    "Не умеет работать",
];

const ButtonWithDropdownList: ButtonType = ({ title }) => {
    const [modal, setModal] = useToggle(false);
    return (
        <div>
            <button
                onClick={setModal}
                className="text-h4 bg-white border-2 border-primary ease-in-out delay-200 rounded-xl children:p-3 hover:shadow hover:shadow-primary active:border-pink active:shadow-pink"
            >
                <p>{title}</p>
            </button>
            {modal && <DropdownList states={DROPDOWN_STATES} />}
        </div>
    );
};

export default memo(ButtonWithDropdownList);
