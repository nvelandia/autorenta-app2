import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, InputGroup, Input, Button, FormGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import * as classnames from 'classnames';

class CancelReservationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passenger_lastname: '',
      reservation: '',
      passenger_email: '',
      partner_code: '',
      passenger_emailFocus: false,
      passenger_lastnameFocus: false,
      reservationFocus: false,
      partner_codeFocus: false,
      error: {},
    };
    this.dispatch = props.dispatch;
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: { ...this.state.error, [event.target.name]: false },
    });
  };

  handleOnClick = () => {
    const body = {
      passenger_lastname: this.state.passenger_lastname,
      reservation: this.state.reservation,
    };
    if (!this.props.reservation.organization) {
      body.passenger_email = this.state.passenger_email;
    } else {
      body.partner_code = this.state.partner_code;
    }
    if (Object.values(body).includes('')) {
      const error = {};
      for (const field in this.state) {
        if (this.state[field] === '' && Object.keys(body).includes(field)) {
          error[field] = true;
        }
      }
      this.setState({ error: error });
    } else {
      this.dispatch(this.props.cancelReservation(body));
      this.props.hideModal();
    }
  };

  render() {
    const { translate, isMobile } = this.props;
    const error = this.state.error;
    return (
      <Modal
        className="modal-dialog-centered ar-modal-cancel-reservation"
        isOpen={this.props.showModal}
        toggle={() => this.props.hideModal()}
      >
        <div className="modal-header pb-0">
          <h6 className="modal-title ar-modal-cancel-reservation-title" id="exampleModalLabel">
            {translate('step3.reservationState.cancelReservationModal.title')}
          </h6>
          <button
            aria-label="Close"
            className="close ar-blue-0-text"
            data-dismiss="modal"
            type="button"
            onClick={() => this.props.hideModal()}
          >
            <span aria-hidden={true} />
          </button>
        </div>
        <div className="modal-body pb-3 pt-0">
          <h6 className="ar-modal-cancel-reservation-subtitle">
            {translate('step3.reservationState.cancelReservationModal.subtitle')}
          </h6>
          <FormGroup
            className={classnames(
              {
                focused: this.state.passenger_lastnameFocus,
              },
              'ar-cancel-reservation-input',
            )}
          >
            <InputGroup
              className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                error.passenger_lastname ? ' ar-error-border' : null
              }`}
            >
              {!isMobile ? (
                <InputGroupAddon addonType="prepend" className="ar-cancel-reservation-input-left">
                  <InputGroupText className="ar-round-input-left">
                    <h6>{translate('step3.reservationState.cancelReservationModal.lastname')}</h6>
                  </InputGroupText>
                </InputGroupAddon>
              ) : null}
              <Input
                name="passenger_lastname"
                onChange={this.handleOnChange}
                className="ar-round-input ar-cancel-reservation-form-input"
                placeholder={translate('step3.reservationState.cancelReservationModal.lastname')}
                value={this.state.passenger_lastname}
                type="text"
                autoComplete="off"
                onFocus={() => this.setState({ passenger_lastnameFocus: true })}
                onBlur={() => this.setState({ passenger_lastnameFocus: false })}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup
            className={classnames(
              {
                focused: this.state.reservationFocus,
              },
              'ar-cancel-reservation-input',
            )}
          >
            <InputGroup
              className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                error.reservation ? ' ar-error-border' : null
              }`}
            >
              {!isMobile ? (
                <InputGroupAddon addonType="prepend" className="ar-cancel-reservation-input-left">
                  <InputGroupText className="ar-round-input-left">
                    <h6>{translate('step3.reservationState.cancelReservationModal.reservationNumber')}</h6>
                  </InputGroupText>
                </InputGroupAddon>
              ) : null}
              <Input
                name="reservation"
                onChange={this.handleOnChange}
                className=" ar-round-input ar-cancel-reservation-form-input"
                placeholder={translate('step3.reservationState.cancelReservationModal.reservationNumber')}
                value={this.state.reservation}
                type="text"
                autoComplete="off"
                onFocus={() => this.setState({ reservationFocus: true })}
                onBlur={() => this.setState({ reservationFocus: false })}
              />
            </InputGroup>
          </FormGroup>

          {!this.props.reservation.organization ? (
            <FormGroup
              className={classnames(
                {
                  focused: this.state.passenger_emailFocus,
                },
                'ar-cancel-reservation-input',
              )}
            >
              <InputGroup
                className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                  error.passenger_email ? ' ar-error-border' : null
                }`}
              >
                {!isMobile ? (
                  <InputGroupAddon addonType="prepend" className="ar-cancel-reservation-input-left">
                    <InputGroupText className="ar-round-input-left">
                      <h6>{translate('step3.reservationState.cancelReservationModal.email')}</h6>
                    </InputGroupText>
                  </InputGroupAddon>
                ) : null}
                <Input
                  name="passenger_email"
                  onChange={this.handleOnChange}
                  className=" ar-round-input ar-cancel-reservation-form-input"
                  placeholder={translate('step3.reservationState.cancelReservationModal.email')}
                  value={this.state.passenger_email}
                  type="text"
                  autoComplete="off"
                  onFocus={() => this.setState({ passenger_emailFocus: true })}
                  onBlur={() => this.setState({ passenger_emailFocus: false })}
                />
              </InputGroup>
            </FormGroup>
          ) : this.props.reservation.organization.type === 1 ? (
            <FormGroup
              className={classnames(
                {
                  focused: this.state.partner_codeFocus,
                },
                'ar-cancel-reservation-input',
              )}
            >
              <InputGroup
                className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                  error.partner_code ? ' ar-error-border' : null
                }`}
              >
                {!isMobile ? (
                  <InputGroupAddon addonType="prepend" className="ar-cancel-reservation-input-left">
                    <InputGroupText className="ar-round-input-left">
                      <h6>{translate('step3.reservationState.cancelReservationModal.agency')}</h6>
                    </InputGroupText>
                  </InputGroupAddon>
                ) : null}
                <Input
                  name="partner_code"
                  onChange={this.handleOnChange}
                  className=" ar-round-input ar-cancel-reservation-form-input"
                  placeholder={translate('step3.reservationState.cancelReservationModal.agency')}
                  value={this.state.partner_code}
                  type="text"
                  autoComplete="off"
                  onFocus={() => this.setState({ partner_codeFocus: true })}
                  onBlur={() => this.setState({ partner_codeFocus: false })}
                />
              </InputGroup>
            </FormGroup>
          ) : (
            <FormGroup
              className={classnames(
                {
                  focused: this.state.partner_codeFocus,
                },
                'ar-cancel-reservation-input',
              )}
            >
              <InputGroup
                className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                  error.partner_code ? ' ar-error-border' : null
                }`}
              >
                {!isMobile ? (
                  <InputGroupAddon addonType="prepend" className="ar-cancel-reservation-input-left">
                    <InputGroupText className="ar-round-input-left">
                      <h6>{translate('step3.reservationState.cancelReservationModal.corporation')}</h6>
                    </InputGroupText>
                  </InputGroupAddon>
                ) : null}
                <Input
                  name="partner_code"
                  onChange={this.handleOnChange}
                  className=" ar-round-input ar-cancel-reservation-form-input"
                  placeholder={translate('step3.reservationState.cancelReservationModal.corporation')}
                  value={this.state.partner_code}
                  type="text"
                  autoComplete="off"
                  onFocus={() => this.setState({ partner_codeFocus: true })}
                  onBlur={() => this.setState({ partner_codeFocus: false })}
                />
              </InputGroup>
            </FormGroup>
          )}

          <div className="ar-cancel-button-container">
            <Button className=" btn-icon ar-round-button ar-cancel-button" color="red-0" onClick={this.handleOnClick}>
              <span className="nav-link-inner--text ml-3">
                {!isMobile
                  ? translate('step3.reservationState.cancelReservationModal.cancel')
                  : translate('step3.reservationState.cancelReservationModal.cancel').toUpperCase()}
              </span>
              {!isMobile ? (
                <span className="btn-inner--icon">
                  <span className="ar-icon-chevron-right va-middle ml-2 fs-i--1" />
                </span>
              ) : null}
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

CancelReservationModal.propTypes = {
  dispatch: PropTypes.func,
  showModal: PropTypes.bool,
  hideModal: PropTypes.func,
  cancelReservation: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step3Reducer;
};

export default connect(mapStateToProps)(CancelReservationModal);
