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
          return { name: country.name, id: country.country_id };
        })
        .filter((country) => country.name !== null)
        .sort(function (country1, country2) {
          if (country1.name > country2.name) {
            return 1;
          }
          if (country1.name < country2.name) {
            return -1;
          }
          return 0;
        });

      return successfullyResponsesPresenter.listResponse(
        actionNames.loadCountriesSuccessfully,
        'countries',
        countries,
        'Countries loaded',
      );
    }

    return errorResponsesPresenter.listError(data, status, body, actionNames.loadCountriesUnsuccessfully);
  };

  loadOffers = (response, body) => {
    const { status, data } = response;

    if (!isError(status)) {
      return successfullyResponsesPresenter.listResponse(
        actionNames.loadOffersSuccessfully,
        'offers',
        data.response,
        'Offers loaded',
      );
    }

    return errorResponsesPresenter.listError(data, status, body, actionNames.loadOffersUnsuccessfully);
  };

  searchFleet = (response, body) => {
    const { status, data } = response;

    if (!isError(status)) {
      return successfullyResponsesPresenter.fleetResponse(
        actionNames.searchFleetSuccessfully,
        data.response,
        'Fleet found',
      );
    }

    return errorResponsesPresenter.listError(data, status, body, actionNames.searchFleetUnsuccessfully);
  };
}

export default new homeAdapter();
