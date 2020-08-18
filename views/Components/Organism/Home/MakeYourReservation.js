import React from 'react';
import classnames from 'classnames';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import ProgressBar from '../../Atoms/ProgressBar';
import RangeDatePicker from '../../Atoms/RangeDatePicker';
import CustomDropDown from '../../Atoms/CustomDropDown';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterGroup from '../Search/FilterGroup';
import { isoStringToString, isoStringToStringTime } from '../../../../utils/helpers/dateHelpers';

class MakeYourReservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeToPickUp: '',
      placeToPickUpFocus: false,
      placeToDropOff: '',
      placeToDropOffFocus: false,
      dateToPickUp: '',
      dateToDropOff: '',
      countrySelected: '',
      ageSelected: '',
      carTypeSelected: '',
      iataToPickUp: '',
      iataToDropOff: '',
      timeToDropOff: '',
      timeToPickUp: '',
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
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
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDate = (dateToPickUp, dateToDropOff) => {
    this.setState({
      dateToPickUp: isoStringToString(dateToPickUp),
      dateToDropOff: isoStringToString(dateToDropOff),
      timeToPickUp: isoStringToStringTime(dateToPickUp),
      timeToDropOff: isoStringToStringTime(dateToDropOff),
    });
  };

  handleOnChange = (event) => {
    if (this.state.placeToPickUpFocus || this.state.placeToDropOffFocus) {
      this.dispatch(this.props.searchLocation(event.target.value));
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  handleSearchClick = () => {
    const body = {
      pickup_location: this.state.iataToPickUp,
      pickup_date: this.state.dateToPickUp,
      pickup_time: this.state.timeToPickUp,
      dropoff_location: this.state.iataToDropOff,
      dropoff_date: this.state.dateToDropOff,
      dropoff_time: this.state.timeToDropOff,
      passenger_country_id: this.state.countrySelected,
      passenger_age: this.state.ageSelected,
    };
    this.dispatch(this.props.searchfleet(body));
  };

  renderListGroup = (name) => {
    const placesOptions = this.props.locations;
    if (Array.isArray(placesOptions)) {
      return (
        <ListGroup className="ar-list-group">
          {placesOptions.map((option) => {
            return (
              <ListGroupItem className="p-0 ar-list-item" action>
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

  render() {
    return (
      <Container className="mt--10 pb-5">
        <Row className="justify-content-center">
          <Col lg="9" md="10">
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
                        <InputGroup className="input-group-merge input-group-alternative mb-3 ar-round-input bg-ar-white-1">
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
                        <InputGroup className="input-group-merge input-group-alternative mb-3 ar-round-input bg-ar-white-1">
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
                            value={this.state.placeToDropOff}
                            onFocus={() => this.setState({ placeToDropOffFocus: true })}
                            onBlur={() => this.setState({ placeToDropOffFocus: false })}
                          />
                        </InputGroup>
                        {this.state.placeToDropOffFocus ? this.renderListGroup('placeToDropOff') : null}
                      </FormGroup>
                    </Col>
                    <Col lg="6" md="6">
                      <RangeDatePicker handleDate={this.handleDate} />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" md="6">
                      <FormGroup
                        className={classnames({
                          focused: this.state.countrySelected,
                        })}
                      >
                        <CustomDropDown
                          name={'countrySelected'}
                          title={'País de residencia'}
                          items={this.props.countries}
                          classes={'ar-dropdown-menu-overflow'}
                          handleSelect={this.handleOnSelect}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="2" md="6" className="pl-lg-0">
                      <FormGroup
                        className={classnames({
                          focused: this.state.ageSelected,
                        })}
                      >
                        <CustomDropDown
                          name={'ageSelected'}
                          title={'Edad'}
                          items={['18', '19', '20', '21', '22', '23', '24', '+25']}
                          classes={'ar-dropdown-menu-age'}
                          handleSelect={this.handleOnSelect}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="4" md="6">
                      <FormGroup
                        className={classnames({
                          focused: this.state.ageSelected,
                        })}
                      >
                        <CustomDropDown
                          title={'Tipo de vehículo'}
                          items={[
                            'Pequeño/Económico',
                            'Compacto',
                            'Intermedio',
                            'Standar',
                            'Grande',
                            'Premiun/De Lujo',
                            'Deportivo/Convertible',
                            'Minivan/Maxivan',
                            'SUV/Todoterreno',
                          ]}
                          classes={'ar-dropdown-menu-car-type'}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="2" md="6" className="p-0 ar-make-your-reservation-button-container">
                      <Button
                        className=" btn-icon ar-round-button ar-blue-button ar-last-row-make-your-reservation fs--1"
                        color="default"
                        type="button"
                        onClick={this.handleSearchClick}
                      >
                        <span className="nav-link-inner--text">Buscar </span>
                        <span className="btn-inner--icon">
                          <span className="ar-icon-chevron-right va-middle " />
                        </span>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

MakeYourReservation.propTypes = {
  dispatch: PropTypes.func,
  searchLocation: PropTypes.func,
  loadCountries: PropTypes.func,
  searchfleet: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(MakeYourReservation);
