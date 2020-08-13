import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  locations: [],
  cars: [],
  companies: [],
  carFeatures: [],
  rates: [],
  filters: {
    companies: [],
    type: [],
    passengers: [],
    gear: [],
  },
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.searchFleetSuccessfully:
      return {
        ...state,
        cars: action.cars,
        locations: action.locations,
        companies: action.companies,
        carFeatures: action.carFeatures,
        rates: action.rates,
      };
    default:
      return state;
  }
};

export default searchReducer;
