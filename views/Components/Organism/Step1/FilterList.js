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
  }

  handleOnSelect = (value, category) => {
    if (value === 'total') {
      this.setState({ [category]: [] });
    } else {
      if (this.state[category].includes(value)) {
        const filter = this.state[category];
        const newFilter = filter.filter((e) => {
          return e !== value;
        });
        this.setState({ [category]: newFilter });
      } else {
        const filter = this.state[category];
        filter.push(value);
        this.setState({ [category]: filter });
      }
    }
  };

  handleOnChange = (value) => {
    this.setState({ bags: value });
  };

  handlePriceChange = (minPrice, maxPrice) => {
    this.setState({ price: [minPrice, maxPrice] });
  };

  updateValues = () => {
    this.dispatch(this.props.addFitlter(this.state));
  };

  render() {
    const { translate } = this.props;
    if (this.state !== this.props.filterBy) {
      this.updateValues();
    }
    const { gears, companies, types, seats, bags } = this.props.items;
    return (
      <Card>
        <CardHeader className=" ar-filter-main-title">{translate('step1.result.filterList.mainTitle')}</CardHeader>
        <FilterGroup
          title={translate('step1.result.filterList.companies')}
          items={companies}
          type={'check'}
          badge={true}
          text={''}
          category={'companies'}
          handleOnSelect={this.handleOnSelect}
          translate={translate}
        />
        <FilterGroup
          title={translate('step1.result.filterList.types')}
          items={types}
          type={'check'}
          badge={true}
          text={''}
          category={'types'}
          handleOnSelect={this.handleOnSelect}
          translate={translate}
        />
        <FilterGroup
          title={translate('step1.result.filterList.seats')}
          items={seats}
          type={'check'}
          badge={false}
          text={'pasajeros'}
          category={'seats'}
          handleOnSelect={this.handleOnSelect}
          translate={translate}
        />
        <FilterGroup
          title={translate('step1.result.filterList.bags')}
          items={bags}
          type={'radio'}
          badge={false}
          text={''}
          category={'bags'}
          handleOnChange={this.handleOnChange}
          translate={translate}
        />
        <FilterGroup
          title={translate('step1.result.filterList.gears')}
          items={gears}
          type={'check'}
          badge={false}
          text={''}
          category={'gears'}
          handleOnSelect={this.handleOnSelect}
          translate={translate}
        />
        <FilterGroup
          title={translate('step1.result.filterList.price')}
          category={'price'}
          handlePriceChange={this.handlePriceChange}
          priceRange={this.props.priceRange}
          translate={translate}
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
  priceRange: PropTypes.object,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(FilterList);
