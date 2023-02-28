import { memo } from "react";

import Section from "@components/layout/Section";
import Client1Image from "@public/ClientsImage1.png";
import Client2Image from "@public/ClientsImage2.png";
import ClientRowCards from "@components/cards/ClientsCards/ClientRowCards";
import { title } from "process";

import { ClientsSectionType } from "./types";

const SECTION = {
    title: "Клиентам",
    clients: [
        {
            src: Client1Image as any as string,
            title: "Для частных лиц",
            paragraph:
                "Если вы любите активный отдых и туризм в равной степени с безопасностью, то Вам необходима временная аренда наших готовых решений для обеспечения бесперебойной связи.",
        },
        {
            src: Client2Image as any as string,
            title: "Для организаций",
            paragraph:
                "Если вы любите активный отдых и туризм в равной степени с безопасностью, то Вам необходима временная аренда наших готовых решений для обеспечения бесперебойной связи.",
        },
    ],
};

const ClientsSection: ClientsSectionType = () => {
    return (
        <div id="clients">
            <Section title={SECTION.title}>
                {SECTION.clients.map((client, index) => (
                    <ClientRowCards
                        {...client}
                        isReverse={!!(index % 2)}
                        key={title}
                    />
                ))}
            </Section>
        </div>
    );
};

export default memo(ClientsSection);
