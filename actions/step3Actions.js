import { actionNames } from '../utils/constants/actionConstants';

export const changePlan = (plan) => {
  return {
    type: actionNames.changePlan,
    plan,
  };
};

export const loadCountries = () => {
  return {
    type: actionNames.loadCountries,
  };
};

export const cancelReservation = (body) => {
  return {
    type: actionNames.cancelReservation,
    body,
  };
};

export const payReservation = (body) => {
  return {
    type: actionNames.payReservation,
    body,
  };
};
