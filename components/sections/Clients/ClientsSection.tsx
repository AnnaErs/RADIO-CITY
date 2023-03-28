import {memo} from "react";

import Client1Image from "@public/ClientsImage1.png";
import Client2Image from "@public/ClientsImage2.png";
import Section from "@components/layout/Section";
import ClientRowCards from "@components/cards/ClientsCards/ClientRowCards";

import {ClientsSectionType} from "./types";

const SECTION = {
    title: "Клиентам",
    clients: [
        {
            src: Client1Image,
            title: "Для частных лиц",
            paragraph:
                "Если вы любите активный отдых и туризм в равной степени с безопасностью, то Вам необходима временная аренда наших готовых решений для обеспечения бесперебойной связи.",
        },
        {
            src: Client2Image,
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
                        src={client.src}
                        isReverse={!!(index % 2)}
                        key={client.title}
                    />
                ))}
            </Section>
        </div>
    );
};

export default memo(ClientsSection);
