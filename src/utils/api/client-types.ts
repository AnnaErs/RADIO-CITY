import useSWR from 'swr';

import {getClientTypes} from '@api/clientsAPI';

export const useGetClientTypes = () => {
  return useSWR('GET_ORGANIZATIONS', getClientTypes);
};
