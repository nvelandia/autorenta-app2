class successfullyResponsesPresenter {
  listResponse = (type, items, data, message) => {
    return {
      type,
      [items]: data,
      message,
    };
  };

  fleetResponse = (type, data, message) => {
    const types = { total: 0 };
    const seats = {};
    const gears = {};
    const bags = {};
    const companies = { total: 0 };
    for (const car of data.cars) {
      const company = data.companies.find((company) => company.code === car.company);
      const typeCar = data.car_features.find((carFeature) => carFeature.code === car.typeLetter);
      car.company = company;
      car.typeCar = typeCar;
      if (!companies[car.company.name]) {
        companies[car.company.name] = 1;
      } else {
        companies[car.company.name] = companies[car.company.name] + 1;
      }
      if (!types[car.typeCar.name]) {
        types[car.typeCar.name] = 1;
      } else {
        types[car.typeCar.name] = types[car.typeCar.name] + 1;
      }
      if (!seats[car.seats]) {
        seats[car.seats] = 1;
      } else {
        seats[car.seats] = seats[car.seats] + 1;
      }
      if (!bags[car.bags_total]) {
        bags[car.bags_total] = 1;
      } else {
        bags[car.bags_total] = bags[car.bags_total] + 1;
      }
      if (!gears[car.gear]) {
        gears[car.gear] = 1;
      } else {
        gears[car.gear] = gears[car.gear] + 1;
      }
    }

    companies.total = data.cars.length;
    types.total = data.cars.length;

    return {
      type,
      cars: data.cars,
      companies: data.companies,
      carFeatures: data.car_features,
      rates: data.rates,
      locations: data.location,
      filters: {
        companies,
        types,
        seats,
        gears,
        bags,
      },
      message,
    };
  };

  withOnlyMessage = (type, message) => {
    return {
      type,
      message,
    };
  };
}

export default new successfullyResponsesPresenter();
