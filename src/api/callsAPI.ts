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
export const getCalls: GetCallsType = request => {
  return axios
    .get(`https://d5dv6m23evl6lnv8gdu7.apigw.yandexcloud.net/calls`, {
      params: request
    })
    .then(res => res.data);
};

type CallRequest = {
  call: {
    id?: string;
    callsTypeId: string;
    clientId: string;
    comment?: string;
  };
};
type CreateCallType = (req: CallRequest) => void;
export const createCall: CreateCallType = request => {
  return axios.post(`https://d5dv6m23evl6lnv8gdu7.apigw.yandexcloud.net/calls`, request).then(res => res.data);
};