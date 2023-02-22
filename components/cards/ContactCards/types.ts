import {FC} from 'react';

type Contact = {
    title: string;
    entities: Array<string>;
}
type Contacts = Array<Contact>;

type ContactCardsPropsType = {
    contacts: Contacts
};
export type ContactCardsType = FC<ContactCardsPropsType>;

type ContactCardPropsType = {
    contact: Contact;
};
export type ContactCardType = FC<ContactCardPropsType>;
