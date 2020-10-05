import React from 'react';
import { Button, Container, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
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
      countrySelected: '',
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
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnClick = async () => {
    const cardNumberElement = this.props.elements.getElement(CardNumberElement);

    if (this.state.countrySelected === 0 || this.state.postalCode === '') {
      this.notify('autorenta');
      return;
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

    if (!payload.error) {
      const body = {
        payment_method_id: payload.paymentMethod.id,
        passenger_lastname: this.props.car.passenger_last_name,
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
            color: '#9e2146',
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
            color: '#9e2146',
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
            ¡Atención!
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

  render() {
    const error = this.state.error;
    const style = this.makeStyle();
    if (this.props.elements) {
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
                <InputGroup
                  className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 pl-2 pr-3 ${
                    error.cardNumber ? ' ar-error-border' : null
                  }`}
                >
                  <CardNumberElement
                    className="ar-round-input-left ar-card-form-input w-100"
                    name="cardNumber"
                    onChange={(e) => console.log(e)}
                    onFocus={() => this.setState({ cardNumberFocus: true })}
                    onBlur={() => this.setState({ cardNumberFocus: false })}
                    options={{
                      placeholder: 'Número de la tarjeta',
                      style,
                      showIcon: true,
                    }}
                  />
                </InputGroup>
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
                  title={'País'}
                  color={'white-0'}
                  name={'countrySelected'}
                  classes={'ar-select-country'}
                  handleOnSelect={this.handleOnSelect}
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
                <InputGroup
                  className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 pr-2 ${
                    error.securityCode ? ' ar-error-border' : null
                  }`}
                >
                  <CardCvcElement
                    className="ar-round-input-left ar-card-form-input w-100"
                    name="securityCode"
                    onFocus={() => this.setState({ securityCodeFocus: true })}
                    onBlur={() => this.setState({ securityCodeFocus: false })}
                    options={{
                      placeholder: 'CVC (código de seguridad)',
                      style,
                    }}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup
                className={classnames(
                  {
                    focused: this.state.expirationDateFocus,
                  },
                  'ar-payment-expiration-date',
                )}
              >
                <InputGroup
                  className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 px-3 ${
                    error.expirationDate ? ' ar-error-border' : null
                  }`}
                >
                  <CardExpiryElement
                    name="expirationDate"
                    className="ar-round-input-left ar-card-form-input w-100 "
                    onFocus={() => this.setState({ expirationDateFocus: true })}
                    onBlur={() => this.setState({ expirationDateFocus: false })}
                    options={{
                      placeholder: 'MM/AA',
                      style,
                    }}
                  />
                </InputGroup>
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
                    placeholder="Códigal postal"
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
              Pagar esta reserva ahora
              <i className="ar-icon-chevron-right" />
            </Button>
            <Button
              className="btn-icon ar-round-button ar-payment-button-back-2 shadow-none fade-in"
              color="white-0"
              type="button"
              onClick={() => this.props.handleBackClick()}
            >
              <i className="ar-icon-return" />
              Volver
            </Button>
          </div>
        </div>
      );
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
