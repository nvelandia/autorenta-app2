import { all, call, put } from 'redux-saga/effects';
import * as generalActions from '../actions/generalActions';
import { actionNames } from '../utils/constants/actionConstants';
import { pages, redirectTo } from '../utils/helpers/redirectTo';
import step2service from '../services/api/step2service';

export function* loadAirlines(action) {
  const body = {};
  body.language = 'es';

  const res = yield call(step2service.loadAirlines, body);
  if (res.error) {
    if (res.error.code === 401 || res.error.code === 403) {
      yield all([put({ type: actionNames.handleError, error: res.error })]);
      redirectTo(pages.error);
    }
    yield all([put(res), put(generalActions.showNotification('', res.error))]);
  } else {
    res.searchParams = body;
    yield all([put(res)]);
  }
}
