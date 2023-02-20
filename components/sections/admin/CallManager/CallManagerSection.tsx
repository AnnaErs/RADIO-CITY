import { memo } from "react";

import Section from "@components/layout/Section";

import ClientsTable from "@components/table/ClientsTable/ClientsTable";

const SECTION_TITLE = {
    title: "Таблица",
};

const CallManagerSection = () => {
    return (
        <div className="flex">
            <Section title={SECTION_TITLE.title}>
                <ClientsTable />
            </Section>
        </div>
    );
};

export default memo(CallManagerSection);
