import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Row, Col, Card, CardBody, CardTitle, CardHeader } from 'reactstrap';

class ModalDetailInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

  render() {
    const { information } = this.props;
    return (
      <Modal
        className="modal-dialog-centered ar-modal-details-information"
        isOpen={this.props.showModal}
        toggle={() => this.props.hideModal()}
      >
        <div className="modal-header pb-0">
          <h6 className="modal-title mt-3" id="exampleModalLabel">
            Ver detalle de esta tarifa
          </h6>
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
        <div className="modal-body">
          <Card className="mb-0 shadow">
            <CardHeader className="pb-1">
              <Row>
                <div className="col">
                  <CardTitle className="text-uppercase text-muted mb-0 ar-gray-2-text fs--2">
                    iNCLUSIVE LDW - 89
                  </CardTitle>
                  <span className="h2 font-weight-bold  mb-2 ar-blue-text fs--1">Tarifa con seguro</span>
                </div>
                <Col className="col-auto">
                  <div className="icon bg-none text-dark rounded-circle mt--2">
                    <i className="ar-icon-rate-details ar-red-text fs-4" />
                  </div>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="py-2">
              {information.map((item, index) => {
                return (
                  <p key={index} className="fs--1 mb-1">
                    <i className="ar-icon-check-solid ar-green-text" />
                    {'  ' + item.includes}
                  </p>
                );
              })}
            </CardBody>
          </Card>
        </div>
      </Modal>
    );
  }
}

ModalDetailInformation.propTypes = {
  dispatch: PropTypes.func,
  showModal: PropTypes.bool,
  hideModal: PropTypes.func,
  information: PropTypes.array,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(ModalDetailInformation);
