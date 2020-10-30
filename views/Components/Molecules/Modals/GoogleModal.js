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
  InputGroupAddon,
  InputGroupText,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import classnames from 'classnames';
import Google from '../maps/Google';
import { Marker } from 'react-google-maps';

class GoogleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeFocus: false,
      markerPosition: null,
      showFirst: '',
      error: {},
    };
    this.dispatch = props.dispatch;
  }

  handleOnMapClick = (e) => {
    this.setState({
      markerPosition: e.latLng,
    });
    this.dispatch(
      this.props.searchLocation({
        latitude: e.latLng.lat().toString(),
        longitude: e.latLng.lng().toString(),
      }),
    );
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: e.latLng }, (result, status) => {
      this.props.onSetLocation(
        e.latLng.lat().toString(),
        e.latLng.lng().toString(),
        this.props.showModal,
        result[0].formatted_address,
        result[0].place_id,
      );
    });
  };

  handleShowFirst = (index) => {
    this.setState({ showFirst: index });
  };

  handleOnSelect = (event, place = null) => {
    if (place.place_id) {
      const geocoder = new google.maps.Geocoder();
      if (event.target.name === 'placeToPickUp') {
        geocoder.geocode({ placeId: place.place_id }, (result, status) => {
          const latitude = result[0].geometry.location.lat();
          const longitude = result[0].geometry.location.lng();
          this.setState({
            pickup_latitude: latitude,
            pickup_longitude: longitude,
            placeToPickUp: place.description,
          });
        });
      } else {
        geocoder.geocode({ placeId: place.place_id }, (result, status) => {
          const latitude = result[0].geometry.location.lat();
          const longitude = result[0].geometry.location.lng();
          this.setState({
            dropoff_latitude: latitude,
            dropoff_longitude: longitude,
            placeToDropOff: place.description,
          });
        });
      }
    }
    this.setState({
      [event.target.name]: event.target.value,
      error: { ...this.state.error, [event.target.name]: false },
    });
  };

  renderListGroup = (name) => {
    const { translate } = this.props;
    const placesOptions = this.props.locations;
    if (placesOptions) {
      if (placesOptions.length !== 0) {
        return (
          <ListGroup className="ar-list-group zi-1200 mt-0">
            {placesOptions.map((option, index) => {
              return (
                <ListGroupItem key={index} className="p-0 ar-list-item" action>
                  <Button
                    className="ar-list-item-button d-flex align-items-center w-100 ws-pre ar-modal-hover"
                    name={name}
                    value={option.description}
                    onMouseDown={(e) => this.props.handleOnSelect(e, option)}
                  >
                    <>
                      <span className="ar-icon-location ar-light-blue-1-text fs-2" />
                      &nbsp;{option.description}
                    </>
                  </Button>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        );
      } else {
        return null;
      }
    }
    return null;
  };

  handleSetMarkers = (companies) => {
    return companies.map((company, index) => {
      return (
        <Marker
          title={company.name}
          key={index}
          position={{ lat: parseFloat(company.latitude), lng: parseFloat(company.longitude) }}
          icon={company.company.icon}
          zIndex={index === this.state.showFirst ? index + 60 : 50 + index}
        />
      );
    });
  };

  render() {
    const error = this.state.error;
    const { isMobile, onChange, place, translate, hideModal, showModal, location } = this.props;
    let markers = [];
    if (this.props.companiesLocations.length !== 0 && this.props.showModal) {
      markers = this.handleSetMarkers(this.props.companiesLocations);
    }

    return (
      <Modal
        className="modal-dialog-centered ar-google-modal"
        isOpen={showModal}
        toggle={hideModal}
        returnFocusAfterClose={false}
      >
        <div className="ar-google-modal-content">
          <Row className="first-row">
            <h5 className="ar-modal-cancel-reservation-subtitle">{translate('home.googleModal.title')}</h5>
            <FormGroup
              className={
                `${!isMobile ? 'w-70' : 'w-100 mt-2 mb-1'} mb-0  ` +
                classnames({
                  focused: this.state.placeFocus,
                })
              }
            >
              <InputGroup
                className={`input-group-merge input-group-alternative ar-input-google-modal shadow-none ar-round-input bg-ar-white-1 ${
                  error.placeToPickUp ? ' ar-error-border' : null
                }`}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="ar-round-input-left">
                    <i className="ar-icon-location" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  id={showModal}
                  name={showModal}
                  onChange={onChange}
                  className="ar-round-input-right pr-3"
                  value={place}
                  type="text"
                  autoComplete="off"
                  onFocus={() => this.setState({ placeFocus: true })}
                  onBlur={() => this.setState({ placeFocus: false })}
                />
              </InputGroup>
              {this.state.placeFocus ? this.renderListGroup(showModal) : null}
            </FormGroup>
          </Row>
          {!isMobile ? (
            <Row className="second-row pr-0">
              <div className="pl-0 pr-4 w-31">
                <div className="ar-containter">
                  <div className="ar-companies-info-container">
                    {this.props.companiesLocations.length !== 0 ? (
                      this.props.companiesLocations.map((company, index) => {
                        return (
                          <div className="ar-google-modal-company-info">
                            <img src={company.company.logo_banner} alt="" onClick={() => this.handleShowFirst(index)} />
                            <div>
                              <p className="ar-google-modal-p font-weight-600">{company.name.toLowerCase()}</p>
                            </div>
                            <div>
                              <i className="ar-icon-location ar-light-blue-3-text" />
                              <div className="d-flex flex-column">
                                <p className="ar-google-modal-p">{company.street.toLowerCase()}</p>
                                <p className="ar-google-modal-p">
                                  {company.city.toLowerCase() +
                                    (company.state ? `, ${company.state.toLowerCase()}` : '')}
                                </p>
                                <p className="ar-google-modal-p">
                                  {translate('home.googleModal.distance') +
                                    parseFloat(company.distance).toFixed(2) +
                                    ' km.'}
                                </p>
                                <p className="ar-google-modal-p">
                                  {translate('home.googleModal.officeCode')}
                                  <b className="font-weight-600">{company.iata}</b>
                                </p>
                                <p className="ar-google-modal-p">
                                  {translate('home.googleModal.extendedOfficeCode')}
                                  <b className="font-weight-600">{company.iata_extended}</b>
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className=" ar-message-not-found-locations ar-ltr">
                        <img src="/img/custom/exclamation.png" alt="" />
                        <h2 className="ar-red-text">{translate('home.googleModal.notFoundTitle')}</h2>
                        <h5>{translate('home.googleModal.notFound1')}</h5>
                        <h5>{translate('home.googleModal.notFound2')}</h5>
                      </div>
                    )}
                  </div>
                  <div>
                    <Button className="ar-round-button ar-google-modal-search-button" color="red-0" onClick={hideModal}>
                      <span className="nav-link-inner--text">{translate('home.googleModal.button')}</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="pr-1 pt-3 pb-4 w-68">
                {this.props.companiesLocations.length !== 0 && this.props.showModal ? (
                  <Google
                    lat={parseFloat(location.lat)}
                    lng={parseFloat(location.lng)}
                    companies={markers}
                    onMouse={(n) => this.onClick}
                    markerPosition={this.state.markerPosition}
                    onMapClick={this.handleOnMapClick}
                  />
                ) : (
                  <Google
                    lat={parseFloat(location.lat)}
                    lng={parseFloat(location.lng)}
                    onMouse={(n) => this.onClick}
                    isMarkerShown={this.state.isMarkerShown}
                    markerPosition={this.state.markerPosition}
                    onMapClick={this.handleOnMapClick}
                  />
                )}
              </div>
            </Row>
          ) : (
            <div>
              <div className="p-1 pt-3 w-100">
                {this.props.companiesLocations.length !== 0 && this.props.showModal ? (
                  <Google
                    lat={parseFloat(location.lat)}
                    lng={parseFloat(location.lng)}
                    companies={markers}
                    onMouse={(n) => this.onClick}
                    markerPosition={this.state.markerPosition}
                    onMapClick={this.handleOnMapClick}
                    height={'h-350'}
                  />
                ) : (
                  <Google
                    lat={parseFloat(location.lat)}
                    lng={parseFloat(location.lng)}
                    onMouse={(n) => this.onClick}
                    isMarkerShown={this.state.isMarkerShown}
                    markerPosition={this.state.markerPosition}
                    onMapClick={this.handleOnMapClick}
                    height={'h-350'}
                  />
                )}
              </div>
              <div className="pl-0 w-100">
                <div className="ar-companies-info-container">
                  {this.props.companiesLocations.length !== 0 ? (
                    this.props.companiesLocations.map((company) => {
                      return (
                        <div className="ar-google-modal-company-info">
                          <img src={company.company.logo_banner} alt="" onClick={() => this.handleShowFirst(index)} />
                          <div>
                            <p className="ar-google-modal-p font-weight-600">{company.name.toLowerCase()}</p>
                          </div>
                          <div>
                            <i className="ar-icon-location ar-light-blue-3-text" />
                            <div className="d-flex flex-column">
                              <p className="ar-google-modal-p">{company.street.toLowerCase()}</p>
                              <p className="ar-google-modal-p">
                                {company.city.toLowerCase() + (company.state ? `, ${company.state.toLowerCase()}` : '')}
                              </p>
                              <p className="ar-google-modal-p">
                                {translate('home.googleModal.distance') +
                                  parseFloat(company.distance).toFixed(2) +
                                  ' km.'}
                              </p>
                              <p className="ar-google-modal-p">
                                {translate('home.googleModal.officeCode')}
                                <b className="font-weight-600">{company.iata}</b>
                              </p>
                              <p className="ar-google-modal-p">
                                {translate('home.googleModal.extendedOfficeCode')}
                                <b className="font-weight-600">{company.iata_extended}</b>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className=" ar-message-not-found-locations ar-ltr">
                      <img src="/img/custom/exclamation.png" alt="" />
                      <h2 className="ar-red-text">{translate('home.googleModal.notFoundTitle')}</h2>
                      <h5>{translate('home.googleModal.notFound1')}</h5>
                      <h5>{translate('home.googleModal.notFound2')}</h5>
                    </div>
                  )}
                </div>
                <div className="ar-containter">
                  <Button className="ar-round-button ar-google-modal-search-button" color="red-0" onClick={hideModal}>
                    <span className="nav-link-inner--text">{translate('home.googleModal.button')}</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    );
  }
}

GoogleModal.propTypes = {
  dispatch: PropTypes.func,
  showModal: PropTypes.bool,
  hideModal: PropTypes.func,
  searchReservation: PropTypes.func,
  loadLocation: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(GoogleModal);
