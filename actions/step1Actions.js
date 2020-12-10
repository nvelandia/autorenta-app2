import { actionNames } from '../utils/constants/actionConstants';

export const addFilter = (filter) => {
  return {
    type: actionNames.addFilter,
    filter,
  };
};

export const orderByMinToMax = () => {
  return {
    type: actionNames.orderByMinToMax,
  };
};

export const orderByMaxToMin = () => {
  return {
    type: actionNames.orderByMaxToMin,
  };
};

export const toggleShowFeaturedFirst = () => {
  return {
    type: actionNames.toggleShowFeaturedFirst,
  };
};

export const modifySearchFleet = (body) => {
  return {
    type: actionNames.modifySearchFleet,
    body,
  };
};

export const haveToCloseModifyModal = (value) => {
  return {
    type: actionNames.haveToCloseModifyModal,
    value,
  };
};

export const selectCar = (car, location, searchParams, rateSelected, oldRates) => {
  return {
    type: actionNames.selectCar,
    car,
    location,
    searchParams,
    rateSelected,
    oldRates,
  };
};

export const searchFleet = (body, googleLocation, placesId) => {
  return {
    type: actionNames.searchFleet,
    body,
    googleLocation,
    placesId,
  };
};

export const seeBaseRateDetails = (body) => {
  return {
    type: actionNames.seeBaseRateDetails,
    body,
  };
};

export const seeBaseRateDetailsSuccessfully = (car) => {
  return {
    type: actionNames.seeBaseRateDetailsSuccessfully,
    car,
  };
};

export const closeDetailsModal = () => {
  return {
    type: actionNames.closeDetailsModal,
  };
};
