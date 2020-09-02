import { all, call, put } from 'redux-saga/effects';
import * as generalActions from '../actions/generalActions';
import * as actions from '../actions/step1Actions';
import homeService from '../services/api/homeService';
import { actionNames } from '../utils/constants/actionConstants';
import { pages, redirectTo } from '../utils/helpers/redirectTo';

export function* modifySearchFleet(action) {
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
    res.searchParams = body;
    yield all([put(res), put(generalActions.hideLoader()), put(actions.haveToCloseModifyModal(true))]);
  }
}
