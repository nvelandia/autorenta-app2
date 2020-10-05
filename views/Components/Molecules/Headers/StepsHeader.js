import React from 'react';
import { Row, Col, CardHeader } from 'reactstrap';
import ProgressBar from '../../Atoms/ProgressBar';

class StepsHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { step, step1URL, translate } = this.props;
    return (
      <Row className="ar-step-header align-items-center ml-0 mr-0">
        {step !== 3 ? (
          <Col>
            <Row className="justify-content-center mt-3 ">
              <div className="ar-card-header-header ar-border-round ">
                <h4 className="mb-1">{translate('home.makeYourReservation.doYourReservationIn')}&nbsp;</h4>
                <h4 className="mb-1 ar-red-text">{translate('home.makeYourReservation.only3Steps')}</h4>
              </div>
            </Row>
            <Row className="justify-content-center mt-3">
              <div className="text-center mb-0 ar-steps-bar">
                <ProgressBar classes={'ar-steps-header'} step={step} step1URL={step1URL} translate={translate} />
              </div>
            </Row>
          </Col>
        ) : null}
      </Row>
    );
  }
}

export default StepsHeader;
