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
import GoogleModal from './GoogleModal';

class NewSearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeToPickUp: '',
      placeToPickUpFocus: false,
      placeToDropOff: '',
      placeToDropOffFocus: false,
      dateToPickUp: '',
      dateToDropOff: '',
      passenger_country_id: '',
      ageSelected: '',
      carTypeSelected: '',
      pickup_place_id: '',
      pickup_latitude: '',
      pickup_longitude: '',
      dropoff_place_id: '',
      dropoff_latitude: '',
      dropoff_longitude: '',
      timeToDropOff: '',
      timeToPickUp: '',
      vehicleType: '',
      error: {},
      showGoogleModal: false,
    };
    this.dispatch = props.dispatch;
  }

  handleOnLoad = () => {
    this.dispatch(this.props.loadCountries());
  };

  handleOnSelect = (event, place = null) => {
    if (place) {
      const geocoder = new google.maps.Geocoder();
      if (event.target.name === 'placeToPickUp') {
        geocoder.geocode({ placeId: place.place_id }, (result, status) => {
          const latitude = result[0].geometry.location.lat();
          const longitude = result[0].geometry.location.lng();
          this.setState({
            pickup_latitude: latitude,
            pickup_longitude: longitude,
            placeToPickUp: place.description,
            pickup_place_id: place.place_id,
            dropoff_place_id: place.place_id,
            dropoff_latitude: latitude,
            dropoff_longitude: longitude,
            placeToDropOff: place.description,
          });
          this.dispatch(
            this.props.searchLocation({
              latitude: latitude.toString(),
              longitude: longitude.toString(),
            }),
          );
        });
      } else {
        geocoder.geocode({ placeId: place.place_id }, (result, status) => {
          const latitude = result[0].geometry.location.lat();
          const longitude = result[0].geometry.location.lng();
          this.setState({
            dropoff_latitude: latitude,
            dropoff_longitude: longitude,
            placeToDropOff: place.description,
            dropoff_place_id: place.place_id,
          });
          this.dispatch(
            this.props.searchLocation({
              latitude: latitude.toString(),
              longitude: longitude.toString(),
            }),
          );
        });
      }
    }
    this.setState({
      [event.target.name]: event.target.value,
      error: { ...this.state.error, [event.target.name]: false },
    });
  };

  showGoogleModal = (name) => {
    this.setState({ showGoogleModal: name });

    if (name === 'placeToPickUp') {
      if (this.state.pickup_latitude) {
        this.dispatch(
          this.props.searchLocation({
            latitude: this.state.pickup_latitude.toString(),
            longitude: this.state.pickup_longitude.toString(),
          }),
        );
      } else {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ placeId: this.props.locations[0].place_id }, (result, status) => {
          const latitude = result[0].geometry.location.lat();
          const longitude = result[0].geometry.location.lng();
          this.setState({
            pickup_latitude: latitude,
            pickup_longitude: longitude,
            placeToPickUp: this.props.locations[0].description,
            pickup_place_id: this.props.locations[0].place_id,
            dropoff_place_id: this.props.locations[0].place_id,
            dropoff_latitude: latitude,
            dropoff_longitude: longitude,
            placeToDropOff: this.props.locations[0].description,
          });
          this.dispatch(
            this.props.searchLocation({
              latitude: latitude.toString(),
              longitude: longitude.toString(),
            }),
          );
        });
      }
    } else {
      if (this.state.dropoff_latitude) {
        this.dispatch(
          this.props.searchLocation({
            latitude: this.state.dropoff_latitude.toString(),
            longitude: this.state.dropoff_longitude.toString(),
          }),
        );
      } else {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ placeId: this.props.locations[0].place_id }, (result, status) => {
          const latitude = result[0].geometry.location.lat();
          const longitude = result[0].geometry.location.lng();
          this.setState({
            dropoff_place_id: this.props.locations[0].place_id,
            dropoff_latitude: latitude,
            dropoff_longitude: longitude,
            placeToDropOff: this.props.locations[0].description,
          });
          this.dispatch(
            this.props.searchLocation({
              latitude: latitude.toString(),
              longitude: longitude.toString(),
            }),
          );
        });
      }
    }
  };

  hideGoogleModal = () => {
    this.setState({
      showGoogleModal: false,
      placeToPickUpFocus: false,
      placeToDropOffFocus: false,
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
    if (
      this.state.placeToPickUpFocus ||
      this.state.placeToDropOffFocus ||
      event.target.name === 'placeToPickUp' ||
      event.target.name === 'placeToDropOff'
    ) {
      // you can create autocompleteService as variable outside the function as well
      const autocompleteService = new google.maps.places.AutocompleteService();

      if (event.target.value !== '') {
        autocompleteService.getPlacePredictions({ input: event.target.value }, (predictions, status) => {
          this.dispatch(this.props.loadLocation(predictions));
        });
      }
      this.setState({ [event.target.name]: event.target.value });
    }
    this.setState({
      [event.target.name]: event.target.value,
      error: { ...this.state.error, [event.target.name]: false },
    });
  };

  handleSearchClick = (types) => {
    const body = {
      pickup_date: this.state.dateToPickUp,
      pickup_time: this.state.timeToPickUp,
      dropoff_date: this.state.dateToDropOff,
      dropoff_time: this.state.timeToDropOff,
      passenger_country_id: this.state.passenger_country_id,
      passenger_age: this.state.ageSelected,
      vehicle_type: types.indexOf(this.state.vehicleType) + 1,
      pickup_place_id: this.state.pickup_place_id,
      dropoff_place_id: this.state.dropoff_place_id,
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
      this.dispatch(this.props.showLoader('searching'));
      redirectTo(
        `${pages.step1}?pickup_place_id=${body.pickup_place_id}&dropoff_place_id=${body.dropoff_place_id}&pickup_date=${body.pickup_date}&dropoff_date=${body.dropoff_date}&pickup_time=${body.pickup_time}&dropoff_time=${body.dropoff_time}&passenger_country_id=${body.passenger_country_id}&passenger_age=${body.passenger_age}&vehicle_type=${body.vehicle_type}`,
      );
    }
  };

  renderListGroup = (name) => {
    const { translate } = this.props;
    const placesOptions = this.props.locations;
    if (placesOptions) {
      if (placesOptions.length !== 0) {
        return (
          <ListGroup className="ar-list-group zi-1200">
            {placesOptions.map((option, index) => {
              return (
                <ListGroupItem key={index} className="p-0 ar-list-item" action>
                  <Button
                    className="ar-list-item-button d-flex  w-100 "
                    name={name}
                    value={option.description}
                    onMouseDown={(e) => this.handleOnSelect(e, option)}
                  >
                    <span className="ar-icon-location ar-light-blue-1-text fs-2" />
                    {option.description}
                  </Button>
                </ListGroupItem>
              );
            })}
            <ListGroupItem key={10} className="p-0 ar-list-item" action>
              <Button
                className="ar-list-item-button d-flex w-100 ar-red-text"
                name={name}
                value={1}
                onMouseDown={() => this.showGoogleModal(name)}
              >
                <span className="ar-icon-location ar-red-text fs-2" />
                {translate('home.makeYourReservation.findOnMap')}
              </Button>
            </ListGroupItem>
          </ListGroup>
        );
      } else {
        return null;
      }
    }
    return null;
  };

  notify = (type) => {
    let options = {
      place: 'tc',
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
            {this.props.translate('common.error.attention')}
          </span>
          <span data-notify="message">{this.props.translate('common.error.completeAllFields')}</span>
        </div>
      ),
      type: type,
      icon: 'ni ni-bell-55',
      autoDismiss: 10,
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  handleSetLocation = (latitude, longitude, showModal, place, place_id) => {
    if (showModal === 'placeToPickUp') {
      this.setState({
        pickup_latitude: latitude,
        pickup_longitude: longitude,
        pickup_place_id: place_id,
        placeToPickUp: place,
        dropoff_latitude: latitude,
        dropoff_longitude: longitude,
        dropoff_place_id: place_id,
        placeToDropOff: place,
      });
    } else {
      this.setState({
        dropoff_latitude: latitude,
        dropoff_longitude: longitude,
        dropoff_place_id: place_id,
        placeToDropOff: place,
      });
    }
  };

  PrepareTypes = (translate) => {
    return [
      translate('home.makeYourReservation.types.0'),
      translate('home.makeYourReservation.types.1'),
      translate('home.makeYourReservation.types.2'),
      translate('home.makeYourReservation.types.3'),
      translate('home.makeYourReservation.types.4'),
      translate('home.makeYourReservation.types.5'),
      translate('home.makeYourReservation.types.6'),
      translate('home.makeYourReservation.types.7'),
      translate('home.makeYourReservation.types.8'),
      translate('home.makeYourReservation.types.9'),
      translate('home.makeYourReservation.types.10'),
      translate('home.makeYourReservation.types.11'),
      translate('home.makeYourReservation.types.12'),
      translate('home.makeYourReservation.types.13'),
      translate('home.makeYourReservation.types.14'),
      translate('home.makeYourReservation.types.15'),
    ];
  };

  render() {
    const error = this.state.error;
    const { translate, isMobile } = this.props;
    const types = this.PrepareTypes(translate);

    return (
      <Modal
        className="modal-dialog-centered ar-modal-new-search"
        isOpen={this.props.showModal}
        toggle={() => this.props.hideModal()}
      >
        <GoogleModal
          showModal={this.state.showGoogleModal}
          translate={translate}
          place={this.state.showGoogleModal === 'placeToPickUp' ? this.state.placeToPickUp : this.state.placeToDropOff}
          error={this.state.error}
          loadLocation={this.props.loadLocation}
          hideModal={this.hideGoogleModal}
          onChange={this.handleOnChange}
          renderListGroup={this.renderListGroup}
          handleOnSelect={this.handleOnSelect}
          isMobile={isMobile}
          searchLocation={this.props.searchLocation}
          location={
            this.state.showGoogleModal === 'placeToPickUp'
              ? { lat: this.state.pickup_latitude, lng: this.state.pickup_longitude }
              : { lat: this.state.dropoff_latitude, lng: this.state.dropoff_longitude }
          }
          onSetLocation={this.handleSetLocation}
        />
        <div className="rna-wrapper">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <Row className="justify-content-center">
          <Col lg="12" md="12">
            {!isMobile ? (
              <Row className="justify-content-center">
                <Col lg="7" md="8" sm="8" xs="11" className="ar-card-header">
                  <CardHeader className=" p-3 ar-border-round">
                    <Row className="text-muted text-center mb-0 justify-content-center">
                      <h2 className="mb-0">{translate('home.makeYourReservation.doYourReservationIn')}&nbsp;</h2>
                      <h2 className="mb-0 ar-red-text">{translate('home.makeYourReservation.only3Steps')}</h2>
                    </Row>
                  </CardHeader>
                </Col>
              </Row>
            ) : null}
            <Card className=" border-0 mb-0 ar-border-round">
              <CardBody className="px-lg-5 py-lg-5">
                {isMobile ? (
                  <Row className="text-muted text-center mb-0 justify-content-center">
                    <h4 className="mb-0">{translate('home.makeYourReservation.doYourReservationIn')}&nbsp;</h4>
                    <h4 className="mb-0 ar-red-text">{translate('home.makeYourReservation.only3Steps')}</h4>
                  </Row>
                ) : null}
                <div className="text-center mb-4 ar-steps-bar">
                  <ProgressBar step={0} translate={translate} isMobile={isMobile} />
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
                              <i className="ar-icon-location" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="placeToPickUp"
                            onChange={this.handleOnChange}
                            className="ar-round-input-right"
                            placeholder={translate('home.makeYourReservation.placeToPickUp')}
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
                              <i className="ar-icon-location" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="placeToDropOff"
                            onChange={this.handleOnChange}
                            className="ar-round-input-right"
                            placeholder={translate('home.makeYourReservation.placeToDropOff')}
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
                      <RangeDatePicker error={error} handleDate={this.handleDate} translate={translate} />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" md="6">
                      <FormGroup
                        className={classnames(
                          {
                            focused: this.state.countrySelected,
                          },
                          'ar-mb-1',
                        )}
                      >
                        <CustomDropDown
                          name={'passenger_country_id'}
                          title={translate('home.makeYourReservation.country')}
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
                          'ar-mb-1',
                        )}
                      >
                        <CustomDropDown
                          name={'ageSelected'}
                          title={translate('home.makeYourReservation.age')}
                          items={[
                            { name: `+25 ${translate('home.makeYourReservation.years')}`, id: '+25' },
                            { name: `24 ${translate('home.makeYourReservation.years')}`, id: '24' },
                            { name: `23 ${translate('home.makeYourReservation.years')}`, id: '23' },
                            { name: `22 ${translate('home.makeYourReservation.years')}`, id: '22' },
                            { name: `21 ${translate('home.makeYourReservation.years')}`, id: '21' },
                            { name: `20 ${translate('home.makeYourReservation.years')}`, id: '20' },
                            { name: `19 ${translate('home.makeYourReservation.years')}`, id: '19' },
                            { name: `18 ${translate('home.makeYourReservation.years')}`, id: '18' },
                          ]}
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
                          'ar-mb-1',
                        )}
                      >
                        <CustomDropDown
                          name={'vehicleType'}
                          title={translate('home.makeYourReservation.carType')}
                          items={types}
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
                        onClick={() => this.handleSearchClick(types)}
                      >
                        {!isMobile ? (
                          <span className="nav-link-inner--text text-sm d-flex align-items-center">
                            {translate('home.makeYourReservation.search')}
                            <i className="ar-icon-chevron-right va-middle fs-i--1 mt-i-1 d-flex" />
                          </span>
                        ) : (
                          <span className="nav-link-inner--text text-sm">
                            {translate('home.makeYourReservation.search')}
                          </span>
                        )}
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
  searchLocation: PropTypes.func,
  loadCountries: PropTypes.func,
  showLoader: PropTypes.func,
  loadLocation: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(NewSearchModal);
