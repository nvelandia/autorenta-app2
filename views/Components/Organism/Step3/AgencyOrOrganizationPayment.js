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

class AgencyOrOrganizationPayment extends React.Component {
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
      <>
        <Card className="card-frame ar-payment-2">
          <div className="ar-payment-info">
            <div className="ar-payment-info-left">
              <i className="ar-icon-total-price" />
              <h6>Valor total de la renta:</h6>
              <strong>USD 1356.00</strong>
            </div>
            <div className="ar-payment-info-center">
              <i className="ar-icon-comission" />
              <h6>Descuento AutoRenta (sólo prepago):</h6>
              <strong>15% (USD 203.40)</strong>
            </div>
            <div className="ar-payment-info-right">
              <i className="ar-icon-net-payment" />
              <h6>Neto a pagar (sólo prepago):</h6>
              <strong>USD 1152.60</strong>
            </div>
          </div>
        </Card>
        <Card className="card-frame ar-payment-2">
          <div className="ar-payment-options-container">
            {!this.state.payed ? (
              !this.state.paymentWaySelected ? (
                <Card className="ar-payment-options-card ar-red-border shadow-none">
                  <div className="ar-payment-option-card-header">
                    <i className="ar-icon-online-payment ar-red-text" />
                    <h5 className="ar-red-text">Pagar esta reserva con tarjeta de crédito</h5>
                    <h6>El voucher y la factura se enviarán por E-mail y se cargarán en su perfil de usuario.</h6>
                  </div>
                  <div className="ar-payment-option-card-body">
                    <h6 className="ar-payment-radios-button-title">Seleccione el método de pago:</h6>
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
                  </div>
                  <div className="ar-payment-option-card-footer">
                    <Button
                      className="btn-icon ar-round-button ar-payment-next-button box-shadow"
                      color="red-0"
                      type="button"
                      onClick={() => this.handleNextClick()}
                    >
                      Siguiente
                      <i className="ar-icon-chevron-right" />
                    </Button>
                  </div>
                </Card>
              ) : this.state.paymentWay === 'creditCard' ? (
                <Card className="ar-payment-options-card ar-red-border shadow-none">
                  <div className="ar-payment-option-card-header">
                    <i className="ar-icon-online-payment ar-red-text" />
                    <h5 className="ar-red-text">Pagar esta reserva con tarjeta de crédito</h5>
                    <h6>El voucher y la factura se enviarán por E-mail y se cargarán en su perfil de usuario.</h6>
                  </div>
                  <div className="ar-payment-option-card-body bg-ar-white-0 p-0 mt-0 mb-0">
                    <div className="ar-payment-form-credit-card-2">
                      <FormGroup
                        className={classnames(
                          {
                            focused: this.state.cardNumberFocus,
                          },
                          'ar-card-form-input-container w-100',
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
                      <Row className="m-0">
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
                      </Row>
                      <Row className="m-0">
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
                      </Row>
                    </div>
                  </div>
                  <div className="ar-payment-option-card-footer">
                    <div className="ar-payment-next-back-2">
                      <Button
                        className="btn-icon ar-round-button ar-payment-button-now box-shadow"
                        color="red-0"
                        type="button"
                      >
                        Pagar ahora
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
                </Card>
              ) : (
                <Card className="ar-payment-options-card ar-red-border shadow-none">
                  <div className="ar-payment-option-card-header">
                    <i className="ar-icon-online-payment ar-red-text" />
                    <h5 className="ar-red-text">Pagar esta reserva con tarjeta de crédito</h5>
                    <h6>El voucher y la factura se enviarán por E-mail y se cargarán en su perfil de usuario.</h6>
                  </div>
                  <div className="ar-payment-option-card-body bg-ar-white-0 p-0 mt-0 mb-0">
                    <div className="ar-payment-form-paypal-2">
                      <div className="ar-payment-paypal-img-container">
                        <img src="/svg/step3/paypal-logo-white.svg" alt="PayPal" />
                        <h6>Ingresa los datos de tu cuenta</h6>
                      </div>
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
                  <div className="ar-payment-option-card-footer">
                    <div className="ar-payment-next-back-2">
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
                </Card>
              )
            ) : (
              <Card className="card-frame ar-payment-card-payed-2 shadow-none">
                <i className="ar-icon-plan-selected" />
                <h1>¡Pago exitoso!</h1>
              </Card>
            )}
            <Card className="ar-payment-options-card shadow-none">
              <div className="ar-payment-option-card-header">
                <i className="ar-icon-bank-transfer ar-light-blue-3-text" />
                <h5 className="ar-gray-2-text">Para pagar con una transferencia bancaria</h5>
                <h6>Realiza un depósito o transferencia a la siguiente cuenta bancaria.</h6>
              </div>
              <div className="ar-payment-option-card-body">
                <h6>Banco: Wells Fargo</h6>
                <h6>Número de cuenta: 756896476</h6>
                <h6>Número de ruta: Giros Electrónicos: 1548281</h6>
                <h6>Depósitos directos: 065607879</h6>
                <h6>SWIFT: 81821814-ABA: 847519919</h6>
              </div>
              <div className="ar-payment-option-card-footer">
                <div className="ar-payment-footer-text">
                  <h6>Luego, envía el comprobante electrónico por E-mail a:</h6>
                  <h5>pagos@autorenta.com</h5>
                </div>
              </div>
            </Card>
            <Card className="ar-payment-options-card shadow-none">
              <div className="ar-payment-option-card-header">
                <i className="ar-icon-pay-on-destination ar-light-blue-3-text" />
                <h5 className="ar-gray-2-text">Para pagar esta reserva en destino (POD)</h5>
                <h6>Dirígete a la oficina de la compañía rentadora y menciona el número de esta reserva.</h6>
              </div>
              <div className="ar-payment-option-card-body">
                <h6 className="ar-payment-text-data">
                  El conductor titular deberá mostrar una licencia de válida y una tarjeta de crédito internacional a su
                  nombre al momento de retirar el vehículo. Sobre la misma, la compañía rentadora realizará el bloqueo
                  correspondiente a modo de garantía.
                </h6>
              </div>
              <div className="ar-payment-option-card-footer">
                <div className="ar-payment-footer-text">
                  <h6>Presenta en el mostrador el número de reserva:</h6>
                  <h5>26458978MX1</h5>
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </>
    );
  }
}

AgencyOrOrganizationPayment.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
  loadCountries: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step3Reducer;
};

export default connect(mapStateToProps)(AgencyOrOrganizationPayment);
