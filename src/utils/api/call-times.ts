import {assign} from 'lodash';
import {useCallback} from 'react';
import useSWRInfinite from 'swr/infinite';

import {getCallTimes} from '@api/callsAPI';
import {filterParser, useQuery} from '@utils/search-params';
import {makeCallTime} from '@utils/times';

const getParams = async (params: {name: string; offset: number; type: string; search: string}) => {
  const res = await getCallTimes({
    limit: 20,
    offset: params.offset * 20,
    filter: params.search,
    type: params.type === 'radio-practice' ? undefined : params.type,
    is_radio_practice: params.type === 'radio-practice' ? true : undefined
  });
  return res.map(client => assign({}, client, {time: makeCallTime(client.client_call_id)}));
};

const swrOptions = {
  revalidateFirstPage: false
};

export const useGetCallTimes = () => {
  const {search, type} = useQuery(filterParser);

  const getKey = useCallback(
    (pageIndex: number, previousPageData: Array<unknown>) => {
      if (previousPageData && !previousPageData.length) return null;
      return {name: 'GET_CALL_TIMES', offset: pageIndex, type, search};
    },
    [type, search]
  );

  return useSWRInfinite(getKey, getParams, swrOptions);
};
