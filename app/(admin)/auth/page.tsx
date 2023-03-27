"use client";
import React, {memo, useEffect} from "react";

const Auth = () => {
    useEffect(() => {
        const timerId = setTimeout(() => {
            (window as any)?.YaSendSuggestToken?.(`${window.location.origin}`);
        });

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return <p>Авторизация...</p>;
};
export default memo(Auth);
