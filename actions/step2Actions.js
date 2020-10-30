import { actionNames } from '../utils/constants/actionConstants';

export const changePlan = (car, location, searchParams, rateSelected, clientType, nextAction = null) => {
  return {
    type: actionNames.changePlan,
    car,
    location,
    searchParams,
    rateSelected,
    clientType,
    nextAction,
  };
};

export const addOptionalEquipment = (optionalEquipment) => {
  return {
    type: actionNames.addOptionalEquipment,
    optionalEquipment,
  };
};

export const selectClientType = (clientType) => {
  return {
    type: actionNames.selectClientType,
    clientType,
  };
};

export const loadAirlines = () => {
  return {
    type: actionNames.loadAirlines,
  };
};

export const validateId = (id) => {
  return {
    type: actionNames.validateId,
    id,
  };
};

export const updateFormData = (data) => {
  return {
    type: actionNames.updateFormData,
    data,
  };
};

export const confirmReservation = (body) => {
  return {
    type: actionNames.confirmReservation,
    body,
  };
};

export const createReservationSuccessfully = (car, location, searchParams, organization) => {
  return {
    type: actionNames.createReservationSuccessfully,
    car,
    location,
    searchParams,
    organization,
  };
};

export const clearValidateIdError = () => {
  return {
    type: actionNames.clearValidateIdError,
  };
};

export const validatePromotion = (body) => {
  return {
    type: actionNames.validatePromotion,
    body,
  };
};

export const setErrors = (errors) => {
  return {
    type: actionNames.setErrorsStep2,
    errors,
  };
};

export const loadDiscount = () => {
  return {
    type: actionNames.loadDiscount,
  };
};
