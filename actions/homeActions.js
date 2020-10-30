import { actionNames } from '../utils/constants/actionConstants';

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

export const loadOffers = (promotionSelected = null) => {
  return {
    type: actionNames.loadOffers,
    promotionSelected,
  };
};

export const loadBanners = () => {
  return {
    type: actionNames.loadBanners,
  };
};

export const loadLocations = (locations) => {
  return {
    type: actionNames.loadLocationsSuccessfully,
    locations,
  };
};
