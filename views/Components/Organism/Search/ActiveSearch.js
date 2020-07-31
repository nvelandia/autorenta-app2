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
      <Row className="justify-content-around bg-ar-white-0 align-items-center">
        <div>
          <h2>Búsqueda activa</h2>
        </div>
        <div>
          <h2>26 de Septiembre de 2020, 12:00 hs.</h2>
          <h5>Miami International Airpot (MIA)</h5>
        </div>
        <div>
          <h2>23 de Octubre de 2020, 18:00 hs.</h2>
          <h5>Miami International Airpot (MIA)</h5>
        </div>
        <div>
          <Label classes={'ar-label-common'} title={'Edad:'} value={' +25 años'} />
        </div>
        <div>
          <Button className=" btn-icon ar-round-button ar-nav-button  ar-white-1-text" color="red-0" href="">
            <span className="nav-link-inner--text">Modificar </span>
            <span className="btn-inner--icon">
              <span className="icon-chevron-right" />
            </span>
          </Button>
        </div>
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
