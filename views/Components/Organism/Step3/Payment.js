import React from 'react';
import { Button, Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

  handleOnSelect = (value, propertyIndex) => {};

  handleOnChange = (index) => {};

  render() {
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
                    id={1}
                    type="radio"
                    checked={true}
                    // onClick={(e) => this.props.handleOnChange(key)}
                  />
                  <label className="custom-control-label ar-payment-radio-button" htmlFor="paymentWay">
                    Pagar con Tarjeta de Crédito / Débito
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    className="custom-control-input"
                    name={'paymentWay'}
                    id={2}
                    type="radio"
                    checked={false}
                    // onClick={(e) => this.props.handleOnChange(key)}
                  />
                  <label className="custom-control-label ar-payment-radio-button" htmlFor="paymentWay">
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
};

const mapStateToProps = (state) => {
  return state.step3Reducer;
};

export default connect(mapStateToProps)(Payment);
