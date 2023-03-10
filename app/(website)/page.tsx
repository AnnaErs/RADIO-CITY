import {memo} from "react";

import MainSection from "@components/sections/Main/MainSection";
import AboutSection from "@components/sections/About/AboutSection";
import ClientsSection from "@components/sections/Clients/ClientsSection";
import ContactsSection from "@components/sections/Contacts/ContactsSection";

import {MainPageType} from "./types";

const MainPage: MainPageType = () => {
    return (
        <>
            <MainSection />
            <AboutSection />
            <ClientsSection />
            <ContactsSection />
        </>
    );
};
export default memo(MainPage);
