import useSWR from 'swr';
import {memo, useMemo} from 'react';

import {getClientTypes} from '@api/clientsAPI';

const OrgTypeToString = memo<{value?: string}>(function OrgTypeToString({value}) {
  const {data} = useSWR('GET_ORGANIZATIONS', getClientTypes);

  const organizations = useMemo(
    () =>
      (data ?? []).reduce<Record<string, string>>((acc, item) => {
        acc[item.id] = item.name;
        return acc;
      }, {}),
    [data]
  );

  if (!value) {
    return null;
  }

  return <span>{organizations[value]}</span>;
});

export {OrgTypeToString};
