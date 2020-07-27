import { isError } from '../../utils/helpers/isError';
import successfullyResponsesPresenter from '../../utils/helpers/successfullyResponsesPresenter';
import errorResponsesPresenter from '../../utils/helpers/errorResponsesPresenter';
import { actionNames } from '../../utils/constants/actionConstants';

class homeAdapter {
  searchLocation = (response, body) => {
    const { status, data } = response;

    if (!isError(status)) {
      return successfullyResponsesPresenter.listResponse(
        actionNames.searchLocationSuccessfully,
        'locations',
        data.response,
        'Locations found',
      );
    }

    return errorResponsesPresenter.listError(data, status, body, actionNames.searchLocationUnsuccessfully);
  };
}

export default new homeAdapter();
