import React from 'react';
import {
  Button,
  Card,
  Container,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap';
import * as classnames from 'classnames';
import CountryDropdown from '../../Molecules/dropdowns/CountryDropdown';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CardCvcElement, CardExpiryElement, CardNumberElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { isServer } from '../../../../utils/helpers/isError';
import NotificationAlert from 'react-notification-alert';
import { pages, redirectTo } from '../../../../utils/helpers/redirectTo';

class CreditCardPaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countrySelected: 0,
      cardNumber: '',
      securityCode: '',
      expirationDate: '',
      postalCode: '',
      cardNumberFocus: false,
      securityCodeFocus: false,
      expirationDateFocus: false,
      postalCodeFocus: false,
      error: {},
    };
    this.dispatch = this.props.dispatch;
  }

  handleOnSelect = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: { ...this.state.error, [event.target.name]: false },
    });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: { ...this.state.error, [event.target.name]: false },
    });
  };

  handleOnClick = async () => {
    const cardNumberElement = this.props.elements.getElement(CardNumberElement);
    let error = false;
    if (this.state.countrySelected === 0 || this.state.postalCode === '') {
      const body = {};
      body.postalCode = this.state.postalCode === '';
      body.countrySelected = this.state.countrySelected === 0;
      this.setState({ error: body });
      error = true;
    }

    const payload = await this.props.stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement,
      billing_details: {
        // Include any additional collected billing details.
        address: {
          city: null,
          country: null, //this.state.countrySelected, me pide codigo nestilo AR, US, EU
          line1: null,
          line2: null,
          postal_code: this.state.postalCode,
          state: null,
        },
        email: null,
        name: null,
        phone: null,
      },
    });

    if (!payload.error && !error) {
      const body = {
        payment_method_id: payload.paymentMethod.id,
        passenger_lastname: this.props.reservation.passenger_lastname,
        reservation: this.props.reservation.code,
      };
      this.dispatch(this.props.payReservation(body));
    } else {
      this.notify('autorenta');
    }
  };

  makeStyle = () => {
    if (!isServer()) {
      if (window.matchMedia('(min-width: 1751px)').matches) {
        return {
          base: {
            fontSize: '1rem',
            color: '#093061',
            letterSpacing: '0.02em',
            textAlign: 'center',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#32325d',
            border: 'solid !important',
          },
        };
      } else {
        return {
          base: {
            fontSize: '.9rem',
            color: '#093061',
            letterSpacing: '0.02em',
            textAlign: 'center',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#32325d',
          },
        };
      }
    }
  };

  notify = (type) => {
    let options = {
      place: 'tc',
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
            {' '}
            {this.props.translate('common.error.attention')}
          </span>
          <span data-notify="message">Todos los campos son requeridos</span>
        </div>
      ),
      type: type,
      icon: 'ni ni-bell-55',
      autoDismiss: 10,
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  handleCardNumber = (e) => {
    e.error
      ? this.setState({ error: { ...this.state.error, cardNumber: true } })
      : this.setState({ error: { ...this.state.error, cardNumber: false } });
  };

  handleSecurityCode = (e) => {
    e.error
      ? this.setState({ error: { ...this.state.error, securityCode: true } })
      : this.setState({ error: { ...this.state.error, securityCode: false } });
  };

  handleExpirationDate = (e) => {
    e.error
      ? this.setState({ error: { ...this.state.error, expirationDate: true } })
      : this.setState({ error: { ...this.state.error, expirationDate: false } });
  };

  render() {
    const error = this.state.error;
    const style = this.makeStyle();
    const { translate } = this.props;
    if (this.props.elements) {
      if (this.props.reservation.organization) {
        return (
          <Card className="ar-payment-options-card ar-red-border shadow-none fade-in">
            <div className="rna-wrapper">
              <NotificationAlert ref="notificationAlert" />
            </div>
            <div className="ar-payment-option-card-header">
              <i className="ar-icon-online-payment ar-red-text" />
              <h5 className="ar-red-text">{translate('step3.agencyOrOrganizationPayment.titleReservation1')}</h5>
              <h6>{translate('step3.agencyOrOrganizationPayment.titleReservation2')}</h6>
            </div>
            <div className="ar-payment-option-card-body bg-ar-white-0 p-0 mt-0 mb-0 fade-in">
              <div className="ar-payment-form-credit-card-2">
                <FormGroup
                  className={classnames(
                    {
                      focused: this.state.cardNumberFocus,
                    },
                    'ar-card-form-input-container w-100',
                  )}
                >
                  <CardNumberElement
                    className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 pr-3 ar-card-form-input w-100"
                    name="cardNumber"
                    onFocus={() => this.setState({ cardNumberFocus: true })}
                    onBlur={() => this.setState({ cardNumberFocus: false })}
                    options={{
                      placeholder: translate('step3.payment.creditCardPayment.cardNumber'),
                      style,
                      showIcon: true,
                    }}
                  />
                </FormGroup>
                <Row className="m-0">
                  <FormGroup
                    className={classnames(
                      {
                        focused: this.state.securityCodeFocus,
                      },
                      'ar-payment-security-code',
                    )}
                  >
                    <CardCvcElement
                      className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 pr-2  ar-card-form-input w-100"
                      name="securityCode"
                      onFocus={() => this.setState({ securityCodeFocus: true })}
                      onBlur={() => this.setState({ securityCodeFocus: false })}
                      options={{
                        placeholder: translate('step3.payment.creditCardPayment.cvc'),
                        style,
                      }}
                    />
                  </FormGroup>
                  <FormGroup
                    className={classnames(
                      {
                        focused: this.state.expirationDateFocus,
                      },
                      'ar-payment-expiration-date',
                    )}
                  >
                    <CardExpiryElement
                      name="expirationDate"
                      className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 px-3 ar-card-form-input w-100 "
                      onFocus={() => this.setState({ expirationDateFocus: true })}
                      onBlur={() => this.setState({ expirationDateFocus: false })}
                      options={{
                        placeholder: translate('step3.payment.creditCardPayment.expirationDate'),
                        style,
                      }}
                    />
                  </FormGroup>
                </Row>
                <Row className="m-0">
                  <FormGroup
                    className={classnames(
                      {
                        focused: this.state.countrySelected,
                      },
                      'ar-select-country-container',
                    )}
                  >
                    <CountryDropdown
                      items={this.props.countries}
                      title={translate('step3.payment.creditCardPayment.country')}
                      color={'white-0'}
                      name={'countrySelected'}
                      classes={'ar-select-country'}
                      handleOnSelect={this.handleOnSelect}
                      error={error}
                    />
                  </FormGroup>
                  <FormGroup
                    className={classnames(
                      {
                        focused: this.state.postalCodeFocus,
                      },
                      'ar-payment-postal-code',
                    )}
                  >
                    <InputGroup
                      className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                        error.postalCode ? ' ar-error-border' : null
                      }`}
                    >
                      <Input
                        name="postalCode"
                        onChange={this.handleOnChange}
                        className=" ar-round-input ar-card-form-input"
                        placeholder={translate('step3.payment.creditCardPayment.postalCode')}
                        value={this.state.postalCode}
                        type="text"
                        autoComplete="off"
                        onFocus={() => this.setState({ postalCodeFocus: true })}
                        onBlur={() => this.setState({ postalCodeFocus: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                </Row>
              </div>
            </div>
            <div className="ar-payment-option-card-footer">
              <div className="ar-payment-next-back-2">
                <Button
                  className="btn-icon ar-round-button ar-payment-button-now box-shadow"
                  color="red-0"
                  type="button"
                  onClick={this.handleOnClick}
                >
                  {translate('step3.payment.creditCardPayment.payNow')}
                </Button>
                <Button
                  className="btn-icon ar-round-button ar-payment-button-back-2 shadow-none"
                  color="white-0"
                  type="button"
                  onClick={() => this.props.handleBackClick()}
                >
                  <i className="ar-icon-return" />
                  {translate('step3.payment.creditCardPayment.back')}
                </Button>
              </div>
            </div>
          </Card>
        );
      } else {
        return (
          <div className="ar-payment-right fade-in">
            <div className="rna-wrapper">
              <NotificationAlert ref="notificationAlert" />
            </div>
            <div className="ar-payment-form-credit-card">
              <Row className="ar-payment-form-top">
                <FormGroup
                  className={classnames(
                    {
                      focused: this.state.cardNumberFocus,
                    },
                    'ar-card-form-input-container ',
                  )}
                >
                  <CardNumberElement
                    className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 pr-3 ar-card-form-input w-100"
                    name="cardNumber"
                    onFocus={() => this.setState({ cardNumberFocus: true })}
                    onBlur={() => this.setState({ cardNumberFocus: false })}
                    options={{
                      placeholder: translate('step3.payment.creditCardPayment.cardNumber'),
                      style,
                      showIcon: true,
                    }}
                  />
                </FormGroup>
                <FormGroup
                  className={classnames(
                    {
                      focused: this.state.countrySelected,
                    },
                    'ar-select-country-container',
                  )}
                >
                  <CountryDropdown
                    items={this.props.countries}
                    title={translate('step3.payment.creditCardPayment.country')}
                    color={'white-0'}
                    name={'countrySelected'}
                    classes={'ar-select-country'}
                    handleOnSelect={this.handleOnSelect}
                    error={error}
                  />
                </FormGroup>
              </Row>
              <div className="ar-payment-form-bottom">
                <FormGroup
                  className={classnames(
                    {
                      focused: this.state.securityCodeFocus,
                    },
                    'ar-payment-security-code',
                  )}
                >
                  <CardCvcElement
                    className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 pr-2  ar-card-form-input w-100"
                    name="securityCode"
                    onFocus={() => this.setState({ securityCodeFocus: true })}
                    onBlur={() => this.setState({ securityCodeFocus: false })}
                    options={{
                      placeholder: translate('step3.payment.creditCardPayment.cvc'),
                      style,
                    }}
                  />
                </FormGroup>
                <FormGroup
                  className={classnames(
                    {
                      focused: this.state.expirationDateFocus,
                    },
                    'ar-payment-expiration-date',
                  )}
                >
                  <CardExpiryElement
                    name="expirationDate"
                    className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 px-3  ar-card-form-input w-100 "
                    onFocus={() => this.setState({ expirationDateFocus: true })}
                    onBlur={() => this.setState({ expirationDateFocus: false })}
                    options={{
                      placeholder: translate('step3.payment.creditCardPayment.expirationDate'),
                      style,
                    }}
                  />
                </FormGroup>
                <FormGroup
                  className={classnames(
                    {
                      focused: this.state.postalCodeFocus,
                    },
                    'ar-payment-postal-code',
                  )}
                >
                  <InputGroup
                    className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                      error.postalCode ? ' ar-error-border' : null
                    }`}
                  >
                    <Input
                      name="postalCode"
                      onChange={this.handleOnChange}
                      className=" ar-round-input ar-card-form-input"
                      placeholder={translate('step3.payment.creditCardPayment.postalCode')}
                      value={this.state.postalCode}
                      type="text"
                      autoComplete="off"
                      onFocus={() => this.setState({ postalCodeFocus: true })}
                      onBlur={() => this.setState({ postalCodeFocus: false })}
                    />
                  </InputGroup>
                </FormGroup>
              </div>
            </div>
            <div className="ar-payment-next-back">
              <Button
                className="btn-icon ar-round-button ar-payment-button-now box-shadow w-100 fade-in"
                color="red-0"
                type="button"
                onClick={this.handleOnClick}
              >
                {translate('step3.payment.creditCardPayment.payNow')}
                <i className="ar-icon-chevron-right" />
              </Button>
              <Button
                className="btn-icon ar-round-button ar-payment-button-back-2 shadow-none fade-in"
                color="white-0"
                type="button"
                onClick={() => this.props.handleBackClick()}
              >
                <i className="ar-icon-return" />
                {translate('step3.payment.creditCardPayment.back')}
              </Button>
            </div>
          </div>
        );
      }
    } else {
      return null;
    }
  }
}

CreditCardPaymentForm.propTypes = {
  dispatch: PropTypes.func,
  handleBackClick: PropTypes.func,
  pay: PropTypes.func,
};

const CreditCardPayment = (props) => {
  return (
    <ElementsConsumer>
      {({ elements, stripe }) => <CreditCardPaymentForm elements={elements} stripe={stripe} {...props} />}
    </ElementsConsumer>
  );
};

const mapStateToProps = (state) => {
  return state.step3Reducer;
};

export default connect(mapStateToProps)(CreditCardPayment);
