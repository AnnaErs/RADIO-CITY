import { memo } from "react";

import Section from "@components/layout/Section";
import CurrentInfo from "@components/common components/CurrentInfo";
import Button from "@components/common components/Button";
import DropdownList from "@components/common components/DropdownList";

import { CallManagerSectionType } from "./types";

const DROPDOWN_STATES = [
    "Всё ОК",
    "Неисправен",
    "Вызвал диспетчера, жду обратной связи",
    "Опоздал",
    "Дальние связи",
    "Не умеет работать",
];

const CallManagerSection: CallManagerSectionType = () => {
    return (
        <div className="flex">
            <Section>
                <CurrentInfo />
                <Button title="Дозвонились" />
                <DropdownList states={DROPDOWN_STATES} />
            </Section>
        </div>
    );
};

export default memo(CallManagerSection);
