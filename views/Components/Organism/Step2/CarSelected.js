import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CarSelected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {};

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { car, translate, isMobile, isSmallTablet, isTablet } = this.props;
    if (!isMobile && !isSmallTablet) {
      return (
        <Card className="card-frame ar-car-selected">
          <CardBody className="p-0">
            <Row className="ar-car-top">
              <div className="ar-car-company-logo">
                <img src={car.company.logo} alt={'Company logo'} />
              </div>
              <div className="ar-car-data-left">
                <div className="ar-icon-info ar-data-icon ">
                  <p className="ml-2 ">
                    {translate('step2.carSelected.adviseThin')}
                    <strong>{translate('step2.carSelected.adviseStrong')}</strong>
                  </p>
                </div>
              </div>
              <div className="ar-car-data-right pl-0">
                <div className="ar-icon-check-solid ar-data-icon ar-green-text">
                  <p className="ml-2 ar-blue-0-text">{translate('step2.carSelected.cancel')}</p>
                </div>
              </div>
            </Row>
            <Row className="ar-car-bottom">
              <div className="ar-car-bottom-left">
                <div className="ar-car-type">
                  <h3 className="ar-icon-car-category ar-car-type-key">
                    {car.category ? car.category : `${car.typeCar1.name} ${car.typeCar2.name}`}
                  </h3>
                  <h6 className="mb-0">
                    {car.name} <b>{translate('step2.carSelected.orSimilar')}</b>
                  </h6>
                </div>
                <div className="ar-car-features">
                  {isTablet ? (
                    <Row className="m-0 h-100">
                      <div className="ar-car-features-group">
                        <div className="ar-car-feature-item">
                          <i className="ar-icon-passenger ar-light-blue-3-text" />
                          <h6>
                            {car.seats} {translate('step2.carSelected.seats')}
                          </h6>
                        </div>
                        <div className="ar-car-feature-item">
                          <i className="ar-icon-doors ar-light-blue-3-text" />
                          <h6>
                            {car.doors} {translate('step2.carSelected.doors')}
                          </h6>
                        </div>
                        <div className="ar-car-feature-item">
                          <i className="ar-icon-luggage ar-light-blue-3-text" />
                          <h6>
                            {car.bags_big} {translate('step2.carSelected.bigBags')}
                          </h6>
                        </div>
                      </div>
                      <div className="ar-car-features-group pl-5">
                        <div className="ar-car-feature-item">
                          <i className="ar-icon-carry-on ar-light-blue-3-text" />
                          <h6>
                            {car.bags_small} {translate('step2.carSelected.smallBags')}
                          </h6>
                        </div>
                        <div className="ar-car-feature-item">
                          <i className="ar-icon-transmission ar-light-blue-3-text" />
                          <h6>{car.gear.name}</h6>
                        </div>
                        <div className="ar-car-feature-item">
                          {car.air.code !== 'N' ? (
                            <>
                              <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                              <h6>{car.air.name}</h6>
                            </>
                          ) : (
                            <>
                              <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                              <h6> - </h6>
                            </>
                          )}
                        </div>
                      </div>
                    </Row>
                  ) : (
                    <Row className="m-0 h-100">
                      <div className="ar-car-features-group">
                        <div className="ar-car-feature-item">
                          <i className="ar-icon-passenger ar-light-blue-3-text" />
                          <h6>
                            {car.seats} {translate('step2.carSelected.seats')}
                          </h6>
                        </div>
                        <div className="ar-car-feature-item">
                          <i className="ar-icon-doors ar-light-blue-3-text" />
                          <h6>
                            {car.doors} {translate('step2.carSelected.doors')}
                          </h6>
                        </div>
                      </div>
                      <div className="ar-car-features-group">
                        <div className="ar-car-feature-item">
                          <i className="ar-icon-luggage ar-light-blue-3-text" />
                          <h6>
                            {car.bags_big} {translate('step2.carSelected.bigBags')}
                          </h6>
                        </div>
                        <div className="ar-car-feature-item">
                          <i className="ar-icon-carry-on ar-light-blue-3-text" />
                          <h6>
                            {car.bags_small} {translate('step2.carSelected.smallBags')}
                          </h6>
                        </div>
                      </div>
                      <div className="ar-car-features-group">
                        <div className="ar-car-feature-item">
                          <i className="ar-icon-transmission ar-light-blue-3-text" />
                          <h6>{car.gear.name}</h6>
                        </div>
                        <div className="ar-car-feature-item">
                          {car.air.code !== 'N' ? (
                            <>
                              <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                              <h6>{car.air.name}</h6>
                            </>
                          ) : (
                            <>
                              <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                              <h6> - </h6>
                            </>
                          )}
                        </div>
                      </div>
                    </Row>
                  )}
                </div>
              </div>
              <div className="ar-car-image">
                <div className="mt-auto">
                  <img src={car.image} alt="Car image" />
                </div>
              </div>
            </Row>
          </CardBody>
        </Card>
      );
    } else {
      return (
        <Card className="card-frame ar-car-selected">
          <CardBody className="p-4">
            <Row className="ar-car-top">
              <div className="ar-car-company-logo">
                <img src={car.company.logo} alt={'Company logo'} />
              </div>
            </Row>
            <Col className="ar-car-middle p-0">
              {isMobile ? (
                <>
                  <div className="ar-car-image">
                    <img src={car.image} alt="Car image" />
                  </div>
                  <div className="ar-car-type">
                    <h3 className="ar-icon-car-category ar-car-type-key">
                      {car.category ? car.category : `${car.typeCar1.name} ${car.typeCar2.name}`}
                    </h3>
                    <h6 className="mb-0">
                      {car.name} <b>{translate('step2.carSelected.orSimilar')}</b>
                    </h6>
                  </div>
                  <div className="ar-car-features">
                    {isMobile ? (
                      <Row className="m-0 h-100 justify-content-around">
                        <div className="ar-car-features-group">
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-passenger ar-light-blue-3-text" />
                            <h6>
                              {car.seats} {translate('step2.carSelected.seats')}
                            </h6>
                          </div>
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-doors ar-light-blue-3-text" />
                            <h6>
                              {car.doors} {translate('step2.carSelected.doors')}
                            </h6>
                          </div>
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-luggage ar-light-blue-3-text" />
                            <h6>
                              {car.bags_big} {translate('step2.carSelected.bigBags')}
                            </h6>
                          </div>
                        </div>
                        <div className="ar-car-features-group">
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-carry-on ar-light-blue-3-text" />
                            <h6>
                              {car.bags_small} {translate('step2.carSelected.smallBags')}
                            </h6>
                          </div>
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-transmission ar-light-blue-3-text" />
                            <h6>{car.gear.name}</h6>
                          </div>
                          <div className="ar-car-feature-item">
                            {car.air.code !== 'N' ? (
                              <>
                                <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                                <h6>{car.air.name}</h6>
                              </>
                            ) : (
                              <>
                                <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                                <h6> - </h6>
                              </>
                            )}
                          </div>
                        </div>
                      </Row>
                    ) : (
                      <Row className="m-0 h-100 ar-car-features justify-content-between">
                        <div className="ar-car-features-group p-0">
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-passenger ar-light-blue-3-text" />
                            <h6>
                              {car.seats} {translate('step1.result.carsResult.seats')}
                            </h6>
                          </div>
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-doors ar-light-blue-3-text" />
                            <h6>
                              {car.doors} {translate('step1.result.carsResult.doors')}
                            </h6>
                          </div>
                        </div>
                        <div className="ar-car-features-group p-0">
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-luggage ar-light-blue-3-text" />
                            <h6>
                              {car.bags_big} {translate('step1.result.carsResult.bigBags')}
                            </h6>
                          </div>
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-carry-on ar-light-blue-3-text" />
                            <h6>
                              {car.bags_small} {translate('step1.result.carsResult.smallBags')}
                            </h6>
                          </div>
                        </div>
                        <div className="ar-car-features-group p-0">
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-transmission ar-light-blue-3-text" />
                            <h6>{car.gear.name}</h6>
                          </div>
                          <div className="ar-car-feature-item">
                            {car.air.code !== 'N' ? (
                              <>
                                <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                                <h6>{car.air.name}</h6>
                              </>
                            ) : (
                              <>
                                <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                                <h6> - </h6>
                              </>
                            )}
                          </div>
                        </div>
                      </Row>
                    )}
                  </div>{' '}
                </>
              ) : (
                <>
                  <Row className="mx-0 align-items-start justify-content-between">
                    <div className="ar-car-type w-50 mt-4">
                      <h3 className="ar-icon-car-category ar-car-type-key">
                        {car.category ? car.category : `${car.typeCar1.name} ${car.typeCar2.name}`}
                      </h3>
                      <h6 className="mb-0">
                        {car.name} <b>{translate('step2.carSelected.orSimilar')}</b>
                      </h6>
                    </div>
                    <div className="ar-car-image w-50">
                      <img src={car.image} alt="Car image" className="w-100" />
                    </div>
                  </Row>
                  <div className="ar-car-features">
                    {isMobile ? (
                      <Row className="m-0 h-100 justify-content-around">
                        <div className="ar-car-features-group">
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-passenger ar-light-blue-3-text" />
                            <h6>
                              {car.seats} {translate('step2.carSelected.seats')}
                            </h6>
                          </div>
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-doors ar-light-blue-3-text" />
                            <h6>
                              {car.doors} {translate('step2.carSelected.doors')}
                            </h6>
                          </div>
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-luggage ar-light-blue-3-text" />
                            <h6>
                              {car.bags_big} {translate('step2.carSelected.bigBags')}
                            </h6>
                          </div>
                        </div>
                        <div className="ar-car-features-group">
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-carry-on ar-light-blue-3-text" />
                            <h6>
                              {car.bags_small} {translate('step2.carSelected.smallBags')}
                            </h6>
                          </div>
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-transmission ar-light-blue-3-text" />
                            <h6>{car.gear.name}</h6>
                          </div>
                          <div className="ar-car-feature-item">
                            {car.air.code !== 'N' ? (
                              <>
                                <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                                <h6>{car.air.name}</h6>
                              </>
                            ) : (
                              <>
                                <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                                <h6> - </h6>
                              </>
                            )}
                          </div>
                        </div>
                      </Row>
                    ) : (
                      <Row className="m-0 h-100 ar-car-features justify-content-between">
                        <div className="ar-car-features-group p-0">
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-passenger ar-light-blue-3-text" />
                            <h6>
                              {car.seats} {translate('step1.result.carsResult.seats')}
                            </h6>
                          </div>
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-doors ar-light-blue-3-text" />
                            <h6>
                              {car.doors} {translate('step1.result.carsResult.doors')}
                            </h6>
                          </div>
                        </div>
                        <div className="ar-car-features-group p-0">
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-luggage ar-light-blue-3-text" />
                            <h6>
                              {car.bags_big} {translate('step1.result.carsResult.bigBags')}
                            </h6>
                          </div>
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-carry-on ar-light-blue-3-text" />
                            <h6>
                              {car.bags_small} {translate('step1.result.carsResult.smallBags')}
                            </h6>
                          </div>
                        </div>
                        <div className="ar-car-features-group p-0">
                          <div className="ar-car-feature-item">
                            <i className="ar-icon-transmission ar-light-blue-3-text" />
                            <h6>{car.gear.name}</h6>
                          </div>
                          <div className="ar-car-feature-item">
                            {car.air.code !== 'N' ? (
                              <>
                                <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                                <h6>{car.air.name}</h6>
                              </>
                            ) : (
                              <>
                                <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                                <h6> - </h6>
                              </>
                            )}
                          </div>
                        </div>
                      </Row>
                    )}
                  </div>{' '}
                </>
              )}
            </Col>
            <div className="ar-car-bottom">
              <div className={`ar-car-data-text ${isMobile ? 'mb-3' : 'mb-2'}`}>
                <div className="ar-icon-check-solid ar-data-icon ar-green-text">
                  <p className="ml-2 ar-blue-0-text">{translate('step2.carSelected.cancel')}</p>
                </div>
              </div>
              <div className="ar-car-data-text">
                <div className="ar-icon-info ar-data-icon ">
                  <p className="ml-2 ">
                    {translate('step2.carSelected.adviseThin')}
                    <strong>{translate('step2.carSelected.adviseStrong')}</strong>
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      );
    }
  }
}

CarSelected.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
  showDetailModal: PropTypes.func,
  showAditionalModal: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(CarSelected);
