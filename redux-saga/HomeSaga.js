import { call, put, all, select } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import homeService from '../services/api/homeService';
// eslint-disable-next-line import/no-cycle
import * as generalActions from '../actions/generalActions';
import * as promotionActions from '../actions/promotionActions';
import { actionNames } from '../utils/constants/actionConstants';
import { pages, redirectTo } from '../utils/helpers/redirectTo';

export function* searchLocation(action) {
  const { query } = action;
  const body = {
    ...query,
  };

  const state = yield select();
  body.language = state.Intl.locale;
  const res = yield call(homeService.searchLocation, body);
  if (res.error) {
    yield all([put(res)]);
  } else {
    yield all([put(res)]);
  }
}

export function* loadCountries() {
  const body = {};
  const state = yield select();
  body.language = state.Intl.locale;

  const res = yield call(homeService.loadCountries, body);
  if (res.error) {
    yield all([put(res)]);
  } else {
    yield all([put(res)]);
  }
}

export function* loadOffers(action) {
  const body = {};
  const state = yield select();
  body.language = state.Intl.locale;

  if (action.promotionSelected) {
    yield put(generalActions.showLoader());
    body.post_id = action.promotionSelected;
  }

  const res = yield call(homeService.loadOffers, body);
  if (res.error) {
    yield all([put(res)]);
  } else {
    if (!action.promotionSelected) {
      yield all([put(res)]);
    } else {
      yield all([put(res), put(generalActions.hideLoader())]);
    }
  }
}

export function* loadBanners(action) {
  const body = {};
  const state = yield select();
  body.language = state.Intl.locale;

  const res = yield call(homeService.loadBanners, body);
  if (res.error) {
    yield all([put(res)]);
  } else {
    yield all([put(res)]);
  }
}

export function* searchFleet(action) {
  const { body, googleLocation, placesId } = action;
  const state = yield select();
  body.language = state.Intl.locale;

  yield put(generalActions.showLoader('searching'));
  const res = yield call(homeService.searchFleet, body);
  if (res.error) {
    yield all([put(res), put(generalActions.hideLoader())]);
  } else if (res.cars.length === 0) {
    redirectTo(`${pages.error}?code=1`);
  } else {
    res.searchParams = body;
    res.searchParams.pickup_place_id = placesId.pickup_place_id;
    res.searchParams.dropoff_place_id = placesId.dropoff_place_id;
    res.locations.pickup.formated_address = googleLocation.pickup.formatted_address;
    res.locations.dropoff.formated_address = googleLocation.dropoff.formatted_address;
    yield all([put(res), put(generalActions.hideLoader())]);
  }
}
