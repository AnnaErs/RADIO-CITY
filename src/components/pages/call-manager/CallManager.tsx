import {CallsTable} from '@components/calls-table';
import ClientSidebar from '@components/client-sidebar';
import CurrentInfo from '@components/sections/current-info';
import {filterParser, useQuery} from '@utils/search-params';

import {CallManagerPageType} from './types';

const CallManager: CallManagerPageType = () => {
  const {id, filterStartDate, filterEndDate, type} = useQuery(filterParser);

  return (
    <div className="flex flex-col gap-14 flex-1">
      <CurrentInfo />
      <CallsTable startDate={filterStartDate} endDate={filterEndDate} isRadio={type === 'radio-practice'} />
      {!!id && <ClientSidebar />}
    </div>
  );
};
export default CallManager;
