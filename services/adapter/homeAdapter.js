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

  loadCountries = (response, body) => {
    const { status, data } = response;

    if (!isError(status)) {
      const countries = data.response
        .map((country) => {
          return country.name;
        })
        .filter((country) => country !== null)
        .sort();

      console.log(countries);

      return successfullyResponsesPresenter.listResponse(
        actionNames.loadCountriesSuccessfully,
        'countries',
        countries,
        'Countries loaded',
      );
    }

    return errorResponsesPresenter.listError(data, status, body, actionNames.loadCountriesUnsuccessfully);
  };
}

export default new homeAdapter();
