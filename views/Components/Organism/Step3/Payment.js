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
      paymentWaySelected: true,
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

  render() {
    const error = this.state.error;
    return (
      <Card className="card-frame ar-payment">
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
                >
                  Siguiente
                  <i className="ar-icon-chevron-right" />
                </Button>
              </div>
            </div>
          ) : null}
          {this.state.paymentWaySelected ? (
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
                      classes={'ar-select-country'}
                      handleOnSelectClientType={this.handleOnSelect}
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
              <div className="m-auto d-flex align-items-center justify-content-center">
                <Button
                  className="btn-icon ar-round-button ar-payment-button-next box-shadow"
                  color="red-0"
                  type="button"
                >
                  Siguiente
                  <i className="ar-icon-chevron-right" />
                </Button>
              </div>
            </div>
          ) : null}
        </Card>
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
