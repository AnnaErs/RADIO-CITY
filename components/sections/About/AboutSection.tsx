import { memo } from "react";

import Section from "@components/layout/Section";

const SECTION_TITLE = {
    title: "О нас",
};

const AboutSection = () => {
    return (
        <Section title={SECTION_TITLE.title}>
            <></>
        </Section>
    );
};

export default memo(AboutSection);
