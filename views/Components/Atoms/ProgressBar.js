import React from 'react';
// reactstrap components
import { Progress, Row, Col } from 'reactstrap';
import { redirectTo, pages } from '../../../utils/helpers/redirectTo';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (step) => {
    switch (step) {
      case 1:
        this.props.showLoader();
        return redirectTo(pages.home);
      case 2:
        this.props.showLoader();
        return redirectTo(this.props.step1URL);
      case 3:
        this.props.showLoader();
        return redirectTo(pages.step2);
      default:
        return null;
    }
  };

  render() {
    const { classes, step, translate, isMobile } = this.props;
    if (!isMobile) {
      return (
        <>
          {step === 0 ? (
            <>
              <div className="progress-info">
                <Col className="justify-content-center p-0">
                  <p className={'ar-title-bar ' + classes}>{translate('common.progressBar.startYourSearch')}</p>
                  <span className="ar-circle ar-active">1</span>
                </Col>
                <Col className="justify-content-center p-0">
                  <p className={'ar-title-bar ar-light-blue-text  ' + classes}>
                    {translate('common.progressBar.chooseYourPlan')}
                  </p>
                  <span className="ar-circle ar-pendant">2</span>
                </Col>
                <Col className="justify-content-center p-0">
                  <p className={'ar-title-bar ar-light-blue-text  ' + classes}>
                    {translate('common.progressBar.confirmYourSearch')}
                  </p>
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
                  <p className={'ar-title-bar ar-white-text ' + classes}>
                    {translate('common.progressBar.chooseYourPlan')}
                  </p>
                  <span className="ar-circle ar-active">2</span>
                </Col>
                <Col className="justify-content-center p-0">
                  <p className={'ar-title-bar ar-light-blue-text ' + classes}>
                    {translate('common.progressBar.confirmYourSearch')}
                  </p>
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
                  <p className={'ar-title-bar ar-white-text ' + classes}>
                    {translate('common.progressBar.confirmYourSearch')}
                  </p>
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
                  <span className="ar-circle ar-done">1</span>
                </Col>
                <Col className="justify-content-center p-0">
                  <p className={'ar-title-bar ' + classes}>&nbsp;</p>
                  <span className="ar-circle ar-done">2</span>
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
    } else {
      return (
        <>
          {step === 0 ? (
            <>
              <div className="progress-info">
                <Col className="d-flex justify-content-start p-0">
                  <span className="ar-circle ar-active">1</span>
                </Col>
                <Col className="d-flex  justify-content-center p-0">
                  <span className="ar-circle ar-pendant">2</span>
                </Col>
                <Col className="d-flex  justify-content-end p-0">
                  <span className="ar-circle ar-pendant">3</span>
                </Col>
              </div>
              <Progress className="ar-bar bg-ar-white-3" max="100" value="0" color="blue-2" />
            </>
          ) : null}
          {step === 1 ? (
            <>
              <div className="progress-info">
                <Col className=" d-flex justify-content-start p-0">
                  <span className="ar-circle ar-done" onClick={() => this.handleClick(1)}>
                    1
                  </span>
                </Col>
                <Col className="d-flex justify-content-center p-0">
                  <span className="ar-circle ar-active">2</span>
                </Col>
                <Col className="d-flex justify-content-end p-0">
                  <span className="ar-circle ar-pendant">3</span>
                </Col>
              </div>
              <Progress className="ar-bar bg-ar-white-3" max="100" value="50" color="blue-2" />
            </>
          ) : null}
          {step === 2 ? (
            <>
              <div className="progress-info">
                <Col className="d-flex justify-content-start p-0">
                  <span className="ar-circle ar-done" onClick={() => this.handleClick(1)}>
                    1
                  </span>
                </Col>
                <Col className="d-flex justify-content-center p-0">
                  <span className="ar-circle ar-done" onClick={() => this.handleClick(2)}>
                    2
                  </span>
                </Col>
                <Col className="d-flex justify-content-end p-0">
                  <span className="ar-circle ar-active">3</span>
                </Col>
              </div>
              <Progress className="ar-bar bg-ar-white-3" max="100" value="100" color="blue-2" />
            </>
          ) : null}
          {step === 3 ? (
            <>
              <div className="progress-info">
                <Col className="d-flex justify-content-start p-0">
                  <span className="ar-circle ar-done">1</span>
                </Col>
                <Col className="d-flex justify-content-center p-0">
                  <span className="ar-circle ar-done">2</span>
                </Col>
                <Col className="d-flex justify-content-end p-0">
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
}

export default ProgressBar;
