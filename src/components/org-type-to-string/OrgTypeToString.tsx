import {memo, useMemo} from 'react';

import {useGetClientTypes} from '@utils/api/client-types';

const OrgTypeToString = memo<{value?: string}>(function OrgTypeToString({value}) {
  const {data} = useGetClientTypes();

  const organizations = useMemo(
    () =>
      (data ?? []).reduce<Record<string, string>>((acc, item) => {
        acc[item.client_type_id] = item.name;
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
