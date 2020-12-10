import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Modal,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import classnames from 'classnames';
import RangeDatePicker from '../../Atoms/RangeDatePicker';
import CustomDropDown from '../../Atoms/CustomDropDown';
import { isoStringToDateTime, isoStringToString, isoStringToStringTime } from '../../../../utils/helpers/dateHelpers';
import NotificationAlert from 'react-notification-alert';
import { pages } from '../../../../utils/helpers/redirectTo';
import GoogleModal from '../../Molecules/Modals/GoogleModal';

class ModalModifySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeToPickUp: '',
      placeToPickUpFocus: false,
      placeToDropOff: '',
      placeToDropOffFocus: false,
      pickup_place_id: '',
      pickup_latitude: '',
      pickup_longitude: '',
      dropoff_place_id: '',
      dropoff_latitude: '',
      dropoff_longitude: '',
      dateToPickUp: '',
      dateToDropOff: '',
      ageSelected: '',
      timeToDropOff: '',
      timeToPickUp: '',
      hydrated: false,
      error: {},
      showGoogleModal: false,
    };
    this.dispatch = props.dispatch;
  }

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

  handleSearchClick = () => {
    const body = {
      pickup_date: this.state.dateToPickUp,
      pickup_time: this.state.timeToPickUp,
      dropoff_date: this.state.dateToDropOff,
      dropoff_time: this.state.timeToDropOff,
      passenger_country_id: this.props.searchParams.passenger_country_id,
      passenger_age: this.state.ageSelected,
      vehicle_type: this.props.searchParams.vehicle_type,
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
      this.dispatch(this.props.showLoader());
      window.location.href = `${pages.step1}?pickup_place_id=${body.pickup_place_id}&dropoff_place_id=${body.dropoff_place_id}&pickup_date=${body.pickup_date}&dropoff_date=${body.dropoff_date}&pickup_time=${body.pickup_time}&dropoff_time=${body.dropoff_time}&passenger_country_id=${body.passenger_country_id}&passenger_age=${body.passenger_age}&vehicle_type=${body.vehicle_type}`;
    }
  };

  renderListGroup = (name) => {
    const { translate } = this.props;
    const placesOptions = this.props.locations;
    if (placesOptions) {
      if (placesOptions.length !== 0) {
        {
          placesOptions.sort((a, b) => {
            if (!a.types.includes('airport') && b.types.includes('airport')) {
              return 1;
            }
            if (a.types.includes('airport') && !b.types.includes('airport')) {
              return -1;
            }
            return 0;
          });
        }
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
                    {option.types.includes('airport') ? (
                      <div className="ar-list-group-icon-container">
                        <img src="svg/airplane.svg" />
                      </div>
                    ) : (
                      <span className="ar-icon-location ar-light-blue-1-text fs-2" />
                    )}
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
  render() {
    const error = this.state.error;
    const { translate, isMobile, isTablet, isSmallTablet } = this.props;
    if (!this.state.hydrated && this.props.result.locations.pickup) {
      this.setState({
        placeToPickUp: this.props.result.locations.pickup.formated_address,
        placeToPickUpFocus: false,
        placeToDropOff: this.props.result.locations.dropoff.formated_address,
        placeToDropOffFocus: false,
        dateToPickUp: this.props.result.locations.pickup.date,
        timeToPickUp: this.props.result.locations.pickup.time,
        dateToDropOff: this.props.result.locations.dropoff.date,
        timeToDropOff: this.props.result.locations.dropoff.time,
        ageSelected: this.props.searchParams.passenger_age[0] === ' ' ? '+25' : this.props.searchParams.passenger_age,
        pickup_latitude: this.props.searchParams.pickup_latitude,
        pickup_longitude: this.props.searchParams.pickup_longitude,
        dropoff_latitude: this.props.searchParams.dropoff_latitude,
        dropoff_longitude: this.props.searchParams.dropoff_longitude,
        pickup_place_id: this.props.searchParams.pickup_place_id,
        dropoff_place_id: this.props.searchParams.dropoff_place_id,
        hydrated: true,
      });
    }

    return (
      <Modal
        className="modal-dialog-centered ar-modal-aditional-information"
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
          isMobile={isMobile}
          isTablet={isTablet}
          isSmallTablet={isSmallTablet}
          renderListGroup={this.renderListGroup}
          handleOnSelect={this.handleOnSelect}
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
        <div className="modal-header pb-0">
          <h6 className="modal-title mt-3 pl-1 mb-2" id="exampleModalLabel">
            {translate('step1.activeSearch.modifyModal.title')}
          </h6>
          <button
            aria-label="Close"
            className="close ar-blue-0-text"
            data-dismiss="modal"
            type="button"
            onClick={() => this.props.hideModal()}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <Form role="form">
            <Row>
              <Col lg="5" md="4">
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
                        <i className="ar-icon-location ar-round-input-left" />
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
              <Col lg="5" md="5">
                <RangeDatePicker
                  error={error}
                  handleDate={this.handleDate}
                  defaultStartDate={isoStringToDateTime(
                    this.state.dateToPickUp,
                    this.state.timeToPickUp,
                    this.props.locale,
                  )}
                  defaultEndDate={isoStringToDateTime(
                    this.state.dateToDropOff,
                    this.state.timeToDropOff,
                    this.props.locale,
                  )}
                  translate={translate}
                  isMobile={isMobile}
                  isTablet={isTablet}
                  isSmallTablet={isSmallTablet}
                  locale={this.props.locale}
                />
              </Col>
              <Col lg="2" md="3">
                <FormGroup
                  className={classnames({
                    focused: this.state.ageSelected,
                  })}
                >
                  <CustomDropDown
                    name={'ageSelected'}
                    title={`${
                      this.props.searchParams.passenger_age[0] === ' ' ? '+25' : this.props.searchParams.passenger_age
                    } ${translate('home.makeYourReservation.years')}`}
                    items={[
                      { name: `+25 ${translate('home.makeYourReservation.years')}`, id: '+25' },
                      { name: `24 ${translate('home.makeYourReservation.years')}`, id: '24' },
                      { name: `23 ${translate('home.makeYourReservation.years')}`, id: '23' },
                      { name: `22 ${translate('home.makeYourReservation.years')}`, id: '22' },
                      { name: `21 ${translate('home.makeYourReservation.years')}`, id: '21' },
                    ]}
                    classes={'ar-dropdown-menu-age'}
                    handleSelect={this.handleOnSelect}
                    height={'ar-dropdown-age-height'}
                    error={error}
                  />
                </FormGroup>
                <Button
                  className=" btn-icon ar-round-button w-100 ar-modify-search"
                  color="red-0"
                  onClick={this.handleSearchClick}
                >
                  <span className="nav-link-inner--text">{translate('step1.activeSearch.modify') + ' '}</span>
                  <span className="btn-inner--icon">
                    <span className="ar-icon-chevron-right" />
                  </span>
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
    );
  }
}

ModalModifySearch.propTypes = {
  dispatch: PropTypes.func,
  showModal: PropTypes.bool,
  hideModal: PropTypes.func,
  modifySearch: PropTypes.func,
  searchLocation: PropTypes.func,
  modifySearchFleet: PropTypes.func,
  showLoader: PropTypes.func,
  loadLocation: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { ...state.searchReducer, ...state.homeReducer, ...state.Intl };
};

export default connect(mapStateToProps)(ModalModifySearch);
