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
import Label from '../../Atoms/Label';
import { isoStringToDateWithTimeInText } from '../../../../utils/helpers/dateHelpers';

class ActiveSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeToPickUp: '',
      placeToPickUpFocus: false,
      placeToDeliver: '',
      placeToDeliverFocus: false,
      dateToPickUpFocus: false,
      dateToDeliverFocus: false,
      countrySelected: '',
      ageSelected: '',
      carTypeSelected: '',
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {
    //this.dispatch(this.props.loadCountries());
  };

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value, placeToPickUpFocus: false });
  };

  handleOnChange = (event) => {
    if (this.state.placeToPickUpFocus || this.state.placeToDeliverFocus) {
      this.dispatch(this.props.searchLocation(event.target.value));
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  render() {
    return (
      <Row className="justify-content-center bg-ar-white-0 ar-search-banner p-4 mx-0">
        <Col xl="9" className="p-0">
          <Row className="justify-content-between bg-ar-white-0 align-items-center ">
            <div>
              <h3>Búsqueda activa</h3>
            </div>
            <div className="ar-search-date-and-place">
              <div className="ar-search-icon">
                <icon className="ar-icon-calendar" />
              </div>
              <div>
                {this.props.locations.pickup ? (
                  <>
                    <p className="ar-search-date">
                      {isoStringToDateWithTimeInText(
                        this.props.locations.pickup.date,
                        this.props.locations.pickup.time,
                      )}
                    </p>
                    <p className="ar-search-place">
                      {this.props.locations.pickup.location + ` (${this.props.locations.pickup.iata})`}
                    </p>{' '}
                  </>
                ) : null}
              </div>
            </div>
            <div>
              <img src={'/svg/searchView/next-arrow.svg'} width={'20px'} />
            </div>
            <div className="ar-search-date-and-place">
              <div className="ar-search-icon">
                <icon className="ar-icon-calendar" />
              </div>
              <div>
                {this.props.locations.dropoff ? (
                  <>
                    <p className="ar-search-date">
                      {isoStringToDateWithTimeInText(
                        this.props.locations.dropoff.date,
                        this.props.locations.dropoff.time,
                      )}
                    </p>
                    <p className="ar-search-place">
                      {this.props.locations.dropoff.location + ` (${this.props.locations.dropoff.iata})`}
                    </p>{' '}
                  </>
                ) : null}
              </div>
            </div>
            <div className="d-flex justify-content-between pr-xl-2">
              <Label classes={'ar-label-common ar-m-1'} title={'Edad:'} value={' +25 años'} />
              <Button className=" btn-icon ar-round-button ar-nav-button ar-m-1 ar-modify-button" color="red-0" href="">
                <span className="nav-link-inner--text">Modificar </span>
                <span className="btn-inner--icon">
                  <span className="ar-icon-chevron-right" />
                </span>
              </Button>
            </div>
          </Row>
        </Col>
      </Row>
    );
  }
}

ActiveSearch.propTypes = {
  dispatch: PropTypes.func,
  searchLocation: PropTypes.func,
  loadCountries: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(ActiveSearch);
