import { isError } from '../../utils/helpers/isError';
import successfullyResponsesPresenter from '../../utils/presenters/successfullyResponsesPresenter';
import errorResponsesPresenter from '../../utils/presenters/errorResponsesPresenter';
import { actionNames } from '../../utils/constants/actionConstants';

class homeAdapter {
  searchLocation = (response) => {
    const { data } = response;
    if (data.success) {
      return successfullyResponsesPresenter.listResponse(
        actionNames.searchLocationSuccessfully,
        'locations',
        data.response,
        'Locations found',
      );
    }

    return errorResponsesPresenter.listError(data, actionNames.searchLocationUnsuccessfully);
  };

  loadCountries = (response) => {
    const { data } = response;

    if (data.success) {
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

    return errorResponsesPresenter.listError(data, actionNames.loadCountriesUnsuccessfully);
  };

  loadOffers = (response) => {
    const { data } = response;

    if (data.success) {
      return successfullyResponsesPresenter.listResponse(
        actionNames.loadOffersSuccessfully,
        'offers',
        data.response,
        'Offers loaded',
      );
    }

    return errorResponsesPresenter.listError(data, actionNames.loadOffersUnsuccessfully);
  };

  searchFleet = (response) => {
    const { data } = response;
    if (data.success) {
      return successfullyResponsesPresenter.fleetResponse(
        actionNames.searchFleetSuccessfully,
        data.response,
        'Fleet found',
      );
    }

    return errorResponsesPresenter.listError(data, actionNames.searchFleetUnsuccessfully);
  };
}

export default new homeAdapter();
