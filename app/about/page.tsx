import { memo } from "react";

import AboutSection from "@/components/sections/About/AboutSection";
import { AboutPageType } from "./types";

const ProjectsPage: AboutPageType = () => {
    return (
        <>
            <AboutSection />
        </>
    );
};
export default memo(ProjectsPage);
