import { all, call, put, putResolve, select } from 'redux-saga/effects';
import * as generalActions from '../actions/generalActions';
import { actionNames } from '../utils/constants/actionConstants';
import { pages, redirectTo } from '../utils/helpers/redirectTo';
import generalService from '../services/api/generalService';

export function* subscribeToNewsletter(action) {
  const { name, email } = action;
  const body = {
    name,
    email,
  };
  const state = yield select();
  body.language = state.Intl.locale;

  yield put(generalActions.showLoader());
  const res = yield call(generalService.subscribeToNewsletter, body);
  if (res.error) {
    yield all([put(res), put(generalActions.hideLoader())]);
  } else {
    yield all([put(res), put(generalActions.hideLoader())]);
  }
}

export function* searchReservation(action) {
  const { body } = action;
  const state = yield select();
  body.language = state.Intl.locale;

  yield put(generalActions.showLoader());
  const res = yield call(generalService.searchReservation, body);
  if (res.error) {
    if (res.data === 500) {
      redirectTo(pages.error);
    }
    yield all([put(res), put(generalActions.hideLoader())]);
    redirectTo(pages.error);
  } else {
    yield all([putResolve(res), put(generalActions.hideLoader())]);
  }
}
