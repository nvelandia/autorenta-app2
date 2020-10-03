import { isError } from '../../utils/helpers/isError';
import successfullyResponsesPresenter from '../../utils/presenters/successfullyResponsesPresenter';
import errorResponsesPresenter from '../../utils/presenters/errorResponsesPresenter';
import { actionNames } from '../../utils/constants/actionConstants';

class step3Adapter {
  cancelReservation = (response) => {
    const { data } = response;
    if (data.success) {
      return successfullyResponsesPresenter.withOnlyData(
        actionNames.cancelReservationSuccessfully,
        'reservation',
        data.response,
      );
    }

    return errorResponsesPresenter.formError(data, actionNames.cancelReservationUnsuccessfully);
  };

  payReservation = (response) => {
    const { data } = response;
    if (data.success) {
      return successfullyResponsesPresenter.withOnlyData(
        actionNames.payReservationSuccessfully,
        'reservation',
        data.response,
      );
    }

    return errorResponsesPresenter.formError(data, actionNames.payReservationUnsuccessfully);
  };
}
export default new step3Adapter();
