import { isError } from '../../utils/helpers/isError';
import successfullyResponsesPresenter from '../../utils/presenters/successfullyResponsesPresenter';
import errorResponsesPresenter from '../../utils/presenters/errorResponsesPresenter';
import { actionNames } from '../../utils/constants/actionConstants';

class generalAdapter {
  subscribeToNewsletter = (response) => {
    const { data } = response;

    if (data.success) {
      return successfullyResponsesPresenter.withOnlyMessage(actionNames.subscribedSuccessfully, 'subscriptionSuccess');
    }

    return errorResponsesPresenter.formError(data.response, actionNames.subscribedUnsuccessfully);
  };

  searchReservation = (response) => {
    const { data } = response;
    if (data.success && data.code === 200) {
      return successfullyResponsesPresenter.reservationResponse(
        actionNames.searchReservationSuccessfully,
        data.response,
        'Reservation found successfully',
      );
    }
    if (!data.response || data.code === 500) {
      return errorResponsesPresenter.formError(500, actionNames.searchReservationUnsuccessfully);
    }
    if (data.code === 409) {
      return errorResponsesPresenter.onlyMessageAndCode(
        data.response,
        actionNames.searchReservationUnsuccessfully,
        data.code,
      );
    }
    if (data.code === 404) {
      return errorResponsesPresenter.onlyMessageAndCode(
        data.response,
        actionNames.searchReservationUnsuccessfully,
        data.code,
      );
    }
    return errorResponsesPresenter.onlyMessage(data.response, actionNames.searchReservationUnsuccessfully);
  };
}
export default new generalAdapter();
