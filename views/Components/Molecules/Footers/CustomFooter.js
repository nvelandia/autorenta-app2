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
              <Col lg="4" className="p-0 ">
                <h3 className="m-0 ar-white-1-text">Suscríbete y recibe todas nuestras ofertas</h3>
              </Col>
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
              <Col lg="2">
                <Button className=" btn-icon ar-round ar-nav-button bg-ar-red-0" color="default" href="">
                  <span className="nav-link-inner--text">Regístrate </span>
                  <span className="btn-inner--icon">
                    <span className="icon-chevron-right" />
                  </span>
                </Button>
              </Col>
            </Row>
            <Row className="justify-content-between ar-links">
              <Col className="pr-4 pl-0 align-items-center">
                <img className="ar-logo-footer" src={'/svg/autorenta-logo-footer.svg'} />
                <Row>
                  <Col>
                    <img className="ar-logo-footer" src={'/svg/footer-instagram-logo.svg'} />
                  </Col>
                  <Col>
                    <img className="ar-logo-footer" src={'/svg/footer-whatsapp-logo.svg'} />
                  </Col>
                  <Col>
                    <img className="ar-logo-footer" src={'/svg/footer-facebook-logo.svg'} />
                  </Col>
                  <Col>
                    <img className="ar-logo-footer" src={'/svg/footer-linkedin-logo.svg'} />
                  </Col>
                  <Col>
                    <img className="ar-logo-footer" src={'/svg/footer-twitter-logo.svg'} />
                  </Col>
                </Row>
              </Col>
              <Col className="p-2 ar-group-links">
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
              </Col>
              <Col className="p-2 ar-group-links">
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
              </Col>
              <Col lg="2" className="pl-2 pt-2 pb-2 pr-0 ar-group-links">
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
              </Col>
              <Col lg="2" className="pl-0 pt-2 pb-2 pr-2 ar-group-links">
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
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="ar-footer-down bg-ar-blue-5">
          <Col lg="9"></Col>
        </Row>
      </div>
    );
  }
}

export default CustomFooter;
