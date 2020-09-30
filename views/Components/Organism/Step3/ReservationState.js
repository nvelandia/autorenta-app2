import React from 'react';
import { Row, Card, CardBody, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CancelReservationModal from '../../Molecules/Modals/CancelReservationModal';
import * as actions from '../../../../actions/generalActions';
import SearchReservationModal from '../../Molecules/Modals/SearchReservationModal';

class ReservationState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payed: false,
      showCancelReservationModal: false,
    };
    this.dispatch = props.dispatch;
  }

  handleOnSelect = (value, propertyIndex) => {};

  handleOnChange = (index) => {};

  handleOnClickCancel = () => {
    this.setState({ showCancelReservationModal: true });
  };

  hideModal = () => {
    this.setState({ showCancelReservationModal: false });
  };

  render() {
    return (
      <div className="ar-rent-state">
        <CancelReservationModal
          cancelReservation={this.props.cancelReservation}
          showModal={this.state.showCancelReservationModal}
          hideModal={this.hideModal}
        />
        {!this.state.payed ? (
          <div className="ar-rent-state-description-reserved">
            <img src="/img/custom/step3/reservation-success-image.png" alt="reservation success" />
            <div>
              <h2>¡Realizaste la reserva correctamente!</h2>
              <h6>
                Consulta más abajo las opciones de pago que te ofrecemos para esta reserva o comunicate telefónicamente
                al: <strong>954.237.4737</strong>
              </h6>
            </div>
          </div>
        ) : (
          <div className="ar-rent-state-description-payed">
            <img src="/img/custom/step3/payment-success-image.png" alt="reservation success" />
            <div>
              <h2>¡Pagaste tu reserva correctamente!</h2>
              <h6>
                Cobramos <strong>USD 1306.00</strong> a tu tarjeta finalizada en <strong>4242</strong>. ¡Obtuviste un
                descuento de USD 50.00!
              </h6>
              <h5>En breve te enviaremos la factura y el voucher correspondiente</h5>
            </div>
          </div>
        )}
        <Card className="card-frame ar-ren-state-card">
          <CardBody className="p-0">
            <div className="ar-rent-state-body">
              <div className="ar-rent-state-left">
                <i className="ar-icon-reservation-number" />
                <h6> Para gestionar tu reserva en Autorenta utiliza el número:</h6>
                <h1>{this.props.reservation.code}</h1>
              </div>
              <div className="ar-rent-state-center">
                <i className="ar-icon-email" />
                <Col>
                  <h6>Tu reserva será enviada al E-mail:</h6>
                  <h4>javier.alcibar@outlook.com</h4>
                </Col>
              </div>
              <div className="ar-rent-state-right">
                <Button
                  className="btn-icon ar-round-button ar-rent-state-button shadow"
                  color="white-0"
                  type="button"
                  onClick={this.handleOnClickCancel}
                >
                  Cancelar
                  <i className="ar-icon-chevron-right" />
                </Button>
                <Button className="btn-icon ar-round-button ar-rent-state-button shadow" color="white-0" type="button">
                  Imprimir
                  <i className="ar-icon-chevron-right" />
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

ReservationState.propTypes = {
  dispatch: PropTypes.func,
  cancelReservation: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step3Reducer;
};

export default connect(mapStateToProps)(ReservationState);
