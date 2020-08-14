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
import Dropdown from '../../Atoms/Dropdown';
import ModalAditionalInformation from './ModalAditionalInformation';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      information: [],
    };
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

  showInformationModal = (information) => {
    this.setState({ showModal: true, information });
  };

  hideModal = () => {
    this.setState({ showModal: false, information: [] });
  };

  render() {
    return (
      <Row className="m-4 justify-content-center">
        <ModalAditionalInformation
          information={this.state.information}
          showModal={this.state.showModal}
          hideModal={this.hideModal}
        />
        <Col xl="9" lg="10" md="11" className="pl-0 pr-0">
          <Row className="justify-content-end m-0 mb-3">
            <div className="d-flex align-items-center">
              <div className="custom-control custom-checkbox mr-3">
                <input className="custom-control-input" id="customCheck1" type="checkbox" />
                <label className="custom-control-label ws-pre tx-bold mr-xl-4 mr-lg-4" htmlFor="customCheck1">
                  Mostrar vehículos destacados primero
                </label>
              </div>
              <Dropdown items={['Ordenar por']} title={'Ordenar por'} color={'white-3'} />
            </div>
          </Row>
          <Row>
            <Col xl="3" lg="3" className="pl-0">
              {Object.entries(this.props.filters).length !== 0 ? <FilterList items={this.props.filters} /> : null}
            </Col>
            <Col xl="9" lg="9" className="pl-0">
              {this.props.cars.length !== 0
                ? this.props.cars.map((car) => {
                    return <CarsResult car={car} showInformationModal={this.showInformationModal} />;
                  })
                : null}
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
