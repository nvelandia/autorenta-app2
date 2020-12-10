import React from 'react';
import { Button, Card, FormGroup, Row, Input, InputGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as classnames from 'classnames';
import CreditCardPayment from './CreditCardPayment';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51Gr3HzJLMLJITI9DZyz3oQkB9pLy0N42fdYnRwA7agn8OEIHb0kfLnsjQvGfHiKSaE3YWu7nNf2UfZ8fg2nkjsBv009JbIH8IV',
);

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentWay: 'creditCard',
      paymentWaySelected: false,
      payed: false,
      error: {},
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {
    this.dispatch(this.props.loadCountries());
  };

  handleOnChangePaymentWay = (value) => {
    this.setState({ paymentWay: value });
  };

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleNextClick = () => {
    this.setState({ paymentWaySelected: true });
  };

  handleBackClick = () => {
    this.setState({ paymentWaySelected: false });
  };

  render() {
    const { translate, isMobile, isTablet, isSmallTablet } = this.props;
    const error = this.state.error;
    if (!isMobile && !isSmallTablet) {
      return (
        <Card className="card-frame ar-payment">
          {!this.props.showPayOk && this.props.reservation.prepaid_allowed ? (
            <Card className="card-frame ar-payment-card-top shadow-none">
              <div className="ar-payment-left">
                <h6 className="ar-payment-left-title">
                  <i className="ar-icon-online-payment" />
                  {translate('step3.payment.titleReservation')}
                </h6>
                <h6 className="ar-payment-left-text">
                  {translate('step3.payment.subtitleReservation1')}
                  <strong>USD&nbsp;50.00</strong>
                  {translate('step3.payment.subtitleReservation2')}
                </h6>
              </div>
              {!this.state.paymentWaySelected ? (
                <div className="ar-payment-right">
                  <Card className="card-frame ar-payment-options-card">
                    <div className="ar-payment-option-text">
                      <h6>{translate('step3.payment.choose')}</h6>
                    </div>
                    <div className="ar-payment-radios-button-container">
                      <div className="custom-control custom-radio ">
                        <input
                          className="custom-control-input"
                          name={'paymentWay'}
                          id={'1'}
                          type="radio"
                          checked={this.state.paymentWay === 'creditCard'}
                          onChange={() => this.handleOnChangePaymentWay('creditCard')}
                        />
                        <label className="custom-control-label ar-payment-radio-button" htmlFor="1">
                          {translate('step3.payment.creditCard')}
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input
                          className="custom-control-input"
                          name={'paymentWay'}
                          id={'2'}
                          type="radio"
                          disabled={true}
                          checked={this.state.paymentWay === 'PayPal'}
                          onChange={() => this.handleOnChangePaymentWay('PayPal')}
                        />
                        <label className="custom-control-label ar-payment-radio-button" htmlFor="2">
                          PayPal
                        </label>
                      </div>
                    </div>
                  </Card>
                  <div className={`${isTablet ? 'w-100' : 'm-auto'} d-flex align-items-center justify-content-center`}>
                    <Button
                      className="btn-icon ar-round-button ar-payment-button-next box-shadow"
                      color="red-0"
                      type="button"
                      onClick={() => this.handleNextClick()}
                    >
                      {translate('step3.payment.next')}
                      {!isTablet ? <i className="ar-icon-chevron-right" /> : null}
                    </Button>
                  </div>
                </div>
              ) : null}
              {this.state.paymentWaySelected && this.state.paymentWay === 'creditCard' ? (
                <Elements stripe={stripePromise}>
                  <CreditCardPayment
                    handleBackClick={this.handleBackClick}
                    payReservation={this.props.payReservation}
                    translate={translate}
                    isMobile={isMobile}
                    isTablet={isTablet}
                    isSmallTablet={isSmallTablet}
                  />
                </Elements>
              ) : null}
              {this.state.paymentWaySelected && this.state.paymentWay === 'PayPal' ? (
                <div className="ar-payment-right fade-in">
                  <div className="ar-payment-form-paypal">
                    <div className="ar-payment-paypal-img-container">
                      <img src="/svg/step3/paypal-logo-white.svg" alt="Paypal" />
                      <h6>{translate('step3.payment.account')}</h6>
                    </div>
                    <div className="ar-payment-form-paypal">
                      <Row className="ar-payment-form-top">
                        <FormGroup
                          className={classnames(
                            {
                              focused: this.state.emailFocus,
                            },
                            'ar-payment-paypal-inputs',
                          )}
                        >
                          <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                            <Input
                              name="email"
                              onChange={this.handleOnChange}
                              className=" ar-round-input ar-card-form-input"
                              placeholder={translate('step3.payment.email')}
                              value={this.state.email}
                              type="text"
                              autoComplete="off"
                              onFocus={() => this.setState({ emailFocus: true })}
                              onBlur={() => this.setState({ emailFocus: false })}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Row>
                      <div className="ar-payment-form-bottom">
                        <FormGroup
                          className={classnames(
                            {
                              focused: this.state.passwordFocus,
                            },
                            'ar-payment-paypal-inputs',
                          )}
                        >
                          <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                            <Input
                              name="password"
                              onChange={this.handleOnChange}
                              className=" ar-round-input ar-card-form-input"
                              placeholder={translate('step3.payment.password')}
                              value={this.state.password}
                              type="password"
                              autoComplete="off"
                              onFocus={() => this.setState({ passwordFocus: true })}
                              onBlur={() => this.setState({ passwordFocus: false })}
                            />
                          </InputGroup>
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                  <div className="ar-payment-next-back-paypal">
                    <Button
                      className="btn-icon ar-round-button ar-payment-button-now box-shadow"
                      color="red-0"
                      type="button"
                    >
                      {translate('step3.payment.login')}
                      <i className="ar-icon-chevron-right" />
                    </Button>
                    <Button
                      className="btn-icon ar-round-button ar-payment-button-back-2 shadow-none"
                      color="white-0"
                      type="button"
                      onClick={() => this.handleBackClick()}
                    >
                      <i className="ar-icon-return" />
                      {translate('step3.payment.back')}
                    </Button>
                  </div>
                </div>
              ) : null}
            </Card>
          ) : this.props.reservation.prepaid_allowed ? (
            <Card className="card-frame ar-payment-card-top-payed shadow-none fade-in">
              <i className="ar-icon-plan-selected" />
              <h1>{translate('step3.payment.payOk')}</h1>
            </Card>
          ) : null}
          <Card className="card-frame ar-payment-card-bottom shadow-none">
            <div className="ar-payment-left">
              <h6 className="ar-payment-left-title">
                <i className=" ar-icon-pay-on-destination " />
                {translate('step3.payment.text1')}
              </h6>
              <h6 className="ar-payment-left-text">{translate('step3.payment.text2')}</h6>
            </div>
            <div className="ar-payment-right">
              <Card className="card-frame ar-payment-options-card">
                <div className="ar-payment-option-text">
                  <h6>{translate('step3.payment.text3')}</h6>
                </div>
              </Card>
              <div className="ar-payment-number-reserve">
                <h5>{translate('step3.payment.reservationNumber')}</h5>
                <h4>
                  {this.props.reservation.company_code[this.props.reservation.company_code.length - 1] === '-'
                    ? this.props.reservation.company_code.slice(0, this.props.reservation.company_code.length - 1)
                    : this.props.reservation.company_code}
                </h4>
              </div>
            </div>
          </Card>
        </Card>
      );
    } else {
      return (
        <div className=" ar-payment-2">
          <div className="ar-payment-options-container">
            {this.props.reservation.prepaid_allowed ? (
              <>
                {!this.props.showPayOk ? (
                  !this.state.paymentWaySelected ? (
                    <Card className="ar-payment-options-card ar-red-border shadow-none">
                      <div className="ar-payment-option-card-header">
                        <div className="d-flex align-items-start">
                          <i className="ar-icon-online-payment ar-red-text" />
                          <h5 className="ar-red-text">
                            {translate('step3.agencyOrOrganizationPayment.titleReservation1')}
                          </h5>
                        </div>
                        <h6 className="ar-payment-left-text">
                          {translate('step3.payment.subtitleReservation1')}
                          <strong>USD&nbsp;50.00</strong>
                          {translate('step3.payment.subtitleReservation2')}
                        </h6>
                      </div>
                      <div className="ar-payment-option-card-body">
                        <h6 className="ar-payment-radios-button-title">
                          {translate('step3.agencyOrOrganizationPayment.choose')}
                        </h6>
                        <div className="ar-payment-radios-button-container">
                          <div className="custom-control custom-radio ">
                            <input
                              className="custom-control-input"
                              name={'paymentWay'}
                              id={'1'}
                              type="radio"
                              checked={this.state.paymentWay === 'creditCard'}
                              onClick={() => this.handleOnChangePaymentWay('creditCard')}
                            />
                            <label className="custom-control-label ar-payment-radio-button" htmlFor="1">
                              {translate('step3.payment.creditCard')}
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              className="custom-control-input"
                              name={'paymentWay'}
                              id={'2'}
                              type="radio"
                              disabled={true}
                              checked={this.state.paymentWay === 'PayPal'}
                              onClick={() => this.handleOnChangePaymentWay('PayPal')}
                            />
                            <label className="custom-control-label ar-payment-radio-button" htmlFor="2">
                              PayPal
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="ar-payment-option-card-footer">
                        <Button
                          className="btn-icon ar-round-button ar-payment-next-button box-shadow"
                          color="red-0"
                          type="button"
                          onClick={() => this.handleNextClick()}
                        >
                          {translate('step3.agencyOrOrganizationPayment.next').toUpperCase()}
                        </Button>
                      </div>
                    </Card>
                  ) : this.state.paymentWaySelected && this.state.paymentWay === 'creditCard' ? (
                    <Elements stripe={stripePromise}>
                      <CreditCardPayment
                        handleBackClick={this.handleBackClick}
                        payReservation={this.props.payReservation}
                        translate={translate}
                        isMobile={isMobile}
                        isTablet={isTablet}
                        isSmallTablet={isSmallTablet}
                      />
                    </Elements>
                  ) : (
                    <Card className="ar-payment-options-card ar-red-border shadow-none">
                      <div className="ar-payment-option-card-header">
                        <div className="d-flex align-items-start">
                          <i className="ar-icon-online-payment ar-red-text" />
                          <h5 className="ar-red-text">
                            {translate('step3.agencyOrOrganizationPayment.titleReservation1')}
                          </h5>
                        </div>
                        <h6 className="ar-payment-left-text">
                          {translate('step3.payment.subtitleReservation1')}
                          <strong>USD&nbsp;50.00</strong>
                          {translate('step3.payment.subtitleReservation2')}
                        </h6>
                      </div>
                      <div className="ar-payment-option-card-body bg-ar-white-0 p-0 mt-0 mb-0">
                        <div className="ar-payment-form-paypal-2">
                          <div className="ar-payment-paypal-img-container">
                            <img src="/svg/step3/paypal-logo-white.svg" alt="PayPal" />
                            <h6>{translate('step3.payment.account')}</h6>
                          </div>
                          <FormGroup
                            className={classnames(
                              {
                                focused: this.state.emailFocus,
                              },
                              'ar-payment-paypal-inputs',
                            )}
                          >
                            <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                              <Input
                                name="email"
                                onChange={this.handleOnChange}
                                className=" ar-round-input ar-card-form-input"
                                placeholder={translate('step3.payment.email')}
                                value={this.state.email}
                                type="text"
                                autoComplete="off"
                                onFocus={() => this.setState({ emailFocus: true })}
                                onBlur={() => this.setState({ emailFocus: false })}
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup
                            className={classnames(
                              {
                                focused: this.state.passwordFocus,
                              },
                              'ar-payment-paypal-inputs',
                            )}
                          >
                            <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                              <Input
                                name="password"
                                onChange={this.handleOnChange}
                                className=" ar-round-input ar-card-form-input"
                                placeholder={translate('step3.payment.password')}
                                value={this.state.password}
                                type="password"
                                autoComplete="off"
                                onFocus={() => this.setState({ passwordFocus: true })}
                                onBlur={() => this.setState({ passwordFocus: false })}
                              />
                            </InputGroup>
                          </FormGroup>
                        </div>
                      </div>
                      <div className="ar-payment-option-card-footer">
                        <div className="ar-payment-next-back-2">
                          <Button
                            className="btn-icon ar-round-button ar-payment-button-now box-shadow"
                            color="red-0"
                            type="button"
                          >
                            {translate('step3.payment.login')}
                            <i className="ar-icon-chevron-right" />
                          </Button>
                          <Button
                            className="btn-icon ar-round-button ar-payment-button-back-2 shadow-none"
                            color="white-0"
                            type="button"
                            onClick={() => this.handleBackClick()}
                          >
                            <i className="ar-icon-return" />
                            {translate('step3.payment.back')}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  )
                ) : (
                  <Card className="card-frame ar-payment-card-payed-2 shadow-none fade-in">
                    <i className="ar-icon-plan-selected" />
                    <h1>{translate('step3.payment.payOk')}</h1>
                  </Card>
                )}
                <Card className="ar-payment-options-card shadow-none">
                  <div className="ar-payment-option-card-header">
                    <div className="d-flex align-items-start">
                      <i className="ar-icon-pay-on-destination ar-light-blue-3-text" />
                      <h5 className="ar-gray-2-text">{translate('step3.payment.text1')}</h5>
                    </div>
                    <h6>{translate('step3.payment.text2')}</h6>
                  </div>
                  <div className="ar-payment-option-card-body">
                    <h6 className="ar-payment-text-data">{translate('step3.payment.text3')}</h6>
                  </div>
                  <div className="ar-payment-option-card-footer">
                    <div className="ar-payment-footer-text">
                      <h6>{translate('step3.payment.reservationNumber')}</h6>
                      <h5>{this.props.reservation.company_code}</h5>
                    </div>
                  </div>
                </Card>
              </>
            ) : (
              <Card className="card-frame ar-payment-card-bottom shadow-none">
                <div className="ar-payment-left">
                  <div className="ar-payment-left-title">
                    <i className=" ar-icon-pay-on-destination " />
                    <h6>{translate('step3.payment.text1')}</h6>
                  </div>
                  <h6 className="ar-payment-left-text">{translate('step3.payment.text2')}</h6>
                </div>
                <div className="ar-payment-right">
                  <Card className="card-frame ar-payment-options-card">
                    <div className="ar-payment-option-text">
                      <h6>{translate('step3.payment.text3')}</h6>
                    </div>
                  </Card>
                  <div className="ar-payment-number-reserve">
                    <h5>{translate('step3.payment.reservationNumber')}</h5>
                    <h4>
                      {this.props.reservation.company_code[this.props.reservation.company_code.length - 1] === '-'
                        ? this.props.reservation.company_code.slice(0, this.props.reservation.company_code.length - 1)
                        : this.props.reservation.company_code}
                    </h4>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      );
    }
  }
}

Payment.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
  loadCountries: PropTypes.func,
  payReservation: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step3Reducer;
};

export default connect(mapStateToProps)(Payment);
