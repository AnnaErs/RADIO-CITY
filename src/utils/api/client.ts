import useSWR from 'swr';

import {getClient} from '@api/clientsAPI';
import {filterParser, useQuery} from '@utils/search-params';

export const useGetClient = () => {
  const {id} = useQuery(filterParser);
  return useSWR({name: 'GET_CLIENT', id}, params => getClient({client_id: params.id}));
};
