import {memo} from 'react';

import ButtonWithDropdownList from '../ButtonWithDropdownList';
import {StatesButtonPropsType} from './types';

const DROPDOWN_STATES = [
  {
    label: 'Всё ОК',
    value: '1'
  },
  {
    label: 'Неисправен',
    value: '2'
  },
  {
    label: 'Вызвал диспетчера, жду обратной связи',
    value: '3'
  },
  {
    label: 'Опоздал',
    value: '4'
  },
  {
    label: 'Дальние связи',
    value: '5'
  },
  {
    label: 'Не умеет работать',
    value: '6'
  }
];

const DEFAULT_VALUE = 'Сменить статус';

const StatesButton = memo<StatesButtonPropsType>(({value, onChange}) => {
  return <ButtonWithDropdownList value={value ?? DEFAULT_VALUE} options={DROPDOWN_STATES} onClick={onChange} />;
});

export {StatesButton};
