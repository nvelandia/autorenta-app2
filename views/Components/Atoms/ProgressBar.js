import React from 'react';
// reactstrap components
import { Progress, Row, Col } from 'reactstrap';
import { redirectTo, pages } from '../../../utils/helpers/redirectTo';

class ProgressBar extends React.Component {
  handleClick = (step) => {
    switch (step) {
      case 1:
        return redirectTo(pages.home);
      case 2:
        return redirectTo(pages.step1);
      case 3:
        return redirectTo(pages.step2);
      default:
        return null;
    }
  };

  render() {
    const { classes, step } = this.props;
    return (
      <>
        {step === 0 ? (
          <>
            <div className="progress-info">
              <Col className="justify-content-center p-0">
                <p className={'ar-title-bar ' + classes}>Inicia tu búsqueda </p>
                <span className="ar-circle ar-active">1</span>
              </Col>
              <Col className="justify-content-center p-0">
                <p className={'ar-title-bar ar-light-blue-text  ' + classes}>Selecciona tu plan</p>
                <span className="ar-circle ar-pendant">2</span>
              </Col>
              <Col className="justify-content-center p-0">
                <p className={'ar-title-bar ar-light-blue-text  ' + classes}>Confirma tu reserva</p>
                <span className="ar-circle ar-pendant">3</span>
              </Col>
            </div>
            <Progress className="ar-bar bg-ar-white-3" max="100" value="0" color="blue-2" />
          </>
        ) : null}
        {step === 1 ? (
          <>
            <div className="progress-info">
              <Col className="justify-content-center p-0">
                <p className={'ar-title-bar ' + classes}>&nbsp;</p>
                <span className="ar-circle ar-done" onClick={() => this.handleClick(1)}>
                  1
                </span>
              </Col>
              <Col className="justify-content-center p-0">
                <p className={'ar-title-bar ar-white-text ' + classes}>Selecciona tu plan</p>
                <span className="ar-circle ar-active">2</span>
              </Col>
              <Col className="justify-content-center p-0">
                <p className={'ar-title-bar ar-light-blue-text ' + classes}>Confirma tu reserva</p>
                <span className="ar-circle ar-pendant">3</span>
              </Col>
            </div>
            <Progress className="ar-bar bg-ar-white-3" max="100" value="35" color="blue-2" />
          </>
        ) : null}
        {step === 2 ? (
          <>
            <div className="progress-info">
              <Col className="justify-content-center p-0">
                <p className={'ar-title-bar ' + classes}>&nbsp;</p>
                <span className="ar-circle ar-done" onClick={() => this.handleClick(1)}>
                  1
                </span>
              </Col>
              <Col className="justify-content-center p-0">
                <p className={'ar-title-bar ' + classes}>&nbsp;</p>
                <span className="ar-circle ar-done" onClick={() => this.handleClick(2)}>
                  2
                </span>
              </Col>
              <Col className="justify-content-center p-0">
                <p className={'ar-title-bar ar-white-text ' + classes}>Confirma tu reserva</p>
                <span className="ar-circle ar-active">3</span>
              </Col>
            </div>
            <Progress className="ar-bar bg-ar-white-3" max="100" value="70" color="blue-2" />
          </>
        ) : null}
        {step === 3 ? (
          <>
            <div className="progress-info">
              <Col className="justify-content-center p-0">
                <p className={'ar-title-bar ' + classes}>&nbsp;</p>
                <span className="ar-circle ar-done" onClick={() => this.handleClick(1)}>
                  1
                </span>
              </Col>
              <Col className="justify-content-center p-0">
                <p className={'ar-title-bar ' + classes}>&nbsp;</p>
                <span className="ar-circle ar-done" onClick={() => this.handleClick(2)}>
                  2
                </span>
              </Col>
              <Col className="justify-content-center p-0">
                <p className={'ar-title-bar ' + classes}>&nbsp;</p>
                <span className="ar-circle ar-done">3</span>
              </Col>
            </div>
            <Progress className="ar-bar bg-ar-white-3" max="100" value="100" color="blue-2" />
          </>
        ) : null}
      </>
    );
  }
}

export default ProgressBar;
