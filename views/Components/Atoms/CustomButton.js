/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';

// reactstrap components
import { Button, ButtonGroup, Card, CardHeader, CardBody, Container, Row, Col, DropdownToggle } from 'reactstrap';
// core components

class CustomButton extends React.Component {
  render() {
    const { text, icon, event, color, name } = this.props;
    const pl = this.props.pl ? this.props.pl : 'pl-3';
    const pr = this.props.pr ? this.props.pr : 'pr-3';
    const justify = this.props.justify ? this.props.justify : 'justify-content-between';
    if (text && icon) {
      return (
        <div>
          <Button className={`btn-icon ar-round-button ${name}`} type="button" color={color} onClick={event}>
            <Row className={`${justify} ${pl} ${pr} ws-nowrap align-items-center`}>
              {text}
              <span className={`${icon} va-middle mt-i-1 ml-1 fs-i--1`} />
            </Row>
          </Button>
        </div>
      );
    } else if (text) {
      return (
        <div>
          <Button className={`btn-icon ar-round-button ${name}`} type="button" color={color} onClick={event}>
            <Row className={`justify-content-center pl-3 pr-3 ws-nowrap align-items-center`}>{text}</Row>
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button className="btn-icon ar-round-button" color={color} type="button" onClick={event}>
            <span className="btn-inner--icon">
              <i className="ni ni-atom" />
            </span>
          </Button>
        </div>
      );
    }
  }
}

export default CustomButton;
