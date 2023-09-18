import useSWR from 'swr';

import {getCallTypes} from '@api/callsAPI';

export const useGetCallTypes = () => {
  return useSWR('GET_CALL_TYPES', getCallTypes);
};
