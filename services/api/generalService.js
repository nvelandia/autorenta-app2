// eslint-disable-next-line import/no-cycle
import Api from './api';
import generalAdapter from '../adapter/generalAdapter';

class generalService {
  subscribeToNewsletter = async (body) => {
    let subscribeResponse;
    try {
      subscribeResponse = await Api.post('common/newsletters', body);
    } catch (err) {
      subscribeResponse = err;
    }

    return generalAdapter.subscribeToNewsletter(subscribeResponse);
  };

  searchReservation = async (body) => {
    let searchResponse;
    try {
      searchResponse = await Api.post('bookings/view', body);
    } catch (err) {
      searchResponse = err;
    }

    return generalAdapter.subscribeToNewsletter(searchResponse);
  };
}

export default new generalService();
