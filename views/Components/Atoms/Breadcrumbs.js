import React from 'react';
// reactstrap components
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Breadcrumbs extends React.Component {
  render() {
    return (
      <Breadcrumb className="m-3">
        <BreadcrumbItem>
          <a href="/">Inicio</a>
        </BreadcrumbItem>
        <BreadcrumbItem aria-current="page" className="active">
          Promoción Avis
        </BreadcrumbItem>
      </Breadcrumb>
    );
  }
}

export default Breadcrumbs;
