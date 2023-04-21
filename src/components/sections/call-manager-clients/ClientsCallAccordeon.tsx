import {memo, useCallback, useMemo} from 'react';

import Accordeon from '@ui-kit/accordeon';
import List, {ListItem, ListRow} from '@ui-kit/list';
import {StatesButton} from '@ui-kit/buttons';

import {ClientWithCall, ClientsCallAccordeonPropsType} from './types';
import {createCall} from '@api/callsAPI';

const ClientsCallAccordeon = memo<ClientsCallAccordeonPropsType>(({openedByDefault, title, clients, onChange}) => {
  const changeCallStatus = useCallback(
    (client: ClientWithCall) =>
      async ({value}: {value: string}) => {
        await createCall({
          call: {
            id: client.call?.id,
            callsTypeId: value,
            clientId: client.client_id
          }
        });
        onChange?.();
      },
    []
  );
  if (clients.length === 0) {
    return null;
  }

  return (
    <Accordeon title={title} defaultState={openedByDefault}>
      <List>
        {clients?.map(client => (
          <ListRow key={client.client_id}>
            <ListItem>{client.name}</ListItem>
            <ListItem>{client.phone}</ListItem>
            <ListItem>{client.call_time}</ListItem>
            <ListItem>
              <StatesButton value={client.call?.['calls-type_id']} onChange={changeCallStatus(client)} />
            </ListItem>
          </ListRow>
        ))}
      </List>
    </Accordeon>
  );
});
export {ClientsCallAccordeon};
