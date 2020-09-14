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
}
export default new step2Adapter();
