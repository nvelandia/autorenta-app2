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
  CardHeader,
  Card,
  Form,
  Col,
  InputGroupAddon,
  InputGroupText,
  CardBody,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import * as classnames from 'classnames';
import { vehicleTypes } from '../../../../utils/constants/vehicleTypes';
import { pages, redirectTo } from '../../../../utils/helpers/redirectTo';
import NotificationAlert from 'react-notification-alert';
import RangeDatePicker from '../../Atoms/RangeDatePicker';
import CustomDropDown from '../../Atoms/CustomDropDown';
import ProgressBar from '../../Atoms/ProgressBar';
import { isoStringToString, isoStringToStringTime } from '../../../../utils/helpers/dateHelpers';

class NewSearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surname: '',
      reservationNumber: '',
      surnameFocus: false,
      reservationNumberFocus: false,
      agencyOrCorporationId: '',
      agencyOrCorporationIdFocus: false,
      isAgencyOrCorporation: false,
      error: {},
    };
    this.dispatch = props.dispatch;
  }

  handleOnLoad = () => {
    this.dispatch(this.props.loadCountries());
  };

  handleOnSelect = (event, iata = null) => {
    if (iata) {
      if (event.target.name === 'placeToPickUp') {
        this.setState({ [event.target.name]: event.target.value, iataToPickUp: iata });
      } else {
        this.setState({ [event.target.name]: event.target.value, iataToDropOff: iata });
      }
    }
    this.setState({
      [event.target.name]: event.target.value,
      error: { ...this.state.error, [event.target.name]: false },
    });
  };

  handleDate = (dateToPickUp, dateToDropOff) => {
    if (dateToPickUp) {
      this.setState({
        dateToPickUp: isoStringToString(dateToPickUp),
        timeToPickUp: isoStringToStringTime(dateToPickUp),
        error: {
          ...this.state.error,
          dateToPickUp: false,
          timeToPickUp: false,
        },
      });
    }
    if (dateToDropOff) {
      this.setState({
        dateToDropOff: isoStringToString(dateToDropOff),
        timeToDropOff: isoStringToStringTime(dateToDropOff),
        error: {
          ...this.state.error,
          dateToDropOff: false,
          timeToDropOff: false,
        },
      });
    }
  };

  handleOnChange = (event) => {
    if (this.state.placeToPickUpFocus || this.state.placeToDropOffFocus) {
      this.dispatch(this.props.searchLocation(event.target.value));
      this.setState({ [event.target.name]: event.target.value });
    }
    this.setState({
      [event.target.name]: event.target.value,
      error: { ...this.state.error, [event.target.name]: false },
    });
  };

  handleSearchClick = () => {
    const body = {
      pickup_location: this.state.iataToPickUp,
      pickup_date: this.state.dateToPickUp,
      pickup_time: this.state.timeToPickUp,
      dropoff_location: this.state.iataToDropOff,
      dropoff_date: this.state.dateToDropOff,
      dropoff_time: this.state.timeToDropOff,
      passenger_country_id: this.state.passenger_country_id,
      passenger_age: this.state.ageSelected,
      vehicle_type: vehicleTypes.indexOf(this.state.vehicleType) + 1,
    };
    if (Object.values(body).includes('') || Object.values(body).includes(0)) {
      const error = {};
      for (const field in this.state) {
        if (this.state[field] === '' || this.state[field] === 0) {
          error[field] = true;
        }
      }
      this.setState({ error: error });
      this.notify('autorenta');
    } else {
      this.dispatch(this.props.nextStep(body));
      redirectTo(
        `${pages.step1}/${body.pickup_location}/${body.pickup_date}/${body.pickup_time}/${body.dropoff_location}/${body.dropoff_date}/${body.dropoff_time}/${body.passenger_country_id}/${body.passenger_age}/${body.vehicle_type}`,
      );
    }
  };

  renderListGroup = (name) => {
    const placesOptions = this.props.locations;
    if (Array.isArray(placesOptions)) {
      return (
        <ListGroup className="ar-list-group">
          {placesOptions.map((option, index) => {
            return (
              <ListGroupItem key={index} className="p-0 ar-list-item" action>
                <Button
                  className="ar-list-item d-flex align-items-center p-3 w-100 ws-pre"
                  name={name}
                  value={option.label}
                  onMouseDown={(e) => this.handleOnSelect(e, option.iata)}
                >
                  {option.airport ? (
                    <>
                      <span className="ar-icon-plane ar-red-text fs-2" />
                      &nbsp;{option.label}
                    </>
                  ) : (
                    <>
                      <span className="ar-icon-office ar-red-text fs-2" />
                      &nbsp;{option.label}
                    </>
                  )}
                </Button>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      );
    } else {
      return null;
    }
  };

  notify = (type) => {
    let options = {
      place: 'tc',
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
            {' '}
            ¡Atención!
          </span>
          <span data-notify="message">Todos los campos son requeridos</span>
        </div>
      ),
      type: type,
      icon: 'ni ni-bell-55',
      autoDismiss: 10,
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  render() {
    const error = this.state.error;
    return (
      <Modal
        className="modal-dialog-centered ar-modal-new-search"
        isOpen={this.props.showModal}
        toggle={() => this.props.hideModal()}
      >
        <div className="rna-wrapper">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <Row className="justify-content-center">
          <Col lg="12" md="12">
            <Row className="justify-content-center">
              <Col lg="7" md="8" sm="8" xs="11" className="ar-card-header">
                <CardHeader className=" p-3 ar-border-round">
                  <Row className="text-muted text-center mb-0 justify-content-center">
                    <h2 className="mb-0">Haz tu reserva en&nbsp;</h2>
                    <h2 className="mb-0 ar-red-text">sólo 3 pasos</h2>
                  </Row>
                </CardHeader>
              </Col>
            </Row>
            <Card className=" border-0 mb-0 ar-border-round">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center mb-4 ar-steps-bar">
                  <ProgressBar step={0} />
                </div>
                <Form role="form">
                  <Row>
                    <Col lg="6" md="6">
                      <FormGroup
                        className={classnames({
                          focused: this.state.placeToPickUpFocus,
                        })}
                      >
                        <InputGroup
                          className={`input-group-merge input-group-alternative shadow-none mb-3 ar-round-input bg-ar-white-1 ${
                            error.placeToPickUp ? ' ar-error-border' : null
                          }`}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="ar-round-input-left">
                              <i className="ar-icon-location ar-round-input-left" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="placeToPickUp"
                            onChange={this.handleOnChange}
                            className="ar-round-input-right"
                            placeholder="¿Dónde quieres retirar el vehículo?"
                            value={this.state.placeToPickUp}
                            type="text"
                            autoComplete="off"
                            onFocus={() => this.setState({ placeToPickUpFocus: true })}
                            onBlur={() => this.setState({ placeToPickUpFocus: false })}
                          />
                        </InputGroup>
                        {this.state.placeToPickUpFocus ? this.renderListGroup('placeToPickUp') : null}
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.placeToDropOffFocus,
                        })}
                      >
                        <InputGroup
                          className={`input-group-merge input-group-alternative shadow-none mb-3 ar-round-input bg-ar-white-1 ${
                            error.placeToDropOff ? ' ar-error-border' : null
                          }`}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="ar-round-input-left">
                              <i className="ar-icon-location ar-round-input-left" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="placeToDropOff"
                            onChange={this.handleOnChange}
                            className="ar-round-input-right"
                            placeholder="¿Dónde quieres entregar el vehículo?"
                            type="text"
                            autoComplete="off"
                            value={this.state.placeToDropOff}
                            onFocus={() => this.setState({ placeToDropOffFocus: true })}
                            onBlur={() => this.setState({ placeToDropOffFocus: false })}
                          />
                        </InputGroup>
                        {this.state.placeToDropOffFocus ? this.renderListGroup('placeToDropOff') : null}
                      </FormGroup>
                    </Col>
                    <Col lg="6" md="6">
                      <RangeDatePicker error={error} handleDate={this.handleDate} />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" md="6">
                      <FormGroup
                        className={classnames(
                          {
                            focused: this.state.countrySelected,
                          },
                          'mb-0',
                        )}
                      >
                        <CustomDropDown
                          name={'passenger_country_id'}
                          title={'País de residencia'}
                          items={this.props.countries}
                          classes={'ar-dropdown-menu-overflow'}
                          handleSelect={this.handleOnSelect}
                          error={error}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="2" md="6" className="pl-lg-0">
                      <FormGroup
                        className={classnames(
                          {
                            focused: this.state.ageSelected,
                          },
                          'mb-0',
                        )}
                      >
                        <CustomDropDown
                          name={'ageSelected'}
                          title={'Edad'}
                          items={['+25', '24', '23', '22', '21', '20', '19', '18']}
                          classes={'ar-dropdown-menu-age'}
                          handleSelect={this.handleOnSelect}
                          error={error}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="4" md="6" className="pl-1">
                      <FormGroup
                        className={classnames(
                          {
                            focused: this.state.ageSelected,
                          },
                          'mb-0',
                        )}
                      >
                        <CustomDropDown
                          name={'vehicleType'}
                          title={'Tipo de vehículo'}
                          items={vehicleTypes}
                          classes={'ar-dropdown-menu-car-type ar-dropdown-menu-overflow'}
                          handleSelect={this.handleOnSelect}
                          error={error}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="2" md="6" className="p-0 ar-make-your-reservation-button-container">
                      <Button
                        className=" btn-icon ar-round-button ar-blue-button ar-last-row-make-your-reservation fs--1 h-100"
                        color="default"
                        type="button"
                        onClick={this.handleSearchClick}
                      >
                        <span className="nav-link-inner--text text-sm">Buscar </span>
                        <span className="btn-inner--icon">
                          <span className="ar-icon-chevron-right va-middle fs-i--1" />
                        </span>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Modal>
    );
  }
}

NewSearchModal.propTypes = {
  dispatch: PropTypes.func,
  showModal: PropTypes.bool,
  hideModal: PropTypes.func,
  searchReservation: PropTypes.func,
  searchLocation: PropTypes.func,
  loadCountries: PropTypes.func,
  nextStep: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(NewSearchModal);
