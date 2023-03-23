"use client";
import {memo, useEffect} from "react";

const Auth = () => {
    useEffect(() => {
        const timerId = setTimeout(() => {
            (window as any)?.YaSendSuggestToken?.(
                "https://mimpushkarev-verbose-system-rq47j57xqwr3xvwq-3000.preview.app.github.dev/",
            );
        });

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return <p>Авторизация...</p>;
};
export default memo(Auth);
