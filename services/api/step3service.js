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

  payReservation = async (body) => {
    let payResponse;
    try {
      payResponse = await Api.post('pays/create', body);
    } catch (err) {
      payResponse = err;
    }

    return step3Adapter.payReservation(payResponse);
  };
}

export default new step3Service();
