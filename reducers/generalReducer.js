import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  loader: false,
};

const generalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.showLoader:
      return { ...state, loader: true };
    case actionNames.hideLoader:
      return { ...state, loader: false };
    case actionNames.subscribedSuccessfully:
      return { ...state };
    case actionNames.subscribedUnsuccessfully:
      return { ...state };
    default:
      return state;
  }
};

export default generalReducer;
