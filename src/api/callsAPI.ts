import axios from 'axios';

export type Call = {
  'calls-type_id': string;
  'date-time': string;
  client_id: string;
  comment: string;
  id: string;
};
export type CallResponse = Array<Call>;

type GetCallsReqType = {
  from: string;
  to: string;
};
type GetCallsType = (req: GetCallsReqType) => Promise<CallResponse>;
export const getCalls: GetCallsType = async request => {
  const res = await axios.get(`https://d5dv6m23evl6lnv8gdu7.apigw.yandexcloud.net/calls`, {
    params: request
  });
  return res.data;
};

type CallRequest = {
  call: {
    id?: string;
    callsTypeId: string;
    clientId: string;
    comment?: string;
  };
};
type CreateCallType = (req: CallRequest) => Promise<void>;
export const createCall: CreateCallType = async request => {
  const res = await axios.post(`https://d5dv6m23evl6lnv8gdu7.apigw.yandexcloud.net/calls`, request);
  return res.data;
};

type CallTypesType = () => Promise<Array<{id: string; name: string}>>;
export const getCallTypes: CallTypesType = async () => {
  const res = await axios.get(`https://d5dv6m23evl6lnv8gdu7.apigw.yandexcloud.net/call-types`);
  return res.data;
};
