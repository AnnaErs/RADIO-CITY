import {memo} from 'react';

import ButtonWithDropdownList from '../ButtonWithDropdownList';

const DROPDOWN_STATES = [
  {
    label: 'Всё ОК',
    value: 'Вс'
  },
  {
    label: 'Неисправен',
    value: 'Не'
  },
  {
    label: 'Вызвал диспетчера, жду обратной связи',
    value: 'Вы'
  },
  {
    label: 'Опоздал',
    value: 'Оп'
  },
  {
    label: 'Дальние связи',
    value: 'Да'
  },
  {
    label: 'Не умеет работать',
    value: 'Неe'
  }
];

const StatesButton = () => {
  return <ButtonWithDropdownList value={DROPDOWN_STATES[0].value} options={DROPDOWN_STATES} />;
};

export default memo(StatesButton);
