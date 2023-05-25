import useSWR from 'swr';
import {useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';

import {getClients} from '@api/clientsAPI';
import Container from '@ui-kit/layout/container';
import {getCalls} from '@api/callsAPI';
import Loader from '@ui-kit/loader';
import {getTodayPeriod} from '@utils/times';

import {CallManagerType} from './types';
import {groupClients} from './utils';
import {ClientsCallAccordeon} from './ClientsCallAccordeon';
import {CallsType} from './consts';

const GROUPS_TITLES = {
  [CallsType.Missed]: 'Не вышли на связь',
  [CallsType.Future]: 'Ожидание вызова',
  [CallsType.Called]: 'Вышли на связь'
};

const CallManagerClients: CallManagerType = () => {
  const {data: clientsData, isLoading: isLoadingClients} = useSWR('GET_CLIENTS', getClients);
  const {data: callsData, mutate, isLoading: isLoadingCalls} = useSWR('GET_CALLS', () => getCalls(getTodayPeriod()));
  const [searchParams] = useSearchParams();

  const clients = useMemo(
    () => groupClients(clientsData, callsData, searchParams.get('type'), searchParams.get('search')),
    [clientsData, callsData, searchParams]
  );

  return (
    <Container isFullWidth>
      {isLoadingCalls && isLoadingClients ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-11">
          <ClientsCallAccordeon
            title={GROUPS_TITLES[CallsType.Missed]}
            clients={clients[CallsType.Missed]}
            onChange={mutate}
            openedByDefault
          />
          <ClientsCallAccordeon
            title={GROUPS_TITLES[CallsType.Future]}
            clients={clients[CallsType.Future]}
            onChange={mutate}
            openedByDefault
          />
          <ClientsCallAccordeon
            title={GROUPS_TITLES[CallsType.Called]}
            clients={clients[CallsType.Called]}
            onChange={mutate}
          />
        </div>
      )}
    </Container>
  );
};
export default CallManagerClients;
