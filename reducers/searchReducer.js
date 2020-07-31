import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  page: 1,
  locations: [],
  countries: [],
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.nextPageHome:
      return { ...state, page: state.page + 1 };
    case actionNames.searchLocationSuccessfully:
      return { ...state, locations: action.locations };
    case actionNames.loadCountriesSuccessfully:
      return { ...state, countries: action.countries };
    default:
      return state;
  }
};

export default searchReducer;
