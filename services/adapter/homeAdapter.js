import { isError } from '../../utils/helpers/isError';
import successfullyResponsesPresenter from '../../utils/presenters/successfullyResponsesPresenter';
import errorResponsesPresenter from '../../utils/presenters/errorResponsesPresenter';
import { actionNames } from '../../utils/constants/actionConstants';

class homeAdapter {
  searchLocation = (response) => {
    let { data } = response;
    if (data.success) {
      const newData = [];
      if (!Array.isArray(data.response)) {
        for (const field in data.response) {
          newData.push(data.response[field]);
        }
        return successfullyResponsesPresenter.listResponse(
          actionNames.searchLocationSuccessfully,
          'locations',
          newData,
          'Locations found',
        );
      }
      return successfullyResponsesPresenter.listResponse(
        actionNames.searchLocationSuccessfully,
        'locations',
        data.response,
        'Locations found',
      );
    }
    return errorResponsesPresenter.onlyMessage(data.response.query[0], actionNames.searchLocationUnsuccessfully);
  };

  loadCountries = (response) => {
    const { data } = response;

    if (data.success) {
      const countries = data.response
        .map((country) => {
          return { name: country.name, id: country.country_id };
        })
        .filter((country) => country.name !== null);

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

  loadBanners = (response) => {
    const { data } = response;

    if (data.success) {
      const banners = data.response.map((banner, index) => {
        return {
          src: banner.image,
          altText: '',
          caption: '',
          header: '',
          id: index + 1,
          style: 'ar-header-image',
        };
      });

      return successfullyResponsesPresenter.listResponse(
        actionNames.loadBannersSuccessfully,
        'banners',
        banners,
        'Banners loaded',
      );
    }

    return errorResponsesPresenter.listError(data, actionNames.loadBannersUnsuccessfully);
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
