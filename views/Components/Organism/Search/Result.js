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
import CustomDropDown from '../../Atoms/CustomDropDown';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CarsResult from './CarsResult';
import FilterList from './FilterList';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {};

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Row className="m-4 justify-content-center">
        <Col xl="9" lg="10" md="11" className="pl-0 pr-0">
          <Row className="justify-content-end">
            <div className="d-flex align-items-center">
              <div className="custom-control custom-checkbox mr-3">
                <input className="custom-control-input" id="customCheck1" type="checkbox" />
                <label className="custom-control-label ws-pre" htmlFor="customCheck1">
                  Mostrar vehículos destacados primero
                </label>
              </div>
              <CustomDropDown items={['Ordenar por']} title={'Ordenar por'} />
            </div>
          </Row>
          <Row>
            <Col xl="3" lg="3" className="pl-0">
              <FilterList />
            </Col>
            <Col xl="9" lg="9">
              <CarsResult />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

Result.propTypes = {
  dispatch: PropTypes.func,
  searchLocation: PropTypes.func,
  loadCountries: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(Result);
