import {useCallback} from 'react';
import useSWRInfinite from 'swr/infinite';

import {getClients} from '@api/clientsAPI';
import {filterParser, useQuery} from '@utils/search-params';

const getParams = async (params: {name: string; offset: number; type: string; search: string}) => {
  const res = await getClients({
    limit: 20,
    offset: params.offset * 20,
    filter: params.search,
    type: params.type
  });
  return res;
};

const swrOptions = {
  revalidateFirstPage: false
};

export const useGetClients = () => {
  const {search, type} = useQuery(filterParser);

  const getKey = useCallback(
    (pageIndex: number, previousPageData: Array<unknown>) => {
      if (previousPageData && !previousPageData.length) return null;
      return {name: 'GET_CLIENTS', offset: pageIndex, type, search};
    },
    [type, search]
  );

  return useSWRInfinite(getKey, getParams, swrOptions);
};
