import React, {memo} from "react";

import {ContactCardType} from "./types";

const ContactCard: ContactCardType = ({contact}) => {
    return (
        <div className="flex-1">
            <div className="py-14 px-12 h-full rounded-2xl border-2 border-primary text-center text-white hover:border-pink ease-in-out duration-200 flex flex-col">
                <h5 className="text-h2-bold mb-20">{contact.title}</h5>
                <div className="flex items-center justify-center flex-1">
                    <div className="text-2xl leading-[38px]">
                        {contact.entities.map((entity) => (
                            <p key={entity}>{entity}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ContactCard);
