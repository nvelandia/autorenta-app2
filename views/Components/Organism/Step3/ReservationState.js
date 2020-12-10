import React from 'react';
import { Row, Card, CardBody, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CancelReservationModal from '../../Molecules/Modals/CancelReservationModal';

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

  render() {
    const { translate, isMobile, isTablet, isSmallTablet } = this.props;
    return (
      <div className="ar-rent-state">
        <CancelReservationModal
          cancelReservation={this.props.cancelReservation}
          showModal={this.state.showCancelReservationModal}
          hideModal={this.hideModal}
          translate={translate}
          isMobile={isMobile}
          isTablet={isTablet}
          isSmallTablet={isSmallTablet}
        />
        {this.state.payed === 1 ? (
          <div className="ar-rent-state-description-reserved">
            <img src="/img/custom/step3/reservation-success-image.png" alt="reservation success" />
            <div>
              <h2>{translate('step3.reservationState.titleReservation')}</h2>
              <h6>
                {translate('step3.reservationState.textReservation')}
                <strong>954.237.4737. </strong>
                {this.props.reservation.organization
                  ? translate('step3.reservationState.textPayment25')
                  : translate('step3.reservationState.textPayment26')}
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
                <strong>{`USD ${
                  this.props.reservation.organization
                    ? (
                        parseFloat(this.props.reservation.base_rate) *
                        (1 - parseFloat(this.props.reservation.discount) / 100)
                      ).toFixed(2)
                    : (
                        parseFloat(this.props.reservation.base_rate) -
                        parseFloat(this.props.reservation.passenger_discount)
                      ).toFixed(2)
                }`}</strong>
                {translate('step3.reservationState.textPayment2')}
                <strong>{this.props.reservation.last4} </strong>
                {!this.props.reservation.organization && this.props.reservation.passenger_discount !== 0 ? (
                  <>
                    {translate('step3.reservationState.textPayment3')}USD{' '}
                    {parseFloat(this.props.reservation.passenger_discount).toFixed(2)}!
                  </>
                ) : null}
                <br />
                {this.props.reservation.organization
                  ? translate('step3.reservationState.textPayment25')
                  : translate('step3.reservationState.textPayment26')}
              </h6>
              <h5>{translate('step3.reservationState.textPayment4')}</h5>
            </div>
          </div>
        ) : null}
        {isTablet ? (
          <Card className="card-frame ar-ren-state-card mb-3">
            <CardBody className="p-0">
              <div className="ar-rent-state-body">
                <div className="ar-rent-state-row">
                  <i className="ar-icon-reservation-number m-0 mr--2" />
                  <h6>{translate('step3.reservationState.subtitle')}</h6>
                  <h1>{this.props.reservation.code}</h1>
                  <span className="ar-divider" />
                  {!this.props.reservation.organization ? (
                    <>
                      <i className="ar-icon-email mr--2" />
                      <div>
                        <h5>{translate('step3.reservationState.emailText')}</h5>
                        <h4 id="email" className="ws-pre overflow-x-scroll">
                          {this.props.reservation.passenger_email}
                        </h4>
                      </div>
                    </>
                  ) : this.props.reservation.organization.type === 1 ? (
                    <>
                      <i className="ar-icon-finger-print mr--2" />
                      <h6 className={'ar-120'}>{translate('step3.reservationState.agencyText')}</h6>
                      <h1>{this.props.reservation.organization.customer_id}</h1>
                    </>
                  ) : (
                    <>
                      <i className="ar-icon-finger-print" />
                      <h6 className={'ar-120'}>{translate('step3.reservationState.organizationText')}</h6>
                      <h1>{this.props.reservation.organization.customer_id}</h1>
                    </>
                  )}
                </div>
                <div className="ar-rent-state-right w-100">
                  <Button
                    className="btn-icon ar-round-button ar-rent-state-button shadow"
                    color="white-0"
                    type="button"
                    onClick={this.handleOnClickCancel}
                  >
                    {translate('step3.reservationState.cancel').toUpperCase()}
                  </Button>
                  <Button
                    className="btn-icon ar-round-button ar-rent-state-button shadow"
                    color="white-0"
                    type="button"
                  >
                    {translate('step3.reservationState.print').toUpperCase()}
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        ) : (
          <Card className="card-frame ar-ren-state-card">
            <CardBody className="p-0">
              <div className="ar-rent-state-body">
                {!isMobile && !isSmallTablet ? (
                  <div className="ar-rent-state-left">
                    <i className="ar-icon-reservation-number" />
                    <h6>{translate('step3.reservationState.subtitle')}</h6>
                    <h1>{this.props.reservation.code}</h1>
                  </div>
                ) : (
                  <div className="ar-rent-state-left">
                    <i className="ar-icon-reservation-number" />
                    <div className="d-flex flex-column ml-2">
                      <h6>{translate('step3.reservationState.subtitle')}</h6>
                      <h1>{this.props.reservation.code}</h1>
                    </div>
                  </div>
                )}
                {!this.props.reservation.organization ? (
                  !isMobile && !isSmallTablet ? (
                    <div className="ar-rent-state-center">
                      <i className="ar-icon-email" />
                      <Col>
                        <h6>{translate('step3.reservationState.emailText')}</h6>
                        <h4 id="email" className="ws-pre overflow-x-scroll">
                          {this.props.reservation.passenger_email}
                        </h4>
                      </Col>
                    </div>
                  ) : (
                    <div className="ar-rent-state-center">
                      <i className="ar-icon-email" />
                      <div className="d-flex flex-column mt--1 mw-email">
                        <h6>{translate('step3.reservationState.emailText')}</h6>
                        <h4 className="w-100 ws-pre overflow-x-scroll">{this.props.reservation.passenger_email}</h4>
                      </div>
                    </div>
                  )
                ) : this.props.reservation.organization.type === 1 ? (
                  !isMobile && !isSmallTablet ? (
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
                      <Row className="mx-0">
                        <h6>{translate('step3.reservationState.agencyText')}</h6>
                        <h1>{this.props.reservation.organization.customer_id}</h1>
                      </Row>
                    </div>
                  )
                ) : !isMobile && !isSmallTablet ? (
                  <div className="ar-rent-state-center ar-finger">
                    <i className="ar-icon-finger-print" />
                    <Row className="mx-0 justify-content-between align-items-center">
                      <h6>{translate('step3.reservationState.organizationText')}</h6>
                      <h1 className="mr-3">{this.props.reservation.organization.customer_id}</h1>
                    </Row>
                  </div>
                ) : (
                  <div className="ar-rent-state-center ar-finger">
                    <i className="ar-icon-finger-print" />
                    <Row className="mx-0">
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
                    {!isMobile && !isSmallTablet ? <i className="ar-icon-chevron-right" /> : null}
                  </Button>
                  <Button
                    className="btn-icon ar-round-button ar-rent-state-button shadow"
                    color="white-0"
                    type="button"
                  >
                    {translate('step3.reservationState.print')}
                    {!isMobile && !isSmallTablet ? <i className="ar-icon-chevron-right" /> : null}
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        )}
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
