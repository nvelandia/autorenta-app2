import React from 'react';
import { Button, Card, CardBody, CardHeader, CardText, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomButton from '../../Atoms/CustomButton';
import { pages, redirectTo } from '../../../../utils/helpers/redirectTo';
import PriceCarousel from '../../Molecules/Carousels/PriceCarousel';

class CarsResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {};

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  renderRating = (ratingCar) => {
    const rating = [];
    for (let index = 0; index < 5; index++) {
      if (index < ratingCar) {
        rating.push(<i key={index} className="ar-icon-star-filled ar-yellow-text" />);
      } else {
        rating.push(<i key={index} className="ar-icon-star-regular ar-light-blue-3-text" />);
      }
    }
    return rating;
  };

  handleOnClick = (car, selectedRate) => {
    this.props.dispatch(this.props.showLoader());
    this.props.dispatch(this.props.selectCar(car, this.props.result.locations, this.props.searchParams, selectedRate));
    redirectTo(pages.step2);
    window.scrollTo(0, 0);
  };

  renderPrice = (car) => {
    const { translate } = this.props;
    const prices = car.rates.map((rate, index) => {
      return (
        <Col xl="6" lg="6" className="ar-car-price" key={index}>
          <Card className="text-center  shadow mb-0">
            <CardHeader className="bg-transparent ar-car-price-title">
              <h4 className="mb-0">{rate.name}</h4>
            </CardHeader>
            <CardBody className="ar-car-price-body">
              <div className="ar-car-price-details" onClick={() => this.props.showDetailModal(rate)}>
                <p>
                  <i className="ar-icon-info va-middle" /> {translate('step1.result.carsResult.seeDetails')}
                </p>
              </div>
              <div className="mb-2">
                <h1 className="ar-car-price-price">{rate.price}</h1>
              </div>
              <CustomButton
                text={translate('step1.result.carsResult.reserveNow')}
                event={() => this.handleOnClick(car, index)}
                color={'red-0'}
                name={'ar-car-price-button'}
                icon={'ar-icon-chevron-right'}
                pl={'pl-3'}
                pr={'pr-2'}
                justify={'justify-content-around'}
              />
            </CardBody>
          </Card>
        </Col>
      );
    });

    return [prices.slice(0, 2), prices.slice(2, 4), prices.slice(4, 6)];
  };

  render() {
    const { car, translate } = this.props;
    return (
      <Card className="card-frame ar-car-result mb-3">
        <CardBody className="p-0">
          <Row className="ar-car-top">
            <div className="ar-car-top-left">
              <div className="ar-car-company-logo">
                <img src={car.company.logo} alt={'Company logo'} />
              </div>
              <div className="ar-car-type">
                <h3 className="ar-red-text">{car.category ? car.category : car.typeCar.name}</h3>
                <h6 className="mb-0">
                  {car.name} <b>{translate('step1.result.carsResult.orSimilar')}</b>
                </h6>
              </div>
            </div>
            <Row className="m-0 h-100 ar-car-features">
              <div className="ar-car-features-group pl-0">
                <div className="ar-car-feature-item">
                  <i className="ar-icon-passenger ar-light-blue-3-text" />
                  <h6>
                    {car.seats} {translate('step1.result.carsResult.seats')}
                  </h6>
                </div>
                <div className="ar-car-feature-item">
                  <i className="ar-icon-doors ar-light-blue-3-text" />
                  <h6>
                    {car.doors} {translate('step1.result.carsResult.doors')}
                  </h6>
                </div>
              </div>
              <div className="ar-car-features-group">
                <div className="ar-car-feature-item">
                  <i className="ar-icon-luggage ar-light-blue-3-text" />
                  <h6>
                    {car.bags_big} {translate('step1.result.carsResult.bigBags')}
                  </h6>
                </div>
                <div className="ar-car-feature-item">
                  <i className="ar-icon-carry-on ar-light-blue-3-text" />
                  <h6>
                    {car.bags_small} {translate('step1.result.carsResult.smallBags')}
                  </h6>
                </div>
              </div>
              <div className="ar-car-features-group ">
                <div className="ar-car-feature-item">
                  <i className="ar-icon-transmission ar-light-blue-3-text" />
                  <h6>
                    {translate('step1.result.carsResult.gear')} {car.gear}
                  </h6>
                </div>
                <div className="ar-car-feature-item">
                  {car.air ? (
                    <>
                      <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                      <h6>{translate('step1.result.carsResult.air')}</h6>
                    </>
                  ) : (
                    <i>&nbsp;</i>
                  )}
                </div>
              </div>
            </Row>
          </Row>
          <Row className="ar-car-bottom">
            <div className="ar-car-left">
              <Row className="m-0 h-100">
                <Col xl="6" lg="6" className="pr-0 ar-car-image">
                  <div className="ar-car-image-container">
                    <div className="ar-car-rate">{this.renderRating(car.rating)}</div>
                    <img src={car.image} alt="Car image" />
                  </div>
                  <div className="ar-car-featured">
                    {car.featured ? (
                      <div className="ar-car-featured-label">
                        <span className="ar-icon-featured-car va-middle" />{' '}
                        {translate('step1.result.carsResult.featured')}
                      </div>
                    ) : (
                      <div className="ar-car-featured-label-empty" />
                    )}
                  </div>
                </Col>
                <Col xl="6" lg="6" className="ar-car-data">
                  <div className="ar-car-data-text">
                    <div className="ar-icon-check-solid d-flex fs--1 ar-green-text">
                      <h6 className="mt--1 ml-2 ar-blue-0-text mb-3">{translate('step1.result.carsResult.cancel')}</h6>
                    </div>
                    <div className="ar-icon-info d-flex fs--1">
                      <h6 className="mt--1 ml-2">{translate('step1.result.carsResult.advise')}</h6>
                    </div>
                  </div>
                  <div className="ar-car-data-button-container">
                    <CustomButton
                      text={translate('step1.result.carsResult.additionalInformation')}
                      event={this.props.showAditionalModal}
                      color={'white-0'}
                      fontSize={'fs--2'}
                      name={'ar-car-data-button'}
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="ar-car-right">
              <div className=" ar-car-price-container">
                <PriceCarousel activeIndex={this.state.page - 1} items={this.renderPrice(car)} />
                <div className="ar-car-chevron">
                  <span
                    onClick={() => (this.state.page > 1 ? this.setState({ page: this.state.page - 1 }) : null)}
                    className={
                      'ar-icon-chevron-left ' +
                      (this.state.page > 1 && car.rates.length > 2 ? ' ar-price-enabled' : null)
                    }
                  />
                  <span
                    onClick={() =>
                      car.rates.length / 2 > this.state.page ? this.setState({ page: this.state.page + 1 }) : null
                    }
                    className={
                      'ar-icon-chevron-right ' + (this.state.page < car.rates.length / 2 ? ' ar-price-enabled' : null)
                    }
                  />
                </div>
              </div>
            </div>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

CarsResult.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
  showDetailModal: PropTypes.func,
  showAditionalModal: PropTypes.func,
  selectCar: PropTypes.func,
  showLoader: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(CarsResult);
