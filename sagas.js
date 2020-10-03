import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
//import es6promise from 'es6-promise'
//import 'isomorphic-unfetch'

import { actionNames } from './utils/constants/actionConstants';
import { loadCountries, searchLocation, loadOffers, searchFleet } from './redux-saga/HomeSaga';
import { searchReservation, subscribeToNewsletter } from './redux-saga/GeneralSagas';
import { modifySearchFleet } from './redux-saga/Step1Saga';
import { loadAirlines, validateId, confirmReservation, validatePromotion } from './redux-saga/Step2Saga';
import { cancelReservation, payReservation } from './redux-saga/Step3Saga';

//es6promise.polyfill();

const saga = [
  //Home
  takeLatest(actionNames.searchLocation, searchLocation),
  takeLatest(actionNames.loadCountries, loadCountries),
  takeLatest(actionNames.loadOffers, loadOffers),
  takeLatest(actionNames.searchFleet, searchFleet),
  //General
  takeLatest(actionNames.subscribeNewsletter, subscribeToNewsletter),
  takeLatest(actionNames.searchReservation, searchReservation),
  //Step1
  takeLatest(actionNames.modifySearchFleet, modifySearchFleet),
  //Step2
  takeLatest(actionNames.loadAirlines, loadAirlines),
  takeLatest(actionNames.validateId, validateId),
  takeLatest(actionNames.confirmReservation, confirmReservation),
  takeLatest(actionNames.validatePromotion, validatePromotion),
  //Step3
  takeLatest(actionNames.cancelReservation, cancelReservation),
  takeLatest(actionNames.payReservation, payReservation),
];

export default function* rootSaga() {
  yield all(saga);
}
