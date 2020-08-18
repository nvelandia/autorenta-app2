import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Modal,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
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
import MakeYourReservation from '../Home/MakeYourReservation';
import classnames from 'classnames';
import RangeDatePicker from '../../Atoms/RangeDatePicker';
import CustomDropDown from '../../Atoms/CustomDropDown';
import { isoStringToString, isoStringToStringTime } from '../../../../utils/helpers/dateHelpers';

class ModalModifySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeToPickUp: '',
      placeToPickUpFocus: false,
      placeToDropOff: '',
      placeToDropOffFocus: false,
      dateToPickUp: '',
      dateToDropOff: '',
      ageSelected: '',
      iataToPickUp: '',
      iataToDropOff: '',
      timeToDropOff: '',
      timeToPickUp: '',
    };
    this.dispatch = props.dispatch;
  }

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
      <Modal
        className="modal-dialog-centered ar-modal-aditional-information"
        isOpen={this.props.showModal}
        toggle={() => this.props.hideModal()}
      >
        <div className="modal-header pb-0">
          <h6 className="modal-title mt-3 pl-1 mb-2" id="exampleModalLabel">
            Modificar la búsqueda
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
              <Col lg="5" md="5">
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
              <Col lg="5" md="5">
                <RangeDatePicker handleDate={this.handleDate} />
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
                <Button
                  className=" btn-icon ar-round-button w-100 ar-modify-search"
                  color="red-0"
                  onClick={this.showModifyModal}
                >
                  <span className="nav-link-inner--text">Modificar </span>
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
};

const mapStateToProps = (state) => {
  return { ...state.searchReducer, ...state.homeReducer };
};

export default connect(mapStateToProps)(ModalModifySearch);
