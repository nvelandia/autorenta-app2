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

class CarsResult extends React.Component {
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
    const { car } = this.props;
    return (
      <Card className="card-frame">
        <CardBody>
          <Row>
            <Col xl="2" lg="2">
              <img src={car.company.logo} alt={'Company logo'} />
            </Col>
            <Col xl="3" lg="3">
              <h4 className="ar-red-text">{car.typeCar.name}</h4>
              <h6>{car.name}</h6>
            </Col>
            <Col xl="7" lg="7">
              <Row>
                <Col>
                  <h6>{car.seats} Asientos</h6>
                  <h6>{car.doors} Puertas</h6>
                </Col>
                <Col>
                  <h6>{car.bags_big} maleta grande</h6>
                  <h6>{car.bags_small} maleta pequeña</h6>
                </Col>
                <Col>
                  <h6>Transmisión {car.gear}</h6>
                  <h6>{car.doors ? 'Aire Acondicionado' : null}</h6>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl="5" lg="5">
              <Row>
                <Col xl="6" lg="6">
                  <img width="100%" src={car.image} alt="Car image" />
                </Col>
                <Col xl="6" lg="6">
                  <h6>Cancela gratis tu reserva con 45hs de anticipación.</h6>
                  <h6>Algunas rentadoras cobran un cargo extra a conductores menores de 25 años.</h6>
                </Col>
              </Row>
              <Row></Row>
            </Col>
            <Col xl="7" lg="7">
              prices
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

CarsResult.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(CarsResult);
