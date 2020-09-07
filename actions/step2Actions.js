import { actionNames } from '../utils/constants/actionConstants';

export const changePlan = (plan) => {
  return {
    type: actionNames.changePlan,
    plan,
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
