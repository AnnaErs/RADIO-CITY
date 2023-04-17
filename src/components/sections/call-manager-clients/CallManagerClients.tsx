import useSWR from 'swr';
import {useMemo} from 'react';

import Accordeon from '@ui-kit/accordeon';
import List, {ListItem, ListRow} from '@ui-kit/list';
import {getClients, GetClientsResponse} from '@api/clientsAPI';
import Container from '@ui-kit/layout/container';

import {CallManagerType} from './types';
import {StatesButton} from '@ui-kit/buttons';

const convertClientsToClientList = (responseClients: GetClientsResponse) => {
  const responceClientsArray = Object.values(responseClients);
  return responceClientsArray.map(versions => {
    return versions[versions.length - 1];
  });
};

const GROUPS_TITLES = {
  missed: 'Недоступные клиенты',
  future: 'Будущие клиенты',
  called: 'Обзвоненные клиенты'
};

const CallManagerClients: CallManagerType = () => {
  const {data} = useSWR('GET_CLIENTS', getClients);
  const clients = useMemo(() => convertClientsToClientList(data ?? {}), [data]);

  // TODO фильтрация по звонкам, мы получили клиентов на сегодня осталось их отфильтровать и вывести в списках ниже

  return (
    <Container>
      <div className="flex flex-col gap-11">
        {/* <Accordeon title={GROUPS_TITLES.missed}>
                    <List>
                        {clients?.map((client) => (
                            <ListRow key={client.client_id}>
                                <ListItem>{client.name}</ListItem>
                                <ListItem>{client.phone}</ListItem>
                                <ListItem>{client.call_time}</ListItem>
                                <ListItem>
                                    <StatesButton />
                                </ListItem>
                                <ListItem></ListItem>
                            </ListRow>
                        ))}
                    </List>
                </Accordeon>
                <Accordeon title={GROUPS_TITLES.future}>
                    <List>
                        {clients?.map((client) => (
                            <ListRow key={client.client_id}>
                                <ListItem>{client.name}</ListItem>
                                <ListItem>{client.phone}</ListItem>
                                <ListItem>{client.call_time}</ListItem>
                                <ListItem>
                                    <StatesButton />
                                </ListItem>
                                <ListItem></ListItem>
                            </ListRow>
                        ))}
                    </List>
                </Accordeon> */}
        <Accordeon title={GROUPS_TITLES.called} defaultState={true}>
          <List>
            {clients?.map(client => (
              <ListRow key={client.client_id}>
                <ListItem>{client.name}</ListItem>
                <ListItem>{client.phone}</ListItem>
                <ListItem>{client.call_time}</ListItem>
                <ListItem>
                  <StatesButton />
                </ListItem>
                <ListItem></ListItem>
              </ListRow>
            ))}
          </List>
        </Accordeon>
      </div>
    </Container>
  );
};
export default CallManagerClients;
