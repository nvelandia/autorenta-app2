import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import injectedReducers from '../injectedReducers';
//import history from './history';

import { IntlReducer as Intl } from 'react-redux-multilingual';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    //router: connectRouter(history),
    ...injectedReducers,
    Intl,
  });

  return rootReducer;
}
