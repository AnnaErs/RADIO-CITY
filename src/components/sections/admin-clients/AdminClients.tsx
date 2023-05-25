import {memo, useCallback, useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';
import moment from 'moment';
import useSWR from 'swr';

import {getClients, GetClientsResponse} from '@api/clientsAPI';
import Accordeon from '@ui-kit/accordeon';
import List, {ListItem, ListRow} from '@ui-kit/list';
import Container from '@ui-kit/layout/container';
import Button from '@ui-kit/buttons';
import Loader from '@ui-kit/loader';
import {OrgInfo} from '@components/org-info';
import Search from '@ui-kit/search';

import {ClientsSectionType} from './types';

const convertClientsToClientList = (
  responseClients: GetClientsResponse,
  type: string | null,
  search: string | null
) => {
  const responceClientsArray = Object.values(responseClients);
  return responceClientsArray
    .map(versions => versions[versions.length - 1])
    .filter(
      client =>
        (!type || client.type === type) &&
        (!search ||
          client.mo?.toLowerCase()?.includes(search.toLowerCase()) ||
          client.location?.toLowerCase()?.includes(search.toLowerCase()) ||
          client.organization?.toLowerCase()?.includes(search.toLowerCase()) ||
          client.unit?.toLowerCase()?.includes(search.toLowerCase()) ||
          client.trunk_phone?.toLowerCase()?.includes(search.toLowerCase()) ||
          client.call_sign?.toLowerCase()?.includes(search.toLowerCase()))
    )
    .sort((clientA, clientB) => {
      const aCallTime = moment(clientA.call_time, 'HH:mm');
      const bCallTime = moment(clientB.call_time, 'HH:mm');
      if (aCallTime.isAfter(bCallTime)) return 1;
      if (aCallTime.isBefore(bCallTime)) return -1;

      return clientA.location.localeCompare(clientB.location);
    });
};

const GROUPS_TITLES = {
  activated: 'Активные абоненты',
  deactivated: 'Удаленные абоненты'
};

const AdminClients: ClientsSectionType = () => {
  const {data, isLoading} = useSWR('GET_CLIENTS', getClients);
  const [searchParams, setSearchParams] = useSearchParams();

  const clients = useMemo(
    () => convertClientsToClientList(data ?? {}, searchParams.get('type'), searchParams.get('search')),
    [data, searchParams]
  );
  const activeClients = useMemo(
    () => clients?.filter(client => !client.active_period_to || moment(client.active_period_to).isAfter(moment())),
    [clients]
  );
  const deactivatedClients = useMemo(
    () => clients?.filter(client => moment(client.active_period_to).isBefore(moment())),
    [clients]
  );

  const openEditClient = useCallback(
    (id: string) => () => setSearchParams(prev => Object.assign({}, prev, {id, mode: 'edit'})),
    [setSearchParams]
  );
  const openCreateClient = useCallback(
    () => setSearchParams(prev => Object.assign({}, prev, {mode: 'create'})),
    [setSearchParams]
  );

  return (
    <Container isFullWidth>
      <div className="flex flex-col gap-14">
        <div>
          <Search />
          <OrgInfo />
        </div>
        <div className="flex flex-col gap-10">
          <div className="ml-auto sticky top-[80px] self-start">
            <Button onClick={openCreateClient}>Добавить абонента</Button>
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            !!activeClients?.length && (
              <Accordeon title={GROUPS_TITLES.activated} defaultState={true}>
                <List>
                  {activeClients?.map(client => (
                    <ListRow key={client.client_id} onClick={openEditClient(client.client_id)}>
                      <ListItem>{client.mo}</ListItem>
                      <ListItem>{client.location}</ListItem>
                      <ListItem>{client.organization}</ListItem>
                      <ListItem>{client.unit}</ListItem>
                      <ListItem>{client.trunk_phone}</ListItem>
                      <ListItem>{client.call_sign}</ListItem>
                      <ListItem>{client.call_time}</ListItem>
                      <ListItem>{client.schedule.join()}</ListItem>
                    </ListRow>
                  ))}
                </List>
              </Accordeon>
            )
          )}
          {!!deactivatedClients.length && (
            <Accordeon title={GROUPS_TITLES.deactivated}>
              <List>
                {deactivatedClients?.map(client => (
                  <ListRow key={client.client_id} onClick={openEditClient(client.client_id)}>
                    <ListItem>{client.mo}</ListItem>
                    <ListItem>{client.location}</ListItem>
                    <ListItem>{client.organization}</ListItem>
                    <ListItem>{client.unit}</ListItem>
                    <ListItem>{client.trunk_phone}</ListItem>
                    <ListItem>{client.call_sign}</ListItem>
                    <ListItem>{client.call_time}</ListItem>
                    <ListItem>{client.schedule.join()}</ListItem>
                  </ListRow>
                ))}
              </List>
            </Accordeon>
          )}
        </div>
      </div>
    </Container>
  );
};

export default memo(AdminClients);
