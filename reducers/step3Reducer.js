import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  car: {},
};

const step3Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.createReservationSuccessfully:
      return {
        ...state,
        car: action.car,
      };
    default:
      return state;
  }
};

export default step3Reducer;
