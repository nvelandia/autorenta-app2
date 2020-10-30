import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  offers: [],
  promotionSelected: '',
};

const promotionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.loadOffersSuccessfully:
      return { ...state, offers: action.offers };
    case actionNames.selectPromotion:
      return { ...state, promotionSelected: action.promotion };
    default:
      return state;
  }
};

export default promotionReducer;
