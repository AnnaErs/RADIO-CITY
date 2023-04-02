"use client"
import Script from "next/script";
import React, {memo} from "react";

import Container from "@components/layout/Container";

const init = () => {
    if (typeof window !== undefined) {
        (window as any).YaSendSuggestToken?.(`${window.location.origin}`);
    }
};

const Auth = () => {
    return (
        <>
            <Script
                src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js"
                onLoad={init}
                async
            />
            <Container>Авторизация...</Container>;
        </>
    );
};
export default memo(Auth);
