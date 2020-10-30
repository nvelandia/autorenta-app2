import { all, call, put, putResolve, select } from 'redux-saga/effects';
import * as generalActions from '../actions/generalActions';
import * as actions from '../actions/step2Actions';
import { actionNames } from '../utils/constants/actionConstants';
import { pages, redirectTo } from '../utils/helpers/redirectTo';
import step2service from '../services/api/step2service';
import homeService from '../services/api/homeService';

export function* loadAirlines(action) {
  const body = {};
  const state = yield select();
  body.language = state.Intl.locale;

  const res = yield call(step2service.loadAirlines, body);
  if (res.error) {
    yield all([put(res)]);
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
    yield all([put(res)]);
  } else {
    res.searchParams = body;
    yield all([put(res)]);
  }
}

export function* confirmReservation(action) {
  const { body } = action;
  const state = yield select();
  body.language = state.Intl.locale;

  const res = yield call(step2service.createReservation, body);
  if (res.error) {
    yield all([put(res), put(generalActions.hideLoader()), put(generalActions.showNotification(res.message, true))]);
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
  const state = yield select();
  body.language = state.Intl.locale;

  yield put(generalActions.showLoader());

  const res = yield call(step2service.validatePromotion, body);
  if (res.error) {
    yield all([put(res), put(generalActions.hideLoader())]);
  } else {
    res.searchParams = body;
    let value;
    if (body.coupon) {
      value = 'couponNumberSuccess';
    } else {
      value = 'codePromotionalSuccess';
    }
    yield all([put(res), put(generalActions.hideLoader()), put(generalActions.showNotification(value))]);
  }
}

export function* changePlan(action) {
  const { searchParams, car, rateSelected, location, clientType, nextAction } = action;
  const state = yield select();
  searchParams.language = state.Intl.locale;

  yield put(generalActions.showLoader());

  let newRates = [];
  for (const rate of car.rates) {
    const { includes } = rate;
    if (includes.length === 0 || car.rates[rateSelected] === rate) {
      searchParams.rate = rate.rate_code;
      const res = yield call(homeService.searchFleet, searchParams);
      newRates.push(res.cars[0].rates[0]);
    } else {
      newRates.push(rate);
    }
  }

  car.rates = newRates;
  if (nextAction) {
    yield all([
      putResolve({ type: actionNames.selectCarSuccessfully, car, searchParams, location, rateSelected, clientType }),
      put(nextAction),
    ]);
  } else {
    yield all([
      putResolve({ type: actionNames.selectCarSuccessfully, car, searchParams, location, rateSelected, clientType }),
      put(generalActions.hideLoader()),
    ]);
  }
}

export function* loadDiscount(action) {
  const body = {};
  const state = yield select();
  body.language = state.Intl.locale;

  const res = yield call(step2service.loadDiscount, body);
  if (res.error) {
    yield all([put(res)]);
  } else {
    yield all([put(res)]);
  }
}
