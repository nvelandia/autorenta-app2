import React from 'react';
import { Row, Col } from 'reactstrap';

class Banner extends React.Component {
  render() {
    const { translate } = this.props;
    return (
      <>
        <Row className="ar-banner bg-ar-white-5 justify-content-center ml-0 mr-0">
          <Col lg="9">
            <Row className="justify-content-between ar-banner-container">
              <Col className="ar-banner-text-container " lg="6" md="6" xs="12">
                <h3 className="m-0 ar-blue-8-text ls-25">{translate('common.banner.text')}</h3>
              </Col>
              <div className="ar-banner-logo-container">
                <img src={'/img/custom/appstore-logo.svg'} />
                <img src={'/img/custom/google-play-logo.png'} />
              </div>
              <div className="ar-app-logo-container p-0">
                <div>
                  <img className="ar-app-logo" src={'/img/custom/app-autorenta-image.png'} />
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Banner;
