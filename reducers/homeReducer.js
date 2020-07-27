import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  page: 1,
  pickUpLocations: [],
};

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.nextPageHome:
      return { ...state, page: state.page + 1 };
    case actionNames.searchLocationSuccessfully:
      return { ...state, pickUpLocations: action.locations };
    default:
      return state;
  }
};

export default homeReducer;
