import React from 'react';
import { Button, CardBody, Col, Modal, Row } from 'reactstrap';
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
import CustomButton from '../../Atoms/CustomButton';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetailModal: false,
      showAditionalModal: false,
      showModifyModal: false,
      showFilter: false,
      rate: this.props.detailsBaseRate,
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

  showDetailModal = (rate, car) => {
    if (rate.includes.length === 0) {
      const body = { ...this.props.searchParams };
      body.vendor = car.company.code;
      body.sipp = car.type;
      body.rate = rate.rate_code;
      this.dispatch(this.props.seeBaseRateDetails(body));
    } else {
      this.setState({ showDetailModal: true, rate });
    }
  };

  hideModal = () => {
    this.setState({ showDetailModal: false, showAditionalModal: false, rate: {} });

    if (this.props.detailsBaseRate.rate_code) {
      setTimeout(this.dispatch(this.props.closeDetailsModal()), 1000);
    }
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
    const { translate } = this.props;
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
      cars = featured.concat(simple);
    }
    return cars.map((car, index) => {
      if (
        filterByType(this.props.filterBy.types, car.type, this.props.filters.types) &&
        filterBySeats(this.props.filterBy.seats, car.seats) &&
        filterByBags(this.props.filterBy.bags, car.bags_total) &&
        filterByCompany(this.props.filterBy.companies, car.company.name) &&
        filterByGears(this.props.filterBy.gears, car.gear, this.props.filters.gears) &&
        filterByPrice(this.props.filterBy.price, car.rates[0].price)
      ) {
        return (
          <div key={index} className="fade-in">
            <CarsResult
              translate={translate}
              car={car}
              selectCar={this.props.selectCar}
              showDetailModal={this.showDetailModal}
              showAditionalModal={this.showAditionalModal}
              showLoader={this.props.showLoader}
              isMobile={this.props.isMobile}
            />
          </div>
        );
      } else {
        return (
          <div key={index} className="fade-out">
            <CarsResult
              translate={translate}
              car={car}
              selectCar={this.props.selectCar}
              showDetailModal={this.showDetailModal}
              showAditionalModal={this.showAditionalModal}
              showLoader={this.props.showLoader}
              isMobile={this.props.isMobile}
            />
          </div>
        );
      }
    });
  };

  render() {
    const priceRange = this.calculatePriceRange();
    if (this.state.rate !== this.props.detailsBaseRate && this.props.detailsBaseRate.rate_code) {
      this.setState({ rate: this.props.detailsBaseRate });
    }
    const { translate, isMobile } = this.props;
    return (
      <Row className={`${!isMobile ? 'm-4' : 'm-3'} justify-content-center`}>
        <ModalDetailInformation
          rate={this.state.rate}
          showModal={this.state.showDetailModal || this.props.showDetailsModal}
          hideModal={this.hideModal}
          translate={translate}
          seeBaseRateDetails={this.props.seeBaseRateDetails}
        />
        <ModalAditionalInformation
          translate={translate}
          showModal={this.state.showAditionalModal}
          hideModal={this.hideModal}
        />
        <div className="ar-central-container">
          {!isMobile ? (
            <Row className="justify-content-end m-0 mb-3">
              <div className="d-flex align-items-center">
                <div className="custom-control custom-checkbox mr-3">
                  <input
                    className="custom-control-input"
                    id="customCheck1"
                    type="checkbox"
                    defaultChecked={this.props.showFeaturedFirst}
                    onClick={this.showFeaturedFirst}
                  />
                  <label className="custom-control-label ws-pre tx-bold mr-xl-4 mr-lg-4" htmlFor="customCheck1">
                    {translate('step1.result.showFirst')}
                  </label>
                </div>
                <Dropdown
                  items={[translate('step1.result.minToMax'), translate('step1.result.maxToMin')]}
                  title={translate('step1.result.orderBy')}
                  color={'white-3'}
                  classes={'ar-order-by-button'}
                  actions={[this.props.orderByMinToMax, this.props.orderByMaxToMin]}
                  dispatch={this.props.dispatch}
                />
              </div>
            </Row>
          ) : (
            <div>
              <CustomButton
                text={translate('step1.result.filterList.mainTitle')}
                event={() => this.setState({ showFilter: !this.state.showFilter })}
                color={'white-0'}
                pl={'pl-0'}
                pr={'pr-0'}
                fontSize={'fs--2'}
                name={'ar-filter-button'}
                width={'d-flex justify-content-center mt-2'}
              />
              <div className="ar-step1-mobile-search-container">
                <div className="custom-control custom-checkbox ">
                  <input
                    className="custom-control-input"
                    id="customCheck1"
                    type="checkbox"
                    defaultChecked={this.props.showFeaturedFirst}
                    onClick={this.showFeaturedFirst}
                  />
                  <label className="custom-control-label tx-bold mr-xl-4 mr-lg-4" htmlFor="customCheck1">
                    {translate('step1.result.showFirst')}
                  </label>
                </div>
                <Dropdown
                  items={[translate('step1.result.minToMax'), translate('step1.result.maxToMin')]}
                  title={translate('step1.result.orderBy')}
                  color={'white-3'}
                  classes={'ar-order-by-button'}
                  actions={[this.props.orderByMinToMax, this.props.orderByMaxToMin]}
                  dispatch={this.props.dispatch}
                />
              </div>
            </div>
          )}
          <Row className="mx-0">
            {!isMobile ? (
              <div className="ar-card-filters">
                {Object.entries(this.props.filters).length !== 0 ? (
                  <FilterList
                    translate={translate}
                    items={this.props.filters}
                    addFitlter={this.props.addFitlter}
                    priceRange={priceRange}
                    isMobile={isMobile}
                    handleClose={() => this.setState({ showFilter: false })}
                  />
                ) : null}
              </div>
            ) : (
              <Modal
                className="modal-dialog-centered ar-modal-filter"
                isOpen={this.state.showFilter}
                toggle={() => this.setState({ showFilter: false })}
              >
                <div className={`ar-card-filters`}>
                  {Object.entries(this.props.filters).length !== 0 ? (
                    <FilterList
                      translate={translate}
                      items={this.props.filters}
                      addFitlter={this.props.addFitlter}
                      priceRange={priceRange}
                      isMobile={isMobile}
                      handleClose={() => this.setState({ showFilter: false })}
                    />
                  ) : null}
                </div>
              </Modal>
            )}
            <Col className={`pr-0 ${this.props.isMobile ? 'pl-0' : 'pl-3'}`}>
              {this.props.result.cars.length !== 0 ? this.renderCarsResult() : null}
            </Col>
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
  selectCar: PropTypes.func,
  toggleShowFeaturedFirst: PropTypes.func,
  showLoader: PropTypes.func,
  seeBaseRateDetails: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(Result);
