import { actionNames } from "../utils/constants/actionConstants";

const defaultState = {
    page: 1,
}

const homeReducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionNames.nextPageHome :
            return {...state, page: state.page + 1 };
        default:
            return state;
    }
}

export default homeReducer;
