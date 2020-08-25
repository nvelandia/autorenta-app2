import { actionNames } from '../utils/constants/actionConstants';

export const addFilter = (category, value) => {
  return {
    type: actionNames.addFilter,
    category,
    value,
  };
};
