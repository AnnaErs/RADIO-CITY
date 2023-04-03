"use client";
import React, {memo, useEffect} from "react";

import axios from "axios";

type TokenResponce = {
    access_token: string;
    expires_in: string;
};

const AuthButton = () => {
    useEffect(() => {
        const timerId = setTimeout(async () => {
            try {
                const res = await (window as any)?.YaAuthSuggest?.init(
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
                );

                const data: TokenResponce = await res.handler();

                const authRes = await axios.post("/api/auth", data);
                console.log(authRes);
            } catch (error) {
                console.error("Что-то пошло не так: ", error);
            }
        });

        return () => clearTimeout(timerId);
    }, []);

    return <div id="button" />;
};

export default memo(AuthButton);
