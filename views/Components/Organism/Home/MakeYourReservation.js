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
  Row,
} from 'reactstrap';
import ProgressBar from '../../Atoms/ProgressBar';

class MakeYourReservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeToPickUp: '',
      placeToDeliver: '',
      dateToPickUp: '',
      dateToDeliver: '',
      countrySelected: '',
      ageSelected: '',
      carTypeSelected: '',
    };
  }

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
                          focused: this.state.placeToPickUp,
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
                            onFocus={() => this.setState({ placeToPickUp: true })}
                            onBlur={() => this.setState({ placeToPickUp: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.placeToDeliver,
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
                            onFocus={() => this.setState({ placeToDeliver: true })}
                            onBlur={() => this.setState({ placeToDeliver: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col lg="6" md="6">
                      <FormGroup
                        className={classnames({
                          focused: this.state.dateToPickUp,
                        })}
                      >
                        <InputGroup className="input-group-merge input-group-alternative mb-3 ar-round-input bg-ar-white-1">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="ar-round-input-left">
                              <i className="icon-calendar-icon ar-round-input-left" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="ar-round-input-right"
                            placeholder="Fecha y hora de retiro"
                            type="text"
                            onFocus={() => this.setState({ dateToPickUp: true })}
                            onBlur={() => this.setState({ dateToPickUp: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.dateToDeliver,
                        })}
                      >
                        <InputGroup className="input-group-merge input-group-alternative mb-3 ar-round-input bg-ar-white-1">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="ar-round-input-left">
                              <i className="icon-calendar-icon ar-round-input-left" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="ar-round-input-right"
                            placeholder="Fecha y hora de entrega"
                            type="text"
                            onFocus={() => this.setState({ dateToDeliver: true })}
                            onBlur={() => this.setState({ dateToDeliver: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" md="6">
                      <FormGroup
                        className={classnames({
                          focused: this.state.countrySelected,
                        })}
                      >
                        <InputGroup className="input-group-merge input-group-alternative mb-3 ar-round-input bg-ar-white-1">
                          <Input
                            className="ar-round-input bg-ar-white-1"
                            placeholder="País de residencia"
                            type="text"
                            onFocus={() => this.setState({ countrySelected: true })}
                            onBlur={() => this.setState({ countrySelected: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col lg="2" md="6">
                      <FormGroup
                        className={classnames({
                          focused: this.state.ageSelected,
                        })}
                      >
                        <InputGroup className="input-group-merge input-group-alternative mb-3 ar-round-input bg-ar-white-1">
                          <Input
                            className="ar-round-input bg-ar-white-1"
                            placeholder="Edad"
                            type="text"
                            onFocus={() => this.setState({ ageSelected: true })}
                            onBlur={() => this.setState({ ageSelected: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col lg="4" md="6">
                      <FormGroup
                        className={classnames({
                          focused: this.state.carTypeSelected,
                        })}
                      >
                        <InputGroup className="input-group-merge input-group-alternative mb-3 ar-round-input bg-ar-white-1">
                          <Input
                            className="ar-round-input bg-ar-white-1"
                            placeholder="Tipo de vehículo"
                            type="text"
                            onFocus={() => this.setState({ carTypeSelected: true })}
                            onBlur={() => this.setState({ carTypeSelected: false })}
                          />
                        </InputGroup>
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

export default MakeYourReservation;
