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
