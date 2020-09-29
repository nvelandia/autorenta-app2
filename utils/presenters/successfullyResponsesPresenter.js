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
      const typeCar = data.car_features.find((carFeature) => {
        if (
          car.type[1] === 'F' ||
          car.type[1] === 'V' ||
          car.type[1] === 'W' ||
          car.type[1] === 'G' ||
          car.type[1] === 'T'
        ) {
          return carFeature.code === car.type[1] && carFeature.level === '2';
        } else {
          return carFeature.code === car.type[0] && carFeature.level === '1';
        }
      });
      car.company = company;
      car.typeCar = typeCar;
      if (!companies[car.company.name]) {
        companies[car.company.name] = 1;
      } else {
        companies[car.company.name] = companies[car.company.name] + 1;
      }
      if (car.typeCar) {
        if (!types[car.typeCar.name]) {
          types[car.typeCar.name] = 1;
        } else {
          types[car.typeCar.name] = types[car.typeCar.name] + 1;
        }
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

    data.cars.sort((a, b) => {
      if (parseFloat(a.rates[0].price) < parseFloat(b.rates[0].price)) {
        return -1;
      }
      if (parseFloat(a.rates[0].price) > parseFloat(b.rates[0].price)) {
        return 1;
      }
      // a debe ser igual b
      return 0;
    });

    return {
      type,
      cars: data.cars.filter((car) => {
        return car.typeCar !== undefined;
      }),
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

  reservationResponse = (type, data, message) => {
    console.log(data);
    const cars = data.cars;
    cars.company = data.companies;

    return {
      type,
      cars: cars,
      location: data.location,
      message,
    };
  };

  withOnlyMessage = (type, message) => {
    return {
      type,
      message,
    };
  };

  withOnlyData = (type, item, data) => {
    return {
      type,
      [item]: data,
    };
  };
}

export default new successfullyResponsesPresenter();
