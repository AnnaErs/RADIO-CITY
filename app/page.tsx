import { memo } from "react";

import MainSection from "@/components/sections/Main/MainSection";

import { MainPageType } from "./types";

const MainPage: MainPageType = () => {
    return (
        <>
            <MainSection />
        </>
    );
};
export default memo(MainPage);
