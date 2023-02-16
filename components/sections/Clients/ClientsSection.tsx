import { memo } from "react";

import Section from "@/components/layout/Section";

const SECTION_TITLE = {
    title: "Клиентам",
};

const AboutSection = () => {
    return (
        <div className="flex">
            <Section title={SECTION_TITLE.title}>
                <></>
            </Section>
        </div>
    );
};

export default memo(AboutSection);
