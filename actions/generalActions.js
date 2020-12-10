import { actionNames } from '../utils/constants/actionConstants';

export const showLoader = (loaderMessage = null) => {
  return {
    type: actionNames.showLoader,
    loaderMessage,
  };
};

export const hideLoader = () => {
  return {
    type: actionNames.hideLoader,
  };
};

export const subscribeNewsletter = (name, email) => {
  return {
    type: actionNames.subscribeNewsletter,
    name,
    email,
  };
};

export const searchReservation = (body) => {
  return {
    type: actionNames.searchReservation,
    body,
  };
};

export const addPageToHistory = (page) => {
  return {
    type: actionNames.addPageToHistory,
    page,
  };
};

export const showNotification = (value, error = false) => {
  return {
    type: actionNames.showNotification,
    value,
    error,
  };
};

export const hideNotification = () => {
  return {
    type: actionNames.hideNotification,
  };
};
