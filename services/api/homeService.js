// eslint-disable-next-line import/no-cycle
import Api from './api';
import GoogleApi from './googleApi';
import homeAdapter from '../adapter/homeAdapter';

class homeService {
  searchLocation = async (body) => {
    let searchResponse;
    try {
      searchResponse = await Api.post('locations/offices_near', body);
    } catch (err) {
      searchResponse = err;
    }
    return homeAdapter.searchLocation(searchResponse);
  };

  loadCountries = async (body) => {
    let loadResponse;
    try {
      loadResponse = await Api.post('locations/countries', body);
    } catch (err) {
      loadResponse = err;
    }

    return homeAdapter.loadCountries(loadResponse);
  };

  loadOffers = async (body) => {
    let loadResponse;
    try {
      loadResponse = await Api.post('common/offers', body);
    } catch (err) {
      loadResponse = err;
    }

    return homeAdapter.loadOffers(loadResponse);
  };

  loadBanners = async (body) => {
    let loadResponse;
    try {
      loadResponse = await Api.post('common/banners', body);
    } catch (err) {
      loadResponse = err;
    }

    return homeAdapter.loadBanners(loadResponse);
  };

  searchFleet = async (body) => {
    let searchResponse;
    try {
      searchResponse = await Api.post('fleet/find', body);
    } catch (err) {
      searchResponse = err;
    }

    return homeAdapter.searchFleet(searchResponse);
  };
}

export default new homeService();
