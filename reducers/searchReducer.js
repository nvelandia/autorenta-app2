import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  // result: {
  //   locations: [],
  //   cars: [],
  //   companies: [],
  //   carFeatures: [],
  //   rates: [],
  // },
  // filters: {},
  filters: {
    companies: {
      total: 42,
      Payless: 16,
      Alamo: 26,
    },
    types: {
      total: 42,
      Económico: 3,
      '2/4 Door': 2,
      Intermedio: 7,
      Standard: 8,
      Grande: 8,
      Premium: 5,
      Minivan: 2,
      'De lujo': 3,
      'Standard Elite': 1,
      'Station Wagon': 1,
      Oversize: 1,
      Especial: 1,
    },
    seats: {
      '4': 4,
      '5': 18,
      '7': 7,
      '8': 2,
      '12': 1,
      '15': 1,
      '': 9,
    },
    gears: {
      manual: 42,
    },
    bags: {
      '0': 9,
      '1': 1,
      '2': 1,
      '3': 15,
      '4': 7,
      '5': 8,
      '7': 1,
    },
  },
  result: {
    cars: [
      {
        company: {
          company_id: 3,
          name: 'Payless',
          logo: 'http://pg01.cubiq.digital/assets/uploads/companies/payless.png',
          guid: 'b3f7a031-47c5-497b-b406-e02ede7f5003',
          code: 'ZA',
          visible: false,
          color: '#111fe4',
        },
        type: 'ECAR',
        typeLetter: 'E',
        image: 'http://pg01.cubiq.digital/assets/images/car-unavailable.png',
        name: 'HYUNDAI ACCENT',
        doors: '4',
        seats: '5',
        bags_small: '2',
        bags_big: '1',
        bags_total: 3,
        gear: 'manual',
        rating: null,
        featured: false,
        air: false,
        extras: [
          {
            code: 'NAV',
            name: 'NAV',
            base_amount: '99.99',
            plan: 'B',
            status: 'CNF',
          },
        ],
        rates: [
          {
            rate_code: '6K',
            availability_status: 'S',
            guarantee_ind: 'G',
            rate_plan_returned: 'W',
            name: 'Rate 6K',
            rate_plan_change_indicator: true,
            price: '406.87',
            charges: [
              {
                name: '',
                charge_type: 'BaseRateTotal',
                currency_code: 'USD',
                amount: '196.85',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraDay',
                currency_code: '',
                amount: '49.21',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraHour',
                currency_code: '',
                amount: '22.01',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ApproximateTotalPrice',
                currency_code: '',
                amount: '406.87',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
            ],
          },
        ],
        typeCar: {
          level: '1',
          code: 'E',
          priority: 15,
          name: 'Económico',
        },
      },
    ],
    locations: {
      pickup: {
        date: '2020-08-22',
        time: '12:00',
        location: 'Miami, Florida, Estados Unidos',
        iata: 'MIA',
      },
      dropoff: {
        date: '2020-08-28',
        time: '12:00',
        location: 'Miami, Florida, Estados Unidos',
        iata: 'MIA',
      },
    },
    companies: [
      {
        company_id: 1,
        name: 'Avis',
        logo: 'http://pg01.cubiq.digital/assets/uploads/companies/avis.png',
        guid: '3e5caefc-18bd-4825-822f-cac5b637f0e7',
        code: 'ZI',
        visible: false,
        color: '#e41111',
      },
      {
        company_id: 2,
        name: 'Budget',
        logo: 'http://pg01.cubiq.digital/assets/uploads/companies/budget.png',
        guid: 'b3f7a031-47c5-497b-b406-e02ede7f5005',
        code: 'ZD',
        visible: false,
        color: '#e47711',
      },
    ],
    carFeatures: [
      {
        level: '2',
        code: 'D',
        priority: 5,
        name: '4-5 Door',
      },
      {
        level: '2',
        code: 'V',
        priority: 5,
        name: 'Passenger Van',
      },
      {
        level: '2',
        code: 'B',
        priority: 5,
        name: '2-3 Door',
      },
      {
        level: '1',
        code: 'N',
        priority: 10,
        name: 'Superior Mini',
      },
      {
        level: '1',
        code: 'H',
        priority: 20,
        name: 'Superior Economy',
      },
      {
        level: '1',
        code: 'C',
        priority: 25,
        name: 'Compacto',
      },
      {
        level: '1',
        code: 'D',
        priority: 30,
        name: 'Superior Compact',
      },
      {
        level: '1',
        code: 'J',
        priority: 40,
        name: 'Superior Intermediate',
      },
      {
        level: '1',
        code: 'G',
        priority: 60,
        name: 'Superior Full Size',
      },
      {
        level: '2',
        code: 'T',
        priority: 10,
        name: 'Convertible',
      },
      {
        level: '2',
        code: 'F',
        priority: 15,
        name: 'SUV',
      },
      {
        level: '2',
        code: 'J',
        priority: 20,
        name: 'All terrain',
      },
      {
        level: '2',
        code: 'X',
        priority: 25,
        name: 'Especial',
      },
      {
        level: '2',
        code: 'Z',
        priority: 30,
        name: 'Especial',
      },
      {
        level: '2',
        code: 'E',
        priority: 5,
        name: 'Coupe',
      },
    ],
  },
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
      };
    default:
      return state;
  }
};

export default searchReducer;
