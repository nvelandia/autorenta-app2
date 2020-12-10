import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LocationSelected from '../Step2/LocationSelected';

class ReservationDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

  preparePersonalData = () => {
    const { reservation, translate } = this.props;

    const details = [
      {
        label: translate('step3.reservationDetails.fullName'),
        value: `${reservation.passenger_name} ${reservation.passenger_lastname}`,
      },
      { label: translate('step3.reservationDetails.email'), value: reservation.passenger_email },
    ];

    details.push({
      label: translate('step3.reservationDetails.phone'),
      value: reservation.passenger_phone ? reservation.passenger_phone : '-',
    });

    details.push({ label: translate('step3.reservationDetails.estimatedTotal'), value: `USD ${reservation.total}` });

    if (this.props.airlines.length !== 0) {
      details.push({
        label: translate('step3.reservationDetails.flyCompany'),
        value: reservation.airline_iata
          ? this.props.airlines.find((airline) => airline.iata === reservation.airline_iata).name
          : '-',
      });
    }

    details.push({
      label: translate('step3.reservationDetails.flyNumber'),
      value: reservation.airline_flight ? reservation.airline_flight : '-',
    });

    details.push({
      label: translate('step3.reservationDetails.promotionalCode'),
      value: reservation.discount_code ? reservation.discount_code : '-',
    });

    details.push({
      label: translate('step3.reservationDetails.coupon'),
      value: reservation.coupon ? reservation.coupon : '-',
    });

    return details;
  };

  renderSelectedPlan = () => {
    const list = this.props.car.includes.map((item, index) => {
      return (
        <div key={index} className="ar-card-details-rate-item">
          <p>
            <i className="ar-icon-check-solid ar-green-text" />
          </p>
          <p className="pl-1">{' ' + item}</p>
        </div>
      );
    });
    return (
      <Row className="m-0 justify-content-between">
        <div>{list}</div>
      </Row>
    );
  };

  render() {
    const { translate, isMobile, isTablet, isSmallTablet } = this.props;
    const details = this.preparePersonalData();
    const extraTaxes = this.props.car.fees.filter(
      (item) =>
        item.description === 'Impuestos extras' ||
        item.description === 'Extra taxes' ||
        item.description === 'Impostos extras',
    );
    console.log(extraTaxes);
    if (!isMobile && !isSmallTablet && !isTablet) {
      return (
        <>
          <Card className="card-frame ar-reserve-details">
            <div className="d-flex justify-content-around align-items-center">
              <div className="ar-reserve-details-text-container">
                <h1 className="ar-reserve-details-title">
                  <i className="ar-icon-customer-type" />
                  {translate('step3.reservationDetails.title')}
                </h1>
                <div>
                  {details.map((item, index) => {
                    return (
                      <h6 key={index}>
                        {item.label}:&nbsp;<strong>{item.value}</strong>
                      </h6>
                    );
                  })}
                </div>
              </div>
              <div className="ar-reserve-details-map-container">
                <LocationSelected
                  location={this.props.location.pickup}
                  title={translate('step3.reservationDetails.pickUpTitle')}
                />
                <LocationSelected
                  location={this.props.location.dropoff}
                  title={translate('step3.reservationDetails.dropOffTitle')}
                />
              </div>
            </div>
          </Card>
          <Card className="card-frame ar-reserve-details p-0">
            <CardBody className="p-0 ar-reserve-details-car">
              <Row className="ar-car-top">
                <div className="ar-car-top-left">
                  <div className="ar-car-image">
                    <img src={this.props.car.image} alt={'Car image'} />
                  </div>
                  <div className="ar-car-company-logo">
                    <img src={this.props.car.company.logo} alt={'Company logo'} />
                  </div>
                  <div className="ar-car-type">
                    <h3 className="ar-red-text">
                      {this.props.car.category
                        ? this.props.car.category
                        : `${this.props.car.typeCar1.name} ${this.props.car.typeCar2.name}`}
                    </h3>
                    <h6 className="mb-0">
                      {this.props.car.name}&nbsp;<b>{translate('step3.reservationDetails.orSimilar')}</b>
                    </h6>
                  </div>
                </div>
                <Row className="m-0 ar-car-features">
                  <div className="ar-car-features-group pl-0">
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-passenger ar-light-blue-3-text" />
                      <h6>
                        {this.props.car.seats} {translate('step3.reservationDetails.seats')}
                      </h6>
                    </div>
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-doors ar-light-blue-3-text" />
                      <h6>
                        {this.props.car.doors} {translate('step3.reservationDetails.doors')}
                      </h6>
                    </div>
                  </div>
                  <div className="ar-car-features-group">
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-luggage ar-light-blue-3-text" />
                      <h6>
                        {this.props.car.bags_big} {translate('step3.reservationDetails.bigBags')}
                      </h6>
                    </div>
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-carry-on ar-light-blue-3-text" />
                      <h6>
                        {this.props.car.bags_small} {translate('step3.reservationDetails.smallBags')}
                      </h6>
                    </div>
                  </div>
                  <div className="ar-car-features-group pr-0 ">
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-transmission ar-light-blue-3-text" />
                      <h6>{this.props.car.gear.name}</h6>
                    </div>
                    <div className="ar-car-feature-item">
                      {this.props.car.air.code !== 'N' ? (
                        <>
                          <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                          <h6>{this.props.car.air.name}</h6>
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
              </Row>
            </CardBody>
          </Card>
          <Card className="card-frame ar-reserve-details ">
            <div className="ar-reserve-selected-plan">
              <div className="ar-reserve-selected-plan-text">
                <h1 className="ar-reserve-selected-plan-title">
                  <i className="ar-icon-plan-selected" />
                  {translate('step3.reservationDetails.selectedPlan')}
                </h1>
                <div className="ar-card-details-rates">
                  <h5>{this.props.reservation.rate_info.name}</h5>
                  <h6>
                    {translate('step2.details.feeCode')} {this.props.reservation.rate_info.code}
                  </h6>
                  <div className="ar-card-details-rates-list">{this.renderSelectedPlan()}</div>
                </div>
              </div>
              <Card className="ar-reserve-selected-plan-prices">
                <div className="ar-reserve-selected-plan-prices-title">
                  <i className="ar-icon-taxes" />
                  {translate('step3.reservationDetails.detailsTitle')}
                </div>
                <div className="ar-reserve-selected-plan-prices-list">
                  {this.props.car.fees.map((fee, index) => {
                    if (fee.amount !== '0.00') {
                      if (
                        fee.description !== 'Impuestos extras' &&
                        fee.description !== 'Extra taxes' &&
                        fee.description !== 'Impostos extras'
                      ) {
                        return (
                          <div key={index} className="ar-reserve-selected-plan-prices-item">
                            <h6>{fee.description}</h6>
                            <strong>
                              {fee.currency} {parseFloat(fee.amount).toFixed(2)}
                            </strong>
                          </div>
                        );
                      }
                    }
                  })}
                  <span className="ar-separator-line mt-3 mb-4" />
                  <div className="ar-reserve-selected-plan-prices-item">
                    <h6>{translate('step2.details.totalFee')}</h6>
                    <strong>USD {parseFloat(this.props.reservation.taxes).toFixed(2)}</strong>
                  </div>
                  <div className="ar-reserve-selected-plan-prices-item">
                    <h6>{translate('step3.reservationDetails.baseFee')}</h6>
                    <strong>USD {parseFloat(this.props.reservation.base_rate).toFixed(2)}</strong>
                  </div>
                  {extraTaxes.length !== 0 ? (
                    <div className="ar-reserve-selected-plan-prices-item">
                      <h6>{extraTaxes[0].description}</h6>
                      <strong>USD {parseFloat(extraTaxes[0].amount).toFixed(2)}</strong>
                    </div>
                  ) : null}
                  <div className="ar-reserve-selected-plan-prices-item">
                    <h6>{translate('step3.reservationDetails.optionalEquipment')}</h6>
                    <strong>USD {parseFloat(this.props.car.extras_sum).toFixed(2)}</strong>
                  </div>
                  <span className="ar-separator-line mt-3 mb-25" />
                </div>
                <div className="ar-reserve-selected-plan-prices-total">
                  <h6>{translate('step3.reservationDetails.estimated')}</h6>
                  <h1>{parseFloat(this.props.reservation.subtotal).toFixed(2)}</h1>
                </div>
              </Card>
              <div className="ar-reserve-selected-plan-prices p-0 m-0">
                <Card className="ar-reserve-selected-plan-prices w-auto mb-3">
                  <div className="ar-reserve-selected-plan-prices-title">
                    <i className="ar-icon-optional-equipment" />
                    {translate('step3.reservationDetails.additionalEquipmentTitle')}
                  </div>
                  <div className="ar-reserve-selected-plan-prices-list">
                    {this.props.car.extras.map((item) => {
                      return (
                        <div className="ar-reserve-selected-plan-prices-item">
                          <h6>{item.name}</h6>
                          <strong>USD {parseFloat(item.base_amount).toFixed(2)}</strong>
                        </div>
                      );
                    })}
                    <span className="ar-separator-line mt-3 mb-25" />
                  </div>
                  <div className="ar-reserve-selected-plan-prices-total">
                    <h6>{translate('step3.reservationDetails.estimated')}</h6>
                    <h1>{parseFloat(this.props.car.extras_sum).toFixed(2)}</h1>
                  </div>
                </Card>
                <Card className="ar-reserve-selected-plan-prices w-auto p-3">
                  <div className="d-flex align-items-center ar-reserve-selected-plan-info">
                    <i className="ar-icon-info ar-light-blue-1-text mr-2" />
                    <h6>{translate('step3.reservationDetails.optionalEquipmentTaxes')}</h6>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
          <Card className="card-frame ar-reserve-details">
            <CardBody className="ar-reserve-terms">
              <h1 className="ar-reserve-details-title">
                <i className="ar-icon-terms-and-conditions" />
                {translate('step3.reservationDetails.conditionsTitle')}
              </h1>
              <div className="ar-text-card">
                <p>{translate('step3.reservationDetails.conditionText1')}</p>
                <p>{translate('step3.reservationDetails.conditionText2')}</p>
                <p>{translate('step3.reservationDetails.conditionText3')}</p>
                <p>{translate('step3.reservationDetails.conditionText4')}</p>
                <p>{translate('step3.reservationDetails.conditionText5')}</p>
                <p>{translate('step3.reservationDetails.conditionText6')}</p>
                <p>{translate('step3.reservationDetails.conditionText7')}</p>
                <p>{translate('step3.reservationDetails.conditionText8')}</p>
                <p>{translate('step3.reservationDetails.conditionText9')}</p>
                <p>{translate('step3.reservationDetails.conditionText10')}</p>
                <p>{translate('step3.reservationDetails.conditionText11')}</p>
                <p>{translate('step3.reservationDetails.conditionText12')}</p>
                <p>{translate('step3.reservationDetails.conditionText13')}</p>
              </div>
            </CardBody>
          </Card>
        </>
      );
    } else if (isTablet) {
      return (
        <>
          <div className="card-frame ar-reserve-details d-flex justify-content-between p-0">
            <Card className="ar-reserve-details-text-container w-48 h-auto mb-3 pt-4">
              <h1 className="ar-reserve-details-title">
                <i className="ar-icon-customer-type" />
                {translate('step3.reservationDetails.title')}
              </h1>
              <div>
                {details.map((item, index) => {
                  return (
                    <h6 className="mb-2" key={index}>
                      {item.label}:&nbsp;<strong>{item.value}</strong>
                    </h6>
                  );
                })}
              </div>
            </Card>
            <Card className="card-frame ar-car-selected mt-0 w-48">
              <CardBody className="p-4">
                <Row className="ar-car-top">
                  <div className="ar-car-company-logo">
                    <img src={this.props.car.company.logo} alt={'Company logo'} />
                  </div>
                </Row>
                <Col className="ar-car-middle p-0">
                  <div className="ar-car-image">
                    <img src={this.props.car.image} alt="Car image" />
                  </div>
                  <div className="ar-car-type">
                    <h3 className="ar-icon-car-category ar-car-type-key">
                      {this.props.car.category
                        ? this.props.car.category
                        : `${this.props.car.typeCar1.name} ${this.props.car.typeCar2.name}`}
                    </h3>
                    <h6 className="mb-0">
                      {this.props.car.name} <b>{translate('step2.carSelected.orSimilar')}</b>
                    </h6>
                  </div>
                  <div className="ar-car-features">
                    <Row className="m-0 h-100 justify-content-around">
                      <div className="ar-car-features-group">
                        <div className="ar-car-feature-item">
                          <i className="ar-icon-passenger ar-light-blue-3-text" />
                          <h6>
                            {this.props.car.seats} {translate('step2.carSelected.seats')}
                          </h6>
                        </div>
                        <div className="ar-car-feature-item">
                          <i className="ar-icon-doors ar-light-blue-3-text" />
                          <h6>
                            {this.props.car.doors} {translate('step2.carSelected.doors')}
                          </h6>
                        </div>
                        <div className="ar-car-feature-item">
                          <i className="ar-icon-luggage ar-light-blue-3-text" />
                          <h6>
                            {this.props.car.bags_big} {translate('step2.carSelected.bigBags')}
                          </h6>
                        </div>
                      </div>
                      <div className="ar-car-features-group">
                        <div className="ar-car-feature-item">
                          <i className="ar-icon-carry-on ar-light-blue-3-text" />
                          <h6>
                            {this.props.car.bags_small} {translate('step2.carSelected.smallBags')}
                          </h6>
                        </div>
                        <div className="ar-car-feature-item">
                          <i className="ar-icon-transmission ar-light-blue-3-text" />
                          <h6>{this.props.car.gear.name}</h6>
                        </div>
                        <div className="ar-car-feature-item">
                          {this.props.car.air.code !== 'N' ? (
                            <>
                              <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                              <h6>{this.props.car.air.name}</h6>
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
                  </div>
                </Col>
              </CardBody>
            </Card>
          </div>
          <div className="ar-reserve-details-map-container d-flex w-100 justify-content-between">
            <LocationSelected
              location={this.props.location.pickup}
              title={translate('step3.reservationDetails.pickUpTitle')}
            />
            <LocationSelected
              location={this.props.location.dropoff}
              title={translate('step3.reservationDetails.dropOffTitle')}
            />
          </div>

          <Card className="card-frame ar-reserve-details ">
            <div className="ar-reserve-selected-plan">
              <div className="ar-reserve-selected-plan-text">
                <h1 className="ar-reserve-selected-plan-title">
                  <i className="ar-icon-plan-selected" />
                  {translate('step3.reservationDetails.selectedPlan')}
                </h1>
                <div className="ar-card-details-rates">
                  <h5>{this.props.reservation.rate_info.name}</h5>
                  <h6>
                    {translate('step2.details.feeCode')} {this.props.reservation.rate_info.code}
                  </h6>
                  <div className="ar-card-details-rates-list">{this.renderSelectedPlan()}</div>
                </div>
              </div>
              <div className="d-flex justify-content-between w-100">
                <Card className="ar-reserve-selected-plan-prices w-48">
                  <div className="ar-reserve-selected-plan-prices-title">
                    <i className="ar-icon-taxes" />
                    {translate('step3.reservationDetails.detailsTitle')}
                  </div>
                  <div className="ar-reserve-selected-plan-prices-list">
                    {this.props.car.fees.map((fee, index) => {
                      if (fee.amount !== '0.00') {
                        if (
                          fee.description !== 'Impuestos extras' &&
                          fee.description !== 'Extra taxes' &&
                          fee.description !== 'Impostos extras'
                        ) {
                          return (
                            <div key={index} className="ar-reserve-selected-plan-prices-item">
                              <h6>{fee.description}</h6>
                              <strong>
                                {fee.currency} {parseFloat(fee.amount).toFixed(2)}
                              </strong>
                            </div>
                          );
                        }
                      }
                    })}
                    <span className="ar-separator-line mt-3 mb-4" />
                    <div className="ar-reserve-selected-plan-prices-item">
                      <h6>{translate('step2.details.totalFee')}</h6>
                      <strong>USD {parseFloat(this.props.reservation.taxes).toFixed(2)}</strong>
                    </div>
                    <div className="ar-reserve-selected-plan-prices-item">
                      <h6>{translate('step3.reservationDetails.baseFee')}</h6>
                      <strong>USD {parseFloat(this.props.reservation.base_rate).toFixed(2)}</strong>
                    </div>
                    {extraTaxes.length !== 0 ? (
                      <div className="ar-reserve-selected-plan-prices-item">
                        <h6>{extraTaxes[0].description}</h6>
                        <strong>USD {parseFloat(extraTaxes[0].amount).toFixed(2)}</strong>
                      </div>
                    ) : null}
                    <div className="ar-reserve-selected-plan-prices-item">
                      <h6>{translate('step3.reservationDetails.optionalEquipment')}</h6>
                      <strong>USD {parseFloat(this.props.car.extras_sum).toFixed(2)}</strong>
                    </div>
                    <span className="ar-separator-line mt-3 mb-25" />
                  </div>
                  <div className="ar-reserve-selected-plan-prices-total">
                    <h6>{translate('step3.reservationDetails.estimated')}</h6>
                    <h1>{parseFloat(this.props.reservation.subtotal).toFixed(2)}</h1>
                  </div>
                </Card>
                <div className="d-flex flex-column  p-0 m-0 w-48">
                  <Card className="ar-reserve-selected-plan-prices w-auto mb-3 h-auto">
                    <div className="ar-reserve-selected-plan-prices-title">
                      <i className="ar-icon-optional-equipment" />
                      {translate('step3.reservationDetails.additionalEquipmentTitle')}
                    </div>
                    <div className="ar-reserve-selected-plan-prices-list">
                      {this.props.car.extras.map((item) => {
                        return (
                          <div className="ar-reserve-selected-plan-prices-item">
                            <h6>{item.name}</h6>
                            <strong>USD {parseFloat(item.base_amount).toFixed(2)}</strong>
                          </div>
                        );
                      })}
                      <span className="ar-separator-line mt-3 mb-25" />
                    </div>
                    <div className="ar-reserve-selected-plan-prices-total">
                      <h6>{translate('step3.reservationDetails.estimated')}</h6>
                      <h1>{parseFloat(this.props.car.extras_sum).toFixed(2)}</h1>
                    </div>
                  </Card>
                  <Card className="ar-reserve-selected-plan-prices w-auto p-3 h-auto">
                    <div className="d-flex align-items-center ar-reserve-selected-plan-info">
                      <i className="ar-icon-info ar-light-blue-1-text mr-2" />
                      <h6>{translate('step3.reservationDetails.optionalEquipmentTaxes')}</h6>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </Card>
          <Card className="card-frame ar-reserve-details">
            <CardBody className="ar-reserve-terms">
              <h1 className="ar-reserve-details-title">
                <i className="ar-icon-terms-and-conditions" />
                {translate('step3.reservationDetails.conditionsTitle')}
              </h1>
              <div className="ar-text-card">
                <p>{translate('step3.reservationDetails.conditionText1')}</p>
                <p>{translate('step3.reservationDetails.conditionText2')}</p>
                <p>{translate('step3.reservationDetails.conditionText3')}</p>
                <p>{translate('step3.reservationDetails.conditionText4')}</p>
                <p>{translate('step3.reservationDetails.conditionText5')}</p>
                <p>{translate('step3.reservationDetails.conditionText6')}</p>
                <p>{translate('step3.reservationDetails.conditionText7')}</p>
                <p>{translate('step3.reservationDetails.conditionText8')}</p>
                <p>{translate('step3.reservationDetails.conditionText9')}</p>
                <p>{translate('step3.reservationDetails.conditionText10')}</p>
                <p>{translate('step3.reservationDetails.conditionText11')}</p>
                <p>{translate('step3.reservationDetails.conditionText12')}</p>
                <p>{translate('step3.reservationDetails.conditionText13')}</p>
              </div>
            </CardBody>
          </Card>
        </>
      );
    } else {
      return (
        <>
          <div className="card-frame ar-reserve-details">
            <div className="d-flex justify-content-around align-items-center flex-column">
              <Card className="ar-reserve-details-text-container">
                <h1 className="ar-reserve-details-title">
                  <i className="ar-icon-customer-type" />
                  {translate('step3.reservationDetails.title')}
                </h1>
                <div>
                  {details.map((item, index) => {
                    return (
                      <h6 key={index}>
                        {item.label}:&nbsp;<strong>{item.value}</strong>
                      </h6>
                    );
                  })}
                </div>
              </Card>
              <LocationSelected
                location={this.props.location.pickup}
                title={translate('step3.reservationDetails.pickUpTitle')}
              />
              <LocationSelected
                location={this.props.location.dropoff}
                title={translate('step3.reservationDetails.dropOffTitle')}
              />
            </div>
          </div>
          <Card className="card-frame ar-car-selected mt-0">
            <CardBody className="p-4">
              <Row className="ar-car-top">
                <div className="ar-car-company-logo">
                  <img src={this.props.car.company.logo} alt={'Company logo'} />
                </div>
              </Row>
              <Col className="ar-car-middle p-0">
                <div className="ar-car-image">
                  <img src={this.props.car.image} alt="Car image" />
                </div>
                <div className="ar-car-type">
                  <h3 className="ar-icon-car-category ar-car-type-key">
                    {this.props.car.category
                      ? this.props.car.category
                      : `${this.props.car.typeCar1.name} ${this.props.car.typeCar2.name}`}
                  </h3>
                  <h6 className="mb-0">
                    {this.props.car.name} <b>{translate('step2.carSelected.orSimilar')}</b>
                  </h6>
                </div>
                <div className="ar-car-features">
                  <Row className="m-0 h-100 justify-content-around">
                    <div className="ar-car-features-group">
                      <div className="ar-car-feature-item">
                        <i className="ar-icon-passenger ar-light-blue-3-text" />
                        <h6>
                          {this.props.car.seats} {translate('step2.carSelected.seats')}
                        </h6>
                      </div>
                      <div className="ar-car-feature-item">
                        <i className="ar-icon-doors ar-light-blue-3-text" />
                        <h6>
                          {this.props.car.doors} {translate('step2.carSelected.doors')}
                        </h6>
                      </div>
                      <div className="ar-car-feature-item">
                        <i className="ar-icon-luggage ar-light-blue-3-text" />
                        <h6>
                          {this.props.car.bags_big} {translate('step2.carSelected.bigBags')}
                        </h6>
                      </div>
                    </div>
                    <div className="ar-car-features-group">
                      <div className="ar-car-feature-item">
                        <i className="ar-icon-carry-on ar-light-blue-3-text" />
                        <h6>
                          {this.props.car.bags_small} {translate('step2.carSelected.smallBags')}
                        </h6>
                      </div>
                      <div className="ar-car-feature-item">
                        <i className="ar-icon-transmission ar-light-blue-3-text" />
                        <h6>{this.props.car.gear.name}</h6>
                      </div>
                      <div className="ar-car-feature-item">
                        {this.props.car.air.code !== 'N' ? (
                          <>
                            <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                            <h6>{this.props.car.air.name}</h6>
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
                </div>
              </Col>
            </CardBody>
          </Card>
          <div className="card-frame ar-reserve-details ">
            <div className="ar-reserve-selected-plan">
              <Card className="ar-reserve-selected-plan-text">
                <h1 className="ar-reserve-selected-plan-title">
                  <i className="ar-icon-plan-selected" />
                  {translate('step3.reservationDetails.selectedPlan')}
                </h1>
                <div className="ar-card-details-rates">
                  <h5>{this.props.reservation.rate_info.name}</h5>
                  <h6>
                    {translate('step2.details.feeCode')} {this.props.reservation.rate_info.code}
                  </h6>
                  <div className="ar-card-details-rates-list">{this.renderSelectedPlan()}</div>
                </div>
              </Card>
              <Card className="ar-reserve-selected-plan-prices">
                <div className="ar-reserve-selected-plan-prices-title">
                  <i className="ar-icon-taxes" />
                  {translate('step3.reservationDetails.detailsTitle')}
                </div>
                <div className="ar-reserve-selected-plan-prices-list">
                  {this.props.car.fees.map((fee, index) => {
                    if (fee.amount !== '0.00') {
                      if (
                        fee.description !== 'Impuestos extras' &&
                        fee.description !== 'Extra taxes' &&
                        fee.description !== 'Impostos extras'
                      ) {
                        return (
                          <div key={index} className="ar-reserve-selected-plan-prices-item">
                            <h6>{fee.description}</h6>
                            <strong>
                              {fee.currency} {parseFloat(fee.amount).toFixed(2)}
                            </strong>
                          </div>
                        );
                      }
                    }
                  })}
                  <span className="ar-separator-line mt-3 mb-4" />
                  <div className="ar-reserve-selected-plan-prices-item">
                    <h6>{translate('step2.details.totalFee')}</h6>
                    <strong>USD {parseFloat(this.props.reservation.taxes).toFixed(2)}</strong>
                  </div>
                  <div className="ar-reserve-selected-plan-prices-item">
                    <h6>{translate('step3.reservationDetails.baseFee')}</h6>
                    <strong>USD {parseFloat(this.props.reservation.base_rate).toFixed(2)}</strong>
                  </div>
                  {extraTaxes.length !== 0 ? (
                    <div className="ar-reserve-selected-plan-prices-item">
                      <h6>{extraTaxes[0].description}</h6>
                      <strong>USD {parseFloat(extraTaxes[0].amount).toFixed(2)}</strong>
                    </div>
                  ) : null}
                  <div className="ar-reserve-selected-plan-prices-item">
                    <h6>{translate('step3.reservationDetails.optionalEquipment')}</h6>
                    <strong>USD {parseFloat(this.props.car.extras_sum).toFixed(2)}</strong>
                  </div>
                  <span className="ar-separator-line mt-3 mb-25" />
                </div>
                <div className="ar-reserve-selected-plan-prices-total">
                  <h6>{translate('step3.reservationDetails.estimated')}</h6>
                  <h1>{parseFloat(this.props.reservation.subtotal).toFixed(2)}</h1>
                </div>
              </Card>
              <Card className="ar-reserve-selected-plan-prices">
                <div className="ar-reserve-selected-plan-prices-title">
                  <i className="ar-icon-optional-equipment" />
                  {translate('step3.reservationDetails.additionalEquipmentTitle')}
                </div>
                <div className="ar-reserve-selected-plan-prices-list">
                  {this.props.car.extras.map((item) => {
                    return (
                      <div className="ar-reserve-selected-plan-prices-item">
                        <h6>{item.name}</h6>
                        <strong>USD {parseFloat(item.base_amount).toFixed(2)}</strong>
                      </div>
                    );
                  })}
                  <span className="ar-separator-line mt-3 mb-25" />
                </div>
                <div className="ar-reserve-selected-plan-prices-total">
                  <h6>{translate('step3.reservationDetails.estimated')}</h6>
                  <h1>{parseFloat(this.props.car.extras_sum).toFixed(2)}</h1>
                </div>
              </Card>
              <Card className="ar-reserve-selected-plan-prices w-auto p-3">
                <div className="d-flex align-items-center ar-reserve-selected-plan-info">
                  <i className="ar-icon-info ar-light-blue-1-text mr-2" />
                  <h6>{translate('step3.reservationDetails.optionalEquipmentTaxes')}</h6>
                </div>
              </Card>
            </div>
          </div>
          <Card className="card-frame ar-reserve-details">
            <CardBody className="ar-reserve-terms">
              <h1 className="ar-reserve-details-title">
                <i className="ar-icon-terms-and-conditions" />
                {translate('step3.reservationDetails.conditionsTitle')}
              </h1>
              <div className="ar-text-card">
                <p>{translate('step3.reservationDetails.conditionText1')}</p>
                <p>{translate('step3.reservationDetails.conditionText2')}</p>
                <p>{translate('step3.reservationDetails.conditionText3')}</p>
                <p>{translate('step3.reservationDetails.conditionText4')}</p>
                <p>{translate('step3.reservationDetails.conditionText5')}</p>
                <p>{translate('step3.reservationDetails.conditionText6')}</p>
                <p>{translate('step3.reservationDetails.conditionText7')}</p>
                <p>{translate('step3.reservationDetails.conditionText8')}</p>
                <p>{translate('step3.reservationDetails.conditionText9')}</p>
                <p>{translate('step3.reservationDetails.conditionText10')}</p>
                <p>{translate('step3.reservationDetails.conditionText11')}</p>
                <p>{translate('step3.reservationDetails.conditionText12')}</p>
                <p>{translate('step3.reservationDetails.conditionText13')}</p>
              </div>
            </CardBody>
          </Card>
        </>
      );
    }
  }
}

ReservationDetails.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
};

const mapStateToProps = (state) => {
  return state.step3Reducer;
};

export default connect(mapStateToProps)(ReservationDetails);
