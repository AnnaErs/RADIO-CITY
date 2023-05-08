import moment from 'moment';

const BACKEND_FORMAT = 'YYYY-MM-DD';
export const getTodayPeriod = () => ({
  from: moment.utc().startOf('day').format(BACKEND_FORMAT),
  to: moment.utc().endOf('day').add(1, 'day').format(BACKEND_FORMAT)
});

export const getCurrentMonthPeriod = () => ({
  from: moment.utc().startOf('month').format(BACKEND_FORMAT),
  to: moment.utc().endOf('month').format(BACKEND_FORMAT)
});
