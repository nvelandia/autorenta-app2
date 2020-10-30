import React from 'react';
import { Button, Card } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomButton from '../../Atoms/CustomButton';
import ModalChangePlan from './ModalChangePlan';
import { createReservationSuccessfully } from '../../../../actions/step2Actions';
import { pages, redirectTo } from '../../../../utils/helpers/redirectTo';
import * as actions from '../../../../actions/step2Actions';
import NotificationAlert from 'react-notification-alert';
import SuccessNotification from '../../Molecules/Notifications/SuccessNotification';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChangePlanModal: false,
      conditionsAndTerms: false,
    };
    this.dispatch = props.dispatch;
  }

  showChangePlanModal = () => {
    this.setState({ showChangePlanModal: true });
  };

  hideModal = () => {
    this.setState({ showChangePlanModal: false });
  };

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckbox = () => {
    this.setState({ conditionsAndTerms: !this.state.conditionsAndTerms });
  };

  handleOnClick = () => {
    const formData = {
      pickup_location: this.props.carSelected.pickup_office.location,
      pickup_date: this.props.location.pickup.date,
      pickup_time: this.props.location.pickup.time,
      dropoff_location: this.props.carSelected.dropoff_office.location,
      dropoff_date: this.props.location.dropoff.date,
      dropoff_time: this.props.location.dropoff.time,
      passenger_country_id: this.props.searchParams.passenger_country_id,
      passenger_age: this.props.searchParams.passenger_age,
      passenger_email: this.props.organization.organization_id
        ? this.props.organization.email
        : this.props.formData.email,
      passenger_name: this.props.formData.name,
      passenger_lastname: this.props.formData.surname,
      passenger_phone: this.props.formData.phone,
      rate_code: this.props.discount.rate_code
        ? this.props.discount.rate_code
        : this.props.carSelected.rates[this.props.rateSelected].rate_code,
      vendor: this.props.carSelected.company.code,
      sipp: this.props.carSelected.typeAlias,
      car_name: this.props.carSelected.name,
      car_image: this.props.carSelected.image,
      pickup_country_code: this.props.searchParams.pickup_country_code,
      dropoff_country_code: this.props.searchParams.dropoff_country_code,
    };
    this.props.organization.customer_id ? (formData.partner_code = this.props.organization.customer_id) : null;
    this.props.carSelected.car_id ? (formData.car_id = this.props.carSelected.car_id) : null;
    this.props.formData.airline_iata ? (formData.airline_iata = this.props.formData.airline_iata) : null;
    this.props.formData.airline_flight ? (formData.airline_flight = this.props.formData.airline_flight) : null;
    this.props.customerDiscount.customer_discount_id
      ? (formData.customer_discount_id = this.props.customerDiscount.customer_discount_id)
      : null;
    if (
      !formData.passenger_email ||
      !formData.passenger_name ||
      !formData.passenger_lastname ||
      (!formData.airline_iata && formData.airline_flight) ||
      (!formData.airline_flight && formData.airline_iata) ||
      !this.props.clientType
    ) {
      const errors = {};
      !formData.passenger_email ? (errors.email = true) : null;
      !formData.passenger_name ? (errors.name = true) : null;
      !formData.passenger_lastname ? (errors.surname = true) : null;
      !this.props.clientType ? (errors.clientType = true) : null;
      !formData.airline_iata && formData.airline_flight ? (errors.airline_iata = true) : null;
      !formData.airline_flight && formData.airline_iata ? (errors.airline_flight = true) : null;
      this.dispatch(this.props.setErrors(errors));
    } else {
      this.dispatch(this.props.showLoader());
      this.dispatch(this.props.confirmReservation(formData));
    }
  };

  renderIncludes = () => {
    const rate = this.props.discount.price
      ? this.props.discount
      : this.props.carSelected.rates[this.props.rateSelected];

    const { includes, not_includes } = rate;
    const rateIncludes = includes.map((item, index) => {
      return (
        <div key={index} className="ar-card-details-rate-item">
          <i className="ar-icon-check-solid ar-green-text" />
          <p>{item}</p>
        </div>
      );
    });
    const rateNotIncludes = not_includes.map((item, index) => {
      return (
        <div key={index + 100} className="ar-card-details-rate-item  ">
          <i className="ar-icon-close-solid ar-red-text" />
          <p>{item}</p>
        </div>
      );
    });

    return rateIncludes.concat(rateNotIncludes);
  };

  notify = (type, message) => {
    let options = {
      place: 'tc',
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
            {this.props.translate('common.error.attention')}
          </span>
          <span data-notify="message">{message}</span>
        </div>
      ),
      type: type,
      icon: 'ni ni-bell-55',
      autoDismiss: 10,
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  calculateOptionalEquipment = () => {
    let total = 0;
    for (const item of this.props.optionalEquipment) {
      if (item.quantity) {
        total = total + parseFloat(item.base_amount) * item.quantity;
      } else {
        total = total + parseFloat(item.base_amount);
      }
    }
    return <strong>USD {total.toFixed(2)}</strong>;
  };

  calculateTotalEstimated = (rate) => {
    let total = 0;
    for (const item of this.props.optionalEquipment) {
      if (item.quantity) {
        total = total + parseFloat(item.base_amount) * item.quantity;
      } else {
        total = total + parseFloat(item.base_amount);
      }
    }
    total = total + rate.price;
    return total.toFixed(2);
  };

  render() {
    const { translate, isMobile } = this.props;

    const rate = this.props.discount.price
      ? this.props.discount
      : this.props.carSelected.rates[this.props.rateSelected];

    let needClear = false;
    if (this.props.error.clientType) {
      this.notify('autorenta', this.props.translate('common.error.clientType'));
      needClear = true;
    }
    if ((this.props.error.name || this.props.error.surname || this.props.error.email) && !this.props.error.clientType) {
      this.notify('autorenta', this.props.translate('common.error.formStep2'));
      needClear = true;
    }
    if (this.props.error.airline_iata) {
      this.notify('autorenta', this.props.translate('common.error.airlineIata'));
      needClear = true;
    }
    if (this.props.error.airline_flight) {
      this.notify('autorenta', this.props.translate('common.error.airlineFlight'));
      needClear = true;
    }
    if (needClear) {
      this.dispatch(this.props.clearValidateIdError());
    }
    return (
      <Card>
        <div className="rna-wrapper">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <SuccessNotification translate={translate} />
        <ModalChangePlan
          showModal={this.state.showChangePlanModal}
          hideModal={this.hideModal}
          changePlan={this.props.changePlan}
          validatePromotion={this.props.validatePromotion}
          isMobile={isMobile}
          translate={translate}
        />
        <div className="ar-card-details-title">
          <h1>{translate('step2.details.title')}</h1>
        </div>
        <div className="ar-card-details-subtitle">
          <h2>{translate('step2.details.selectedPlan')}</h2>
          <CustomButton
            text={translate('step2.details.changePlan')}
            event={() => this.showChangePlanModal()}
            color={'red-0'}
            name={'ar-button-change-plan'}
            icon={'ar-icon-chevron-right'}
            justify={'justify-content-between'}
          />
        </div>
        <div className="ar-card-details-rates">
          <h5>{rate.name}</h5>
          <h6>{translate('step2.details.feeCode') + rate.rate_code}</h6>
          <div className="ar-card-details-rates-list">{this.renderIncludes()}</div>
        </div>
        <div className="ar-card-details-subtitle">
          <h2>{translate('step2.details.additionalEquipment')}</h2>
        </div>
        <div className="ar-card-details-additional-equipment">
          <div className="ar-card-details-additional-equipment-list">
            {this.props.optionalEquipment.map((item, index) => {
              return (
                <div key={index} className="ar-card-details-additional-equipment-item">
                  {item.quantity ? (
                    <>
                      <p>
                        {item.name} {`(x${item.quantity})`}
                      </p>
                      <strong>USD {(parseFloat(item.base_amount) * item.quantity).toFixed(2)}</strong>
                    </>
                  ) : (
                    <>
                      <p>{item.name}</p>
                      <strong>USD {parseFloat(item.base_amount).toFixed(2)}</strong>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="ar-card-details-subtitle">
          <h2>{translate('step2.details.chargesDetail')}</h2>
        </div>
        <div className="ar-card-details-additional-equipment">
          <div className="ar-card-details-additional-equipment-list">
            {rate.fees
              ? rate.fees.map((item, index) => {
                  if (item.amount !== 0) {
                    return (
                      <div key={index} className="ar-card-details-additional-equipment-item">
                        <p>{item.description}</p>
                        <strong>USD {parseFloat(item.amount).toFixed(2)}</strong>
                      </div>
                    );
                  }
                })
              : null}
            <span className="ar-separator-line mt-4" />
            <div className="ar-card-details-additional-equipment-item mt-4">
              <p>{translate('step2.details.baseFee')}</p>
              <strong>USD {rate.base_rate.toFixed(2)}</strong>
            </div>
            <div className="ar-card-details-additional-equipment-item">
              <p>{translate('step2.details.totalFee')}</p>
              <strong>USD {rate.fees_total.toFixed(2)}</strong>
            </div>
            <div className="ar-card-details-additional-equipment-item">
              <p>{translate('step2.details.optionalEquipment')}</p>
              {this.calculateOptionalEquipment(rate)}
            </div>
          </div>
        </div>
        <div className="ar-card-details-total">
          <div className="ar-card-details-total-title">
            <h4>{translate('step2.details.estimatedTotal')}</h4>
            <div className="ar-card-details-total-amount">
              <p>USD</p>
              <strong>{this.calculateTotalEstimated(rate)}</strong>
            </div>
          </div>
          <p className="ar-card-details-total-small-letter">{translate('step2.details.text1')}</p>
          <p className="ar-card-details-total-small-letter">{translate('step2.details.text2')}</p>
          <p className="ar-card-details-total-small-letter">{translate('step2.details.text3')}</p>
          <div className="custom-control custom-checkbox">
            <input
              className="custom-control-input"
              id="customCheck1"
              type="checkbox"
              name="conditionsAndTerms"
              checked={this.state.conditionsAndTerms}
              onChange={this.handleCheckbox}
            />
            <label className="custom-control-label ar-card-details-total-small-letter" htmlFor="customCheck1">
              {translate('step2.details.agree')}
            </label>
          </div>
          <div className="ar-button-confirm-container">
            <Button
              className="btn-icon ar-round-button ar-button-confirm"
              color="red-0"
              type="button"
              disabled={!this.state.conditionsAndTerms}
              onClick={this.handleOnClick}
            >
              {translate('step2.details.confirm')}
              <i className="ar-icon-chevron-right" />
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

Details.propTypes = {
  dispatch: PropTypes.func,
  changePlan: PropTypes.func,
  confirmReservation: PropTypes.func,
  createReservationSuccessfully: PropTypes.func,
  validatePromotion: PropTypes.func,
  setErrors: PropTypes.func,
  showLoader: PropTypes.func,
  clearValidateIdError: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step2Reducer;
};

export default connect(mapStateToProps)(Details);
