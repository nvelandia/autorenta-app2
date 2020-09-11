import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {};

const step3Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.changePlan:
      return {
        ...state,
        plan: action.plan,
      };
    default:
      return state;
  }
};

export default step3Reducer;
