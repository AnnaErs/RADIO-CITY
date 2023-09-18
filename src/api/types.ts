type GetClientRequestType = {
  client_id: string;
};
type GetClientResponseType = {
  client: {
    call_sign: string;
    client_id: string;
    client_type_id: string;
    description: string;
    location: string;
    mo: string;
    organization: string;
    responsible: string;
    responsible_phone: string;
    times: Array<{
      client_call_id: number;
      client_id: string;
      schedule: (1 | 2 | 3 | 4 | 5 | 6 | 7)[];
      type: 'common' | 'radio-practice';
    }>;
    trunk_phone: string;
    unit: string;
  };
};
export type GetClientType = (request: GetClientRequestType) => Promise<GetClientResponseType>;

export type ClientType = {
  client_type_id: string;
  name: string;
};
type ClientTypes = Array<ClientType>;
export type GetClientTypes = () => Promise<ClientTypes>;

type SetClientRequest = {
  client_id: string;
  call_sign?: string;
  client_type_id?: string;
  description?: string;
  location?: string;
  mo?: string;
  organization?: string;
  responsible?: string;
  responsible_phone?: string;
  trunk_phone?: string;
  unit?: string;
  times: {
    time: number;
    schedule: (1 | 2 | 3 | 4 | 5 | 6 | 7)[];
    type: 'common' | 'radio-practice';
  }[];
};
type SetClientResponse = void;
export type SetClientType = (request: SetClientRequest) => Promise<SetClientResponse>;
