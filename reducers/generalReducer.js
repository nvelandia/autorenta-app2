import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  loader: false,
  error: false,
  history: [],
  showNotification: false,
  messageType: '',
  actionWithError: '',
  loaderMessage: '',
};

const generalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.showLoader:
      return { ...state, loader: true, loaderMessage: action.loaderMessage };
    case actionNames.hideLoader:
      return { ...state, loader: false, loaderMessage: '' };
    case actionNames.subscribedSuccessfully:
      return { ...state, showNotification: true, messageType: action.message, error: false };
    case actionNames.subscribedUnsuccessfully:
      return { ...state };
    case actionNames.searchReservationUnsuccessfully:
      return { ...state, error: action.message, actionWithError: 'searchReservation' };
    case actionNames.closeNotification:
      return { ...state, error: false, actionWithError: '' };
    case actionNames.addPageToHistory:
      const history = state.history;
      history.push(action.page);
      return { ...state, history: history };
    case actionNames.showNotification:
      return {
        ...state,
        showNotification: true,
        messageType: action.value,
        error: action.error,
      };
    case actionNames.hideNotification:
      return { ...state, showNotification: false, messageType: '', error: false, actionWithError: '' };
    default:
      return state;
  }
};

export default generalReducer;
