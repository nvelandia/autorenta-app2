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
      if (!company) {
        continue;
      }
      const typeCar1 = data.car_features.find((carFeature) => {
        return carFeature.code === car.type[0] && carFeature.level === '1';
      });
      const typeCar2 = data.car_features.find((carFeature) => {
        return carFeature.code === car.type[1] && carFeature.level === '2';
      });
      const gear = data.car_features.find((carFeature) => {
        return carFeature.code === car.type[2] && carFeature.level === '3';
      });
      const air = data.car_features.find((carFeature) => {
        return carFeature.code === car.type[3] && carFeature.level === '4';
      });
      car.company = company;
      car.typeCar1 = typeCar1;
      car.typeCar2 = typeCar2;
      car.gear = gear;
      car.air = air;
      if (!companies[car.company.name]) {
        companies[car.company.name] = 1;
      } else {
        companies[car.company.name] = companies[car.company.name] + 1;
      }

      if (car.type[0] === 'M' && car.type[1] === 'V') {
        if (!types['Minivans']) {
          types['Minivans'] = { quantity: 1, sipp: [car.type] };
        } else {
          const sipp = types['Minivans'].sipp;
          !sipp.includes(car.type) ? sipp.push(car.type) : null;
          types['Minivans'] = {
            quantity: types['Minivans'].quantity + 1,
            sipp: sipp,
          };
        }
      } else if (car.type[0] === 'F' && car.type[1] === 'V') {
        if (!types['Maxivans']) {
          types['Maxivans'] = { quantity: 1, sipp: [car.type] };
        } else {
          const sipp = types['Maxivans'].sipp;
          !sipp.includes(car.type) ? sipp.push(car.type) : null;
          types['Maxivans'] = {
            quantity: types['Maxivans'].quantity + 1,
            sipp: sipp,
          };
        }
      } else if (car.type[1] === 'V') {
        if (!types['Vans']) {
          types['Vans'] = { quantity: 1, sipp: [car.type] };
        } else {
          const sipp = types['Vans'].sipp;
          !sipp.includes(car.type) ? sipp.push(car.type) : null;
          types['Vans'] = {
            quantity: types['Vans'].quantity + 1,
            sipp: sipp,
          };
        }
      } else if (
        (car.type[0] === 'M' && car.type[1] === 'B') ||
        (car.type[0] === 'M' && car.type[1] === 'C') ||
        (car.type[0] === 'M' && car.type[1] === 'D')
      ) {
        if (!types['Minis']) {
          types['Minis'] = { quantity: 1, sipp: [car.type] };
        } else {
          const sipp = types['Minis'].sipp;
          !sipp.includes(car.type) ? sipp.push(car.type) : null;
          types['Minis'] = {
            quantity: types['Minis'].quantity + 1,
            sipp: sipp,
          };
        }
      } else if (car.type[1] === 'S') {
        if (!types['Deportivo']) {
          types['Deportivo'] = { quantity: 1, sipp: [car.type] };
        } else {
          const sipp = types['Deportivo'].sipp;
          !sipp.includes(car.type) ? sipp.push(car.type) : null;
          types['Deportivo'] = {
            quantity: types['Deportivo'].quantity + 1,
            sipp: sipp,
          };
        }
      } else if (car.type[1] === 'F') {
        if (!types['SUVs']) {
          types['SUVs'] = { quantity: 1, sipp: [car.type] };
        } else {
          const sipp = types['SUVs'].sipp;
          !sipp.includes(car.type) ? sipp.push(car.type) : null;
          types['SUVs'] = {
            quantity: types['SUVs'].quantity + 1,
            sipp: sipp,
          };
        }
      } else if (car.type[1] === 'W') {
        if (!types['Station Wagons']) {
          types['Station Wagons'] = { quantity: 1, sipp: [car.type] };
        } else {
          const sipp = types['Station Wagons'].sipp;
          !sipp.includes(car.type) ? sipp.push(car.type) : null;
          types['Station Wagons'] = {
            quantity: types['Station Wagons'].quantity + 1,
            sipp: sipp,
          };
        }
      } else if (car.type[0] === 'X' && car.type[1] === 'X') {
        if (!types['Especiales']) {
          types['Especiales'] = { quantity: 1, sipp: [car.type] };
        } else {
          const sipp = types['Especiales'].sipp;
          !sipp.includes(car.type) ? sipp.push(car.type) : null;
          types['Especiales'] = {
            quantity: types['Especiales'].quantity + 1,
            sipp: sipp,
          };
        }
      } else if (car.type[0] === 'G' && car.type[1] === 'X') {
        if (!types['Superiores']) {
          types['Superiores'] = { quantity: 1, sipp: [car.type] };
        } else {
          const sipp = types['Superiores'].sipp;
          !sipp.includes(car.type) ? sipp.push(car.type) : null;
          types['Superiores'] = {
            quantity: types['Superiores'].quantity + 1,
            sipp: sipp,
          };
        }
      } else if (car.category) {
        if (!types[car.category]) {
          types[car.category] = { quantity: 1, sipp: [car.type] };
        } else {
          const sipp = types[car.category].sipp;
          !sipp.includes(car.type) ? sipp.push(car.type) : null;
          types[car.category] = {
            quantity: types[car.category].quantity + 1,
            sipp: sipp,
          };
        }
      } else {
        console.log(car.typeCar1.name, car.typeCar2.name);
        types['zzz'] = 'Al menos 1';
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
    }

    for (const feature of data.car_features) {
      if (feature.level === '3') {
        if (!gears[feature.name]) {
          gears[feature.name] = { quantity: 1, codes: [feature.code] };
        } else {
          const codes = gears[feature.name].codes;
          codes.push(feature.code);
          gears[feature.name] = { quantity: gears[feature.name].quantity + 1, codes: codes };
        }
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
        return car.typeCar1 !== undefined && car.typeCar2 !== undefined;
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
    const car = data.cars;
    car.company = data.companies;

    const typeCar1 = data.car_features.find((carFeature) => {
      return carFeature.code === car.type[0] && carFeature.level === '1';
    });
    const typeCar2 = data.car_features.find((carFeature) => {
      return carFeature.code === car.type[1] && carFeature.level === '2';
    });
    const gear = data.car_features.find((carFeature) => {
      return carFeature.code === car.type[2] && carFeature.level === '3';
    });
    const air = data.car_features.find((carFeature) => {
      return carFeature.code === car.type[3] && carFeature.level === '4';
    });
    car.typeCar1 = typeCar1;
    car.typeCar2 = typeCar2;
    car.gear = gear;
    car.air = air;
    return {
      type,
      cars: car,
      location: data.location,
      reservation: data.reservation,
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
