import { actionNames } from '../utils/constants/actionConstants';

export const addFilter = (filter) => {
  return {
    type: actionNames.addFilter,
    filter,
  };
};
