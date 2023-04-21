import useSWR from 'swr';
import {memo, useMemo} from 'react';

import {getClientTypes} from '@api/clientsAPI';
import Select from '@ui-kit/select';

import {ClientTypeSelectType} from './types';

const DEFAULT_OPTIONS: {value: string; label: string; disabled?: boolean} = {
  value: '',
  label: 'Укажите тип клиента',
  disabled: true
};

const ClientTypeSelect: ClientTypeSelectType = ({name, value, disabled}) => {
  const {data} = useSWR('GET_CLIENT_TYPES', getClientTypes);
  const options = useMemo(() => {
    return [DEFAULT_OPTIONS].concat(data?.map(type => ({value: type.id, label: type.name})) ?? []);
  }, [data]);

  return <Select name={name} options={options} value={value} disabled={disabled} />;
};

export default memo(ClientTypeSelect);
