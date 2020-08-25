import React from 'react';
import { Card, CardHeader } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterGroup from './FilterGroup';

class FilterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      types: [],
      seats: [],
      bags: '',
      gears: [],
      price: [],
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {};

  handleOnSelect = (key, category) => {
    if (this.state[category].includes(key)) {
      const filter = this.state[category];
      const newFilter = filter.filter((e) => {
        return e !== key;
      });
      this.setState({ [category]: newFilter });
    } else {
      const filter = this.state[category];
      filter.push(key);
      this.setState({ [category]: filter });
    }
  };

  handleOnChange = (value) => {
    this.setState({ bags: value });
  };

  handlePriceChange = (minPrice, maxPrice) => {
    this.setState({ price: [minPrice, maxPrice] });
  };

  render() {
    const { gears, companies, types, seats, bags } = this.props.items;
    return (
      <Card>
        <CardHeader className=" ar-filter-main-title">Filtrar resultados</CardHeader>
        <FilterGroup
          title={'COMPAÑÍA RENTADORA'}
          items={companies}
          type={'check'}
          badge={true}
          text={''}
          category={'companies'}
          handleOnSelect={this.handleOnSelect}
        />
        <FilterGroup
          title={'TIPOS DE VEHÍCULO'}
          items={types}
          type={'check'}
          badge={true}
          text={''}
          category={'types'}
          handleOnSelect={this.handleOnSelect}
        />
        <FilterGroup
          title={'CANTIDAD DE PASAJEROS'}
          items={seats}
          type={'check'}
          badge={false}
          text={'pasajeros'}
          category={'seats'}
          handleOnSelect={this.handleOnSelect}
        />
        <FilterGroup
          title={'CAPACIDAD DE MALETAS'}
          items={bags}
          type={'radio'}
          badge={false}
          text={''}
          category={'bags'}
          handleOnChange={this.handleOnChange}
        />
        <FilterGroup
          title={'TIPO DE TRANSMISIÓN'}
          items={gears}
          type={'check'}
          badge={false}
          text={''}
          category={'gears'}
          handleOnSelect={this.handleOnSelect}
        />
        <FilterGroup
          title={'RANGO DE PRECIO'}
          priceRange={true}
          category={'price'}
          handlePriceChange={this.handlePriceChange}
        />
      </Card>
    );
  }
}

FilterList.propTypes = {
  dispatch: PropTypes.func,
  searchLocation: PropTypes.func,
  loadCountries: PropTypes.func,
  items: PropTypes.object,
  addFitlter: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(FilterList);
