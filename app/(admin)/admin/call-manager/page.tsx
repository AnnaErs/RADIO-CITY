import {memo} from "react";
import {Metadata} from "next";

import CallManagerSection from "@components/sections/CallManager";

import {CallManagerPageType} from "./types";

const metadata: Metadata = {
    title: "Менеджер звонков",
};

const CallManagerPage: CallManagerPageType = () => {
    return (
        <>
            <CallManagerSection />
        </>
    );
};
export default memo(CallManagerPage);
export {metadata};
