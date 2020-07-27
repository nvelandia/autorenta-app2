import { call, put, all } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import homeService from '../services/api/homeService';
// eslint-disable-next-line import/no-cycle
import * as rooftopperActions from '../actions/RooftopperActions';
import * as generalActions from '../actions/GeneralActions';
import applicant from '../services/api/applicant';
import { actionNames } from '../utils/constants/actionConstants';
import { pages, redirectTo } from '../utils/helpers/redirectTo';
import { senioritiesLevelsNumberToString } from '../utils/constants/senioritiesConstants';

export function* searchLocation(action) {
  const { query } = action;
  const body = {
    query,
  };

  //yield put(generalActions.showLoader());
  const res = yield call(homeService.searchLocation, body);
  /*
  if (res.error) {
    if (res.error.code === 401 || res.error.code === 403) {
      yield all([put({ type: actionNames.handleError, error: res.error })]);
      redirectTo(pages.error);
    }
    yield all([put(res), put(generalActions.hideLoader()), put(generalActions.showNotification('', res.error))]);
  } else {
    const response = yield call(rooftopper.getById, res.rooftopper.id);
    if (response.rooftopper.applicantId !== null) {
      const applicantResponse = yield call(applicant.getById, response.rooftopper.applicantId);
      response.rooftopper.applicantData = applicantResponse.applicant;
    }
    yield all([
      put(res),
      put(generalActions.hideLoader()),
      put(generalActions.showNotification(res.message)),
      put(rooftopperActions.closeModal()),
      put(response),
      put({
        type:
          res.rooftopper.profileState === 'active'
            ? actionNames.updateModalShow
            : actionNames.updateModalShowRooftopperPreselected,
      }),
    ]);
  }*/
}
