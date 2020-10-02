import { all, call, put, putResolve } from 'redux-saga/effects';
import * as generalActions from '../actions/generalActions';
import { actionNames } from '../utils/constants/actionConstants';
import { pages, redirectTo } from '../utils/helpers/redirectTo';
import generalService from '../services/api/generalService';

export function* subscribeToNewsletter(action) {
  const { name, email } = action;
  const body = {
    language: 'es',
    name,
    email,
  };

  yield put(generalActions.showLoader());
  const res = yield call(generalService.subscribeToNewsletter, body);
  if (res.error) {
    if (res.error.code === 401 || res.error.code === 403) {
      yield all([put({ type: actionNames.handleError, error: res.error })]);
      redirectTo(pages.error);
    }
    yield all([put(res), put(generalActions.hideLoader()), put(generalActions.showNotification('', res.error))]);
  } else {
    yield all([put(res), put(generalActions.hideLoader())]);
  }
}

export function* searchReservation(action) {
  const { body } = action;
  body.language = 'es';

  yield put(generalActions.showLoader());
  const res = yield call(generalService.searchReservation, body);
  if (res.error) {
    if (res.error.code === 401 || res.error.code === 403) {
      yield all([put({ type: actionNames.handleError, error: res.error })]);
      redirectTo(pages.error);
    }
    yield all([put(res), put(generalActions.hideLoader())]);
  } else {
    yield all([putResolve(res), put(generalActions.hideLoader())]);
  }
}
