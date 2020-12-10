import { all, call, put, select, putResolve } from 'redux-saga/effects';
import * as generalActions from '../actions/generalActions';
import * as actions from '../actions/step1Actions';
import homeService from '../services/api/homeService';
import { actionNames } from '../utils/constants/actionConstants';
import { pages, redirectTo } from '../utils/helpers/redirectTo';

export function* modifySearchFleet(action) {
  const { body } = action;
  const state = yield select();
  body.language = state.Intl.locale;

  yield put(generalActions.showLoader('searching'));
  const res = yield call(homeService.searchFleet, body);
  if (res.error) {
    yield all([put(res), put(generalActions.hideLoader())]);
  } else {
    res.searchParams = body;
    yield all([put(res), put(generalActions.hideLoader()), put(actions.haveToCloseModifyModal(true))]);
  }
}

export function* selectCar(action) {
  const { searchParams, car, rateSelected, location } = action;
  const state = yield select();
  searchParams.language = state.Intl.locale;

  yield put(generalActions.showLoader());

  let oldRates = car.rates;
  let newRates = [];
  for (const rate of car.rates) {
    const { includes } = rate;
    if (includes.length === 0 || car.rates[rateSelected] === rate) {
      searchParams.rate = rate.rate_code;
      const res = yield call(homeService.searchFleet, searchParams);
      newRates.push(res.cars[0].rates[0]);
      car.extras = res.cars[0].extras;
      res.cars[0].pickup_office.latitude ? (car.pickup_office = res.cars[0].pickup_office) : null;
      res.cars[0].dropoff_office.longitude ? (car.dropoff_office = res.cars[0].dropoff_office) : null;
    } else {
      newRates.push(rate);
    }
  }

  car.rates = newRates;

  yield all([put({ type: actionNames.selectCarSuccessfully, car, searchParams, location, rateSelected, oldRates })]);
  redirectTo(pages.step2);
}

export function* seeBaseRateDetails(action) {
  const { body } = action;
  const state = yield select();
  body.language = state.Intl.locale;

  yield put(generalActions.showLoader());

  const res = yield call(homeService.searchFleet, body);

  if (res.error) {
    yield all([put(res), put(generalActions.hideLoader())]);
  } else {
    yield all([putResolve(actions.seeBaseRateDetailsSuccessfully(res.cars[0])), put(generalActions.hideLoader())]);
  }
}
