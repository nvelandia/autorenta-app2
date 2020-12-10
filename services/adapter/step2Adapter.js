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

    return errorResponsesPresenter.onlyMessage('Error', actionNames.validateIdUnsuccessfully);
  };

  createReservation = (response) => {
    const { data } = response;

    if (data.success) {
      return successfullyResponsesPresenter.withOnlyData(
        actionNames.createReservationSuccessfully,
        'reservation',
        data.response,
      );
    }

    return errorResponsesPresenter.formError(data.response, actionNames.createReservationUnsuccessfully);
  };

  validatePromotion = (response, body) => {
    const { data } = response;
    if (data.success && data.response.cars.length !== 0) {
      return successfullyResponsesPresenter.fleetResponse(
        actionNames.validatePromotionSuccessfully,
        data.response,
        'Promotion applied',
      );
    }
    if (data.response.cars) {
      return errorResponsesPresenter.onlyMessage('Error', actionNames.validatePromotionUnsuccessfully);
    }

    return errorResponsesPresenter.formError(data.response, actionNames.validatePromotionUnsuccessfully);
  };

  loadDiscount = (response) => {
    const { data } = response;

    if (data.success) {
      return successfullyResponsesPresenter.withOnlyData(
        actionNames.loadDiscountSuccessfully,
        'customerDiscount',
        data.response,
      );
    }

    return errorResponsesPresenter.onlyMessage('', actionNames.loadDiscountUnsuccessfully);
  };

  addExtra = (response) => {
    const { data } = response;
    if (data.success) {
      return successfullyResponsesPresenter.fleetResponse(
        actionNames.addExtraSuccessfully,
        data.response,
        'Fleet found',
      );
    }

    return errorResponsesPresenter.listError(data, actionNames.addExtraUnsuccessfully);
  };
}
export default new step2Adapter();
