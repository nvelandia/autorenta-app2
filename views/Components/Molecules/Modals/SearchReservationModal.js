import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Row, InputGroup, Input, Button, FormGroup, Container, Navbar } from 'reactstrap';
import * as classnames from 'classnames';
import { vehicleTypes } from '../../../../utils/constants/vehicleTypes';
import { pages, redirectTo } from '../../../../utils/helpers/redirectTo';
import NotificationAlert from 'react-notification-alert';

class SearchReservationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passenger_lastname: '',
      reservation: '',
      passenger_lastnameFocus: false,
      reservationFocus: false,
      partner_code: '',
      partner_codeFocus: false,
      isAgencyOrCorporation: false,
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

  handleCheckbox = () => {
    this.setState({ isAgencyOrCorporation: !this.state.isAgencyOrCorporation });
  };

  handleOnClick = () => {
    const body = {
      passenger_lastname: this.state.passenger_lastname,
      reservation: this.state.reservation,
    };
    if (this.state.isAgencyOrCorporation) {
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
      if (body.partner_code) {
        redirectTo(`${pages.step3}/${body.passenger_lastname}/${body.reservation}/${body.partner_code}`);
      } else {
        redirectTo(`${pages.step3}/${body.passenger_lastname}/${body.reservation}`);
      }
    }
  };

  notify = (type) => {
    let options = {
      place: 'tc',
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
            {' '}
            {this.props.translate('common.error.attention')}
          </span>
          <span data-notify="message">Todos los campos son requeridos</span>
        </div>
      ),
      type: type,
      icon: 'ni ni-bell-55',
      autoDismiss: 100,
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  render() {
    const error = this.state.error;
    const { isMobile } = this.props;
    if (this.props.error && this.props.actionWithError === 'searchReservation') {
      this.notify('autorenta');
    }
    return (
      <Modal
        className="modal-dialog-centered ar-modal-search-reservation"
        isOpen={this.props.showModal}
        toggle={() => this.props.hideModal()}
      >
        <div className="probando">
          <div className="rna-wrapper">
            <NotificationAlert ref="notificationAlert" />
          </div>
        </div>
        <div className="modal-header pb-0">
          <h6 className="modal-title ar-modal-search-reservation-title" id="exampleModalLabel">
            Buscar una reserva
          </h6>
          <button
            aria-label="Close"
            className="close ar-blue-0-text"
            data-dismiss="modal"
            type="button"
            onClick={() => this.props.hideModal()}
          >
            <span aria-hidden={true}></span>
          </button>
        </div>
        <div className="modal-body pb-3">
          <Row className="m-0 justify-content-between">
            <FormGroup
              className={classnames(
                {
                  focused: this.state.passenger_lastnameFocus,
                },
                'ar-search-reservation-input',
              )}
            >
              <InputGroup
                className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                  error.passenger_lastname ? ' ar-error-border' : null
                }`}
              >
                <Input
                  name="passenger_lastname"
                  onChange={this.handleOnChange}
                  className=" ar-round-input ar-search-reservation-form-input"
                  placeholder="Apellido del pasajero"
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
                'ar-search-reservation-input',
              )}
            >
              <InputGroup
                className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                  error.reservation ? ' ar-error-border' : null
                }`}
              >
                <Input
                  name="reservation"
                  onChange={this.handleOnChange}
                  className=" ar-round-input ar-search-reservation-form-input"
                  placeholder="Número de reserva Autorenta"
                  value={this.state.reservation}
                  type="text"
                  autoComplete="off"
                  onFocus={() => this.setState({ reservationFocus: true })}
                  onBlur={() => this.setState({ reservationFocus: false })}
                />
              </InputGroup>
            </FormGroup>
            {this.state.isAgencyOrCorporation && isMobile ? (
              <FormGroup
                className={classnames(
                  {
                    focused: this.state.partner_codeFocus,
                  },
                  'ar-search-reservation-input',
                )}
              >
                <InputGroup
                  className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                    error.partner_code ? ' ar-error-border' : null
                  }`}
                >
                  <Input
                    name="partner_code"
                    onChange={this.handleOnChange}
                    className=" ar-round-input ar-search-reservation-form-input"
                    placeholder="ID de Agencia o Corporativo"
                    value={this.state.partner_code}
                    type="text"
                    autoComplete="off"
                    onFocus={() => this.setState({ partner_codeFocus: true })}
                    onBlur={() => this.setState({ partner_codeFocus: false })}
                  />
                </InputGroup>
              </FormGroup>
            ) : null}
            <div className="ar-search-button-container">
              <Button className=" btn-icon ar-round-button ar-search-button" color="red-0" onClick={this.handleOnClick}>
                <span className="nav-link-inner--text ml-3">Buscar </span>
                <span className="btn-inner--icon">
                  <span className="ar-icon-chevron-right va-middle ml-2 fs-i--1" />
                </span>
              </Button>
            </div>
          </Row>
          <div className="custom-control custom-checkbox">
            <input
              className="custom-control-input"
              id="customCheck1"
              type="checkbox"
              name="conditionsAndTerms"
              checked={this.state.isAgencyOrCorporation}
              onChange={this.handleCheckbox}
            />
            <label className="custom-control-label ar-search-reservation-checkbox" htmlFor="customCheck1">
              Soy una Agencia de viajes o Cliente corporativo
            </label>
          </div>
          {this.state.isAgencyOrCorporation && !isMobile ? (
            <Row className="m-0">
              <FormGroup
                className={classnames(
                  {
                    focused: this.state.partner_codeFocus,
                  },
                  'ar-search-reservation-input',
                )}
              >
                <InputGroup
                  className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                    error.partner_code ? ' ar-error-border' : null
                  }`}
                >
                  <Input
                    name="partner_code"
                    onChange={this.handleOnChange}
                    className=" ar-round-input ar-search-reservation-form-input"
                    placeholder="ID de Agencia o Corporativo"
                    value={this.state.partner_code}
                    type="text"
                    autoComplete="off"
                    onFocus={() => this.setState({ partner_codeFocus: true })}
                    onBlur={() => this.setState({ partner_codeFocus: false })}
                  />
                </InputGroup>
              </FormGroup>
            </Row>
          ) : null}
        </div>
      </Modal>
    );
  }
}

SearchReservationModal.propTypes = {
  dispatch: PropTypes.func,
  showModal: PropTypes.bool,
  hideModal: PropTypes.func,
  searchReservation: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.generalReducer;
};

export default connect(mapStateToProps)(SearchReservationModal);
