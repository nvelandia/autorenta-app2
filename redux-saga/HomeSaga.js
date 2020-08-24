import { call, put, all } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import homeService from '../services/api/homeService';
// eslint-disable-next-line import/no-cycle
import * as generalActions from '../actions/generalActions';
import { actionNames } from '../utils/constants/actionConstants';
import { pages, redirectTo } from '../utils/helpers/redirectTo';

export function* searchLocation(action) {
  const { query } = action;
  const body = {
    query,
    language: 'es',
  };

  //yield put(generalActions.showLoader());
  const res = yield call(homeService.searchLocation, body);
  if (res.error) {
    if (res.error.code === 401 || res.error.code === 403) {
      yield all([put({ type: actionNames.handleError, error: res.error })]);
      redirectTo(pages.error);
    }
    yield all([put(res), put(generalActions.hideLoader()), put(generalActions.showNotification('', res.error))]);
  } else {
    yield all([
      put(res),
      //put(generalActions.hideLoader()),
    ]);
  }
}

export function* loadCountries(action) {
  const body = {
    language: 'es',
  };

  //yield put(generalActions.showLoader());
  const res = yield call(homeService.loadCountries, body);
  if (res.error) {
    if (res.error.code === 401 || res.error.code === 403) {
      yield all([put({ type: actionNames.handleError, error: res.error })]);
      redirectTo(pages.error);
    }
    yield all([put(res), put(generalActions.hideLoader()), put(generalActions.showNotification('', res.error))]);
  } else {
    yield all([
      put(res),
      //put(generalActions.hideLoader()),
    ]);
  }
}

export function* loadOffers(action) {
  const body = {
    language: 'es',
  };

  //yield put(generalActions.showLoader());
  const res = yield call(homeService.loadOffers, body);
  if (res.error) {
    if (res.error.code === 401 || res.error.code === 403) {
      yield all([put({ type: actionNames.handleError, error: res.error })]);
      redirectTo(pages.error);
    }
    yield all([put(res), put(generalActions.hideLoader()), put(generalActions.showNotification('', res.error))]);
  } else {
    yield all([
      put(res),
      //put(generalActions.hideLoader()),
    ]);
  }
}

export function* searchFleet(action) {
  const { body } = action;
  body.language = 'es';

  yield put(generalActions.showLoader());
  const res = yield call(homeService.searchFleet, body);
  if (res.error) {
    if (res.error.code === 401 || res.error.code === 403) {
      yield all([put({ type: actionNames.handleError, error: res.error })]);
      redirectTo(pages.error);
    }
    yield all([put(res), put(generalActions.hideLoader()), put(generalActions.showNotification('', res.error))]);
  } else {
    yield all([put(res), redirectTo(pages.step1), put(generalActions.hideLoader())]);
  }
}
