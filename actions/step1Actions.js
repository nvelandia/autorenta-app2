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
