export const filterByType = (types, type) => {
  return types.length === 0 || types.includes(type);
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

export const filterByGears = (gears, gear) => {
  return gears.length === 0 || gears.includes(gear);
};

export const filterByPrice = (prices, price) => {
  return prices[0] <= price && price <= prices[1];
};
