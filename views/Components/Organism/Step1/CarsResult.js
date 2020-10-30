import React from 'react';
import { Button, Card, CardBody, CardHeader, CardText, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomButton from '../../Atoms/CustomButton';
import { pages, redirectTo } from '../../../../utils/helpers/redirectTo';
import PriceCarousel from '../../Molecules/Carousels/PriceCarousel';
import { Collections } from '@material-ui/icons';

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
    const body = {
      ...this.props.searchParams,
      vendor: car.company.code,
      sipp: car.type,
    };
    this.props.dispatch(this.props.selectCar(car, this.props.result.locations, body, selectedRate));
  };

  renderPrice = (car) => {
    const { translate, isMobile } = this.props;
    const prices = car.rates.map((rate, index) => {
      return (
        <Col xs="12" xl="6" lg="6" className="ar-car-price" key={index}>
          <Card className="text-center  shadow mb-0">
            <CardHeader className="bg-transparent ar-car-price-title">
              <h4 className="mb-0">{rate.name}</h4>
            </CardHeader>
            <CardBody className="ar-car-price-body">
              <div className="ar-car-price-details" onClick={() => this.props.showDetailModal(rate, car)}>
                <p>
                  <i className="ar-icon-info va-middle" /> {translate('step1.result.carsResult.seeDetails')}
                </p>
              </div>
              <div className="mb-2">
                <h1 className="ar-car-price-price">{parseFloat(rate.price).toFixed(2)}</h1>
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

    let iterations = isMobile ? prices.length : Math.ceil(prices.length / 2);
    const cleanedCards = [];

    for (let i = 0; i < iterations; i++) {
      if (isMobile) {
        cleanedCards.push(prices.slice(i * 1, i * 1 + 1));
      } else {
        cleanedCards.push(prices.slice(i * 2, i * 2 + 2));
      }
    }

    return cleanedCards;
  };

  render() {
    const { car, translate, isMobile } = this.props;
    return (
      <Card className="card-frame ar-car-result mb-3">
        {!isMobile ? (
          <CardBody className="p-0">
            <Row className="ar-car-top">
              <div className="ar-car-top-left">
                <div className="ar-car-company-logo">
                  <img src={car.company.logo} alt={'Company logo'} />
                </div>
                <div className="ar-car-type">
                  <h3 className="ar-red-text">
                    {car.category ? car.category : `${car.typeCar1.name} ${car.typeCar2.name}`}
                  </h3>
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
                <div className="ar-car-features-group pr-0">
                  <div className="ar-car-feature-item">
                    <i className="ar-icon-transmission ar-light-blue-3-text" />
                    <h6>{car.gear.name}</h6>
                  </div>
                  <div className="ar-car-feature-item">
                    {car.air.code !== 'N' ? (
                      <>
                        <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                        <h6>{car.air.name}</h6>
                      </>
                    ) : (
                      <>
                        <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                        <h6> - </h6>
                      </>
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
                        <h6 className="mt--1 ml-2 ar-blue-0-text mb-3">
                          {translate('step1.result.carsResult.cancel')}
                        </h6>
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
        ) : (
          <CardBody className="p-0 m-0 card">
            <Row className="ar-car-top pt-4">
              <Col xs="7" className="p-0 left-3">
                <div className="p-0 ar-car-company-logo-mobile">
                  <img src={car.company.logo} alt={'Company logo'} />
                </div>
              </Col>
              <Col xs="5" className="p-0">
                {car.featured ? (
                  <div className="ar-car-featured-mobile">
                    <div className="ar-car-featured-label">
                      <span className="ar-icon-featured-car va-middle" />
                      {translate('step1.result.carsResult.featured')}
                    </div>
                  </div>
                ) : (
                  <div className="ar-car-featured-mobile-empty" />
                )}
              </Col>
            </Row>
            <div className="w-100 d-flex justify-content-center">
              <span className="ar-divider" />
            </div>
            <Row className="ar-car-middle-mobile">
              <div className="ar-car-middle-mobile-left">
                <div className="ar-car-rate-mobile p-0 top-3">{this.renderRating(car.rating)}</div>
              </div>
              <Col xs="7">
                <div className="ar-car-image-container-mobile">
                  <img src={car.image} alt="Car image" />
                </div>
              </Col>
            </Row>
            <Row className="ar-car-middle-information-mobile">
              <Col xs="12" className="pl-3">
                <div className="ar-car-type">
                  <h6 className="mb-0">
                    {car.name} <b>({translate('step1.result.carsResult.orSimilar')})</b>
                  </h6>
                  <h3 className="ar-red-text">
                    {car.category ? car.category : `${car.typeCar1.name} ${car.typeCar2.name}`}
                  </h3>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-start ar-car-feature-item-row-mobile">
              <div className="ar-car-features">
                <Row className="m-0 h-100 justify-content-around">
                  <div className="ar-car-features-group">
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-passenger ar-light-blue-3-text" />
                      <h6>
                        {car.seats} {translate('step2.carSelected.seats')}
                      </h6>
                    </div>
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-doors ar-light-blue-3-text" />
                      <h6>
                        {car.doors} {translate('step2.carSelected.doors')}
                      </h6>
                    </div>
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-luggage ar-light-blue-3-text" />
                      <h6>
                        {car.bags_big} {translate('step2.carSelected.bigBags')}
                      </h6>
                    </div>
                  </div>
                  <div className="ar-car-features-group">
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-carry-on ar-light-blue-3-text" />
                      <h6>
                        {car.bags_small} {translate('step2.carSelected.smallBags')}
                      </h6>
                    </div>
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-transmission ar-light-blue-3-text" />
                      <h6>{car.gear.name}</h6>
                    </div>
                    <div className="ar-car-feature-item">
                      {car.air.code !== 'N' ? (
                        <>
                          <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                          <h6>{car.air.name}</h6>
                        </>
                      ) : (
                        <>
                          <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                          <h6> - </h6>
                        </>
                      )}
                    </div>
                  </div>
                </Row>
              </div>
            </Row>
            <div className="w-100 d-flex justify-content-center mt-3">
              <span className="ar-divider" />
            </div>
            <Row className="pt-3 ar-car-bottom-mobile mt-2 mx-0">
              <div className="ar-car-bottom">
                <div className="ar-car-data-text mb-3">
                  <div className="ar-icon-check-solid ar-data-icon ar-green-text">
                    <p className="ml-2 ar-blue-0-text">{translate('step2.carSelected.cancel')}</p>
                  </div>
                </div>
                <div className="ar-car-data-text">
                  <div className="ar-icon-info ar-data-icon ">
                    <p className="ml-2 ">{translate('step2.carSelected.advise')}</p>
                  </div>
                </div>
              </div>
              <div className="ar-car-data pt-3 pb-3">
                <CustomButton
                  text={translate('step1.result.carsResult.additionalInformation')}
                  event={this.props.showAditionalModal}
                  color={'white-0'}
                  fontSize={'fs--2'}
                  name={'ar-car-data-button-container-mobile'}
                />
              </div>
            </Row>
            <div className="ar-car-bottom">
              <div className="ar-car-right">
                <div className=" ar-car-price-container">
                  <PriceCarousel activeIndex={this.state.page - 1} items={this.renderPrice(car)} isMobile={isMobile} />
                  <div className="ar-car-chevron">
                    <span
                      onClick={() => (this.state.page > 0 ? this.setState({ page: this.state.page - 1 }) : null)}
                      className={
                        'ar-icon-chevron-left ' +
                        (this.state.page > 1 && car.rates.length > 5 ? ' ar-price-enabled' : null)
                      }
                    />
                    <span
                      onClick={() =>
                        car.rates.length > this.state.page ? this.setState({ page: this.state.page + 1 }) : null
                      }
                      className={
                        'ar-icon-chevron-right ' + (this.state.page < car.rates.length ? ' ar-price-enabled' : null)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        )}
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
