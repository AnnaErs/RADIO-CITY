import { memo } from "react";

import ClientsSection from "@/components/sections/Clients/ClientsSection";

import { ClientsPageType } from "./types";

const ProjectsPage: ClientsPageType = () => {
    return (
        <>
            <ClientsSection />
        </>
    );
};
export default memo(ProjectsPage);
