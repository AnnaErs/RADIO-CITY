import axios from 'axios';

import {GetClientType, GetClientTypes, SetClientType} from './types';

export const setClient: SetClientType = async client => {
  const res = await axios.post(`https://d5dimst6sja5ndg91qpq.apigw.yandexcloud.net/set-client`, client);
  return res.data;
};

export const getClientTypes: GetClientTypes = async () => {
  const res = await axios.get(`https://d5dimst6sja5ndg91qpq.apigw.yandexcloud.net/get-client-types`);
  return res.data[0];
};

export const getClient: GetClientType = async request => {
  const res = await axios.post('https://d5dimst6sja5ndg91qpq.apigw.yandexcloud.net/get-client', request);
  return res.data;
};

type GetClientsRequestType = {
  filter?: string;
  type?: string;
  limit: number;
  offset: number;
};
type GetClientsResponseType = Array<{
  call_sign?: string;
  client_id: string;
  client_type_id?: string;
  description?: string;
  location?: string;
  mo?: string;
  organization?: string;
  responsible?: string;
  responsible_phone?: string;
  trunk_phone?: string;
  unit?: string;
}>;
type GetClientsType = (request: GetClientsRequestType) => Promise<GetClientsResponseType>;
export const getClients: GetClientsType = async request => {
  const res = await axios.post('https://d5dimst6sja5ndg91qpq.apigw.yandexcloud.net/get-clients', request);
  return res.data;
};
