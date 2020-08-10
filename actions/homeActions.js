import { actionNames } from '../utils/constants/actionConstants';

export const nextPage = () => {
  return {
    type: actionNames.nextPageHome,
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

export const searchFleet = (body) => {
  return {
    type: actionNames.searchFleet,
    body,
  };
};
