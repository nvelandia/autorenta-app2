import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Row, Col, Card, CardBody, CardTitle, CardHeader } from 'reactstrap';

class ModalAditionalInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

  render() {
    return (
      <Modal
        className="modal-dialog-centered ar-modal-aditional-information"
        isOpen={this.props.showModal}
        toggle={() => this.props.hideModal()}
      >
        <div className="modal-header pb-0">
          <h2 className=" mt-3 pl-4" id="exampleModalLabel">
            Información importante
          </h2>
          <button
            aria-label="Close"
            className="close ar-blue-0-text"
            data-dismiss="modal"
            type="button"
            onClick={() => this.props.hideModal()}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body pt-0 px-5">
          <Row className="my-4">
            <Col>
              <Card className="mb-0 shadow h-100">
                <CardBody className="py-2">
                  <Row className="align-items-center justify-content-between m-0 py-3 px-1">
                    <CardTitle className="h3 font-weight-bold mb-0 ar-red-text">Seguros y coberturas</CardTitle>
                    <i className="ar-icon-insurances-and-coverages ar-red-text fs-4" />
                  </Row>
                  <p className="fs--1 pr-3 mb-0 pb-4 lh-normal">
                    Todos los vehículos se ofrecen con una cobertura básica que implica una franquicia / deducible y el
                    bloqueo de un importe en la tarjeta de crédito del cliente en concepto de depósito o fianza.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="mb-0 shadow h-100">
                <CardBody className="py-2">
                  <Row className="align-items-center justify-content-between m-0 py-3 px-1">
                    <CardTitle className="h3 font-weight-bold mb-0 ar-red-text">Seguros y coberturas</CardTitle>
                    <i className="ar-icon-deductible ar-red-text fs-4" />
                  </Row>
                  <p className="fs--1 pr-3 mb-0 pb-4 lh-normal">
                    La franquicia o deducible es la cantidad máxima que el cliente deberá abonar en caso de daños al
                    vehículo. Algunas rentadoras ofrecen Cobertura total para recuperar el importe de la franquicia /
                    deducible, pero esto no evita el depósito o fianza
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>
              <Card className="mb-0 shadow h-100">
                <CardBody className="py-2">
                  <Row className="align-items-center justify-content-between m-0 py-3 px-1">
                    <CardTitle className="h3 font-weight-bold mb-0 ar-red-text">Seguros y coberturas</CardTitle>
                    <i className="ar-icon-credit-card-block ar-red-text fs-4" />
                  </Row>
                  <p className="fs--1 pr-3 mb-0 pb-4 lh-normal">
                    El depósito o bloqueo es el bloqueo de un iporte en la tarjeta de crédito del cliente en caso de
                    daños o cualquier otro reclamo. El bloqueo sólo se puede reducir contratando un seguro adicional en
                    la compañía rentadora dependiendo del destino.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="mb-0 shadow h-100">
                <CardBody className="py-2">
                  <Row className="align-items-center justify-content-between m-0 py-3 px-1">
                    <CardTitle className="h3 font-weight-bold mb-0 ar-red-text">Seguros y coberturas</CardTitle>
                    <i className="ar-icon-fuel-policy ar-red-text fs-4" />
                  </Row>
                  <p className="fs--1 pr-3 mb-0 pb-4 lh-normal">
                    Cada compañía tiene su propia política de combustible. La mayoría de las rentadoras entregan el
                    vehículo con el tanque lleno y el cliente deberá devolverlo de la misma manera. En caso de no
                    hacerlo se cobrará un cargo adicional de repostaje.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>
              <Card className="mb-0 shadow h-100">
                <CardBody className="py-2">
                  <Row className="align-items-center justify-content-between m-0 py-3 px-1">
                    <CardTitle className="h3 font-weight-bold mb-0 ar-red-text">Seguros y coberturas</CardTitle>
                    <i className="ar-icon-miles-kilometers ar-red-text fs-4" />
                  </Row>
                  <p className="fs--1 pr-3 mb-0 pb-4 lh-normal">
                    En la mayoría de los casos la tarifa contratada incluirá kilometraje / millaje ilimitado, no
                    obstante, para algunos vehículos o regiones particulares existe un límite de kilómetros o millas,
                    superando ese limite el cliente deberá abonar un costo por kilometro / milla.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="mb-0 shadow h-100">
                <CardBody className="py-2">
                  <Row className="align-items-center justify-content-between m-0 py-3 px-1">
                    <CardTitle className="h3 font-weight-bold mb-0 ar-red-text">Seguros y coberturas</CardTitle>
                    <i className="ar-icon-credit-debit-card ar-red-text fs-4" />
                  </Row>
                  <p className="fs--1 pr-3 mb-0 pb-4 lh-normal">
                    La mayoría de las compañías rentadoras requieren una tarjeta de crédito a nombre del condutor
                    principal para efectuar una pre-autorizacion. No se aceptarán tarjetas de débito como método de pago
                    o depósito / bloqueo.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Modal>
    );
  }
}

ModalAditionalInformation.propTypes = {
  dispatch: PropTypes.func,
  showModal: PropTypes.bool,
  hideModal: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(ModalAditionalInformation);
