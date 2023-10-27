import {FieldArray} from 'formik';
import {memo} from 'react';

import Button from '@ui-kit/buttons';
import {DaysOfWeek} from '@ui-kit/days-of-week';
import Input from '@ui-kit/input';

type ClientCallTimePropsType = {
  name: string;
  calls: Array<{group_name: string; call_time: string; schedule: (1 | 2 | 3 | 4 | 5 | 6 | 7)[]}> | undefined;
  disabled?: boolean;
  isRadio?: boolean;
};

const ClientCallTime = memo<ClientCallTimePropsType>(function ClientCallTime({calls, name, disabled, isRadio}) {
  return (
    <div className="flex flex-col gap-5">
      <FieldArray name={name}>
        {({push}) => (
          <>
            {calls?.map((call, i) => (
              <div className="flex flex-col gap-3" key={i}>
                {isRadio && (
                  <Input
                    name={`${name}.${i}.group_name`}
                    value={call.group_name}
                    placeholder="Название радиовызова"
                    disabled={disabled}
                  />
                )}
                <Input
                  name={`${name}.${i}.call_time`}
                  value={call.call_time}
                  placeholder="Время звонка"
                  disabled={disabled}
                />
                <DaysOfWeek name={`${name}.${i}.schedule`} defaultValue={call.schedule} disabled={disabled} />
              </div>
            ))}
            {!disabled && (
              <div>
                <Button title="Добавить время вызова" onClick={() => push({call_time: '', schedule: []})} />
              </div>
            )}
          </>
        )}
      </FieldArray>
    </div>
  );
});

export {ClientCallTime};
