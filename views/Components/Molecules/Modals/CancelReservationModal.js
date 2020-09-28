import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Modal,
  Row,
  InputGroup,
  Input,
  Button,
  FormGroup,
  Container,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import * as classnames from 'classnames';
import { vehicleTypes } from '../../../../utils/constants/vehicleTypes';
import { pages, redirectTo } from '../../../../utils/helpers/redirectTo';
import NotificationAlert from 'react-notification-alert';

class CancelReservationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surname: 'MINACORI',
      reservationNumber: 'AHYRGHDF',
      email: '',
      agencyOrCorporationId: '',
      emailFocus: false,
      surnameFocus: false,
      reservationNumberFocus: false,
      agencyOrCorporationIdFocus: false,
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
      surname: this.state.surname,
      reservationNumber: this.state.reservationNumber,
    };
    if (this.state.isAgencyOrCorporation) {
      body.agencyOrCorporationId = this.state.agencyOrCorporationId;
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
      this.dispatch(this.props.searchReservation(body));
    }
  };

  render() {
    const error = this.state.error;
    return (
      <Modal
        className="modal-dialog-centered ar-modal-cancel-reservation"
        isOpen={this.props.showModal}
        toggle={() => this.props.hideModal()}
      >
        <div className="modal-header pb-0">
          <h6 className="modal-title ar-modal-cancel-reservation-title" id="exampleModalLabel">
            Cancelar una reserva
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
            ¡Atención! Estás a punto de cancelar tu reserva. ¿Deseas continuar? Una vez cancelada esta acción no podrá
            deshacerse.
          </h6>
          <FormGroup
            className={classnames(
              {
                focused: this.state.surnameFocus,
              },
              'ar-cancel-reservation-input',
            )}
          >
            <InputGroup
              className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                error.surname ? ' ar-error-border' : null
              }`}
            >
              <InputGroupAddon addonType="prepend" className="ar-cancel-reservation-input-left">
                <InputGroupText className="ar-round-input-left">
                  <h6>Apellido del pasajero</h6>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="surname"
                onChange={this.handleOnChange}
                className="ar-round-input ar-cancel-reservation-form-input"
                placeholder="Apellido del pasajero"
                value={this.state.surname}
                type="text"
                autoComplete="off"
                onFocus={() => this.setState({ surnameFocus: true })}
                onBlur={() => this.setState({ surnameFocus: false })}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup
            className={classnames(
              {
                focused: this.state.reservationNumberFocus,
              },
              'ar-cancel-reservation-input',
            )}
          >
            <InputGroup
              className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                error.reservationNumber ? ' ar-error-border' : null
              }`}
            >
              <InputGroupAddon addonType="prepend" className="ar-cancel-reservation-input-left">
                <InputGroupText className="ar-round-input-left">
                  <h6>Número de reserva Autorenta</h6>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="reservationNumber"
                onChange={this.handleOnChange}
                className=" ar-round-input ar-cancel-reservation-form-input"
                placeholder="Número de reserva Autorenta"
                value={this.state.reservationNumber}
                type="text"
                autoComplete="off"
                onFocus={() => this.setState({ reservationNumberFocus: true })}
                onBlur={() => this.setState({ reservationNumberFocus: false })}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup
            className={classnames(
              {
                focused: this.state.agencyOrCorporationIdFocus,
              },
              'ar-cancel-reservation-input',
            )}
          >
            <InputGroup
              className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                error.agencyOrCorporationId ? ' ar-error-border' : null
              }`}
            >
              <InputGroupAddon addonType="prepend" className="ar-cancel-reservation-input-left">
                <InputGroupText className="ar-round-input-left">
                  <h6>Direccion de E-mail</h6>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="agencyOrCorporationId"
                onChange={this.handleOnChange}
                className=" ar-round-input ar-cancel-reservation-form-input"
                placeholder="ID de Agencia o Corporativo"
                value={this.state.agencyOrCorporationId}
                type="text"
                autoComplete="off"
                onFocus={() => this.setState({ agencyOrCorporationIdFocus: true })}
                onBlur={() => this.setState({ agencyOrCorporationIdFocus: false })}
              />
            </InputGroup>
          </FormGroup>
          <div className="ar-cancel-button-container">
            <Button className=" btn-icon ar-round-button ar-cancel-button" color="red-0" onClick={this.handleOnClick}>
              <span className="nav-link-inner--text ml-3">Cancelar esta reserva </span>
              <span className="btn-inner--icon">
                <span className="ar-icon-chevron-right va-middle ml-2 fs-i--1" />
              </span>
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
  return state.generalReducer;
};

export default connect(mapStateToProps)(CancelReservationModal);
