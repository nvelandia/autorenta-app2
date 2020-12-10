import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Breadcrumbs from '../../Atoms/Breadcrumbs';
import { Card, Row, CardHeader, Collapse, CardBody } from 'reactstrap';

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedCollapses: ['collapseOne'],
    };
    this.dispatch = props.dispatch;
  }

  collapsesToggle = (collapse) => {
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: [],
      });
    } else {
      this.setState({
        openedCollapses: [collapse],
      });
    }
  };

  render() {
    const { translate, faq, cookies, cancellation } = this.props;
    if (faq) {
      return (
        <>
          <Breadcrumbs translate={translate} title={translate('common.footer.faq')} />
          <Row className="justify-content-center m-0">
            <div className="ar-central-container">
              <Card className="ar-card-faq-container">
                <div className="accordion ar-faq-collapse">
                  <div className="ar-faq-collapse-main-titles">
                    <h1>{translate('faq.title')}</h1>
                    <h6>{translate('faq.subtitle')}</h6>
                  </div>
                  <div className="ar-faq-collapse-options-container">
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseOne')}
                        aria-expanded={this.state.openedCollapses.includes('collapseOne')}
                      >
                        <h5 className="mb-0 mw-90 mw-90">{translate('faq.question1')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseOne')}>
                        <CardBody>
                          {translate('faq.response1_1')}
                          <br />
                          <br />
                          {translate('faq.response1_2')}
                          <br />
                          <br />
                          {translate('faq.response1_3')}
                          <br />
                          <br />
                          {translate('faq.response1_4')}
                          <br />
                          <br />
                          {translate('faq.response1_5')}
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseTwo')}
                        aria-expanded={this.state.openedCollapses.includes('collapseTwo')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question2')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTwo')}>
                        <CardBody>{translate('faq.response2')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseThree')}
                        aria-expanded={this.state.openedCollapses.includes('collapseThree')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question3')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseThree')}>
                        <CardBody>{translate('faq.response3')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseFour')}
                        aria-expanded={this.state.openedCollapses.includes('collapseFour')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question4')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseFour')}>
                        <CardBody>
                          {translate('faq.response4_1')}
                          <br />
                          <br />
                          {translate('faq.response4_2')}
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseFive')}
                        aria-expanded={this.state.openedCollapses.includes('collapseFive')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question5')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseFive')}>
                        <CardBody>{translate('faq.response5')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseSix')}
                        aria-expanded={this.state.openedCollapses.includes('collapseSix')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question6')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseSix')}>
                        <CardBody>
                          {translate('faq.response6_1')}
                          <br />
                          <br />
                          {translate('faq.response6_2')}
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseSeven')}
                        aria-expanded={this.state.openedCollapses.includes('collapseSeven')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question7')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseSeven')}>
                        <CardBody>{translate('faq.response7')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseEight')}
                        aria-expanded={this.state.openedCollapses.includes('collapseEight')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question8')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseEight')}>
                        <CardBody>{translate('faq.response8')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseNine')}
                        aria-expanded={this.state.openedCollapses.includes('collapseNine')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question9')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseNine')}>
                        <CardBody>{translate('faq.response9')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseTen')}
                        aria-expanded={this.state.openedCollapses.includes('collapseTen')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question10')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTen')}>
                        <CardBody>{translate('faq.response10')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseEleven')}
                        aria-expanded={this.state.openedCollapses.includes('collapseEleven')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question11')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseEleven')}>
                        <CardBody>{translate('faq.response11')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseTwelve')}
                        aria-expanded={this.state.openedCollapses.includes('collapseTwelve')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question12')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTwelve')}>
                        <CardBody>{translate('faq.response12')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseThirteen')}
                        aria-expanded={this.state.openedCollapses.includes('collapseThirteen')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question13')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseThirteen')}>
                        <CardBody>{translate('faq.response13')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseFourteen')}
                        aria-expanded={this.state.openedCollapses.includes('collapseFourteen')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question14')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseFourteen')}>
                        <CardBody>{translate('faq.response14')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseFifteen')}
                        aria-expanded={this.state.openedCollapses.includes('collapseFifteen')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question15')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseFifteen')}>
                        <CardBody>{translate('faq.response15')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseSixteen')}
                        aria-expanded={this.state.openedCollapses.includes('collapseSixteen')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question16')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseSixteen')}>
                        <CardBody>{translate('faq.response16')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseSeventeen')}
                        aria-expanded={this.state.openedCollapses.includes('collapseSeventeen')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question17')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseSeventeen')}>
                        <CardBody>{translate('faq.response17')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseEighteen')}
                        aria-expanded={this.state.openedCollapses.includes('collapseEighteen')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question18')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseEighteen')}>
                        <CardBody>{translate('faq.response18')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseNineteen')}
                        aria-expanded={this.state.openedCollapses.includes('collapseNineteen')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question19')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseNineteen')}>
                        <CardBody>
                          {translate('faq.response19_1')}
                          <br />
                          <br />
                          {translate('faq.response19_2')}
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseTwenty')}
                        aria-expanded={this.state.openedCollapses.includes('collapseTwenty')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question20')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTwenty')}>
                        <CardBody>{translate('faq.response20')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseTwentyOne')}
                        aria-expanded={this.state.openedCollapses.includes('collapseTwentyOne')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question21')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTwentyOne')}>
                        <CardBody>{translate('faq.response21')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseTwentyTwo')}
                        aria-expanded={this.state.openedCollapses.includes('collapseTwentyTwo')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question22')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTwentyTwo')}>
                        <CardBody>{translate('faq.response22')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseTwentyThree')}
                        aria-expanded={this.state.openedCollapses.includes('collapseTwentyThree')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question23')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTwentyThree')}>
                        <CardBody>{translate('faq.response23')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseTwentyFour')}
                        aria-expanded={this.state.openedCollapses.includes('collapseTwentyFour')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question24')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTwentyFour')}>
                        <CardBody>{translate('faq.response24')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseTwentyFive')}
                        aria-expanded={this.state.openedCollapses.includes('collapseTwentyFive')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question25')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTwentyFive')}>
                        <CardBody>{translate('faq.response25')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseTwentySix')}
                        aria-expanded={this.state.openedCollapses.includes('collapseTwentySix')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question26')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTwentySix')}>
                        <CardBody>{translate('faq.response26')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseTwentySeven')}
                        aria-expanded={this.state.openedCollapses.includes('collapseTwentySeven')}
                      >
                        <h5 className="mb-0 mw-90">{translate('faq.question27')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTwentySeven')}>
                        <CardBody>{translate('faq.response27')}</CardBody>
                      </Collapse>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>
          </Row>
        </>
      );
    } else if (cookies) {
      return (
        <>
          <Breadcrumbs translate={translate} title={translate('cookies.title')} />
          <Row className="justify-content-center m-0">
            <div className="ar-central-container">
              <Card className="ar-card-faq-container">
                <div className="accordion ar-faq-collapse">
                  <div className="ar-faq-collapse-main-titles">
                    <h1>{translate('cookies.title')}</h1>
                    <h6>{translate('cookies.subtitle')}</h6>
                    <h6>{translate('cookies.condition')}</h6>
                  </div>
                  <div className="ar-faq-collapse-options-container">
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseOne')}
                        aria-expanded={this.state.openedCollapses.includes('collapseOne')}
                      >
                        <h5 className="mb-0 mw-90">{translate('cookies.question1')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseOne')}>
                        <CardBody>
                          {translate('cookies.response1_1')}
                          <br />
                          <br />
                          {translate('cookies.response1_2')}
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseTwo')}
                        aria-expanded={this.state.openedCollapses.includes('collapseTwo')}
                      >
                        <h5 className="mb-0 mw-90">{translate('cookies.question2')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTwo')}>
                        <CardBody>
                          {translate('cookies.response2_1')}
                          <br />
                          <br />
                          {translate('cookies.response2_2')}
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseThree')}
                        aria-expanded={this.state.openedCollapses.includes('collapseThree')}
                      >
                        <h5 className="mb-0 mw-90">{translate('cookies.question3')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseThree')}>
                        <CardBody>
                          {translate('cookies.response3_1')}
                          <br />
                          <br />
                          {translate('cookies.response3_2')}
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseFour')}
                        aria-expanded={this.state.openedCollapses.includes('collapseFour')}
                      >
                        <h5 className="mb-0 mw-90">{translate('cookies.question4')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseFour')}>
                        <CardBody>{translate('cookies.response4')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseFive')}
                        aria-expanded={this.state.openedCollapses.includes('collapseFive')}
                      >
                        <h5 className="mb-0 mw-90">{translate('cookies.question5')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseFive')}>
                        <CardBody>
                          {translate('cookies.response5_1')}
                          <br />
                          <br />
                          {translate('cookies.response5_2')}
                          <br />
                          <br />
                          {translate('cookies.response5_2')}
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseSix')}
                        aria-expanded={this.state.openedCollapses.includes('collapseSix')}
                      >
                        <h5 className="mb-0 mw-90">{translate('cookies.question6')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseSix')}>
                        <CardBody>
                          {translate('cookies.response6_1')}
                          <br />
                          <br />
                          {translate('cookies.response6_2')}
                          <br />
                          <br />
                          {translate('cookies.response6_3')}
                          <br />
                          {translate('cookies.response6_4')}
                          <br />
                          <br />
                          {translate('cookies.response6_5')}
                        </CardBody>
                      </Collapse>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>
          </Row>
        </>
      );
    } else if (cancellation) {
      return (
        <>
          <Breadcrumbs translate={translate} title={translate('cancellation.title')} />
          <Row className="justify-content-center m-0">
            <div className="ar-central-container">
              <Card className="ar-card-faq-container">
                <div className="accordion ar-faq-collapse">
                  <div className="ar-faq-collapse-main-titles">
                    <h1>{translate('cancellation.title')}</h1>
                    <h6>{translate('cancellation.subtitle')}</h6>
                  </div>
                  <div className="ar-faq-collapse-options-container">
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseOne')}
                        aria-expanded={this.state.openedCollapses.includes('collapseOne')}
                      >
                        <h5 className="mb-0 mw-90">{translate('cancellation.question1')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseOne')}>
                        <CardBody>{translate('cancellation.response1')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseTwo')}
                        aria-expanded={this.state.openedCollapses.includes('collapseTwo')}
                      >
                        <h5 className="mb-0 mw-90">{translate('cancellation.question2')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTwo')}>
                        <CardBody>
                          {translate('cancellation.response2_1')}
                          <br />
                          <br />
                          {translate('cancellation.response2_2')}
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseThree')}
                        aria-expanded={this.state.openedCollapses.includes('collapseThree')}
                      >
                        <h5 className="mb-0 mw-90">{translate('cancellation.question3')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseThree')}>
                        <CardBody>
                          {translate('cancellation.response3_1')}
                          <br />
                          <br />
                          {translate('cancellation.response3_2')}
                          <br />
                          <br />
                          {translate('cancellation.response3_3')}
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseFour')}
                        aria-expanded={this.state.openedCollapses.includes('collapseFour')}
                      >
                        <h5 className="mb-0 mw-90">{translate('cancellation.question4')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseFour')}>
                        <CardBody>{translate('cancellation.response4')}</CardBody>
                      </Collapse>
                    </Card>
                    <Card className="card-plain">
                      <CardHeader
                        role="tab"
                        onClick={() => this.collapsesToggle('collapseFive')}
                        aria-expanded={this.state.openedCollapses.includes('collapseFive')}
                      >
                        <h5 className="mb-0 mw-90">{translate('cancellation.question5')}</h5>
                      </CardHeader>
                      <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseFive')}>
                        <CardBody>{translate('cancellation.response5')}</CardBody>
                      </Collapse>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>
          </Row>
        </>
      );
    } else {
      return <></>;
    }
  }
}

Faq.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.generalReducer;
};

export default connect(mapStateToProps)(Faq);
