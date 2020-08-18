import { isError } from '../../utils/helpers/isError';
import successfullyResponsesPresenter from '../../utils/helpers/successfullyResponsesPresenter';
import errorResponsesPresenter from '../../utils/helpers/errorResponsesPresenter';
import { actionNames } from '../../utils/constants/actionConstants';

class generalAdapter {
  subscribeToNewsletter = (response, body) => {
    const { status, data } = response;

    if (!isError(status)) {
      return successfullyResponsesPresenter.withOnlyMessage(
        actionNames.subscribedSuccessfully,
        'Subscribed to newsletter',
      );
    }

    return errorResponsesPresenter.form(data, status, body, actionNames.subscribedUnsuccessfully);
  };
}
export default new generalAdapter();
