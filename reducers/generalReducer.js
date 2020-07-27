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
    default:
      return state;
  }
};

export default generalReducer;
