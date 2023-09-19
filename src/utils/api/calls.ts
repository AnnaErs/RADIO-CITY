import useSWR from 'swr';

import {getCalls} from '@api/callsAPI';
import {filterParser, useQuery} from '@utils/search-params';

export const useGetCalls = () => {
  const {search, type, filterStartDate, filterEndDate} = useQuery(filterParser);

  return useSWR({name: 'GET_CALLS', search, type, from: filterStartDate, to: filterEndDate}, params =>
    getCalls({
      filter: params.search,
      type: params.type,
      from: params.from,
      to: params.to
    })
  );
};
