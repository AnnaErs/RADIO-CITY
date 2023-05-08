import {useSearchParams} from 'react-router-dom';

import CallManagerClients from '@components/sections/call-manager-clients';
import CurrentInfo from '@components/sections/current-info';
import ClientSidebar from '@components/client-sidebar';
import {CallsTable} from '@components/calls-table';

import {CallManagerPageType} from './types';

const CallManager: CallManagerPageType = () => {
  const [searchParams] = useSearchParams();

  return (
    <div className="flex flex-col gap-14">
      <CurrentInfo />
      <CallManagerClients />
      <CallsTable />
      {searchParams.get('id') && <ClientSidebar />}
    </div>
  );
};
export default CallManager;
