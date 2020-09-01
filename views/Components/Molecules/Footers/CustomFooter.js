import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';

class CustomFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      nameFocus: false,
      emailFocus: false,
    };
    this.dispatch = props.dispatch;
  }

  handleOnClick = () => {
    this.dispatch(this.props.subscribeToNewsletter(this.state.name, this.state.email));
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="ar-footer">
        <Row className="ar-footer-up bg-ar-blue-2 justify-content-center ml-0 mr-0">
          <Col lg="9">
            <Row className="ar-subscribe">
              <div className="ar-subscribe-text">
                <h2 className="m-0 ar-white-1-text">Suscríbete y recibe todas nuestras ofertas</h2>
              </div>
              <Col>
                <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1">
                  <Input
                    className="ar-round-input h-auto"
                    placeholder="Nombre y apellido"
                    type="text"
                    name="name"
                    onFocus={() => this.setState({ nameFocus: true })}
                    onBlur={() => this.setState({ nameFocus: false })}
                    onChange={this.handleOnChange}
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1">
                  <Input
                    className="ar-round-input h-auto"
                    placeholder="Direccion de E-mail"
                    type="email"
                    name="email"
                    onFocus={() => this.setState({ emailFocus: true })}
                    onBlur={() => this.setState({ emailFocus: false })}
                    onChange={this.handleOnChange}
                  />
                </InputGroup>
              </Col>
              <div className="ar-register-button-container">
                <Button className=" btn-icon ar-round-button" color="red-0" onClick={this.handleOnClick}>
                  <span className="nav-link-inner--text">Regístrate </span>
                  <span className="btn-inner--icon">
                    <span className="ar-icon-chevron-right va-middle fs-i--1" />
                  </span>
                </Button>
              </div>
            </Row>
            <Row className="justify-content-between ar-links">
              <Col className="align-items-center d-flex p-0">
                <Row className="justify-content-between ar-links">
                  <Col xl="2" lg="3" className="ar-group-logos">
                    <img className="ar-logo-footer" src={'/svg/autorenta-logo-footer.svg'} />
                    <Row className="justify-content-between pl-1">
                      <Col className="ar-social-logos">
                        <img src={'/svg/footer-instagram-logo.svg'} />
                      </Col>
                      <Col className="ar-social-logos">
                        <img src={'/svg/footer-whatsapp-logo.svg'} />
                      </Col>
                      <Col className="ar-social-logos">
                        <img src={'/svg/footer-facebook-logo.svg'} />
                      </Col>
                      <Col className="ar-social-logos">
                        <img src={'/svg/footer-linkedin-logo.svg'} />
                      </Col>
                      <Col className="ar-social-logos">
                        <img src={'/svg/footer-twitter-logo.svg'} />
                      </Col>
                    </Row>
                  </Col>
                  <div className="ar-group-links">
                    <h3 className="ar-blue-6-text">Contáctenos</h3>
                    <div>
                      <a className="ar-link">1580 Sawgrass Corporate Parkway</a>
                    </div>
                    <div>
                      <a className="ar-link">Suite 130, Sunrise, FL 33323</a>
                    </div>
                    <div>
                      <a className="ar-link">info@autorenta.com</a>
                    </div>
                  </div>
                  <div className="ar-group-links">
                    <h3 className="ar-blue-6-text">Atención al cliente</h3>
                    <div>
                      <a className="ar-link">Contacta a un asesor online</a>
                    </div>
                    <div>
                      <a className="ar-link">Preguntas frecuentes</a>
                    </div>
                    <div>
                      <a className="ar-link">Buscar una reservación</a>
                    </div>
                  </div>
                  <div className="ar-group-links">
                    <h3 className="ar-blue-6-text">Afiliados</h3>
                    <div>
                      <a className="ar-link">Acceder a tu cuenta</a>
                    </div>
                    <div>
                      <a className="ar-link">Registrar una cuenta</a>
                    </div>
                    <div>
                      <a className="ar-link">Promociones vigentes</a>
                    </div>
                  </div>
                  <div className="ar-group-links">
                    <h3 className="ar-blue-6-text">Sobre Autorenta</h3>
                    <div>
                      <a className="ar-link">Políticas de cancelación</a>
                    </div>
                    <div>
                      <a className="ar-link">Términos y condiciones</a>
                    </div>
                    <div>
                      <a className="ar-link">Políticas de privacidad</a>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="ar-footer-down bg-ar-blue-5 justify-content-md-center text-center align-items-center ml-0 mr-0">
          <p>Copyright © 2020 autorenta.com es una marca registrada de GMS. Todos los derechos reservados</p>
        </Row>
      </div>
    );
  }
}

CustomFooter.propTypes = {
  dispatch: PropTypes.func,
  subscribeToNewsletter: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.generalReducer;
};

export default connect(mapStateToProps)(CustomFooter);
