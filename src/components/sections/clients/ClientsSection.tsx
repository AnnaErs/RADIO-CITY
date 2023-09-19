import {memo} from 'react';

import ClientRowCards from '@components/cards/client-cards';
import Section from '@ui-kit/layout/section';

import client1Image from './clientsImage1.png';
import client2Image from './clientsImage2.png';
import {ClientsSectionType} from './types';

const SECTION = {
  title: 'Клиентам',
  clients: [
    {
      src: client1Image,
      title: 'Для частных лиц',
      paragraph:
        'Если вы любите активный отдых и туризм в равной степени с безопасностью, то Вам необходима временная аренда наших готовых решений для обеспечения бесперебойной связи.'
    },
    {
      src: client2Image,
      title: 'Для организаций',
      paragraph:
        'Если вы любите активный отдых и туризм в равной степени с безопасностью, то Вам необходима временная аренда наших готовых решений для обеспечения бесперебойной связи.'
    }
  ]
};

const ClientsSection: ClientsSectionType = () => {
  return (
    <div id="clients">
      <Section title={SECTION.title}>
        {SECTION.clients.map((client, index) => (
          <ClientRowCards {...client} isReverse={!!(index % 2)} key={client.title} />
        ))}
      </Section>
    </div>
  );
};

export default memo(ClientsSection);
