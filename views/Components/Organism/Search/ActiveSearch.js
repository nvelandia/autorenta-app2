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
      <Row className="justify-content-center bg-ar-white-0 ar-search-banner p-4">
        <Row className="justify-content-around bg-ar-white-0 align-items-center w-90">
          <div>
            <h3>Búsqueda activa</h3>
          </div>
          <div className="ar-search-date-and-place">
            <div className="ar-search-icon">
              <icon className="icon-calendar-icon" />
            </div>
            <div>
              <p className="ar-search-date">26 de Septiembre de 2020, 12:00 hs.</p>
              <p className="ar-search-place">Miami International Airpot (MIA)</p>
            </div>
          </div>
          <div>
            <img src={'/svg/searchView/next-arrow.svg'} width={'20px'} />
          </div>
          <div className="ar-search-date-and-place">
            <div className="ar-search-icon">
              <icon className="icon-calendar-icon" />
            </div>
            <div>
              <p className="ar-search-date">23 de Octubre de 2020, 18:00 hs.</p>
              <p className="ar-search-place">Miami International Airpot (MIA)</p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <Label classes={'ar-label-common ar-m-1'} title={'Edad:'} value={' +25 años'} />
            <Button className=" btn-icon ar-round-button ar-nav-button ar-m-1 ar-modify-button" color="red-0" href="">
              <span className="nav-link-inner--text">Modificar </span>
              <span className="btn-inner--icon">
                <span className="ar-icon-chevron-right" />
              </span>
            </Button>
          </div>
        </Row>
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
  return state.homeReducer;
};

export default connect(mapStateToProps)(ActiveSearch);
