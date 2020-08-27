import React from 'react';
// reactstrap components
import { Breadcrumb, BreadcrumbItem, Col, Row } from 'reactstrap';

class Breadcrumbs extends React.Component {
  render() {
    return (
      <Row className="justify-content-center m-0 mb-3 pt-3 bg-ar-white-0">
        <Col xl="9" lg="10" md="11" className="pl-0 pr-0 bg-ar-white-0">
          <Breadcrumb>
            <BreadcrumbItem className="ml--3">
              <a href="/" className="font-weight-600 ar-blue-0-text">
                Inicio
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem aria-current="page" className="active font-weight-600">
              Promoción Avis y AAdvantage
            </BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
    );
  }
}

export default Breadcrumbs;
