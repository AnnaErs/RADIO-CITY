import useSWR from 'swr';
import {memo, useMemo} from 'react';

import {getClientTypes} from '@api/clientsAPI';
import Select from '@ui-kit/select';

import {ClientTypeSelectType} from './types';

const ClientTypeSelect: ClientTypeSelectType = ({name, value}) => {
  const {data} = useSWR('GET_CLIENT_TYPES', getClientTypes);
  const options = useMemo(() => data?.map(type => ({value: type.id, label: type.name})) ?? [], [data]);

  return <Select name={name} options={options} value={value} />;
};

export default memo(ClientTypeSelect);
