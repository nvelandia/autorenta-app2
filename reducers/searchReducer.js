import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  needToCloseModifyModal: false,
  result: {
    locations: [],
    cars: [],
    companies: [],
    carFeatures: [],
    rates: [],
  },
  filters: {},
  searchParams: {
    pickup_location: '',
    pickup_date: '',
    pickup_time: '',
    dropoff_location: '',
    dropoff_date: '',
    dropoff_time: '',
    passenger_country_id: '',
    passenger_age: '',
  },
  filterBy: {
    companies: [],
    types: [],
    seats: [],
    bags: '',
    gears: [],
    price: [],
  },
  showFeaturedFirst: true,
  detailsBaseRate: {},
  showDetailsModal: false,
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.searchFleetSuccessfully:
      return {
        ...state,
        result: {
          cars: action.cars,
          locations: action.locations,
          companies: action.companies,
          carFeatures: action.carFeatures,
          rates: action.rates,
        },
        filters: action.filters,
        searchParams: action.searchParams,
      };
    case actionNames.addFilter:
      return {
        ...state,
        filterBy: action.filter,
      };
    case actionNames.orderByMaxToMin:
      return {
        ...state,
        result: {
          ...state.result,
          cars: state.result.cars.sort((a, b) => {
            if (parseFloat(a.rates[0].price) > parseFloat(b.rates[0].price)) {
              return -1;
            }
            if (parseFloat(a.rates[0].price) < parseFloat(b.rates[0].price)) {
              return 1;
            }
            return 0;
          }),
        },
      };
    case actionNames.orderByMinToMax:
      return {
        ...state,
        result: {
          ...state.result,
          cars: state.result.cars.sort((a, b) => {
            if (parseFloat(a.rates[0].price) < parseFloat(b.rates[0].price)) {
              return -1;
            }
            if (parseFloat(a.rates[0].price) > parseFloat(b.rates[0].price)) {
              return 1;
            }
            return 0;
          }),
        },
      };
    case actionNames.toggleShowFeaturedFirst:
      return {
        ...state,
        showFeaturedFirst: !state.showFeaturedFirst,
      };
    case actionNames.haveToCloseModifyModal:
      return {
        ...state,
        needToCloseModifyModal: action.value,
      };
    case actionNames.seeBaseRateDetailsSuccessfully:
      return {
        ...state,
        showDetailsModal: true,
        detailsBaseRate: action.car.rates[0],
      };
    case actionNames.closeDetailsModal:
      return {
        ...state,
        detailsBaseRate: {},
        showDetailsModal: false,
      };
    case actionNames.setLocale:
      return {
        ...defaultState,
      };
    default:
      return state;
  }
};

export default searchReducer;
