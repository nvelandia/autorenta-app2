import { isError } from '../../utils/helpers/isError';
import successfullyResponsesPresenter from '../../utils/presenters/successfullyResponsesPresenter';
import errorResponsesPresenter from '../../utils/presenters/errorResponsesPresenter';
import { actionNames } from '../../utils/constants/actionConstants';

class generalAdapter {
  subscribeToNewsletter = (response) => {
    const { data } = response;

    if (data.success) {
      return successfullyResponsesPresenter.withOnlyMessage(
        actionNames.subscribedSuccessfully,
        'Subscribed to newsletter',
      );
    }

    return errorResponsesPresenter.formError(data, actionNames.subscribedUnsuccessfully);
  };

  searchReservation = (response) => {
    const { data } = response;
    console.log(data);
    if (data.success && data.code === 200) {
      return successfullyResponsesPresenter.reservationResponse(
        actionNames.searchReservationSuccessfully,
        data.response,
        'Reservation found successfully',
      );
    }

    return errorResponsesPresenter.onlyMessage(data.response, actionNames.searchReservationUnsuccessfully);
  };
}
export default new generalAdapter();
