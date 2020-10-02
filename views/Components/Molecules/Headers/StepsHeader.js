import React from 'react';
import { Row, Col, CardHeader } from 'reactstrap';
import ProgressBar from '../../Atoms/ProgressBar';

class StepsHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { step, step1URL } = this.props;
    return (
      <Row className="ar-step-header align-items-center ml-0 mr-0">
        {step !== 3 ? (
          <Col>
            <Row className="justify-content-center mt-3 ">
              <div className="ar-card-header-header ar-border-round ">
                <h4 className="mb-1">Haz tu reserva en&nbsp;</h4>
                <h4 className="mb-1 ar-red-text">sólo 3 pasos</h4>
              </div>
            </Row>
            <Row className="justify-content-center mt-3">
              <div className="text-center mb-0 ar-steps-bar">
                <ProgressBar classes={'ar-steps-header'} step={step} step1URL={step1URL} />
              </div>
            </Row>
          </Col>
        ) : null}
      </Row>
    );
  }
}

export default StepsHeader;
