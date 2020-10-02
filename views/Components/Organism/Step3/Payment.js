import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Row,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as classnames from 'classnames';
import CreditCardPayment from './CreditCardPayment';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { InjectedCheckoutForm } from '../../Atoms/StripeComponent';

const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentWay: 'creditCard',
      paymentWaySelected: false,
      payed: false,
      error: {},
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {
    this.dispatch(this.props.loadCountries());
  };

  handleOnChangePaymentWay = (value) => {
    this.setState({ paymentWay: value });
  };

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleNextClick = () => {
    this.setState({ paymentWaySelected: true });
  };

  handleBackClick = () => {
    this.setState({ paymentWaySelected: false });
  };

  render() {
    const error = this.state.error;
    return (
      <Card className="card-frame ar-payment">
        {!this.state.payed ? (
          <Card className="card-frame ar-payment-card-top shadow-none">
            <div className="ar-payment-left">
              <h6 className="ar-payment-left-title">
                <i className="ar-icon-online-payment" />
                Paga esta reserva con tu tarjeta de crédito
              </h6>
              <h6 className="ar-payment-left-text">
                ¡Paga ahora y obtén un descuento de <strong>USD&nbsp;50.00</strong> en el precio total de esta reserva!
              </h6>
            </div>
            {!this.state.paymentWaySelected ? (
              <div className="ar-payment-right">
                <Card className="card-frame ar-payment-options-card">
                  <div className="ar-payment-option-text">
                    <h6>Por favor selecciona el método de pago para esta reserva:</h6>
                  </div>
                  <div className="ar-payment-radios-button-container">
                    <div className="custom-control custom-radio ">
                      <input
                        className="custom-control-input"
                        name={'paymentWay'}
                        id={'1'}
                        type="radio"
                        checked={this.state.paymentWay === 'creditCard'}
                        onClick={() => this.handleOnChangePaymentWay('creditCard')}
                      />
                      <label className="custom-control-label ar-payment-radio-button" htmlFor="1">
                        Pagar con Tarjeta de Crédito / Débito
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="custom-control-input"
                        name={'paymentWay'}
                        id={'2'}
                        type="radio"
                        checked={this.state.paymentWay === 'PayPal'}
                        onClick={() => this.handleOnChangePaymentWay('PayPal')}
                      />
                      <label className="custom-control-label ar-payment-radio-button" htmlFor="2">
                        PayPal
                      </label>
                    </div>
                  </div>
                </Card>
                <div className="m-auto d-flex align-items-center justify-content-center">
                  <Button
                    className="btn-icon ar-round-button ar-payment-button-next box-shadow"
                    color="red-0"
                    type="button"
                    onClick={() => this.handleNextClick()}
                  >
                    Siguiente
                    <i className="ar-icon-chevron-right" />
                  </Button>
                </div>
              </div>
            ) : null}
            {this.state.paymentWaySelected && this.state.paymentWay === 'creditCard' ? (
              <Elements stripe={stripePromise}>
                <InjectedCheckoutForm />
                <CreditCardPayment handleBackClick={this.handleBackClick} />
              </Elements>
            ) : null}
            {this.state.paymentWaySelected && this.state.paymentWay === 'PayPal' ? (
              <div className="ar-payment-right fade-in">
                <div className="ar-payment-form-paypal">
                  <div className="ar-payment-paypal-img-container">
                    <img src="/svg/step3/paypal-logo-white.svg" alt="Paypal" />
                    <h6>Ingresa los datos de tu cuenta</h6>
                  </div>
                  <div className="ar-payment-form-paypal">
                    <Row className="ar-payment-form-top">
                      <FormGroup
                        className={classnames(
                          {
                            focused: this.state.emailFocus,
                          },
                          'ar-payment-paypal-inputs',
                        )}
                      >
                        <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                          <Input
                            name="email"
                            onChange={this.handleOnChange}
                            className=" ar-round-input ar-card-form-input"
                            placeholder="Direccion de E-mail"
                            value={this.state.email}
                            type="text"
                            autoComplete="off"
                            onFocus={() => this.setState({ emailFocus: true })}
                            onBlur={() => this.setState({ emailFocus: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Row>
                    <div className="ar-payment-form-bottom">
                      <FormGroup
                        className={classnames(
                          {
                            focused: this.state.passwordFocus,
                          },
                          'ar-payment-paypal-inputs',
                        )}
                      >
                        <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                          <Input
                            name="password"
                            onChange={this.handleOnChange}
                            className=" ar-round-input ar-card-form-input"
                            placeholder="Contraseña"
                            value={this.state.password}
                            type="password"
                            autoComplete="off"
                            onFocus={() => this.setState({ passwordFocus: true })}
                            onBlur={() => this.setState({ passwordFocus: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                    </div>
                  </div>
                </div>
                <div className="ar-payment-next-back-paypal">
                  <Button
                    className="btn-icon ar-round-button ar-payment-button-now box-shadow"
                    color="red-0"
                    type="button"
                  >
                    Iniciar sesión
                    <i className="ar-icon-chevron-right" />
                  </Button>
                  <Button
                    className="btn-icon ar-round-button ar-payment-button-back-2 shadow-none"
                    color="white-0"
                    type="button"
                    onClick={() => this.handleBackClick()}
                  >
                    <i className="ar-icon-return" />
                    Volver
                  </Button>
                </div>
              </div>
            ) : null}
          </Card>
        ) : (
          <Card className="card-frame ar-payment-card-top-payed shadow-none">
            <i className="ar-icon-plan-selected" />
            <h1>¡Pago exitoso!</h1>
          </Card>
        )}
        <Card className="card-frame ar-payment-card-bottom shadow-none">
          <div className="ar-payment-left">
            <h6 className="ar-payment-left-title">
              <i className=" ar-icon-pay-on-destination " />
              Para pagar esta reserva en destino (POD)
            </h6>
            <h6 className="ar-payment-left-text">
              Dirígete a la oficina de la compañía rentadora y menciona el número de esta reserva
            </h6>
          </div>
          <div className="ar-payment-right">
            <Card className="card-frame ar-payment-options-card">
              <div className="ar-payment-option-text">
                <h6>
                  El conductor titular deberá mostrar una licencia de válida y una tarjeta de crédito internacional a su
                  nombre al momento de retirar el vehículo. Sobre la misma, la compañía rentadora realizará el bloqueo
                  correspondiente a modo de garantía.
                </h6>
              </div>
            </Card>
            <div className="ar-payment-number-reserve">
              <h5>Presenta en el mostrador el número de reserva:</h5>
              <h4>{this.props.reservation.code}</h4>
            </div>
          </div>
        </Card>
      </Card>
    );
  }
}

Payment.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
  loadCountries: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step3Reducer;
};

export default connect(mapStateToProps)(Payment);
