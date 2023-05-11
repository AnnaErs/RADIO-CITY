import {memo, useCallback} from 'react';

import Accordeon from '@ui-kit/accordeon';
import List, {ListItem, ListRow} from '@ui-kit/list';
import {StatesButton} from '@ui-kit/buttons';

import {ClientWithCall, ClientsCallAccordeonPropsType} from './types';
import {createCall} from '@api/callsAPI';
import {useSearchParams} from 'react-router-dom';

const ClientsCallAccordeon = memo<ClientsCallAccordeonPropsType>(function ClientsCallAccordeon({
  openedByDefault,
  title,
  clients,
  onChange
}) {
  const [_, setSearchParams] = useSearchParams();

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

  const openSidebar = useCallback(
    (id: string, revision: number) => () => {
      setSearchParams(prev => {
        const objectParams = Object.fromEntries(prev);
        return Object.assign({}, objectParams, {id, revision});
      });
    },
    [setSearchParams]
  );

  if (clients.length === 0) {
    return null;
  }

  return (
    <Accordeon title={title} defaultState={openedByDefault}>
      <List>
        {clients?.map(client => (
          <ListRow key={client.client_id} onClick={openSidebar(client.client_id, client.revision)}>
            <ListItem>{client.mo}</ListItem>
            <ListItem>{client.location}</ListItem>
            <ListItem>{client.organization}</ListItem>
            <ListItem>{client.unit}</ListItem>
            <ListItem>{client.trunk_phone}</ListItem>
            <ListItem>{client.call_sign}</ListItem>
            <ListItem>{client.call_time}</ListItem>
            <ListItem onClick={e => e.stopPropagation()}>
              <StatesButton value={client.call?.['calls-type_id']} onChange={changeCallStatus(client)} />
            </ListItem>
          </ListRow>
        ))}
      </List>
    </Accordeon>
  );
});
export {ClientsCallAccordeon};
