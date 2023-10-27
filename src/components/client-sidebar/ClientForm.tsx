import {Form, Formik} from 'formik';
import {assign, omit, toNumber} from 'lodash';
import {memo, useCallback, useMemo} from 'react';
import {v4 as uuidv4} from 'uuid';

import {setClient} from '@api/clientsAPI';
import {ClientCallTime} from '@components/client-call-time';
import Button from '@ui-kit/buttons';
import Input from '@ui-kit/input';
import {ClientTypeSelect} from '@ui-kit/select';
import TextArea from '@ui-kit/text-area';
import {useGetCallTimes} from '@utils/api/call-times';
import {useGetClient} from '@utils/api/client';
import {filterParser, useQuery} from '@utils/search-params';
import {makeCallTime} from '@utils/times';

import {FormGroup} from './FormGroup';
import {ClientSidebarType} from './types';

const ClientForm: ClientSidebarType = () => {
  const {id, mode} = useQuery(filterParser);
  const {data, mutate} = useGetClient();
  const {mutate: mutateCallTimes} = useGetCallTimes();

  const initialValues = useMemo(
    () => ({
      description: data?.client.description,
      client_type_id: data?.client.client_type_id,
      location: data?.client.location,
      unit: data?.client.unit,
      call_sign: data?.client.call_sign,
      trunk_phone: data?.client.trunk_phone,
      responsible: data?.client.responsible,
      responsible_phone: data?.client.responsible_phone,
      organization: data?.client.organization,
      mo: data?.client.mo,
      timesCommon: data?.client.times
        .filter(time => time.type === 'common')
        .map(time => assign({}, time, {call_time: makeCallTime(time.client_call_id)})),
      timesRadioPractice: data?.client.times
        .filter(time => time.type === 'radio-practice')
        .map(time => assign({}, time, {call_time: makeCallTime(time.client_call_id)}))
    }),
    [data?.client]
  );

  const submitForm = useCallback(
    (data: typeof initialValues) => {
      console.log(data);
      const commonTimes = data.timesCommon?.reduce((acc, time) => {
        if (time.call_time) {
          const [hours, minutes] = time.call_time.split(':');
          acc.push({
            time: toNumber(hours) * 60 + toNumber(minutes),
            schedule: time.schedule,
            type: 'common'
          });
        }

        return acc;
      }, [] as any);
      const radioTimes = data.timesRadioPractice?.reduce((acc, time) => {
        if (time.call_time) {
          const [hours, minutes] = time.call_time.split(':');
          acc.push({
            time: toNumber(hours) * 60 + toNumber(minutes),
            schedule: time.schedule,
            type: 'radio-practice',
            group_name: time.group_name
          });
        }

        return acc;
      }, [] as any);

      const withoutOldData = omit(data, ['timesCommon', 'timesRadioPractice']);
      const newData = assign({}, withoutOldData, {
        client_id: id || uuidv4(),
        times: commonTimes.concat(radioTimes)
      });

      setClient(newData).then(() => {
        mutate();
        mutateCallTimes();
      });
    },
    [id, initialValues, mutate, mutateCallTimes]
  );

  return (
    <Formik initialValues={initialValues} onSubmit={submitForm}>
      {({values}) => (
        <Form>
          <div className="flex flex-col gap-y-6">
            <FormGroup label="Основная информация">
              <Input name="mo" value={values?.mo} placeholder="Муниципальное образование" />
              <Input name="location" value={values?.location} placeholder="Населенный пункт" />
              <Input name="organization" value={values?.organization} placeholder="Организация" />
              <Input name="unit" value={values?.unit} placeholder="Подразделение" />
              <Input name="call_sign" value={values?.call_sign} placeholder="Позывной" />
              <Input name="trunk_phone" value={values?.trunk_phone} placeholder="Транковый номер" />
              <ClientTypeSelect name="client_type_id" value={values?.client_type_id} />
              <Input name="responsible" value={values?.responsible} placeholder="ФИО ответственого" />
              <Input name="responsible_phone" value={values?.responsible_phone} placeholder="Телефон ответственного" />
            </FormGroup>

            <FormGroup label="Время вызова">
              <ClientCallTime calls={values.timesCommon} name="timesCommon" />
            </FormGroup>

            <FormGroup label="Радиотренировки">
              <ClientCallTime calls={values.timesRadioPractice} name="timesRadioPractice" isRadio />
            </FormGroup>

            <FormGroup label="Описание">
              <TextArea name="description" placeholder="Описание" />
            </FormGroup>

            <div>
              <Button type="submit" title={mode === 'create' ? 'Создать' : 'Изменить'} />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default memo(ClientForm);
