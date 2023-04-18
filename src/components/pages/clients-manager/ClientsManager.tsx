import ClientSidebar from '@components/client-sidebar';
import AdminClients from '@components/sections/admin-clients';
import {useSearchParams} from 'react-router-dom';

import {ClientsManagerType} from './types';

const ClientsManager: ClientsManagerType = () => {
  const [searchParams] = useSearchParams();

  return (
    <>
      <AdminClients />
      {searchParams.get('mode') && <ClientSidebar />}
    </>
  );
};
export default ClientsManager;
