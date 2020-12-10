import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardHeader, Collapse, CardBody } from 'reactstrap';

class Requirements extends React.Component {
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
    const { translate, isMobile, isSmallTablet, isTablet } = this.props;
    return (
      <Card className="ar-card-req-container mb-3">
        <div className="accordion ar-req-collapse">
          <div className="ar-icon-terms-and-conditions ar-title-with-icon">{translate('step2.requirements.title')}</div>
          <div className="ar-req-collapse-options-container">
            <Card className="card-plain">
              <CardHeader
                role="tab"
                onClick={() => this.collapsesToggle('collapseOne')}
                aria-expanded={this.state.openedCollapses.includes('collapseOne')}
              >
                <h5 className="mb-0 mw-90 mw-90">{translate('step2.requirements.question1')}</h5>
              </CardHeader>
              <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseOne')}>
                <CardBody>{translate('step2.requirements.response1')}</CardBody>
              </Collapse>
            </Card>
            <Card className="card-plain">
              <CardHeader
                role="tab"
                onClick={() => this.collapsesToggle('collapseOnee')}
                aria-expanded={this.state.openedCollapses.includes('collapseOnee')}
              >
                <h5 className="mb-0 mw-90 mw-90">{translate('step2.requirements.question6')}</h5>
              </CardHeader>
              <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseOnee')}>
                <CardBody>{translate('step2.requirements.response6')}</CardBody>
              </Collapse>
            </Card>
            <Card className="card-plain">
              <CardHeader
                role="tab"
                onClick={() => this.collapsesToggle('collapseTwo')}
                aria-expanded={this.state.openedCollapses.includes('collapseTwo')}
              >
                <h5 className="mb-0 mw-90">{translate('step2.requirements.question2')}</h5>
              </CardHeader>
              <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTwo')}>
                <CardBody>{translate('step2.requirements.response2')}</CardBody>
              </Collapse>
            </Card>
            <Card className="card-plain">
              <CardHeader
                role="tab"
                onClick={() => this.collapsesToggle('collapseThree')}
                aria-expanded={this.state.openedCollapses.includes('collapseThree')}
              >
                <h5 className="mb-0 mw-90">{translate('step2.requirements.question3')}</h5>
              </CardHeader>
              <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseThree')}>
                <CardBody>{translate('step2.requirements.response3')}</CardBody>
              </Collapse>
            </Card>
            <Card className="card-plain">
              <CardHeader
                role="tab"
                onClick={() => this.collapsesToggle('collapseFour')}
                aria-expanded={this.state.openedCollapses.includes('collapseFour')}
              >
                <h5 className="mb-0 mw-90">{translate('step2.requirements.question4')}</h5>
              </CardHeader>
              <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseFour')}>
                <CardBody>{translate('step2.requirements.response4')}</CardBody>
              </Collapse>
            </Card>
            <Card className="card-plain">
              <CardHeader
                role="tab"
                onClick={() => this.collapsesToggle('collapseFive')}
                aria-expanded={this.state.openedCollapses.includes('collapseFive')}
              >
                <h5 className="mb-0 mw-90">{translate('step2.requirements.question5')}</h5>
              </CardHeader>
              <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseFive')}>
                <CardBody>{translate('step2.requirements.response5')}</CardBody>
              </Collapse>
            </Card>
            <Card className="card-plain">
              <CardHeader
                role="tab"
                onClick={() => this.collapsesToggle('collapseSix')}
                aria-expanded={this.state.openedCollapses.includes('collapseSix')}
              >
                <h5 className="mb-0 mw-90">{translate('step2.requirements.question6')}</h5>
              </CardHeader>
              <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseSix')}>
                <CardBody>{translate('step2.requirements.response6')}</CardBody>
              </Collapse>
            </Card>
            <Card className="card-plain">
              <CardHeader
                role="tab"
                onClick={() => this.collapsesToggle('collapseSeven')}
                aria-expanded={this.state.openedCollapses.includes('collapseSeven')}
              >
                <h5 className="mb-0 mw-90">{translate('step2.requirements.question7')}</h5>
              </CardHeader>
              <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseSeven')}>
                <CardBody>{translate('step2.requirements.response7')}</CardBody>
              </Collapse>
            </Card>
          </div>
        </div>
      </Card>
    );
  }
}

Requirements.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.generalReducer;
};

export default connect(mapStateToProps)(Requirements);
