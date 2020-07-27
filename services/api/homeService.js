// eslint-disable-next-line import/no-cycle
import Api from './api';
//import authAdapter from '../adapters/authAdapter';

class homeService {
  searchLocation = async (body) => {
    let searchResponse;
    try {
      searchResponse = await Api.post('locations/find', body);
    } catch (err) {
      searchResponse = err;
    }
    console.log(searchResponse);

    return homeAdapter.searchLocation(searchResponse);
  };
}

export default new homeService();
