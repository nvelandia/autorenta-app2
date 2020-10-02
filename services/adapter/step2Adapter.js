import { isError } from '../../utils/helpers/isError';
import successfullyResponsesPresenter from '../../utils/presenters/successfullyResponsesPresenter';
import errorResponsesPresenter from '../../utils/presenters/errorResponsesPresenter';
import { actionNames } from '../../utils/constants/actionConstants';

class step2Adapter {
  loadAirlines = (response) => {
    const { data } = response;

    if (data.success) {
      return successfullyResponsesPresenter.listResponse(
        actionNames.loadAirlinesSuccessfully,
        'airlines',
        data.response,
        'Airlines loaded successfully',
      );
    }

    return errorResponsesPresenter.listError(data, actionNames.loadAirlinesUnsuccessfully);
  };

  validateId = (response, body) => {
    const { data } = response;
    if (data.success) {
      return successfullyResponsesPresenter.withOnlyData(
        actionNames.validateIdSuccessfully,
        'organization',
        data.response,
      );
    }

    return errorResponsesPresenter.formError(data, actionNames.validateIdUnsuccessfully);
  };

  createReservation = (response, body) => {
    const { data } = response;

    if (data.success) {
      return successfullyResponsesPresenter.withOnlyData(
        actionNames.createReservationSuccessfully,
        'reservation',
        data.response,
      );
    }

    return errorResponsesPresenter.formError(data, actionNames.createReservationUnsuccessfully);
  };

  validatePromotion = (response, body) => {
    const { data } = response;
    if (data.success) {
      return successfullyResponsesPresenter.fleetResponse(
        actionNames.validatePromotionSuccessfully,
        data.response,
        'Promotion applied',
      );
    }

    return errorResponsesPresenter.formError(data, actionNames.validatePromotionUnsuccessfully);
  };
}
export default new step2Adapter();
