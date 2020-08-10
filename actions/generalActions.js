import { actionNames } from '../utils/constants/actionConstants';

export const showLoader = () => {
  return {
    type: actionNames.showLoader,
  };
};

export const hideLoader = () => {
  return {
    type: actionNames.hideLoader,
  };
};

export const showNotification = () => {
  return null;
};
