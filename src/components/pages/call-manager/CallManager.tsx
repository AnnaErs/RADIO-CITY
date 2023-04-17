import CallManagerClients from '@components/sections/call-manager-clients';
import CurrentInfo from '@components/sections/current-info';

import {CallManagerPageType} from './types';

const CallManager: CallManagerPageType = () => {
  return (
    <div className="flex flex-col gap-14">
      <CurrentInfo />
      <CallManagerClients />
    </div>
  );
};
export default CallManager;
