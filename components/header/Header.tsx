"use client";
import React, {memo, useEffect, useState} from "react";

import Container from "@components/layout/Container";
import {cn} from "@utils/cn";

import {HeaderType} from "./types";
import AuthButton from "./AuthButton";
import UserButton from "./UserButton";

const Header: HeaderType = ({links, isAdmin, hasToken}) => {
    const [isOnTop, setOnTopStatus] = useState(true);

    useEffect(() => {
        const setScrollStatus = () => {
            setOnTopStatus(window?.pageYOffset < 200);
        };

        window?.addEventListener("scroll", setScrollStatus);

        return () => {
            window?.removeEventListener("scroll", setScrollStatus);
        };
    }, []);

    return (
        <header
            className={cn("sticky top-0 ease-in-out duration-200", {
                "bg-white text-black": !!isAdmin,
                "bg-bg text-gray": !isAdmin,
                "shadow-blue": !isOnTop,
            })}
        >
            <Container>
                <div className="flex items-center justify-between py-4 text-xl min-h-[70px]">
                    <div>
                        {links.left?.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="mr-12"
                                target={link.target}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center">
                        {links.right?.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="mr-12"
                                target={link.target}
                            >
                                {link.name}
                            </a>
                        ))}
                        {hasToken ? <UserButton /> : <AuthButton />}
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default memo(Header);
