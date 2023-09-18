import moment from 'moment';

const toString = (val: string | null) => (val ?? '').toString();

export const filterParser = {
  mode: toString,
  id: toString,
  type: toString,
  search: toString,
  filterStartDate: (val: string | null) => {
    return (val ? moment.utc(val) : moment.utc(undefined).startOf('month')).format('YYYY-MM-DDTHH:mm:ss\\Z');
  },
  filterEndDate: (val: string | null) =>
    (val ? moment.utc(val) : moment.utc(undefined).endOf('month')).format('YYYY-MM-DDTHH:mm:ss\\Z')
};
