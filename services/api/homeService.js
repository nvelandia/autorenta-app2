// eslint-disable-next-line import/no-cycle
import Api from './api';
import homeAdapter from '../adapter/homeAdapter';

class homeService {
  searchLocation = async (body) => {
    let searchResponse;
    try {
      searchResponse = await Api.post('locations/find', body);
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
}

export default new homeService();
