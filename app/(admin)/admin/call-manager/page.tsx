import {memo} from "react";

import CallManagerSection from "@components/sections/CallManager";

import {CallManagerPageType} from "./types";

const CallManagerPage: CallManagerPageType = () => {
    return (
        <>
            <CallManagerSection />
        </>
    );
};
export default memo(CallManagerPage);
