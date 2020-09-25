import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  page: 1,
  locations: [],
  countries: [],
  offers: [],
  promotionSelected: {},
};

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.nextPageHome:
      return { ...state, page: state.page + 1 };
    case actionNames.searchLocationSuccessfully:
      return { ...state, locations: action.locations };
    case actionNames.loadCountriesSuccessfully:
      return { ...state, countries: action.countries };
    case actionNames.loadOffersSuccessfully:
      return { ...state, offers: action.offers };
    case actionNames.selectPromotion:
      return { ...state, promotionSelected: action.promotion };
    default:
      return state;
  }
};

export default homeReducer;
