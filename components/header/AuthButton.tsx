"use client";
import React, {memo, useEffect} from "react";

import {setCookie} from "@utils/cookie";

const AuthButton = () => {
    useEffect(() => {
        const timerId = setTimeout(() => {
            (window as any)?.YaAuthSuggest?.init(
                {
                    client_id: "d77dee1660984443a3961a2c661f66d9",
                    response_type: "token",
                    redirect_uri: `${window.location.origin}/auth`,
                },
                `${window.location.origin}/auth`,
                {
                    view: "button",
                    parentId: "button",
                    buttonView: "main",
                    buttonTheme: "dark",
                    buttonSize: "s",
                    buttonBorderRadius: 8,
                },
            )
                .then((result: any) => result.handler())
                .then((data: {access_token: string; expires_in: string}) => {
                    setCookie("token", data.access_token, data.expires_in);
                })
                .catch((error: Error) => {
                    console.error("Что-то пошло не так: ", error);
                });
        });

        return () => clearTimeout(timerId);
    }, []);

    return <div id="button" />;
};

export default memo(AuthButton);
