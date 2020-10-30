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

export const isoStringToDateWithTimeInText = (date, time, language) => {
  const fullDate = date + ' ' + time;
  let message = moment(fullDate).locale(language).format('LLL');
  return message + ' hs.';
};

export const isoStringToDateTime = (date, time) => {
  const fullDate = date + ':' + time;
  return moment(fullDate, 'YYYY-MM-DD:HH:mm');
};
