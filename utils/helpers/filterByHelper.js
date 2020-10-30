import { isServer } from './isError';

export const filterByType = (filtersSelected, sippCar, filters) => {
  let appear = false;
  for (const filterSelected of filtersSelected) {
    for (const sipp of filters[filterSelected].sipp) {
      if (sipp === sippCar) {
        appear = true;
      }
    }
  }
  return filtersSelected.length === 0 || appear;
};

export const filterBySeats = (seats, seat) => {
  return seats.length === 0 || seats.includes(seat);
};

export const filterByCompany = (companies, company) => {
  return companies.length === 0 || companies.includes(company);
};

export const filterByBags = (bags, bag) => {
  return bags === '' || bag >= bags;
};

export const filterByGears = (gearsSelected, gear, filters) => {
  let appear = false;
  for (const filterSelected of gearsSelected) {
    for (const code of filters[filterSelected].codes) {
      if (code === gear.code) {
        appear = true;
      }
    }
  }
  return gearsSelected.length === 0 || appear;
};

export const filterByPrice = (prices, price) => {
  return (
    (parseFloat(prices[0]) <= parseFloat(price) && parseFloat(price) <= parseFloat(prices[1])) || prices.length === 0
  );
};
