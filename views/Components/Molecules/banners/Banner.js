import React from 'react';
import { Row, Col } from 'reactstrap';

class Banner extends React.Component {
  render() {
    return (
      <>
        <Row className="ar-banner bg-ar-white-5 justify-content-center">
          <Col lg="9">
            <Row className="justify-content-between ar-banner-container">
              <Col className="ar-logo-text-container" lg="6" md="6" xs="12">
                <h3 className="m-0">¿Ya conoces nuestra nueva App? Descárgala para iPhone y Android</h3>
              </Col>
              <Col lg="6" md="6">
                <Row className="ar-banner-container">
                  <Col className="ar-logo-text-container ml-2 mr-2" lg="3" xs="6">
                    <img className="ar-store-logo" src={'/img/custom/google-play-logo.png'} />
                  </Col>
                  <Col className="ar-logo-text-container ml-2 mr-2" lg="3" xs="6">
                    <img className="ar-store-logo" src={'/img/custom/google-play-logo.png'} />
                  </Col>
                  <Col className="ar-app-logo-container p-0">
                    <img className="ar-app-logo" src={'/img/custom/app-autorenta-image.png'} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Banner;
