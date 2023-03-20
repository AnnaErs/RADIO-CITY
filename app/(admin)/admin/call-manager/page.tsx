import {memo} from "react";

import CallManagerSection from "@components/sections/admin/CallManager";

import {CallManagerPageType} from "./types";

const CallManagerPage: CallManagerPageType = () => {
    return (
        <>
            <CallManagerSection />
        </>
    );
};
export default memo(CallManagerPage);
