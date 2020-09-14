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
        rating.push(<i className="ar-icon-star-filled ar-yellow-text" />);
      } else {
        rating.push(<i className="ar-icon-star-regular ar-light-blue-3-text" />);
      }
    }
    return rating;
  };

  handleOnClick = (car) => {
    this.props.dispatch(this.props.showLoader());
    this.props.dispatch(this.props.selectCar(car, this.props.result.locations, this.props.searchParams));
    redirectTo(pages.step2);
    window.scrollTo(0, 0);
  };

  renderPrice = (car) => {
    const prices = car.rates.map((rate, index) => {
      return (
        <Col xl="6" lg="6" className="ar-car-price" key={index}>
          <Card className="text-center  shadow mb-0">
            <CardHeader className="bg-transparent ar-car-price-title">
              <h4 className="mb-0">{rate.name}</h4>
            </CardHeader>
            <CardBody className="ar-car-price-body">
              <div className="ar-car-price-details" onClick={() => this.props.showDetailModal(rate.charges)}>
                <p>
                  <i className="ar-icon-info va-middle" /> Ver detalle del plan
                </p>
              </div>
              <div className="mb-2">
                <h1 className="ar-car-price-price">{rate.price}</h1>
              </div>
              <CustomButton
                text={'Reservar ahora'}
                event={() => this.handleOnClick(car)}
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

    return [prices.slice(0, 2), prices.slice(2, 4)];

    // if (this.state.page === 1) {
    //   return (
    //     <>
    //       {prices[0]}
    //       {prices[1]}
    //     </>
    //   );
    // } else {
    //   return (
    //     <>
    //       {prices[2]}
    //       {prices[3]}
    //     </>
    //   );
    // }
  };

  render() {
    const { car } = this.props;
    return (
      <Card className="card-frame ar-car-result mb-3">
        <CardBody className="p-0">
          <Row className="ar-car-top">
            <div className="ar-car-top-left">
              <div className="ar-car-company-logo">
                <img src={car.company.logo} alt={'Company logo'} />
              </div>
              <div className="ar-car-type">
                <h3 className="ar-red-text">{car.typeCar.name}</h3>
                <h6 className="mb-0">{car.name.toLowerCase()}</h6>
              </div>
            </div>
            <Row className="m-0 h-100 ar-car-features">
              <div className="ar-car-features-group pl-0">
                <div className="ar-car-feature-item">
                  <i className="ar-icon-passenger ar-light-blue-3-text" />
                  <h6>{car.seats} asientos</h6>
                </div>
                <div className="ar-car-feature-item">
                  <i className="ar-icon-doors ar-light-blue-3-text" />
                  <h6>{car.doors} puertas</h6>
                </div>
              </div>
              <div className="ar-car-features-group">
                <div className="ar-car-feature-item">
                  <i className="ar-icon-luggage ar-light-blue-3-text" />
                  <h6>{car.bags_big} maletas grandes</h6>
                </div>
                <div className="ar-car-feature-item">
                  <i className="ar-icon-carry-on ar-light-blue-3-text" />
                  <h6>{car.bags_small} maletas pequeñas</h6>
                </div>
              </div>
              <div className="ar-car-features-group ">
                <div className="ar-car-feature-item">
                  <i className="ar-icon-transmission ar-light-blue-3-text" />
                  <h6>Transmisión {car.gear}</h6>
                </div>
                <div className="ar-car-feature-item">
                  {car.air ? (
                    <>
                      <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                      <h6>Aire acondicionado</h6>
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
                  <div>
                    <div className="ar-car-rate">{this.renderRating(car.rating)}</div>
                    <img src={car.image} alt="Car image" />
                  </div>
                  <div className="ar-car-featured">
                    {car.featured ? (
                      <div className="ar-car-featured-label">
                        <span className="ar-icon-featured-car va-middle" /> ¡Destacado!
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
                        Cancela gratis tu reserva con 48 horas de anticipación.
                      </h6>
                    </div>
                    <div className="ar-icon-info d-flex fs--1">
                      <h6 className="mt--1 ml-2">
                        Algunas rentadoras cobran un cargo extra a conductores menores de 25 años.
                      </h6>
                    </div>
                  </div>
                  <div className="ar-car-data-button-container">
                    <CustomButton
                      text={'Información adicional'}
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
                    onClick={() => (car.rates.length > 2 ? this.setState({ page: 1 }) : null)}
                    className={
                      'ar-icon-chevron-left ' +
                      (this.state.page !== 1 && car.rates.length > 2 ? ' ar-price-enabled' : null)
                    }
                  />
                  <span
                    onClick={() => (car.rates.length > 2 ? this.setState({ page: 2 }) : null)}
                    className={
                      'ar-icon-chevron-right ' +
                      (this.state.page !== 2 && car.rates.length > 2 ? ' ar-price-enabled' : null)
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
