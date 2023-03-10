import {memo} from "react";

import Map from "@components/map";
import Section from "@components/layout/Section";
import ContactCards from "@components/cards";

import {ContactsSectionType} from "./types";

const SECTION_TITLE = {
    title: "Контакты",
    contacts: [
        {
            title: "Номер",
            entities: [
                "+7 (912) 271-87-90",
                "+7 (912) 271-87-90",
                "+7 (912) 271-87-90",
            ],
        },
        {
            title: "Почта",
            entities: [
                "radio-city@mail.ru",
                "feldmanu@mail.ru",
                "super-radio@mail.ru",
            ],
        },
        {
            title: "Адресс",
            entities: [
                "Россия, Свердловская обл. город Екатеринбург ул. Волгоградская 193",
            ],
        },
    ],
};

const ContactsSection: ContactsSectionType = () => {
    return (
        <div id="contacts">
            <Section title={SECTION_TITLE.title}>
                <ContactCards contacts={SECTION_TITLE.contacts} />
                <Map />
            </Section>
        </div>
    );
};

export default memo(ContactsSection);
