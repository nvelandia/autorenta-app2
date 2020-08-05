import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  page: 1,
  locations: [],
  countries: [],
  offers: [],
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
    default:
      return state;
  }
};

export default homeReducer;
