import moment from 'moment';

const BACKEND_FORMAT = 'YYYY-MM-DD';
export const getTodayPeriod = () => ({
  from: moment().utcOffset(0, true).startOf('day').format(BACKEND_FORMAT),
  to: moment().utcOffset(0, true).endOf('day').add(1, 'day').format(BACKEND_FORMAT)
});

export const getCurrentMonthPeriod = () => ({
  from: moment().utcOffset(0, true).startOf('month').format(BACKEND_FORMAT),
  to: moment().utcOffset(0, true).endOf('month').format(BACKEND_FORMAT)
});

export const makeCallTime = (time: number) => {
  return moment(`${Math.floor(time / 60)}:${time % 60}`, 'H:mm').format('HH:mm');
};
