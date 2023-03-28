import Image from 'next/image';
import {memo, useMemo} from "react";

import ClientCard from "./ClientCard";

import {ClientRowCardsType} from "./types";

const ClientRowCards: ClientRowCardsType = ({
    src,
    title,
    paragraph,
    isReverse,
}) => {
    const classNames = useMemo(() => {
        const classes = ["flex -mx-8 children:p-8"];

        if (isReverse) {
            classes.push("flex-row-reverse");
        }

        return classes.join(" ");
    }, [isReverse]);

    return (
        <div className={classNames}>
            <div className="w-3/5">
                <ClientCard>
                    <Image src={src} alt={title} className="w-full" />
                </ClientCard>
            </div>
            <div className="w-2/5">
                <ClientCard>
                    <div className="bg-white flex flex-col justify-between text-black h-full py-12 px-10">
                        <div className="text-h2">{title}</div>
                        <div className="text-2xl">{paragraph}</div>
                    </div>
                </ClientCard>
            </div>
        </div>
    );
};

export default memo(ClientRowCards);
