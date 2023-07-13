import useSWR from 'swr';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import {getClients} from '@api/clientsAPI';
import Container from '@ui-kit/layout/container';
import {createCall, getCalls} from '@api/callsAPI';
import Loader from '@ui-kit/loader';
import {getTodayPeriod} from '@utils/times';

import {CallManagerType, ClientWithCall, PrevCallStatusType} from './types';
import {groupClients} from './utils';
import {ClientsCallAccordeon} from './ClientsCallAccordeon';
import {CallsType} from './consts';

const GROUPS_TITLES = {
  [CallsType.Missed]: 'Не вышли на связь',
  [CallsType.Future]: 'Ожидание вызова',
  [CallsType.Called]: 'Вышли на связь'
};

const CallManagerClients: CallManagerType = () => {
  const [previousCallStatus, setStatus] = useState<PrevCallStatusType | undefined>(undefined);
  const {data: clientsData, isLoading: isLoadingClients} = useSWR('GET_CLIENTS', getClients);
  const {data: callsData, mutate, isLoading: isLoadingCalls} = useSWR('GET_CALLS', () => getCalls(getTodayPeriod()));
  const [searchParams] = useSearchParams();

  const clients = useMemo(
    () => groupClients(clientsData, callsData, searchParams.get('type'), searchParams.get('search')),
    [clientsData, callsData, searchParams]
  );

  const onChangeStatus = useCallback(
    (prevClient: ClientWithCall) => {
      mutate();
      setStatus({
        clientId: prevClient.client_id,
        statusId: prevClient.call?.['calls-type_id'],
        callId: prevClient.call?.id
      });
    },
    [mutate, setStatus]
  );

  useEffect(() => {
    const undoCallStatus = async (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.code === 'KeyZ' && previousCallStatus) {
        await createCall({
          call: {
            id: previousCallStatus.callId,
            callsTypeId: previousCallStatus.statusId || '',
            clientId: previousCallStatus.clientId
          }
        });
        mutate();
      }
    };
    document.addEventListener('keydown', undoCallStatus);
    return () => {
      document.removeEventListener('keydown', undoCallStatus);
    };
  }, [mutate, previousCallStatus]);

  if (isLoadingCalls && isLoadingClients) {
    return (
      <Container isRealFullWidth>
        <Loader />
      </Container>
    );
  }

  return (
    <div className="flex flex-col gap-11">
      <Container isRealFullWidth>
        <ClientsCallAccordeon
          title={GROUPS_TITLES[CallsType.Missed]}
          clients={clients[CallsType.Missed]}
          onChange={onChangeStatus}
          openedByDefault
        />
      </Container>
      <Container isRealFullWidth>
        <ClientsCallAccordeon
          title={GROUPS_TITLES[CallsType.Future]}
          clients={clients[CallsType.Future]}
          onChange={onChangeStatus}
          openedByDefault
        />
      </Container>
      <Container isRealFullWidth>
        <ClientsCallAccordeon
          title={GROUPS_TITLES[CallsType.Called]}
          clients={clients[CallsType.Called]}
          onChange={onChangeStatus}
        />
      </Container>
    </div>
  );
};

export default CallManagerClients;
