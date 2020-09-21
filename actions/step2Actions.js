import { actionNames } from '../utils/constants/actionConstants';

export const changePlan = (plan) => {
  return {
    type: actionNames.changePlan,
    plan,
  };
};

export const addOptionalEquipment = (optionalEquipment, others = false) => {
  return {
    type: actionNames.addOptionalEquipment,
    optionalEquipment,
    others,
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

export const createReservationSuccessfully = (car, location, searchParams) => {
  return {
    type: actionNames.createReservationSuccessfully,
    car,
    location,
    searchParams,
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
