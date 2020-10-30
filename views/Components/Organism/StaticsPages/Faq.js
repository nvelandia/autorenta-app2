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
    const { translate, faq } = this.props;
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
                      <h5 className="mb-0">Collapsible Group Item #1</h5>
                    </CardHeader>
                    <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseOne')}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader
                      role="tab"
                      onClick={() => this.collapsesToggle('collapseTwo')}
                      aria-expanded={this.state.openedCollapses.includes('collapseTwo')}
                    >
                      <h5 className="mb-0">Collapsible Group Item #2</h5>
                    </CardHeader>
                    <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTwo')}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader
                      role="tab"
                      onClick={() => this.collapsesToggle('collapseThree')}
                      aria-expanded={this.state.openedCollapses.includes('collapseThree')}
                    >
                      <h5 className="mb-0">Collapsible Group Item #3</h5>
                    </CardHeader>
                    <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseThree')}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader
                      role="tab"
                      onClick={() => this.collapsesToggle('collapseFour')}
                      aria-expanded={this.state.openedCollapses.includes('collapseFour')}
                    >
                      <h5 className="mb-0">Collapsible Group Item #4</h5>
                    </CardHeader>
                    <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseFour')}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader
                      role="tab"
                      onClick={() => this.collapsesToggle('collapseFive')}
                      aria-expanded={this.state.openedCollapses.includes('collapseFive')}
                    >
                      <h5 className="mb-0">Collapsible Group Item #5</h5>
                    </CardHeader>
                    <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseFive')}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader
                      role="tab"
                      onClick={() => this.collapsesToggle('collapseSix')}
                      aria-expanded={this.state.openedCollapses.includes('collapseSix')}
                    >
                      <h5 className="mb-0">Collapsible Group Item #6</h5>
                    </CardHeader>
                    <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseSix')}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader
                      role="tab"
                      onClick={() => this.collapsesToggle('collapseSeven')}
                      aria-expanded={this.state.openedCollapses.includes('collapseSeven')}
                    >
                      <h5 className="mb-0">Collapsible Group Item #7</h5>
                    </CardHeader>
                    <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseSeven')}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader
                      role="tab"
                      onClick={() => this.collapsesToggle('collapseEight')}
                      aria-expanded={this.state.openedCollapses.includes('collapseEight')}
                    >
                      <h5 className="mb-0">Collapsible Group Item #8</h5>
                    </CardHeader>
                    <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseEight')}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader
                      role="tab"
                      onClick={() => this.collapsesToggle('collapseNine')}
                      aria-expanded={this.state.openedCollapses.includes('collapseNine')}
                    >
                      <h5 className="mb-0">Collapsible Group Item #9</h5>
                    </CardHeader>
                    <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseNine')}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader
                      role="tab"
                      onClick={() => this.collapsesToggle('collapseTen')}
                      aria-expanded={this.state.openedCollapses.includes('collapseTen')}
                    >
                      <h5 className="mb-0">Collapsible Group Item #10</h5>
                    </CardHeader>
                    <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseTen')}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
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
  }
}

Faq.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.generalReducer;
};

export default connect(mapStateToProps)(Faq);
