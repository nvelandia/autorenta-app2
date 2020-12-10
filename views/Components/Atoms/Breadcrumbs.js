import React from 'react';
// reactstrap components
import { Breadcrumb, BreadcrumbItem, Col, Row } from 'reactstrap';

class Breadcrumbs extends React.Component {
  render() {
    const { translate, title, isMobile, isSmallTablet, isTablet } = this.props;
    if (!isMobile && !isSmallTablet) {
      return (
        <Row className="justify-content-center m-0 mb-3 pt-3 bg-ar-white-0">
          <Col xl="9" lg="10" md="11" className="px-0 bg-ar-white-0">
            <Breadcrumb>
              <BreadcrumbItem className="ml--3">
                <a href="/" className="font-weight-600 ar-blue-0-text">
                  {translate('promotion.home')}
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem aria-current="page" className="active font-weight-600">
                {title}
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row className="justify-content-center mb-3 pt-3 bg-ar-white-0 mx-0">
          <div className="px-0 bg-ar-white-0">
            <Breadcrumb className="flex-wrap-inherit">
              <BreadcrumbItem className="m-0">
                <a href="/" className="font-weight-600 ar-blue-0-text">
                  {translate('promotion.home')}
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem aria-current="page" className="active font-weight-600">
                {title}
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </Row>
      );
    }
  }
}

export default Breadcrumbs;
