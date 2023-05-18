import {assign, last} from 'lodash';
import moment from 'moment';
import {FormEvent} from 'react';

import {Client, GetClientsResponse, createClient, editClient} from '@api/clientsAPI';

const INPUT_DATE_FORMAT = 'YYYY-MM-DD';

export const formatDate = (date: string | undefined) => (date ? moment(date).format(INPUT_DATE_FORMAT) : '');

export const getDate = (date: string | undefined, defaultDate?: string) => {
  if (!date) {
    return defaultDate ?? moment().format(INPUT_DATE_FORMAT);
  }

  return moment(date).format(INPUT_DATE_FORMAT);
};

export const removeSidebarParams = (params: URLSearchParams) => {
  const objectParams = Object.fromEntries(params);
  const copy = assign({id: undefined, mode: undefined, revision: undefined}, objectParams);
  delete copy.id;
  delete copy.mode;
  delete copy.revision;
  return copy;
};

export const addRevision = (revision: number) => (params: URLSearchParams) => {
  const objectParams = Object.fromEntries(params);
  return assign({}, objectParams, {revision});
};

export const submitHandler =
  (clientInfo: Client | undefined, mutate: () => void) => async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formdata = new FormData(event.target as any);
    const schedule = formdata.get('schedule')?.toString().split(',').map(Number) ?? [];

    const data = {
      id: clientInfo?.client_id,
      active_period_from: formdata.get('active_period_from') || undefined,
      active_period_to: formdata.get('active_period_to') || undefined,
      call_time: formdata.get('call_time') || undefined,
      description: formdata.get('description') || undefined,
      schedule,
      type: formdata.get('type') || undefined,
      location: formdata.get('location') || undefined,
      unit: formdata.get('unit') || undefined,
      call_sign: formdata.get('call_sign') || undefined,
      trunk_phone: formdata.get('trunk_phone') || undefined,
      responsible: formdata.get('responsible') || undefined,
      responsible_phone: formdata.get('responsible_phone') || undefined,
      organization: formdata.get('organization') || undefined,
      mo: formdata.get('mo') || undefined
    } as any;

    const isCreate = !clientInfo;
    const func = isCreate ? createClient : editClient;

    try {
      await func(data);
      mutate();
      const successMessage = isCreate ? 'Абонент успешно создан' : 'Абонент успешно обновлен';
      alert(successMessage);
    } catch (e) {
      const errorMessage = isCreate ? 'Не удалось создать Абонента' : 'Не удалось обновить Абонента';
      console.error(e);
      alert(errorMessage);
    }
  };

export const addHistory = (client: Client | undefined, history: Client[]) => {
  if (!client) {
    return;
  }

  return assign({}, client, {history});
};

export const getClientInfo = (
  allClients: GetClientsResponse | undefined,
  idFromParams: string | null,
  revision: string | null,
  today: string
) => {
  if (!idFromParams || !allClients) {
    return;
  }

  const clientsRevisions = allClients[idFromParams];
  if (!clientsRevisions) {
    return;
  }

  if (revision) {
    const foundClientByRevision = clientsRevisions.find(clients => clients.revision.toString() === revision);
    return addHistory(foundClientByRevision, clientsRevisions);
  }

  const todayDate = moment.utc();

  const activeRevision = clientsRevisions.find(version => {
    const isFromBeforeToday = moment.utc(version.active_period_from).isBefore(today);
    const isToAfterToday = !version.active_period_to || todayDate.isBefore(moment.utc(version.active_period_to));

    return isFromBeforeToday && isToAfterToday;
  });
  const lastRevision = last(clientsRevisions);
  return addHistory(activeRevision ?? lastRevision, clientsRevisions);
};
