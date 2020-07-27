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
      placeToPickUpFocus: '',
      placeToDeliverFocus: '',
      dateToPickUpFocus: '',
      dateToDeliverFocus: '',
      countrySelected: '',
      ageSelected: '',
      carTypeSelected: '',
    };
    this.dispatch = props.dispatch;
  }

  handleChange = (event) => {};

  renderListGroup = () => {
    const placeToPickUpOptions = ['San Juan', 'San Francisco'];

    return (
      <ListGroup className="ar-list-group">
        {placeToPickUpOptions.map((option) => {
          return (
            <ListGroupItem tag="button" action>
              {option}
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
          <Col lg="9" md="8">
            <Row className="justify-content-center">
              <Col lg="7" md="5" className="ar-card-header">
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
                <div className="text-center text-muted mb-4">
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
                            className="ar-round-input-right"
                            placeholder="¿Dónde quieres retirar el vehículo?"
                            type="text"
                            onFocus={() => this.setState({ placeToPickUpFocus: true })}
                            onBlur={() => this.setState({ placeToPickUpFocus: false })}
                          />
                        </InputGroup>
                        {this.state.placeToPickUpFocus === 's' ? this.renderListGroup() : null}
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
                    <Col lg="2" md="6" className="p-0">
                      <Button className=" btn-icon ar-round ar-nav-button ar-button-blue" color="default" href="">
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
};

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(MakeYourReservation);
