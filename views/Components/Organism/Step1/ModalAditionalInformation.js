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
    const { translate } = this.props;
    return (
      <Modal
        className="modal-dialog-centered ar-modal-aditional-information"
        isOpen={this.props.showModal}
        toggle={() => this.props.hideModal()}
      >
        <div className="modal-header pb-0">
          <h2 className=" mt-3 pl-4" id="exampleModalLabel">
            {translate('step1.result.modalAdditionalInformation.title')}
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
        <div className="modal-body pt-0 px-5 ar-modal-body-aditional-information">
          <Row className="my-4">
            <Col>
              <Card className="mb-0 shadow h-100">
                <CardBody className="py-2">
                  <Row className="align-items-center justify-content-between m-0 py-3 px-1">
                    <CardTitle className="h3 font-weight-bold mb-0 ar-red-text">
                      {translate('step1.result.modalAdditionalInformation.secureTitle')}
                    </CardTitle>
                    <i className="ar-icon-insurances-and-coverages ar-red-text fs-4" />
                  </Row>
                  <p className="fs--1 pr-3 mb-0 pb-4 lh-normal">
                    {translate('step1.result.modalAdditionalInformation.secureText')}
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="mb-0 shadow h-100">
                <CardBody className="py-2">
                  <Row className="align-items-center justify-content-between m-0 py-3 px-1">
                    <CardTitle className="h3 font-weight-bold mb-0 ar-red-text">
                      {translate('step1.result.modalAdditionalInformation.franTitle')}
                    </CardTitle>
                    <i className="ar-icon-deductible ar-red-text fs-4" />
                  </Row>
                  <p className="fs--1 pr-3 mb-0 pb-4 lh-normal">
                    {translate('step1.result.modalAdditionalInformation.franText')}
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
                    <CardTitle className="h3 font-weight-bold mb-0 ar-red-text">
                      {translate('step1.result.modalAdditionalInformation.depoTitle')}
                    </CardTitle>
                    <i className="ar-icon-credit-card-block ar-red-text fs-4" />
                  </Row>
                  <p className="fs--1 pr-3 mb-0 pb-4 lh-normal">
                    {translate('step1.result.modalAdditionalInformation.depoText')}
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="mb-0 shadow h-100">
                <CardBody className="py-2">
                  <Row className="align-items-center justify-content-between m-0 py-3 px-1">
                    <CardTitle className="h3 font-weight-bold mb-0 ar-red-text">
                      {translate('step1.result.modalAdditionalInformation.poliTitle')}
                    </CardTitle>
                    <i className="ar-icon-fuel-policy ar-red-text fs-4" />
                  </Row>
                  <p className="fs--1 pr-3 mb-0 pb-4 lh-normal">
                    {translate('step1.result.modalAdditionalInformation.poliText')}
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
                    <CardTitle className="h3 font-weight-bold mb-0 ar-red-text">
                      {translate('step1.result.modalAdditionalInformation.kiloTitle')}
                    </CardTitle>
                    <i className="ar-icon-miles-kilometers ar-red-text fs-4" />
                  </Row>
                  <p className="fs--1 pr-3 mb-0 pb-4 lh-normal">
                    {translate('step1.result.modalAdditionalInformation.kiloText')}
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="mb-0 shadow h-100">
                <CardBody className="py-2">
                  <Row className="align-items-center justify-content-between m-0 py-3 px-1">
                    <CardTitle className="h3 font-weight-bold mb-0 ar-red-text">
                      {translate('step1.result.modalAdditionalInformation.cardTitle')}
                    </CardTitle>
                    <i className="ar-icon-credit-debit-card ar-red-text fs-4" />
                  </Row>
                  <p className="fs--1 pr-3 mb-0 pb-4 lh-normal">
                    {translate('step1.result.modalAdditionalInformation.cardText')}
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
