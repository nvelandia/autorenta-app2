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
                <img src="/svg/searchView/info-icon-red.svg" alt={'info'} />
                <p>Ver detalle de esta tarifa</p>
              </div>
              <CardText>
                <h1 className="ar-car-price-price">{rate.price}</h1>
              </CardText>
              <Button className=" btn-icon ar-round-button ar-car-price-button" color="red-0" href="">
                <span className="nav-link-inner--text">Reservar ahora </span>
                <span className="btn-inner--icon">
                  <span className="icon-chevron-right" />
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
                  <h6>{car.name}</h6>
                </div>
              </div>
            </Col>
            <Col xl="7" lg="7" className="ar-car-features">
              <Row className="m-0 h-100">
                <Col className="ar-car-features-group pr-0">
                  <div className="ar-car-feature-item">
                    <img src="/svg/searchView/passenger-icon.svg" alt="passengers" />
                    <h6>{car.seats} asientos</h6>
                  </div>
                  <div className="ar-car-feature-item">
                    <img src="/svg/searchView/doors-icon.svg" alt="passengers" />
                    <h6>{car.doors} puertas</h6>
                  </div>
                </Col>
                <Col className="ar-car-features-group pl-0">
                  <div className="ar-car-feature-item">
                    <img src="/svg/searchView/luggage-icon.svg" alt="passengers" />
                    <h6>{car.bags_big} maleta grande</h6>
                  </div>
                  <div className="ar-car-feature-item">
                    <img src="/svg/searchView/carry-on-icon.svg" alt="passengers" />
                    <h6>{car.bags_small} maleta pequeña</h6>
                  </div>
                </Col>
                <Col className="ar-car-features-group px-0">
                  <div className="ar-car-feature-item">
                    <img src="/svg/searchView/transmission-icon.svg" alt="passengers" />
                    <h6>Transmisión {car.gear}</h6>
                  </div>
                  <div className="ar-car-feature-item">
                    <img src="/svg/searchView/air-conditioning-icon.svg" alt="passengers" />
                    <h6>{car.doors ? 'Aire acondicionado' : null}</h6>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="ar-car-bottom m-0">
            <Col xl="5" lg="5" className="ar-car-left">
              <Row className="m-0">
                <Col xl="6" lg="6" className="pr-0">
                  <img width="100%" src={car.image} alt="Car image" />
                </Col>
                <Col xl="6" lg="6">
                  <h6>Cancela gratis tu reserva con 45hs de anticipación.</h6>
                  <h6>Algunas rentadoras cobran un cargo extra a conductores menores de 25 años.</h6>
                </Col>
              </Row>
              <Row></Row>
            </Col>
            <Col xl="7" lg="7" className="ar-car-right">
              <Row className="m-0 align-items-center">
                {this.renderPrice(car)}
                <div className="ar-car-chevron">
                  <span
                    onClick={() => this.setState({ page: 1 })}
                    className={'icon-chevron-left ' + (this.state.page !== 1 ? ' ar-price-enabled' : null)}
                  />
                  <span
                    onClick={() => this.setState({ page: 2 })}
                    className={'icon-chevron-right ' + (this.state.page !== 2 ? ' ar-price-enabled' : null)}
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
