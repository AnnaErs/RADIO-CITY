import {memo, useCallback} from 'react';
import {useSearchParams} from 'react-router-dom';

import {ClientWithTimeType} from '@api/callsAPI';
import {OrgTypeToString} from '@components/org-type-to-string';
import {addParams} from '@utils/search-params';

import {DayCell} from './DayCell';

type ClientRowPropsType = {
  client: ClientWithTimeType & {time: string};
  arrayOfDays: Array<number>;
  isRadio: boolean;
};

const ClientRow = memo<ClientRowPropsType>(function ClientRow({client, arrayOfDays, isRadio}) {
  const [_, setSearchParams] = useSearchParams();

  const onRowClick = useCallback(
    () => setSearchParams(addParams({id: client.client_id})),
    [client.client_id, setSearchParams]
  );

  return (
    <tr className="odd:bg-zinc-50" onClick={onRowClick}>
      <td className="py-2 pr-3">
        <div className="min-h-[32px]">{client.time}</div>
      </td>
      {isRadio && <td className="py-2 pr-3 max-w-[300px] truncate">{client.group_name}</td>}
      <td className="py-2 pr-3 whitespace-nowrap">{client.location}</td>
      <td className="py-2 pr-3 whitespace-nowrap">{client.organization}</td>
      <td className="py-2 pr-3 whitespace-nowrap">{client.unit}</td>
      <td className="py-2 pr-3 whitespace-nowrap">
        <OrgTypeToString value={client.client_type_id} />
      </td>
      <td className="py-2 pr-3">{client.trunk_phone}</td>
      <td className="py-2 pr-3 whitespace-nowrap">{client.call_sign}</td>
      {arrayOfDays.map((_, index) => (
        <DayCell index={index} client={client} key={index} />
      ))}
    </tr>
  );
});
export {ClientRow};
