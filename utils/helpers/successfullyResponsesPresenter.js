class successfullyResponsesPresenter {
  listResponse = (type, items, data, message) => {
    return {
      type,
      [items]: data,
      message,
    };
  };

  fleetResponse = (type, data, message) => {
    for (const car of data.cars) {
      const company = data.companies.find((company) => company.code === car.company);
      const typeCar = data.car_features.find((carFeature) => carFeature.code === car.typeLetter);
      car.company = company;
      car.typeCar = typeCar;
    }

    return {
      type,
      cars: data.cars,
      companies: data.companies,
      carFeatures: data.car_features,
      rates: data.rates,
      locations: data.location,
      message,
    };
  };
}

export default new successfullyResponsesPresenter();
