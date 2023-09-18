import {Moment} from 'moment';

const INPUT_DATE_FORMAT = 'YYYY-MM-DD';

export const getDate = (date: Moment) => date.format(INPUT_DATE_FORMAT);
