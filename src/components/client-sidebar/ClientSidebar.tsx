import useSWR from 'swr';
import {FormEvent, memo, useCallback, useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';

import Button from '@ui-kit/buttons';
import Input from '@ui-kit/input';
import {editClient, createClient, getClients} from '@api/clientsAPI';
import Sidebar from '@ui-kit/sidebar';

import {ClientSidebarType} from './types';
import moment from 'moment';
import {ClientTypeSelect} from '@ui-kit/select';

const ClientSidebar: ClientSidebarType = () => {
  const {data} = useSWR('GET_CLIENTS', getClients);
  const [searchParams, setSearchParams] = useSearchParams();
  const clientInfo = useMemo(() => {
    const clientsRevisions = data?.[searchParams.get('id') ?? ''];
    return clientsRevisions?.[clientsRevisions?.length - 1];
  }, [data]);

  const startDayValue = useMemo(
    () => (clientInfo?.active_period_from ? moment(clientInfo.active_period_from).format('YYYY-MM-DD') : ''),
    [clientInfo?.active_period_from]
  );
  const endDayValue = useMemo(
    () => (clientInfo?.active_period_to ? moment(clientInfo.active_period_to).format('YYYY-MM-DD') : ''),
    [clientInfo?.active_period_to]
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formdata = new FormData(event.target as any);
    const payloadSchedule = () => {
      return formdata
        .get('schedule')
        ?.toString()
        .split(',')
        .map(day => {
          return Number(day);
        });
    };
    const data = {
      id: clientInfo?.client_id,
      active_period_from: formdata.get('activePeriodFrom'),
      active_period_to: formdata.get('activePeriodTo') || undefined,
      call_time: formdata.get('callTime'),
      description: formdata.get('description'),
      name: formdata.get('name'),
      phone: formdata.get('phone'),
      schedule: payloadSchedule(),
      type: formdata.get('type')
    } as any;

    const isCreate = !clientInfo;
    const func = isCreate ? createClient : editClient;
    const alertSuccessMessage = isCreate ? 'Клиент создан' : 'Клиент отредактирован';
    const alertErrorMessage = isCreate ? 'Упс, создать клиента не удалось' : 'Упс, редактировать клиента не удалось';

    try {
      await func(data);
      alert(alertSuccessMessage);
    } catch {
      alert(alertErrorMessage);
    }
  };

  const closeSidebar = useCallback(() => {
    setSearchParams(prev => {
      const copy = Object.assign({id: undefined, mode: undefined}, prev);
      delete copy.id;
      delete copy.mode;
      return copy;
    });
  }, [setSearchParams]);

  return (
    <Sidebar title={clientInfo?.name || 'Создание клиента'} close={closeSidebar}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4 mt-6">
          <Input name="name" value={clientInfo?.name} placeholder="Имя" />
          <Input name="description" value={clientInfo?.description} placeholder="Описание" />
          <Input name="phone" value={clientInfo?.phone} placeholder="Телефон" />
          <Input name="callTime" value={clientInfo?.call_time} placeholder="Время звонка" />
          <ClientTypeSelect name="type" value={clientInfo?.type} />
          <Input name="type" value={clientInfo?.type} placeholder="Тип клиента" />
          <Input name="schedule" value={clientInfo?.schedule.join()} placeholder="Рабочие дни недели" />
          <div className="flex gap-x-4">
            <Input name="activePeriodFrom" value={startDayValue} placeholder="Начало работы" />
            <Input name="activePeriodTo" value={endDayValue} placeholder="Конец работы" />
          </div>
          <div>
            <Button type="submit" title="Cохранить" />
          </div>
        </div>
      </form>
      {/* <div className="mt-6">
                <div className="text-h4-bold">
                    История изменений
                </div>
                <div>
                    {clientInfo.history}
                </div>
            </div> */}
    </Sidebar>
  );
};

export default memo(ClientSidebar);
