import {FC} from 'react';

import {Client, GetClientsResponse} from '@api/clientsAPI';
import {Call, CallResponse} from '@api/callsAPI';

type CallManagerPropsType = {};
export type CallManagerType = FC<CallManagerPropsType>;

export type ClientWithCall = Client & {call?: Call};

export type ConvertClientsToClientListType = (
  responseClients: GetClientsResponse,
  callsData: CallResponse
) => ClientWithCall[];

export type GroupClientsType = (
  responseClients: GetClientsResponse | undefined,
  callsData: CallResponse | undefined
) => [ClientWithCall[], ClientWithCall[], ClientWithCall[]];

export type ClientsCallAccordeonPropsType = {
  clients: ClientWithCall[];
  title: string;
  openedByDefault?: boolean;
  onChange?: () => void;
};
