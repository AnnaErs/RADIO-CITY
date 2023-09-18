import {flatten} from 'lodash';
import {memo, useCallback, useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';

import {OrgInfo} from '@components/org-info';
import {ScrollWatcher} from '@components/scroll-watcher';
import Search from '@components/search';
import Accordeon from '@ui-kit/accordeon';
import Button from '@ui-kit/buttons';
import Container from '@ui-kit/layout/container';
import List, {ListItem, ListRow} from '@ui-kit/list';
import Loader from '@ui-kit/loader';
import {useGetClients} from '@utils/api/clients';
import {addParams} from '@utils/search-params';

import {ClientsSectionType} from './types';

const GROUPS_TITLES = {
  activated: 'Активные абоненты'
};

const AdminClients: ClientsSectionType = () => {
  const [_, setSearchParams] = useSearchParams();
  const {data, isLoading, isValidating, setSize} = useGetClients();

  const clients = useMemo(() => flatten(data), [data]);

  const openEditClient = useCallback(
    (id: string) => () => setSearchParams(addParams({id, mode: 'edit'})),
    [setSearchParams]
  );
  const openCreateClient = useCallback(() => setSearchParams(addParams({mode: 'create'})), [setSearchParams]);

  const onScrollBottom = useCallback(() => {
    if (isValidating) {
      return;
    }
    setSize(prev => prev + 1);
  }, [isValidating, setSize]);

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
          <ScrollWatcher onScrollBottom={onScrollBottom}>
            {!!clients?.length && (
              <Accordeon title={GROUPS_TITLES.activated} defaultState={true}>
                <List>
                  {clients?.map(client => (
                    <ListRow key={client.client_id} onClick={openEditClient(client.client_id)}>
                      <ListItem>{client.mo}</ListItem>
                      <ListItem>{client.location}</ListItem>
                      <ListItem>{client.organization}</ListItem>
                      <ListItem>{client.unit}</ListItem>
                      <ListItem>{client.trunk_phone}</ListItem>
                      <ListItem>{client.call_sign}</ListItem>
                    </ListRow>
                  ))}
                </List>
              </Accordeon>
            )}
            {(isLoading || isValidating) && <Loader />}
          </ScrollWatcher>
        </div>
      </div>
    </Container>
  );
};

export default memo(AdminClients);
