import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
//import es6promise from 'es6-promise'
//import 'isomorphic-unfetch'

import { actionNames } from './utils/constants/actionConstants';
import { loadCountries, searchLocation } from './redux-saga/HomeSaga';

//es6promise.polyfill();

const saga = [
  takeLatest(actionNames.searchLocation, searchLocation),
  takeLatest(actionNames.loadCountries, loadCountries),
];

export default function* rootSaga() {
  yield all(saga);
}
