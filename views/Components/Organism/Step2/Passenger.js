import React from 'react';
import { connect } from 'react-redux';

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
import classnames from 'classnames';
import ClientTypeDropdown from '../../Molecules/dropdowns/ClientTypeDropdown';

class Passenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFocus: false,
      surnameFocus: false,
      emailFocus: false,
      phoneFocus: false,
      flyNumberFocus: false,
      promotionCodeFocus: false,
      couponNumberFocus: false,
      name: '',
      surname: '',
      email: '',
      phone: '',
      flyNumber: '',
      promotionCode: '',
      couponNumber: '',
    };
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Card className="card-frame ar-passenger-card">
        <CardBody className="p-0">
          <div className="ar-icon-customer-type ar-title-with-icon">Información del pasajero</div>
          <div className="ar-passenger-form-container">
            <div className="ar-subtitle">Información personal del titular de la renta</div>
            <Row className="ar-passenger-form-row">
              <Col className="pl-0">
                <FormGroup
                  className={
                    'm-0 ' +
                    classnames({
                      focused: this.state.nameFocus,
                    })
                  }
                >
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1 shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder="Nombre"
                      type="text"
                      name="name"
                      onFocus={() => this.setState({ nameFocus: true })}
                      onBlur={() => this.setState({ nameFocus: false })}
                      onChange={this.handleOnChange}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup
                  className={
                    'm-0 ' +
                    classnames({
                      focused: this.state.surnameFocus,
                    })
                  }
                >
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1 shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder="Apellido"
                      type="text"
                      name="surname"
                      onFocus={() => this.setState({ surnameFocus: true })}
                      onBlur={() => this.setState({ surnameFocus: false })}
                      onChange={this.handleOnChange}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col className="pr-0">
                <FormGroup
                  className={
                    'm-0 ' +
                    classnames({
                      focused: this.state.emailFocus,
                    })
                  }
                >
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1 shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder="E-mail"
                      type="email"
                      name="email"
                      onFocus={() => this.setState({ emailFocus: true })}
                      onBlur={() => this.setState({ emailFocus: false })}
                      onChange={this.handleOnChange}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row className="ar-passenger-form-row">
              <Col className="pl-0">
                <FormGroup
                  className={
                    'm-0 ' +
                    classnames({
                      focused: this.state.phoneFocus,
                    })
                  }
                >
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1 shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder="Teléfono"
                      type="text"
                      name="phone"
                      onFocus={() => this.setState({ phoneFocus: true })}
                      onBlur={() => this.setState({ phoneFocus: false })}
                      onChange={this.handleOnChange}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col>
                <div className="ar-select-fly-agency-container">
                  <ClientTypeDropdown
                    items={['LATAM', 'American Airlines']}
                    title={'Compañía aérea (opcional)'}
                    color={'white-0'}
                    dispatch={this.props.dispatch}
                    classes={'ar-select-button'}
                    handleOnSelectClientType={() => console.log()}
                  />
                </div>
              </Col>
              <Col className="pr-0">
                <FormGroup
                  className={
                    'm-0 ' +
                    classnames({
                      focused: this.state.flyNumberFocus,
                    })
                  }
                >
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1 shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder="Número de vuelo (opcional)"
                      type="text"
                      name="flyNumber"
                      onFocus={() => this.setState({ flyNumberFocus: true })}
                      onBlur={() => this.setState({ flyNumberFocus: false })}
                      onChange={this.handleOnChange}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <div className="ar-subtitle">Información adicional</div>
            <Row className="ar-passenger-form-row">
              <FormGroup
                className={
                  'ar-validate-input-passenger ' +
                  classnames({
                    focused: this.state.promotionCodeFocus,
                  })
                }
              >
                <InputGroup className="input-group-merge input-group-alternative ar-round-input shadow-none">
                  <Input
                    className="ar-round-input ar-input-passenger-data"
                    placeholder="Código promocional"
                    type="text"
                    name="promotionCode"
                    onFocus={() => this.setState({ promotionCodeFocus: true })}
                    onBlur={() => this.setState({ promotionCodeFocus: false })}
                    onChange={this.handleOnChange}
                  />
                  <InputGroupAddon addonType="append">
                    <Button
                      className=" btn-icon w-100 ar-validate-input-passenger-button"
                      color="red-0"
                      onClick={this.handleSearchClick}
                    >
                      <span className="nav-link-inner--text">Validar </span>
                      <i className="ar-icon-chevron-right" />
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
              <FormGroup
                className={
                  'ar-validate-input-passenger ' +
                  classnames({
                    focused: this.state.couponNumberFocus,
                  })
                }
              >
                <InputGroup className="input-group-merge input-group-alternative ar-round-input shadow-none">
                  <Input
                    className="ar-round-input ar-input-passenger-data"
                    placeholder="Número de cupón"
                    type="text"
                    name="couponNumber"
                    onFocus={() => this.setState({ couponNumberFocus: true })}
                    onBlur={() => this.setState({ couponNumberFocus: false })}
                    onChange={this.handleOnChange}
                  />
                  <InputGroupAddon addonType="append">
                    <Button
                      className=" btn-icon w-100 ar-validate-input-passenger-button"
                      color="red-0"
                      onClick={this.handleSearchClick}
                    >
                      <span className="nav-link-inner--text">Validar </span>
                      <i className="ar-icon-chevron-right" />
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Row>
          </div>
        </CardBody>
      </Card>
    );
  }
}

Passenger.proptypes = {};

const mapStateToProps = (state) => {
  return state.step2Reducer;
};

export default connect(mapStateToProps)(Passenger);
