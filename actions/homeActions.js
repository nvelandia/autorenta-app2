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
