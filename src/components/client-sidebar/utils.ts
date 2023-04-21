import {assign} from 'lodash';
import moment from 'moment';
import {FormEvent} from 'react';

import {Client, createClient, editClient} from '@api/clientsAPI';

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
    const payloadSchedule = () => formdata.get('schedule')?.toString().split(',').map(Number);

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

    try {
      await func(data);
      mutate();
    } catch (e) {
      console.log(e);
    }
  };

export const addHistory = (client: Client | undefined, history: Client[]) => {
  if (!client) {
    return;
  }

  return assign({}, client, {history});
};
