import { actionNames } from '../utils/constants/actionConstants';

export const changePlan = (plan) => {
  return {
    type: actionNames.changePlan,
    plan,
  };
};
