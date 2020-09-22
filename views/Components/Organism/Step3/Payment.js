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
import CountryDropdown from '../../Molecules/dropdowns/CountryDropdown';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentWay: '',
      countrySelected: '',
      cardNumber: '',
      cardNumberFocus: false,
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
              <div className="ar-payment-right">
                <div className="ar-payment-form-credit-card">
                  <Row className="ar-payment-form-top">
                    <FormGroup
                      className={classnames(
                        {
                          focused: this.state.cardNumberFocus,
                        },
                        'ar-card-form-input-container',
                      )}
                    >
                      <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                        <Input
                          name="cardNumber"
                          onChange={this.handleOnChange}
                          className=" ar-round-input-left ar-card-form-input"
                          placeholder="Número de la tarjeta"
                          value={this.state.cardNumber}
                          type="text"
                          autoComplete="off"
                          onFocus={() => this.setState({ cardNumberFocus: true })}
                          onBlur={() => this.setState({ cardNumberFocus: false })}
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText className="ar-round-input-right">
                            <img src="/img/custom/step3/amex-card.png" />
                            <img src="/img/custom/step3/visa-card.jpg" />
                            <img src="/img/custom/step3/master-card.jpg" />
                            <img src="/img/custom/step3/visa-electron-card.jpg" />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                      className={classnames(
                        {
                          focused: this.state.countrySelected,
                        },
                        'ar-select-country-container',
                      )}
                    >
                      <CountryDropdown
                        items={this.props.countries}
                        title={'País'}
                        color={'white-0'}
                        name={'countrySelected'}
                        classes={'ar-select-country'}
                        handleOnSelect={this.handleOnSelect}
                      />
                    </FormGroup>
                  </Row>
                  <div className="ar-payment-form-bottom">
                    <FormGroup
                      className={classnames(
                        {
                          focused: this.state.securityCodeFocus,
                        },
                        'ar-payment-security-code',
                      )}
                    >
                      <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                        <Input
                          name="securityCode"
                          onChange={this.handleOnChange}
                          className=" ar-round-input ar-card-form-input"
                          placeholder="CVC (código de seguridad)"
                          value={this.state.securityCode}
                          type="text"
                          autoComplete="off"
                          onFocus={() => this.setState({ securityCodeFocus: true })}
                          onBlur={() => this.setState({ securityCodeFocus: false })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                      className={classnames(
                        {
                          focused: this.state.expirationDateFocus,
                        },
                        'ar-payment-expiration-date',
                      )}
                    >
                      <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                        <Input
                          name="expirationDate"
                          onChange={this.handleOnChange}
                          className=" ar-round-input ar-card-form-input"
                          placeholder="MM/AAAA"
                          value={this.state.expirationDate}
                          type="text"
                          autoComplete="off"
                          onFocus={() => this.setState({ expirationDateFocus: true })}
                          onBlur={() => this.setState({ expirationDateFocus: false })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                      className={classnames(
                        {
                          focused: this.state.postalCodeFocus,
                        },
                        'ar-payment-postal-code',
                      )}
                    >
                      <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                        <Input
                          name="postalCode"
                          onChange={this.handleOnChange}
                          className=" ar-round-input ar-card-form-input"
                          placeholder="Códigal postal"
                          value={this.state.postalCode}
                          type="text"
                          autoComplete="off"
                          onFocus={() => this.setState({ postalCodeFocus: true })}
                          onBlur={() => this.setState({ postalCodeFocus: false })}
                        />
                      </InputGroup>
                    </FormGroup>
                  </div>
                </div>
                <div className="ar-payment-next-back">
                  <Button
                    className="btn-icon ar-round-button ar-payment-button-now box-shadow w-100"
                    color="red-0"
                    type="button"
                  >
                    Pagar esta reserva ahora
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
            {this.state.paymentWaySelected && this.state.paymentWay === 'PayPal' ? (
              <div className="ar-payment-right">
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
              <h4>26458978MX1</h4>
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
