import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../../Atoms/Breadcrumbs';
import { Row, Card } from 'reactstrap';

class Privacy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { translate, isMobile, isSmallTablet, isTablet } = this.props;
    return (
      <>
        <Breadcrumbs translate={translate} title={translate('common.footer.privacy')} />
        <Row className="justify-content-center m-0">
          <div className="ar-central-container">
            <Card className="ar-privacy-terms-card">
              <h1 className="ar-red-text">{translate('privacy.title')}</h1>
              <h3 className="font-weight-500">{translate('privacy.subtitle1')}</h3>
              <h3 className="font-weight-500">{translate('privacy.subtitle2')}</h3>
              <h3 className="font-weight-500">{translate('privacy.subtitle3')}</h3>
              <h3 className="font-weight-500">{translate('privacy.subtitle4')}</h3>
              <h3 className="font-weight-500">{translate('privacy.subtitle5')}</h3>
              <h3 className="font-weight-500">{translate('privacy.subtitle6')}</h3>
              <h3 className="mt-3">{translate('privacy.subtitle7')}</h3>
              <div className="d-flex align-items-start mt-3">
                <h3>1&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point1_1')}</h5>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point1_2')}</h5>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point1_3')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>2&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point2_1')}</h5>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point2_2')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>3&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point3_1')}</h5>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point3_2')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>4&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point4_1')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>5&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point5_1')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>6&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point6_1')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>7&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point7_1')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>8&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point8_1')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>9&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point9_1')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>10&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point10_1')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>11&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point11_1')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>12&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point12_1')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>13&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point13_1')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>14&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point14_1')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>15&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point15_1')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>16&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point16_1')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h3>17&nbsp;-&nbsp;</h3>
                <div>
                  <h5 className="ml-3 font-weight-500">{translate('privacy.point17_1')}</h5>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <h5 className="">{translate('privacy.point18_1')}</h5>
              </div>
            </Card>
          </div>
        </Row>
      </>
    );
  }
}

Privacy.propTypes = {
  dispatch: PropTypes.func,
};

export default Privacy;
