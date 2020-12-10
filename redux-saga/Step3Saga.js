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
      put(generalActions.showNotification('reservationCancelled', true)),
    ]);
    setTimeout(() => redirectTo(pages.home), 4000);
  }
}

export function* payReservation(action) {
  const { body } = action;
  const state = yield select();
  body.language = state.Intl.locale;
  yield all([put(generalActions.showLoader('paying'))]);

  const res = yield call(step3service.payReservation, body);
  if (res.error) {
    yield all([put(res), put(generalActions.showNotification('canNotPay', true)), put(generalActions.hideLoader())]);
  } else {
    yield all([put(res), put(generalActions.hideLoader())]);
    setTimeout(() => window.location.reload(), 3000);
  }
}
