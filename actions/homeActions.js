import { actionNames } from '../utils/constants/actionConstants';

export const nextStep = (body) => {
  return {
    type: actionNames.nextStep,
    body,
  };
};

export const searchLocation = (query) => {
  return {
    type: actionNames.searchLocation,
    query,
  };
};

export const loadCountries = () => {
  return {
    type: actionNames.loadCountries,
  };
};

export const loadOffers = () => {
  return {
    type: actionNames.loadOffers,
  };
};
