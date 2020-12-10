import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  carSelected: null,
  location: null,
  searchParams: {},
  rateSelected: '',
  discount: {},
  optionalEquipment: [],
  clientType: '',
  airlines: [],
  organization: {},
  error: {},
  formData: {},
  customerDiscount: {},
  oldRates: [],
};

const step2Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.changePlan:
      return {
        ...state,
        plan: action.plan,
        rateSelected: action.rateSelected,
      };
    case actionNames.selectCarSuccessfully:
      return {
        ...defaultState,
        carSelected: action.car,
        location: action.location,
        searchParams: action.searchParams,
        rateSelected: action.rateSelected,
        clientType: action.clientType ? action.clientType : '',
        formData: state.formData,
        oldRates: action.oldRates,
      };
    case actionNames.addOptionalEquipment:
      return {
        ...state,
        optionalEquipment: action.optionalEquipment,
      };
    case actionNames.selectClientType:
      return {
        ...state,
        clientType: action.clientType,
        organization: {},
        formData: {},
        error: {},
      };
    case actionNames.loadAirlinesSuccessfully:
      return {
        ...state,
        airlines: action.airlines,
      };
    case actionNames.loadDiscountSuccessfully:
      return {
        ...state,
        customerDiscount: action.customerDiscount,
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
      if (Object.keys(action.data)[0] === 'airline_iata' && Object.values(action.data)[0] === '') {
        const newFormData = { ...state.formData };
        delete newFormData.airline_iata;
        return {
          ...state,
          formData: newFormData,
        };
      }
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
        discount: action.cars[0].rates[0],
        searchParams: action.searchParams,
      };
    case actionNames.validatePromotionUnsuccessfully:
      return {
        ...state,
        discount: {},
        error: { validationPromotion: 'Ingresa un número de cupón o código promocional válido' },
      };
    case actionNames.setErrorsStep2:
      return {
        ...state,
        error: action.errors,
      };
    default:
      return state;
  }
};

export default step2Reducer;

//ver de meter variable para vlaidar si se busco promotion, que el selectedRate sea 0
