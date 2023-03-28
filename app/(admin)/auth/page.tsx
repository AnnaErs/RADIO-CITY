"use client";
import React, {memo, useEffect} from "react";

import Container from "@components/layout/Container";

const Auth = () => {
    useEffect(() => {
        const timerId = setTimeout(() => {
            (window as any)?.YaSendSuggestToken?.(`${window.location.origin}`);
        });

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return <Container>Авторизация...</Container>;
};
export default memo(Auth);
