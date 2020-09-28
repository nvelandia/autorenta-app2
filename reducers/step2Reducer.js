import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  carSelected: {},
  location: {},
  searchParams: {},
  rateSelected: '',
  plans: [
    {
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
    {
      id: 1,
      title: 'Cobertura completa + GPS',
      includes: [
        { id: 0, name: 'Millaje Libre', nickName: 'Millaje Libre', selected: true },
        { id: 1, name: 'Cobertura LDW', nickName: 'Cobertura LDW', selected: true },
        { id: 2, name: 'Cobertura TPL', nickName: 'Cobertura TPL', selected: true },
        { id: 3, name: 'Impuestos y cargos', nickName: 'Impuestos y cargos', selected: true },
        { id: 4, name: 'Tanque de combustible', nickName: 'Tanque de combustible', selected: false },
        { id: 5, name: 'Navegador satelital', nickName: 'Navegador satelital', selected: true },
        { id: 6, name: 'Conductor adicional', nickName: 'Conductor adicional', selected: true },
        {
          id: 7,
          name: 'Servicio de asistencia en la carretera',
          nickName: 'Asistencia en la carretera',
          selected: false,
        },
      ],
    },
    {
      id: 2,
      title: 'Cobertura completa + GAS',
      includes: [
        { id: 0, name: 'Millaje Libre', nickName: 'Millaje Libre', selected: true },
        { id: 1, name: 'Cobertura LDW', nickName: 'Cobertura LDW', selected: true },
        { id: 2, name: 'Cobertura TPL', nickName: 'Cobertura TPL', selected: true },
        { id: 3, name: 'Impuestos y cargos', nickName: 'Impuestos y cargos', selected: true },
        { id: 4, name: 'Tanque de combustible', nickName: 'Tanque de combustible', selected: true },
        { id: 5, name: 'Navegador satelital', nickName: 'Navegador satelital', selected: false },
        { id: 6, name: 'Conductor adicional', nickName: 'Conductor adicional', selected: true },
        {
          id: 7,
          name: 'Servicio de asistencia en la carretera',
          nickName: 'Asistencia en la carretera',
          selected: false,
        },
      ],
    },
    {
      id: 3,
      title: 'Coberetura completa',
      includes: [
        { id: 0, name: 'Millaje Libre', nickName: 'Millaje Libre', selected: true },
        { id: 1, name: 'Cobertura LDW', nickName: 'Cobertura LDW', selected: true },
        { id: 2, name: 'Cobertura TPL', nickName: 'Cobertura TPL', selected: true },
        { id: 3, name: 'Impuestos y cargos', nickName: 'Impuestos y cargos', selected: true },
        { id: 4, name: 'Tanque de combustible', nickName: 'Tanque de combustible', selected: false },
        { id: 5, name: 'Navegador satelital', nickName: 'Navegador satelital', selected: false },
        { id: 6, name: 'Conductor adicional', nickName: 'Conductor adicional', selected: true },
        {
          id: 7,
          name: 'Servicio de asistencia en la carretera',
          nickName: 'Asistencia en la carretera',
          selected: false,
        },
      ],
    },
    {
      id: 4,
      title: 'Coberetura completa',
      includes: [
        { id: 0, name: 'Millaje Libre', nickName: 'Millaje Libre', selected: true },
        { id: 1, name: 'Cobertura LDW', nickName: 'Cobertura LDW', selected: true },
        { id: 2, name: 'Cobertura TPL', nickName: 'Cobertura TPL', selected: false },
        { id: 3, name: 'Impuestos y cargos', nickName: 'Impuestos y cargos', selected: false },
        { id: 4, name: 'Tanque de combustible', nickName: 'Tanque de combustible', selected: false },
        { id: 5, name: 'Navegador satelital', nickName: 'Navegador satelital', selected: false },
        { id: 6, name: 'Conductor adicional', nickName: 'Conductor adicional', selected: true },
        {
          id: 7,
          name: 'Servicio de asistencia en la carretera',
          nickName: 'Asistencia en la carretera',
          selected: false,
        },
      ],
    },
    {
      id: 5,
      title: 'Tarifa sin seguro',
      includes: [
        { id: 0, name: 'Millaje Libre', nickName: 'Millaje Libre', selected: true },
        { id: 1, name: 'Cobertura LDW', nickName: 'Cobertura LDW', selected: false },
        { id: 2, name: 'Cobertura TPL', nickName: 'Cobertura TPL', selected: false },
        { id: 3, name: 'Impuestos y cargos', nickName: 'Impuestos y cargos', selected: false },
        { id: 4, name: 'Tanque de combustible', nickName: 'Tanque de combustible', selected: false },
        { id: 5, name: 'Navegador satelital', nickName: 'Navegador satelital', selected: false },
        { id: 6, name: 'Conductor adicional', nickName: 'Conductor adicional', selected: false },
        {
          id: 7,
          name: 'Servicio de asistencia en la carretera',
          nickName: 'Asistencia en la carretera',
          selected: false,
        },
      ],
    },
  ],
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
  optionalEquipment: {
    others: [
      { name: 'Radio Satelital XM', price: '16.99', added: false },
      { name: 'Asistencia en la carretera', price: '7.99', added: false },
      { name: 'Navegador satelital', price: '19.00', added: false },
      { name: 'Conductor adicional', price: '13.00', added: false },
      { name: 'Cobertura LDW', price: '34.99', added: false },
      { name: 'Cobertura ALI', price: '16.37', added: false },
    ],
    additionalSeats: [
      { name: 'Asiento para bebés', price: '14.00', quantity: 0, added: false },
      { name: 'Asiento para niños', price: '14.00', quantity: 0, added: false },
      { name: 'Asiento elevador para niños', price: '14.00', quantity: 0, added: false },
    ],
  },
  clientType: '',
  airlines: [],
  organization: {},
  error: {},
  formData: {},
};

const step2Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.changePlan:
      return {
        ...state,
        plan: action.plan,
        rateSelected: action.rateSelected,
      };
    case actionNames.selectCar:
      return {
        ...state,
        carSelected: action.car,
        location: action.location,
        searchParams: action.searchParams,
        rateSelected: action.rateSelected,
      };
    case actionNames.addOptionalEquipment:
      if (action.others) {
        return {
          ...state,
          optionalEquipment: { ...state.optionalEquipment, others: action.optionalEquipment },
        };
      } else {
        return {
          ...state,
          optionalEquipment: { ...state.optionalEquipment, additionalSeats: action.optionalEquipment },
        };
      }
    case actionNames.selectClientType:
      return {
        ...state,
        clientType: action.clientType,
        organization: {},
      };
    case actionNames.loadAirlinesSuccessfully:
      return {
        ...state,
        airlines: action.airlines,
      };
    case actionNames.validateIdSuccessfully:
      return {
        ...state,
        organization: action.organization,
      };
    case actionNames.validateIdUnsuccessfully:
      return {
        ...state,
        organization: {},
        error: { validationId: 'Ingresa un número de ID válido' },
      };
    case actionNames.updateFormData:
      return {
        ...state,
        formData: {
          ...state.formData,
          [Object.keys(action.data)[0]]: Object.values(action.data)[0],
        },
      };
    case actionNames.clearValidateIdError:
      return {
        ...state,
        error: {},
      };
    case actionNames.validatePromotionSuccessfully:
      return {
        ...state,
        formData: {
          ...state.formData,
        },
      };
    default:
      return state;
  }
};

export default step2Reducer;
