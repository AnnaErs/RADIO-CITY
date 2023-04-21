import {memo, useCallback, useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';
import moment from 'moment';
import useSWR from 'swr';

import {getClients, GetClientsResponse} from '@api/clientsAPI';
import Accordeon from '@ui-kit/accordeon';
import List, {ListItem, ListRow} from '@ui-kit/list';
import Container from '@ui-kit/layout/container';
import Button from '@ui-kit/buttons';

import {ClientsSectionType} from './types';

const convertClientsToClientList = (responseClients: GetClientsResponse) => {
  const responceClientsArray = Object.values(responseClients);
  return responceClientsArray.map(versions => {
    return versions[versions.length - 1];
  });
};

const GROUPS_TITLES = {
  activated: 'Активные клиенты',
  deactivated: 'Деактивные клиенты'
};

const AdminClients: ClientsSectionType = () => {
  const {data} = useSWR('GET_CLIENTS', getClients);
  const clients = useMemo(() => convertClientsToClientList(data ?? {}), [data]);
  const [_, setSearchParams] = useSearchParams();

  const openEditClient = useCallback(
    (id: string) => () => {
      setSearchParams(prev => Object.assign({}, prev, {id, mode: 'edit'}));
    },
    [setSearchParams]
  );
  const openCreateClient = useCallback(() => {
    setSearchParams(prev => Object.assign({}, prev, {mode: 'create'}));
  }, [setSearchParams]);

  const activeClients = useMemo(
    () =>
      clients?.filter(client => {
        if (!client.active_period_to) {
          return true;
        }
        return moment(client.active_period_to).isAfter(moment());
      }),
    [clients]
  );
  const deactivatedClients = useMemo(
    () =>
      clients?.filter(client => {
        return moment(client.active_period_to).isBefore(moment());
      }),
    [clients]
  );

  return (
    <Container>
      <div className="flex flex-col gap-10">
        <div className="flex">
          {!!activeClients?.length && (
            <div className="flex-1">
              <Accordeon title={GROUPS_TITLES.activated} defaultState={true}>
                <List>
                  {activeClients?.map(client => (
                    <ListRow key={client.client_id} onClick={openEditClient(client.client_id)}>
                      <ListItem>{client.name}</ListItem>
                      <ListItem>{client.phone}</ListItem>
                      <ListItem>{client.call_time}</ListItem>
                      <ListItem>{client.schedule.join()}</ListItem>
                    </ListRow>
                  ))}
                </List>
              </Accordeon>
            </div>
          )}
          <div className="ml-auto">
            <Button onClick={openCreateClient}>Добавить клиента</Button>
          </div>
        </div>
        {deactivatedClients && (
          <Accordeon title={GROUPS_TITLES.deactivated}>
            <List>
              {deactivatedClients?.map(client => (
                <ListRow key={client.client_id} onClick={openEditClient(client.client_id)}>
                  <ListItem>{client.name}</ListItem>
                  <ListItem>{client.phone}</ListItem>
                  <ListItem>{client.call_time}</ListItem>
                  <ListItem>{client.schedule.join()}</ListItem>
                </ListRow>
              ))}
            </List>
          </Accordeon>
        )}
      </div>
    </Container>
  );
};

export default memo(AdminClients);
