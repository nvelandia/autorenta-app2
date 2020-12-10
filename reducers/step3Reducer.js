import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  car: {},
  location: {},
  countries: [],
  airlines: [],
  showPayOk: false,
};

const step3Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.createReservationSuccessfully:
      return {
        ...state,
        car: action.car,
        location: action.location,
        searchParams: action.searchParams,
        reservation: action.reservation,
      };
    case actionNames.loadCountriesSuccessfully:
      return { ...state, countries: action.countries };
    case actionNames.searchReservationSuccessfully:
      return { ...state, car: action.cars, location: action.location, reservation: action.reservation };
    case actionNames.loadAirlinesSuccessfully:
      return {
        ...state,
        airlines: action.airlines,
      };
    case actionNames.payReservationSuccessfully:
      return { ...state, showPayOk: true };
    default:
      return state;
  }
};

export default step3Reducer;
