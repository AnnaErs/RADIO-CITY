import {memo} from 'react';

import Section from '@ui-kit/layout/section';
import Map from '@components/map';
import ContactCards from '@components/cards/contact-cards';

import {ContactsSectionType} from './types';

const SECTION_TITLE = {
  title: 'Контакты',
  contacts: [
    {
      title: 'Номер',
      entities: ['+7 (912) 271-87-90', '+7 (912) 271-87-91', '+7 (912) 271-87-92']
    },
    {
      title: 'Почта',
      entities: ['radio-city@mail.ru', 'feldmanu@mail.ru', 'super-radio@mail.ru']
    },
    {
      title: 'Адресс',
      entities: ['Россия, Свердловская обл. город Екатеринбург ул. Волгоградская 193']
    }
  ]
};

const ContactsSection: ContactsSectionType = () => {
  return (
    <div id="contacts">
      <Section title={SECTION_TITLE.title}>
        <ContactCards contacts={SECTION_TITLE.contacts} />
      </Section>
      <div className="-mt-8 pb-20">
        <Map />
      </div>
    </div>
  );
};

export default memo(ContactsSection);
