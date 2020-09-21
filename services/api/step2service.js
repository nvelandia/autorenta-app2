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

  validateId = async (body) => {
    let validateResponse;
    try {
      validateResponse = await Api.post('common/validate_partner', body);
    } catch (err) {
      validateResponse = err;
    }

    return step2Adapter.validateId(validateResponse);
  };

  createReservation = async (body) => {
    let crateResponse;
    try {
      crateResponse = await Api.post('bookings/create', body);
    } catch (err) {
      crateResponse = err;
    }

    return step2Adapter.createReservation(crateResponse);
  };

  validatePromotion = async (body) => {
    let validateResponse;
    try {
      validateResponse = await Api.post('fleet/find', body);
    } catch (err) {
      validateResponse = err;
    }

    return step2Adapter.validatePromotion(validateResponse);
  };
}

export default new step2Service();
