import { isError } from '../../utils/helpers/isError';
import successfullyResponsesPresenter from '../../utils/helpers/successfullyResponsesPresenter';
import errorResponsesPresenter from '../../utils/helpers/errorResponsesPresenter';
import { actionNames } from '../../utils/constants/actionConstants';

class step2Adapter {
  loadAirlines = (response, body) => {
    const { status, data } = response;

    if (!isError(status)) {
      return successfullyResponsesPresenter.listResponse(
        actionNames.loadAirlinesSuccessfully,
        'airlines',
        data.response,
        'Airlines loaded successfully',
      );
    }

    return errorResponsesPresenter.form(data, status, body, actionNames.loadAirlinesUnsuccessfully);
  };
}
export default new step2Adapter();
