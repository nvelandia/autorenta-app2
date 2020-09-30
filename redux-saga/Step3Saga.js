import { all, call, put } from 'redux-saga/effects';
import * as generalActions from '../actions/generalActions';
import { actionNames } from '../utils/constants/actionConstants';
import { pages, redirectTo } from '../utils/helpers/redirectTo';
import step3service from '../services/api/step3service';

export function* cancelReservation(action) {
  const { body } = action;
  body.language = 'es';

  const res = yield call(step3service.cancelReservation, body);
  if (res.error) {
    if (res.error.code === 401 || res.error.code === 403) {
      yield all([put({ type: actionNames.handleError, error: res.error })]);
      redirectTo(pages.error);
    }
    yield all([put(res), put(generalActions.showNotification('', res.error))]);
  } else {
    yield all([put(res)]);
  }
}
