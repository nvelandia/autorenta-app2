import moment from 'moment';

export const isoStringToDateObjectWithoutOffset = (date) => {
  return moment(date, 'YYYY-MM-DD').toDate();
};

export const isoStringToString = (date) => {
  return moment(date).format('YYYY-MM-DD');
};

export const isoStringToStringTime = (date) => {
  return moment(date).format('HH:mm');
};
