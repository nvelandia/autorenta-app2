import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  result: {
    locations: [],
    cars: [],
    companies: [],
    carFeatures: [],
    rates: [],
  },
  filters: {},
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.searchFleetSuccessfully:
      return {
        ...state,
        result: {
          cars: action.cars,
          locations: action.locations,
          companies: action.companies,
          carFeatures: action.carFeatures,
          rates: action.rates,
        },
        filters: action.filters,
      };
    default:
      return state;
  }
};

export default searchReducer;
