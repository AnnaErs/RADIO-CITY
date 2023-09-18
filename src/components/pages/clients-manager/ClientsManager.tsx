import ClientSidebar from '@components/client-sidebar';
import AdminClients from '@components/sections/admin-clients';
import {filterParser, useQuery} from '@utils/search-params';

import {ClientsManagerType} from './types';

const ClientsManager: ClientsManagerType = () => {
  const {mode} = useQuery(filterParser);

  return (
    <>
      <AdminClients />
      {!!mode && <ClientSidebar />}
    </>
  );
};
export default ClientsManager;
