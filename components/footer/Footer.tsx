import React, {memo} from "react";

import Container from "@components/layout/Container";

import {FooterType} from "./types";

const Footer: FooterType = ({links}) => {
    return (
        <footer>
            <Container>
                <div className="flex justify-between my-3">
                    <div className=" text-lg">
                        {links.left?.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="mr-16"
                                target={link.target}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div>
                        {links.right?.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="mr-16"
                                target={link.target}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default memo(Footer);
