import { all, call, put, select } from 'redux-saga/effects';
import * as generalActions from '../actions/generalActions';
import { actionNames } from '../utils/constants/actionConstants';
import { pages, redirectTo } from '../utils/helpers/redirectTo';
import step3service from '../services/api/step3service';

export function* cancelReservation(action) {
  const { body } = action;
  const state = yield select();
  body.language = state.Intl.locale;
  yield all([put(generalActions.showLoader('cancel'))]);
  const res = yield call(step3service.cancelReservation, body);
  if (res.error) {
    if (res.error.code === 500) {
      redirectTo(pages.error);
    }
    yield all([
      put(res),
      put(generalActions.hideLoader()),
      put(generalActions.showNotification('reservationNotFound', true)),
    ]);
  } else {
    yield all([
      put(res),
      put(generalActions.hideLoader()),
      put(generalActions.showNotification('reservationCancelled')),
    ]);
  }
}

export function* payReservation(action) {
  const { body } = action;
  const state = yield select();
  body.language = state.Intl.locale;

  const res = yield call(step3service.payReservation, body);
  if (res.error) {
    yield all([put(res)]);
  } else {
    yield all([put(res)]);
    setTimeout(() => window.location.reload(), 3000);
  }
}
