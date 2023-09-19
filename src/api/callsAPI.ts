import axios from 'axios';

type GetCallsRequestType = {
  is_radio_practice?: boolean;
  filter?: string;
  type?: string;
  from: string;
  to: string;
};
type GetCallsResponseType = Array<{
  call_id: string;
  calls_type_id: string;
  client_id: string;
  comment?: string;
}>;
type GetCallsType = (request: GetCallsRequestType) => Promise<GetCallsResponseType>;
export const getCalls: GetCallsType = async request => {
  const res = await axios.post(`https://d5dimst6sja5ndg91qpq.apigw.yandexcloud.net/get-call-statuses`, request);
  return res.data;
};

export type ClientWithTimeType = {
  call_sign: string;
  client_call_id: number;
  client_id: string;
  client_type_id: string;
  description: string;
  location: string;
  mo: string;
  organization: string;
  responsible: string;
  responsible_phone: string;
  schedule: number[];
  trunk_phone: string;
  unit: string;
};

export type CallResponse = Array<ClientWithTimeType>;

type GetCallsReqType = {
  filter?: string;
  type?: string;
  limit?: number;
  offset?: number;
  is_radio_practice?: boolean;
};
type GetCallTimesType = (req: GetCallsReqType) => Promise<CallResponse>;
export const getCallTimes: GetCallTimesType = async request => {
  const res = await axios.post(`https://d5dimst6sja5ndg91qpq.apigw.yandexcloud.net/get-client-times`, request);
  return res.data;
};

type CallRequest = {
  comment?: string;
  call_id: string;
  client_id: string;
  calls_type_id: string;
  type: 'radio-practice' | 'common';
};
type CreateCallType = (req: CallRequest) => Promise<void>;
export const createCall: CreateCallType = async request => {
  const res = await axios.put(`https://d5dimst6sja5ndg91qpq.apigw.yandexcloud.net/set-call-status`, request);
  return res.data;
};

type CallType = {calls_type_id: string; name: string};
type CallTypesType = () => Promise<Array<CallType>>;
export const getCallTypes: CallTypesType = async () => {
  const res = await axios.get(`https://d5dimst6sja5ndg91qpq.apigw.yandexcloud.net/get-call-types`);
  return res.data;
};
