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

export const subscribeNewsletter = (name, email) => {
  return {
    type: actionNames.subscribeNewsletter,
    name,
    email,
  };
};
