import useSWR from 'swr';
import {memo, useCallback, useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';
import moment from 'moment';

import Button from '@ui-kit/buttons';
import Input from '@ui-kit/input';
import {Date} from '@ui-kit/date';
import {ClientTypeSelect} from '@ui-kit/select';
import {getClients} from '@api/clientsAPI';
import TextArea from '@ui-kit/text-area';
import Sidebar from '@ui-kit/sidebar';

import {ClientSidebarType} from './types';
import {addRevision, formatDate, getClientInfo, getDate, removeSidebarParams, submitHandler} from './utils';

const INPUT_DATE_FORMAT = 'YYYY-MM-DD';

const ClientSidebar: ClientSidebarType = () => {
  const {data, isLoading, mutate} = useSWR('GET_CLIENTS', getClients);
  const [searchParams, setSearchParams] = useSearchParams();

  const today = moment.utc().format(INPUT_DATE_FORMAT);
  const clientInfo = useMemo(
    () => getClientInfo(data, searchParams.get('id'), searchParams.get('revision'), today),
    [data, searchParams]
  );

  const startDayValue = useMemo(() => getDate(clientInfo?.active_period_from), [clientInfo?.active_period_from]);
  const endDayValue = useMemo(() => getDate(clientInfo?.active_period_to, ''), [clientInfo?.active_period_to]);

  const sidebarTitle = useMemo(() => {
    if (isLoading) {
      return 'Загружаем...';
    }
    if (!clientInfo) {
      return 'Создание клиента';
    }

    return (
      <span className="leading-4 flex">
        {clientInfo.location}
        <span className="ml-2 text-xl leading-4 italic">(№{clientInfo.revision})</span>
      </span>
    );
  }, [isLoading, clientInfo]);

  const isDisabled = moment.utc(clientInfo?.active_period_to).isBefore(moment.utc());

  const handleSubmit = useCallback(submitHandler(clientInfo, mutate), [clientInfo, mutate]);
  const closeSidebar = useCallback(() => setSearchParams(removeSidebarParams), [setSearchParams]);
  const openRevision = useCallback(
    (revision: number) => () => setSearchParams(addRevision(revision)),
    [setSearchParams]
  );

  // TODO в данный момент это временный хак, так как функция каждый раз новая, то и компонент перерендеривается, в противном случае не будут обновляться инпуты
  // Перенести форму на контролируемые формы, так как у нас часто меняются данные в зависимости от параметров, так мы без костылей сможем менять внешний вид
  const Form = useCallback(
    () => (
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <Input name="location" value={clientInfo?.location} disabled={isDisabled} placeholder="Населенный пункт" />
          <Input name="unit" value={clientInfo?.unit} disabled={isDisabled} placeholder="Подразделение" />
          <Input name="call_sign" value={clientInfo?.call_sign} disabled={isDisabled} placeholder="Позывной" />
          <Input
            name="trunk_phone"
            value={clientInfo?.trunk_phone}
            disabled={isDisabled}
            placeholder="Транковый номер"
          />
          <Input name="call_time" value={clientInfo?.call_time} placeholder="Время звонка" disabled={isDisabled} />
          <ClientTypeSelect name="type" value={clientInfo?.type} disabled={isDisabled} />
          <Input
            name="responsible"
            value={clientInfo?.responsible}
            disabled={isDisabled}
            placeholder="ФИО ответственого"
          />
          <Input
            name="responsible_phone"
            value={clientInfo?.responsible_phone}
            disabled={isDisabled}
            placeholder="Телефон ответственного"
          />
          <Input
            name="schedule"
            value={clientInfo?.schedule.join()}
            placeholder="Рабочие дни недели"
            disabled={isDisabled}
          />
          <div className="flex gap-x-4">
            <Date
              name="active_period_from"
              value={startDayValue}
              min={today}
              disabled={isDisabled || searchParams.has('id')}
              required
            />
            <Date name="active_period_to" value={endDayValue} placeholder="Конец работы" disabled={isDisabled} />
          </div>
          <TextArea name="description" value={clientInfo?.description} placeholder="Описание" disabled={isDisabled} />
          {!isDisabled && (
            <div>
              <Button type="submit" title={clientInfo ? 'Изменить' : 'Создать'} />
            </div>
          )}
        </div>
      </form>
    ),
    [clientInfo, searchParams, isDisabled, startDayValue, endDayValue]
  );

  return (
    <Sidebar title={sidebarTitle} close={closeSidebar}>
      {/* TODO форму вынести в отдельный компонент */}
      {!isLoading && <Form />}
      {/* TODO вынести историю в отдельный компонент */}
      {clientInfo && (
        <div>
          <div className="text-h4-bold mb-5">История изменений</div>
          <table className="text-xl w-full">
            <tbody>
              {clientInfo?.history.map(revision => (
                <tr
                  className="h-10 hover:bg-slate-100 cursor-pointer"
                  onClick={openRevision(revision.revision)}
                  key={revision.revision}
                >
                  <td className="pr-6">№ {revision.revision}</td>
                  <td className="pr-6">{formatDate(revision.active_period_from)}</td>
                  <td>{formatDate(revision.active_period_to)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Sidebar>
  );
};

export default memo(ClientSidebar);
