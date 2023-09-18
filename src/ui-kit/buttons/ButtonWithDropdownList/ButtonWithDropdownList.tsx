import {memo, useCallback, useMemo, useRef} from 'react';

import useOnOutsideClick from '@utils/hooks/useOnOutsideClick';
import useToggle from '@utils/hooks/useToggle';

import Button from '../Button';
import DropdownList from '../DropdownList';
import {ButtonWithDropdownListType, Option} from './types';

const ButtonWithDropdownList: ButtonWithDropdownListType = ({value, options, optionColor, onClick}) => {
  const ref = useRef(null);
  const [isOpened, toggle, setValue] = useToggle(false);

  useOnOutsideClick(
    ref,
    isOpened
      ? () => {
          setValue(false);
        }
      : undefined
  );

  const optionsDict = useMemo(
    () =>
      (options ?? []).reduce<Record<string, string>>((acc, option) => {
        acc[option.value] = option.label;

        return acc;
      }, {}),
    [options]
  );

  const clickHandler = useCallback(
    (option: Option) => {
      setValue(false);
      onClick?.(option);
    },
    [setValue, onClick]
  );

  return (
    <div ref={ref}>
      <Button title={optionsDict[value] ?? value} onClick={toggle} />
      {isOpened && <DropdownList options={options} optionColor={optionColor} onClick={clickHandler} />}
    </div>
  );
};

export default memo(ButtonWithDropdownList);
