import { memo } from "react";

import Section from "@components/layout/Section";
import AboutCards from "@components/cards/AboutCards";

import { AboutSectionType } from "./types";

const SECTION = {
    title: "О нас",
    aboutSegments: [
        {
            title: "История",
            paragraph:
                "Работаем с 1995 года, что уже является более 25 лет на рынке. За это время мы создали 2 радиосети на УКВ и КВ диапазоне, что-бы покарывать все задачи наших клиентов",
        },
        {
            title: "С кем работаем?",
            paragraph:
                "Наша компания специализируется на всех отрослях, поэтому с нами рабтают: пожарные службы, ЕДДС, мед. катострофы, спасательные отряды, центры мониторинга ЧС. Так-же Мы не обошли стороной частных лиц, ведь для нас важное угождать каждому",
        },
        {
            title: "Наше оборудование",
            paragraph:
                "Мы используем только качественное и надежное оборудование, такое как: Diamon, Icom, Kenwood, Motorola и Racio. Что позволяет нам решать обсолютно любые задачи",
        },
        {
            title: "Чем занимаемся?",
            paragraph:
                "Мы являемся специалистами в своем деле и наш спектр задач достаточно обишрен, типичные для нас задачи это: организация УС для стационарных и мобильных устройств; установка, регулировка, настройка и ремонт радиоборудования и антенн.",
        },
    ],
};

const AboutSection: AboutSectionType = () => {
    return (
        <div className="flex" id="about-us">
            <Section title={SECTION.title}>
                <AboutCards aboutSegments={SECTION.aboutSegments} />
            </Section>
        </div>
    );
};

export default memo(AboutSection);
