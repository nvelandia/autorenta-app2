import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
//import es6promise from 'es6-promise'
//import 'isomorphic-unfetch'

import {incrementCounter, decrementCounter} from './actions/counterActions';
import {actionNames} from "./utils/constants/actionConstants";

//es6promise.polyfill();

const saga = [
    takeLatest(actionNames.incrementCounter, incrementCounter),
    takeLatest(actionNames.decrementCounter, decrementCounter),
]

export default function* rootSaga() {
    yield all(saga);
}