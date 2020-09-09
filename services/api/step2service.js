// eslint-disable-next-line import/no-cycle
import Api from './api';
import step2Adapter from '../adapter/step2Adapter';

class step2Service {
  loadAirlines = async (body) => {
    let loadResponse;
    try {
      loadResponse = await Api.post('common/airlines', body);
    } catch (err) {
      loadResponse = err;
    }

    return step2Adapter.loadAirlines(loadResponse);
  };
}

export default new step2Service();
