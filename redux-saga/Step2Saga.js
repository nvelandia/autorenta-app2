import { all, call, put, putResolve } from 'redux-saga/effects';
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

export function* validateId(action) {
  const body = {
    code: action.id,
  };

  const res = yield call(step2service.validateId, body);
  if (res.error) {
    if (res.error.code === 401 || res.error.code === 403) {
      yield all([put({ type: actionNames.handleError, error: res.error })]);
      redirectTo(pages.error);
    }
    yield all([put(res)]);
  } else {
    res.searchParams = body;
    yield all([put(res)]);
  }
}

export function* confirmReservation(action) {
  const { body } = action;
  body.language = 'es';

  const res = yield call(step2service.createReservation, body);
  if (res.error) {
    if (res.error.code === 401 || res.error.code === 403) {
      yield all([put({ type: actionNames.handleError, error: res.error })]);
      redirectTo(pages.error);
    }
    yield all([put(res), put(generalActions.showNotification('', res.error))]);
  } else {
    const body2 = {
      reservation: res.reservation.reservation_code,
      passenger_lastname: body.passenger_lastname,
    };
    if (body.agencyOrCorporationId) {
      redirectTo(`${pages.step3}/${body2.passenger_lastname}/${body2.reservation}/${body.agencyOrCorporationId}`);
    } else {
      redirectTo(`${pages.step3}/${body2.passenger_lastname}/${body2.reservation}`);
    }
  }
}

export function* validatePromotion(action) {
  const { body } = action;
  body.language = 'es';

  const res = yield call(step2service.validatePromotion, body);
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
