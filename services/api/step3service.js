// eslint-disable-next-line import/no-cycle
import Api from './api';
import step3Adapter from '../adapter/step3Adapter';

class step3Service {
  cancelReservation = async (body) => {
    let cancelResponse;
    try {
      cancelResponse = await Api.post('bookings/cancel', body);
    } catch (err) {
      cancelResponse = err;
    }

    return step3Adapter.cancelReservation(cancelResponse);
  };
}

export default new step3Service();
