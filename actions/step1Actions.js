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

export const selectCar = (car, location) => {
  return {
    type: actionNames.selectCar,
    car,
    location,
  };
};
