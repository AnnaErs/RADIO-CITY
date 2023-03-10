import React, {memo} from "react";

import ContactCard from "./ContactCard";
import {ContactCardsType} from "./types";

const ContactCards: ContactCardsType = ({contacts}) => {
    return (
        <div className="flex -mx-2 children:px-2">
            {contacts.map((contactGroup) => (
                <ContactCard contact={contactGroup} key={contactGroup.title} />
            ))}
        </div>
    );
};

export default memo(ContactCards);
