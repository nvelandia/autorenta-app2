import { actionNames } from '../utils/constants/actionConstants';

export const selectPromotion = (promotion) => {
  return {
    type: actionNames.selectPromotion,
    promotion,
  };
};
