import { isError } from '../../utils/helpers/isError';

class homeAdapter {
  search = (response, body) => {
    const { status, data } = response;

    if (!isError(status)) {
      return successWithMessageAndData(actionNames.createdSuccesful, 'rooftopper', data, 'Rooftopper created');
    }

    return errorRooftopperProfile(data, status, body, actionNames.createdFail);
  };
}

export default new homeAdapter();
