import {memo, useCallback, useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';

import Sidebar from '@ui-kit/sidebar';
import {useGetClient} from '@utils/api/client';

import ClientForm from './ClientForm';
import {ClientSidebarType} from './types';
import {removeSidebarParams} from './utils';

const ClientSidebar: ClientSidebarType = () => {
  const [_, setSearchParams] = useSearchParams();
  const {data, isLoading} = useGetClient();

  const sidebarTitle = useMemo(() => {
    if (isLoading) {
      return 'Загружаем...';
    }
    if (!data?.client.client_id) {
      return 'Создание клиента';
    }

    return (
      <span>
        {data.client.trunk_phone} {data.client.location}
      </span>
    );
  }, [isLoading, data?.client]);

  const closeSidebar = useCallback(() => setSearchParams(removeSidebarParams), [setSearchParams]);

  return (
    <Sidebar title={sidebarTitle} close={closeSidebar}>
      {!isLoading && <ClientForm />}
    </Sidebar>
  );
};

export default memo(ClientSidebar);
