import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  carSelected: {},
  location: {},
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
  optionalEquipment: [
    { name: 'Radio Satelital XM', price: '16.99' },
    { name: 'Asistencia en la carretera', price: '7.99' },
    { name: 'Navegador satelital', price: '19.00' },
    { name: 'Conductor adicional', price: '13.00' },
    { name: 'Cobertura LDW', price: '34.99' },
    { name: 'Cobertura ALI', price: '16.37' },
  ],
  additionalSeats: [
    { name: 'Asiento para bebés', price: '14.00', quantity: 0 },
    { name: 'Asiento para niños', price: '14.00', quantity: 0 },
    { name: 'Asiento elevador para niños', price: '14.00', quantity: 0 },
  ],
};

const step2Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.changePlan:
      return {
        ...state,
        plan: action.plan,
      };
    case actionNames.selectCar:
      return {
        ...state,
        carSelected: action.car,
        location: action.location,
      };
    case actionNames.addOptionalEquipment:
      return {
        ...state,
        optionalEquipment: action.optionalEquipment,
      };
    default:
      return state;
  }
};

export default step2Reducer;
