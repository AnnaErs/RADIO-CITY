import { memo } from "react";

import ContactsSection from "@/components/sections/Contacts/ContactsSection";
import { ContactsPageType } from "./types";

const ProjectsPage: ContactsPageType = () => {
    return (
        <>
            <ContactsSection />
        </>
    );
};
export default memo(ProjectsPage);
