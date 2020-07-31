import React from 'react';
import { Row, Col, CardHeader } from 'reactstrap';
import ProgressBar from '../../Atoms/ProgressBar';

class StepsHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="ar-step-header align-items-center">
        <Col>
          <Row className="justify-content-center mt-3 ">
            <Col lg="4" md="8" sm="8" xs="11" className="ar-card-header mb-1">
              <CardHeader className=" p-3 ar-border-round">
                <Row className="text-muted text-center mb-0 justify-content-center">
                  <h3 className="mb-0">Haz tu reserva en&nbsp;</h3>
                  <h3 className="mb-0 ar-red-text">sólo 3 pasos</h3>
                </Row>
              </CardHeader>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg="7" className="text-center mb-0 ar-steps-bar">
              <ProgressBar classes={'ar-steps-header'} />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default StepsHeader;
