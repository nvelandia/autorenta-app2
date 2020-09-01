import React from 'react';
import { Button, CardBody, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CarsResult from './CarsResult';
import FilterList from './FilterList';
import Dropdown from '../../Atoms/Dropdown';
import ModalDetailInformation from './ModalDetailInformation';
import ModalAditionalInformation from './ModalAditionalInformation';
import {
  filterByBags,
  filterByCompany,
  filterByGears,
  filterByPrice,
  filterBySeats,
  filterByType,
} from '../../../../utils/helpers/filterByHelper';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetailModal: false,
      showAditionalModal: false,
      showModifyModal: false,
      information: [],
    };
    this.dispatch = props.dispatch;
  }

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  showAditionalModal = () => {
    this.setState({ showAditionalModal: true });
  };

  showDetailModal = (information) => {
    this.setState({ showDetailModal: true, information });
  };

  hideModal = () => {
    this.setState({ showDetailModal: false, showAditionalModal: false, information: [] });
  };

  calculatePriceRange = () => {
    let minPrice = 9999999;
    let maxPrice = 0;
    for (const car of this.props.result.cars) {
      if (parseFloat(car.rates[0].price) > maxPrice) {
        maxPrice = parseFloat(car.rates[0].price);
      }
      if (parseFloat(car.rates[0].price) < minPrice) {
        minPrice = parseFloat(car.rates[0].price);
      }
    }
    return { minPrice, maxPrice };
  };

  showFeaturedFirst = () => {
    this.dispatch(this.props.toggleShowFeaturedFirst());
  };

  renderCarsResult = () => {
    let cars = this.props.result.cars;
    if (this.props.showFeaturedFirst) {
      let simple = [];
      let featured = [];
      cars.forEach((car) => {
        if (car.featured) {
          featured.push(car);
        } else {
          simple.push(car);
        }
      });
      cars = simple.concat(featured);
    }
    return cars.map((car) => {
      if (
        filterByType(this.props.filterBy.types, car.typeCar.name) &&
        filterBySeats(this.props.filterBy.seats, car.seats) &&
        filterByBags(this.props.filterBy.bags, car.bags_total) &&
        filterByCompany(this.props.filterBy.companies, car.company.name) &&
        filterByGears(this.props.filterBy.gears, car.gear) &&
        filterByPrice(this.props.filterBy.price, car.rates[0].price)
      ) {
        return (
          <CarsResult car={car} showDetailModal={this.showDetailModal} showAditionalModal={this.showAditionalModal} />
        );
      }
    });
  };

  render() {
    const priceRange = this.calculatePriceRange();

    return (
      <Row className="m-4 justify-content-center">
        <ModalDetailInformation
          information={this.state.information}
          showModal={this.state.showDetailModal}
          hideModal={this.hideModal}
        />
        <ModalAditionalInformation
          information={this.state.information}
          showModal={this.state.showAditionalModal}
          hideModal={this.hideModal}
        />
        <div className="ar-central-container">
          <Row className="justify-content-end m-0 mb-3">
            <div className="d-flex align-items-center">
              <div className="custom-control custom-checkbox mr-3">
                <input
                  className="custom-control-input"
                  id="customCheck1"
                  type="checkbox"
                  onClick={this.showFeaturedFirst}
                />
                <label className="custom-control-label ws-pre tx-bold mr-xl-4 mr-lg-4" htmlFor="customCheck1">
                  Mostrar vehículos destacados primero
                </label>
              </div>
              <Dropdown
                items={['De menor a mayor precio', 'De mayor a menor precio']}
                title={'Ordenar por'}
                color={'white-3'}
                classes={'ar-order-by-button'}
                actions={[this.props.orderByMinToMax, this.props.orderByMaxToMin]}
                dispatch={this.props.dispatch}
              />
            </div>
          </Row>
          <Row>
            <div className="ar-card-filters">
              {Object.entries(this.props.filters).length !== 0 ? (
                <FilterList items={this.props.filters} addFitlter={this.props.addFitlter} priceRange={priceRange} />
              ) : null}
            </div>
            <Col className="px-3">{this.props.result.cars.length !== 0 ? this.renderCarsResult() : null}</Col>
          </Row>
        </div>
      </Row>
    );
  }
}

Result.propTypes = {
  dispatch: PropTypes.func,
  searchLocation: PropTypes.func,
  loadCountries: PropTypes.func,
  addFitlter: PropTypes.func,
  orderByMinToMax: PropTypes.func,
  orderByMaxToMin: PropTypes.func,
  toggleShowFeaturedFirst: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(Result);
