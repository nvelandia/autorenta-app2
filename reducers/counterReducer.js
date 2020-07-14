import { actionNames } from "../utils/constants/actionConstants";

const counterReducer = (state = {value: 0}, action) => {
    switch (action.type) {
        case actionNames.incrementCounter:
            return {...state, value: state.value + 1};
        case actionNames.decrementCounter:
            return {...state, value: state.value - 1};
        default:
            return {...state};
    }
};

export default counterReducer;