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

class MakeYourReservation extends React.Component {
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
  }

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnChange = (event) => {
    this.dispatch(this.props.searchLocation(event.target.value));
    this.setState({ [event.target.name]: event.target.value });
  };

  renderListGroup = () => {
    const placeToPickUpOptions = this.props.pickUpLocations;

    //Ver de como hacer para el tema de guardar el valor que se seleccione del list group en el input sin invocar la otra call

    return (
      <ListGroup className="ar-list-group">
        {placeToPickUpOptions.map((option) => {
          return (
            <ListGroupItem name={'placeToPickUp'} tag="button" action onClick={this.handleOnSelect}>
              <div className="d-flex align-items-center" name={'placeToPickUp'}>
                {option.airport ? (
                  <img src={'/svg/plane-icon.svg'} width={'15px'} />
                ) : (
                  <img src={'/svg/office-icon.svg'} width={'15px'} />
                )}
                &nbsp;{' ' + option.label}
              </div>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  };

  render() {
    return (
      <Container className="mt--10 pb-5">
        <Row className="justify-content-center">
          <Col lg="9" md="10">
            <Row className="justify-content-center">
              <Col lg="7" md="8" sm="8" xs="11" className="ar-card-header">
                <CardHeader className=" p-3 ar-border-round">
                  <Row className="text-muted text-center mb-0 justify-content-center">
                    <h2 className="mb-0">Haz tu reserva en&nbsp;</h2>
                    <h2 className="mb-0 ar-red-text">sólo 3 pasos</h2>
                  </Row>
                </CardHeader>
              </Col>
            </Row>
            <Card className=" border-0 mb-0 ar-border-round">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center mb-4 ar-steps-bar">
                  <ProgressBar />
                </div>
                <Form role="form">
                  <Row>
                    <Col lg="6" md="6">
                      <FormGroup
                        className={classnames({
                          focused: this.state.placeToPickUpFocus,
                        })}
                      >
                        <InputGroup className="input-group-merge input-group-alternative mb-3 ar-round-input bg-ar-white-1">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="ar-round-input-left">
                              <i className="icon-location-icon ar-round-input-left" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="placeToPickUp"
                            onChange={this.handleOnChange}
                            className="ar-round-input-right"
                            placeholder="¿Dónde quieres retirar el vehículo?"
                            type="text"
                            onFocus={() => this.setState({ placeToPickUpFocus: true })}
                            onBlur={() => this.setState({ placeToPickUpFocus: false })}
                          />
                        </InputGroup>
                        {true ? this.renderListGroup() : null}
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.placeToDeliverFocus,
                        })}
                      >
                        <InputGroup className="input-group-merge input-group-alternative mb-3 ar-round-input bg-ar-white-1">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="ar-round-input-left">
                              <i className="icon-location-icon ar-round-input-left" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="placeToPickUp"
                            onChange={this.handleOnChange}
                            className="ar-round-input-right"
                            placeholder="¿Dónde quieres entregar el vehículo?"
                            type="text"
                            onFocus={() => this.setState({ placeToDeliverFocus: true })}
                            onBlur={() => this.setState({ placeToDeliverFocus: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col lg="6" md="6">
                      <RangeDatePicker />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" md="6">
                      <FormGroup
                        className={classnames({
                          focused: this.state.ageSelected,
                        })}
                      >
                        <CustomDropDown
                          title={'País de residencia'}
                          items={['Argentina', 'Brasil', 'Estados Unidos']}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="2" md="6" className="pl-lg-0">
                      <FormGroup
                        className={classnames({
                          focused: this.state.ageSelected,
                        })}
                      >
                        <CustomDropDown title={'Edad'} items={['-18', '+18', '+25']} />
                      </FormGroup>
                    </Col>
                    <Col lg="4" md="6">
                      <FormGroup
                        className={classnames({
                          focused: this.state.ageSelected,
                        })}
                      >
                        <CustomDropDown title={'Tipo de vehículo'} items={['Deportivo', 'Exótico', 'Familiar']} />
                      </FormGroup>
                    </Col>
                    <Col lg="2" md="6" className="p-0 ar-make-your-reservation-button-container">
                      <Button className=" btn-icon ar-round-button ar-blue-button" color="default" href="">
                        <span className="nav-link-inner--text">Buscar </span>
                        <span className="btn-inner--icon">
                          <span className="icon-chevron-right" />
                        </span>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

MakeYourReservation.propTypes = {
  dispatch: PropTypes.func,
  searchLocation: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(MakeYourReservation);
