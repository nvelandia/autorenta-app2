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
}

export default new generalService();
