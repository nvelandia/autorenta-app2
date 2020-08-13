import React from 'react';
import classnames from 'classnames';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import ProgressBar from '../../Atoms/ProgressBar';
import RangeDatePicker from '../../Atoms/RangeDatePicker';
import CustomDropDown from '../../Atoms/CustomDropDown';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
        rating.push(<i className="ar-icon-star-filled ar-yellow-text fs--2" />);
      } else {
        rating.push(<i className="ar-icon-star-regular ar-light-blue-3-text fs--2" />);
      }
    }
    return rating;
  };

  renderPrice = (car) => {
    const prices = car.rates.map((rate) => {
      return (
        <Col className="p-2">
          <Card className="text-center ar-car-price">
            <CardHeader className="bg-transparent ar-car-price-title">
              <h4 className="mb-0">{rate.name}</h4>
            </CardHeader>
            <CardBody className="ar-car-price-body">
              <div className="ar-car-price-details">
                <p>
                  <i className="ar-icon-info va-middle" /> Ver detalle de esta tarifa
                </p>
              </div>
              <CardText className="mb-2">
                <h1 className="ar-car-price-price">{rate.price}</h1>
              </CardText>
              <Button className=" btn-icon ar-round-button ar-car-price-button" color="red-0" href="">
                <span className="nav-link-inner--text">Reservar ahora </span>
                <span className="btn-inner--icon">
                  <span className="ar-icon-chevron-right va-middle" />
                </span>
              </Button>
            </CardBody>
          </Card>
        </Col>
      );
    });

    if (this.state.page === 1) {
      return (
        <>
          {prices[0]}
          {prices[1]}
        </>
      );
    } else {
      return (
        <>
          {prices[2]}
          {prices[3]}
        </>
      );
    }
  };

  render() {
    const { car } = this.props;
    return (
      <Card className="card-frame ar-car-result">
        <CardBody className="p-0">
          <Row className="ar-car-top m-0">
            <Col xl="5" lg="5">
              <div className="ar-car-top-left">
                <div className="ar-car-company-logo">
                  <img src={car.company.logo} alt={'Company logo'} />
                </div>
                <div className="ar-car-type">
                  <h3 className="ar-red-text">{car.typeCar.name}</h3>
                  <h6 className="mb-0">{car.name}</h6>
                </div>
              </div>
            </Col>
            <Col xl="7" lg="7" className="ar-car-features">
              <Row className="m-0 h-100">
                <Col className="ar-car-features-group pr-0">
                  <div className="ar-car-feature-item">
                    <i className="ar-icon-passenger ar-light-blue-3-text" />
                    <h6>{car.seats} asientos</h6>
                  </div>
                  <div className="ar-car-feature-item">
                    <i className="ar-icon-doors ar-light-blue-3-text" />
                    <h6>{car.doors} puertas</h6>
                  </div>
                </Col>
                <Col className="ar-car-features-group pl-0">
                  <div className="ar-car-feature-item">
                    <i className="ar-icon-luggage ar-light-blue-3-text" />
                    <h6>{car.bags_big} maletas grandes</h6>
                  </div>
                  <div className="ar-car-feature-item">
                    <i className="ar-icon-carry-on ar-light-blue-3-text" />
                    <h6>{car.bags_small} maletas pequeñas</h6>
                  </div>
                </Col>
                <Col className="ar-car-features-group px-0">
                  <div className="ar-car-feature-item">
                    <i className="ar-icon-transmission ar-light-blue-3-text" />
                    <h6>Transmisión {car.gear}</h6>
                  </div>
                  <div className="ar-car-feature-item">
                    <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                    <h6>{car.doors ? 'Aire acondicionado' : null}</h6>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="ar-car-bottom m-0">
            <Col xl="6" lg="6" className="ar-car-left">
              <Row className="m-0 h-100">
                <Col xl="6" lg="6" className="pr-0 ar-car-image">
                  <div className="mt-2">
                    <div className="mb-2">{this.renderRating(car.rating)}</div>
                    <img src={car.image} alt="Car image" />
                  </div>
                  <div className="ar-car-featured">
                    {car.featured ? (
                      <div className="ar-car-featured-label">
                        <span className="ar-icon-featured-car va-middle fs-1" /> ¡Destacado!
                      </div>
                    ) : (
                      <div className="ar-car-featured-label-empty" />
                    )}
                  </div>
                </Col>
                <Col xl="6" lg="6" className="ar-car-data">
                  <div className="ar-car-data-text">
                    <div className="ar-icon-check-solid d-flex fs--1 ar-green-text">
                      <h6 className="mt--1 ml-2 ar-blue-0-text">Cancela gratis tu reserva con 45hs de anticipación.</h6>
                    </div>
                    <div className="ar-icon-info d-flex fs--1">
                      <h6 className="mt--1 ml-2">
                        Algunas rentadoras cobran un cargo extra a conductores menores de 25 años.
                      </h6>
                    </div>
                  </div>
                  <Button className="btn-icon ar-round-button ar-car-data-button" color="blue-4" type="button">
                    <span className="btn-inner--text">Información adicional</span>
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xl="6" lg="6" className="ar-car-right">
              <Row className="m-0 align-items-center">
                {this.renderPrice(car)}
                <div className="ar-car-chevron">
                  <span
                    onClick={() => (car.rates.length !== 1 ? this.setState({ page: 1 }) : null)}
                    className={
                      'ar-icon-chevron-left ' +
                      (this.state.page !== 1 && car.rates.length !== 1 ? ' ar-price-enabled' : null)
                    }
                  />
                  <span
                    onClick={() => (car.rates.length !== 1 ? this.setState({ page: 2 }) : null)}
                    className={
                      'ar-icon-chevron-right ' +
                      (this.state.page !== 2 && car.rates.length !== 1 ? ' ar-price-enabled' : null)
                    }
                  />
                </div>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

CarsResult.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(CarsResult);
