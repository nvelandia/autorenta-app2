import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  car: {},
  plan: {
    id: 0,
    title: 'Todo incluido',
    includes: [
      { id: 0, name: 'Millaje Libre', nickName: 'Millaje Libre', selected: true },
      { id: 1, name: 'Cobertura LDW', nickName: 'Cobertura LDW', selected: true },
      { id: 2, name: 'Cobertura TPL', nickName: 'Cobertura TPL', selected: true },
      { id: 3, name: 'Impuestos y cargos', nickName: 'Impuestos y cargos', selected: true },
      { id: 4, name: 'Tanque de combustible', nickName: 'Tanque de combustible', selected: true },
      { id: 5, name: 'Navegador satelital', nickName: 'Navegador satelital', selected: true },
      { id: 6, name: 'Conductor adicional', nickName: 'Conductor adicional', selected: true },
      {
        id: 7,
        name: 'Servicio de asistencia en la carretera',
        nickName: 'Asistencia en la carretera',
        selected: true,
      },
    ],
  },
};

const step3Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.createReservationSuccessfully:
      return {
        ...state,
        car: action.car,
      };
    default:
      return state;
  }
};

export default step3Reducer;
