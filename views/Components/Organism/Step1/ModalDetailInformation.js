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
    let { rate, translate } = this.props;
    return (
      <Modal
        className="modal-dialog-centered ar-modal-details-information"
        isOpen={this.props.showModal}
        toggle={() => this.props.hideModal()}
      >
        <div className="modal-header pb-1 pt-1">
          <h6 className="modal-title mt-3 ml-25" id="exampleModalLabel">
            {translate('step1.result.modalDetailInformation.title')}
          </h6>
          <button
            aria-label="Close"
            className="close ar-blue-0-text m-0 p-0 mt-3 mr-2"
            data-dismiss="modal"
            type="button"
            onClick={() => this.props.hideModal()}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <Card className="mb-0 shadow">
            <CardHeader className="pb-3">
              <Row>
                <div className="col">
                  <CardTitle className="text-uppercase text-muted mb-0 ar-gray-2-text fs--2 ">
                    {translate('step1.result.modalDetailInformation.subtitle')} {rate.rate_code}
                  </CardTitle>
                  <span className="h2 font-weight-bold  mb-2 ar-blue-text fs--1">{rate.name}</span>
                </div>
                <Col className="col-auto">
                  <div className="icon bg-none text-dark rounded-circle mt--2">
                    <i className="ar-icon-rate-details ar-red-text fs-4" />
                  </div>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="py-3">
              {rate.includes
                ? rate.includes.map((item, index) => {
                    if (rate.includes.length - 1 !== index || rate.not_includes.length !== 0) {
                      return (
                        <div className="d-flex">
                          <i className="ar-icon-check-solid ar-green-text fs--1 mt-i-1-1 mr-i-1" />
                          <p key={index} className="fs--1 mb-1">
                            {item}
                          </p>
                        </div>
                      );
                    } else {
                      return (
                        <div className="d-flex">
                          <i className="ar-icon-check-solid ar-green-text fs--1 mt-i-1-1 mr-i-1" />
                          <p key={index} className="fs--1 mb-0">
                            {item}
                          </p>
                        </div>
                      );
                    }
                  })
                : null}
              {rate.not_includes
                ? rate.not_includes.map((item, index) => {
                    if (rate.not_includes.length - 1 !== index) {
                      return (
                        <div className="d-flex">
                          <i className="ar-icon-close-solid ar-red-text fs--1 mt-i-1-1 mr-i-1" />
                          <p key={index} className="fs--1 mb-1">
                            {item}
                          </p>
                        </div>
                      );
                    } else {
                      return (
                        <div className="d-flex">
                          <i className="ar-icon-close-solid ar-red-text fs--1 mt-i-1-1 mr-i-1" />
                          <p key={index} className="fs--1 mb-0">
                            {item}
                          </p>
                        </div>
                      );
                    }
                  })
                : null}
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
  rate: PropTypes.object,
  seeBaseRateDetails: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(ModalDetailInformation);
