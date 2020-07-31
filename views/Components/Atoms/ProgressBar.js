import React from 'react';
// reactstrap components
import { Progress, Row, Col } from 'reactstrap';

class ProgressBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className="progress-info">
          <Col className="justify-content-center p-0">
            <p className={'ar-title-bar ' + classes}>Inicia tu búsqueda</p>
            <span className="ar-circle ar-active">1</span>
          </Col>
          <Col className="justify-content-center p-0">
            <p className={'ar-title-bar ' + classes}>Selecciona tu plan</p>
            <span className="ar-circle">2</span>
          </Col>
          <Col className="justify-content-center p-0">
            <p className={'ar-title-bar ' + classes}>Confirma tu reserva</p>
            <span className="ar-circle">3</span>
          </Col>
        </div>
        <Progress className="ar-bar bg-ar-white-3" max="100" value="10" color="ar-red-0" />
      </>
    );
  }
}

export default ProgressBar;
