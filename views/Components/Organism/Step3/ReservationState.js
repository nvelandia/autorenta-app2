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
      payed: this.props.reservation.sale_status_id, //puede ser 1 pendiente, 2 cancelado, 3 pagado
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

  renderEmail = () => {
    if (this.props.reservation.passenger_email.length < 36) {
      return <h4>{this.props.reservation.passenger_email}</h4>;
    } else {
      return <h4 className="ar-reduce-font-in-big">{this.props.reservation.passenger_email}</h4>;
    }
  };

  render() {
    const { translate } = this.props;
    return (
      <div className="ar-rent-state">
        <CancelReservationModal
          cancelReservation={this.props.cancelReservation}
          showModal={this.state.showCancelReservationModal}
          hideModal={this.hideModal}
          translate={translate}
        />
        {this.state.payed === 1 ? (
          <div className="ar-rent-state-description-reserved">
            <img src="/img/custom/step3/reservation-success-image.png" alt="reservation success" />
            <div>
              <h2>{translate('step3.reservationState.titleReservation')}</h2>
              <h6>
                {translate('step3.reservationState.textReservation')}
                <strong>954.237.4737</strong>
              </h6>
            </div>
          </div>
        ) : this.state.payed === 3 ? (
          <div className="ar-rent-state-description-payed">
            <img src="/img/custom/step3/payment-success-image.png" alt="reservation success" />
            <div>
              <h2>{translate('step3.reservationState.titlePayment')}</h2>
              <h6>
                {translate('step3.reservationState.textPayment1')}
                <strong>
                  USD{' '}
                  {(parseFloat(this.props.reservation.total) - parseFloat(this.props.reservation.discount)).toFixed(2)}
                </strong>
                {translate('step3.reservationState.textPayment2')}
                <strong>4242 (este numero esta hardcodeado)</strong>
                {this.props.reservation.discount !== '0' ? (
                  <>
                    {translate('step3.reservationState.textPayment3')}USD {this.props.reservation.discount}!
                  </>
                ) : null}
              </h6>
              <h5>{translate('step3.reservationState.textPayment4')}</h5>
            </div>
          </div>
        ) : null}
        <Card className="card-frame ar-ren-state-card">
          <CardBody className="p-0">
            <div className="ar-rent-state-body">
              <div className="ar-rent-state-left">
                <i className="ar-icon-reservation-number" />
                <h6>{translate('step3.reservationState.subtitle')}</h6>
                <h1>{this.props.reservation.code}</h1>
              </div>
              {!this.props.reservation.organization ? (
                <div className="ar-rent-state-center">
                  <i className="ar-icon-email" />
                  <Col>
                    <h6>{translate('step3.reservationState.emailText')}</h6>
                    {this.renderEmail()}
                  </Col>
                </div>
              ) : this.props.reservation.organization.type === 1 ? (
                <div className="ar-rent-state-center ar-finger">
                  <i className="ar-icon-finger-print" />
                  <Row className="mx-0 justify-content-between align-items-center">
                    <h6>{translate('step3.reservationState.agencyText')}</h6>
                    <h1>{this.props.reservation.organization.customer_id}</h1>
                  </Row>
                </div>
              ) : (
                <div className="ar-rent-state-center ar-finger">
                  <i className="ar-icon-finger-print" />
                  <Row className="mx-0 justify-content-between align-items-center">
                    <h6>{translate('step3.reservationState.organizationText')}</h6>
                    <h1 className="mr-3">{this.props.reservation.organization.customer_id}</h1>
                  </Row>
                </div>
              )}
              <div className="ar-rent-state-right">
                <Button
                  className="btn-icon ar-round-button ar-rent-state-button shadow"
                  color="white-0"
                  type="button"
                  onClick={this.handleOnClickCancel}
                >
                  {translate('step3.reservationState.cancel')}
                  <i className="ar-icon-chevron-right" />
                </Button>
                <Button className="btn-icon ar-round-button ar-rent-state-button shadow" color="white-0" type="button">
                  {translate('step3.reservationState.print')}
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
