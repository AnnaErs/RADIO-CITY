import { memo } from "react";

import Container from "../Container";

import { SectionType } from "./types";

const Section: SectionType = ({ title, children }) => {
    return (
        <div className="py-8 tablet:py-12 desktop:py-20">
            <Container title={title}>{children}</Container>
        </div>
    );
};

export default memo(Section);
