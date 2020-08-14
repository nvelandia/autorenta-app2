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

export const isoStringToDateWithTimeInText = (date, time) => {
  const fullDate = date + ' ' + time;
  let message = moment(fullDate).lang('es').format('LLL');
  return message + ' hs.';
};
