import {assign} from 'lodash';
import moment from 'moment';

const INPUT_DATE_FORMAT = 'YYYY-MM-DD';

export const formatDate = (date: string | undefined) => (date ? moment(date).format(INPUT_DATE_FORMAT) : '');

export const removeSidebarParams = (params: URLSearchParams) => {
  const objectParams = Object.fromEntries(params);
  const copy = assign({id: undefined, mode: undefined, revision: undefined}, objectParams);
  delete copy.id;
  delete copy.mode;
  delete copy.revision;
  return copy;
};
