import React from 'react';
import { Row, Col, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import classnames from 'classnames';

class CustomFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }

  render() {
    return (
      <div className="ar-footer">
        <Row className="ar-footer-up bg-ar-blue-2 justify-content-center">
          <Col lg="9">
            <Row className="ar-subscribe">
              <div className="p-3 ">
                <h2 className="m-0 ar-white-1-text">Suscríbete y recibe todas nuestras ofertas</h2>
              </div>
              <Col>
                <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1">
                  <Input
                    className="ar-round-input h-auto"
                    placeholder="Nombre y apellido"
                    type="text"
                    onFocus={() => this.setState({ name: true })}
                    onBlur={() => this.setState({ name: false })}
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1">
                  <Input
                    className="ar-round-input h-auto"
                    placeholder="Direccion de E-mail"
                    type="email"
                    onFocus={() => this.setState({ email: true })}
                    onBlur={() => this.setState({ email: false })}
                  />
                </InputGroup>
              </Col>
              <div>
                <Button className=" btn-icon ar-round-button" color="red-0" href="">
                  <span className="nav-link-inner--text">Regístrate </span>
                  <span className="btn-inner--icon">
                    <span className="ar-icon-chevron-right va-middle" />
                  </span>
                </Button>
              </div>
            </Row>
            <Row className="justify-content-between ar-links">
              <Col className="align-items-center d-flex p-0">
                <Row className="justify-content-between ar-links">
                  <Col xl="2" lg="3" className="ar-group-logos">
                    <img className="ar-logo-footer" src={'/svg/autorenta-logo-footer.svg'} />
                    <Row className="justify-content-between">
                      <Col className="ar-social-logos">
                        <img className="ar-logo-footer" src={'/svg/footer-instagram-logo.svg'} />
                      </Col>
                      <Col className="ar-social-logos">
                        <img className="ar-logo-footer" src={'/svg/footer-whatsapp-logo.svg'} />
                      </Col>
                      <Col className="ar-social-logos">
                        <img className="ar-logo-footer" src={'/svg/footer-facebook-logo.svg'} />
                      </Col>
                      <Col className="ar-social-logos">
                        <img className="ar-logo-footer" src={'/svg/footer-linkedin-logo.svg'} />
                      </Col>
                      <Col className="ar-social-logos">
                        <img className="ar-logo-footer" src={'/svg/footer-twitter-logo.svg'} />
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
        <Row className="ar-footer-down bg-ar-blue-5 justify-content-md-center text-center align-items-center">
          <p>Copyright © 2020 autorenta.com es una marca registrada de GMS. Todos los derechos reservados</p>
        </Row>
      </div>
    );
  }
}

export default CustomFooter;
