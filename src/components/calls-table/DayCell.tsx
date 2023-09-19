import {fromPairs, groupBy, toInteger} from 'lodash';
import moment from 'moment';
import {memo, useCallback, useMemo, useRef} from 'react';

import {ClientWithTimeType, createCall} from '@api/callsAPI';
import {StatesList} from '@components/states-list';
import TextArea from '@ui-kit/text-area/TextArea';
import {useGetCalls} from '@utils/api/calls';
import {cn} from '@utils/cn';
import useOnOutsideClick from '@utils/hooks/useOnOutsideClick';
import useToggle from '@utils/hooks/useToggle';
import {filterParser, useQuery} from '@utils/search-params';
import {getColorByCallTypeId} from '@utils/string-to-color';

type DayCellPropsType = {
  client: ClientWithTimeType & {time: string};
  index: number;
};

const DayCell = memo<DayCellPropsType>(function DayCell({index, client}) {
  const {filterStartDate} = useQuery(filterParser);
  const ref = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isOpened, _toggle, setValue] = useToggle();
  const closeModal = useCallback(() => setValue(false), [setValue]);
  useOnOutsideClick(ref, closeModal);

  const {data, mutate} = useGetCalls();
  const callId = useMemo(() => {
    const [hours, minutes] = client.time.split(':').map(toInteger);

    return moment
      .utc(filterStartDate)
      .add({
        days: index,
        hours,
        minutes
      })
      .format();
  }, [client.time, filterStartDate, index]);

  const callsById = useMemo(() => {
    return groupBy(data, 'client_id');
  }, [data]);
  const currentCall = useMemo(() => {
    return fromPairs((callsById[client.client_id] ?? []).map(call => [moment.utc(call.call_id).format(), call]))[
      callId
    ];
  }, [callsById, client, callId]);

  const today = moment().utcOffset(0, true).date();
  const date = index + moment.utc(filterStartDate).date();
  const dayOfMonth = moment().utcOffset(0, true).date(date).day();

  const openChangeStatusModal = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!isOpened) {
        setValue(true);
      }
    },
    [isOpened, setValue]
  );

  const changeClientStatus = useCallback(
    async (value: string) => {
      await createCall({
        call_id: callId,
        calls_type_id: value,
        client_id: client.client_id,
        comment: textareaRef.current?.value,
        type: 'common'
      });
      mutate();
    },
    [callId, client.client_id, textareaRef, mutate]
  );

  const cellColor = useMemo(() => {
    const color = getColorByCallTypeId(currentCall?.calls_type_id);
    return color === '#fff' ? undefined : color;
  }, [currentCall]);

  return (
    <td
      className={cn('min-w-[48px] min-h-[48px] border border-gray-100 text-center relative select-none', {
        ['bg-zinc-300']: !client.schedule.includes(dayOfMonth + 1) && today > date,
        ['bg-zinc-500']: today <= date
      })}
      style={{backgroundColor: cellColor}}
      onClick={openChangeStatusModal}
    >
      <div>
        {currentCall && <span>{moment.utc(currentCall.call_id).format('H:mm')}</span>}
        {isOpened && (
          <div
            className="absolute right-full top-0 mr-4 p-4 rounded-lg shadow-md bg-white z-10 flex flex-col gap-4 -mt-4"
            ref={ref}
          >
            <TextArea
              value={currentCall?.comment}
              name="message"
              className="min-h-[70px]"
              placeholder="Заметка..."
              ref={textareaRef}
            />
            <hr className="m-auto w-11/12 text-zinc-300" />
            <StatesList className="w-[300px]" onSelect={changeClientStatus} />
          </div>
        )}
      </div>
    </td>
  );
});

export {DayCell};
