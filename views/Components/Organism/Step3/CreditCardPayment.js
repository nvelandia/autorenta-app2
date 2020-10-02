import React from 'react';
import { Button, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import * as classnames from 'classnames';
import CountryDropdown from '../../Molecules/dropdowns/CountryDropdown';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CardCvcElement, CardExpiryElement, CardNumberElement, ElementsConsumer } from '@stripe/react-stripe-js';

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
    };
  }

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.props);
    const style = {
      base: {
        fontSize: '.9rem',
        color: '#093061',
        letterSpacing: '0.02em',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    };
    return (
      <div className="ar-payment-right fade-in">
        <div className="ar-payment-form-credit-card">
          <Row className="ar-payment-form-top">
            <FormGroup
              className={classnames(
                {
                  focused: this.state.cardNumberFocus,
                },
                'ar-card-form-input-container',
              )}
            >
              <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 pr-3">
                {/*<Input*/}
                {/*  name="cardNumber"*/}
                {/*  onChange={this.handleOnChange}*/}
                {/*  className=" ar-round-input-left ar-card-form-input"*/}
                {/*  placeholder="Número de la tarjeta"*/}
                {/*  value={this.state.cardNumber}*/}
                {/*  type="text"*/}
                {/*  autoComplete="off"*/}
                {/*  onFocus={() => this.setState({ cardNumberFocus: true })}*/}
                {/*  onBlur={() => this.setState({ cardNumberFocus: false })}*/}
                {/*/>*/}

                <CardNumberElement
                  className="ar-round-input-left ar-card-form-input w-100 "
                  name="cardNumber"
                  onChange={(e) => console.log(e)}
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
              <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 pr-2">
                {/*<Input*/}
                {/*  name="securityCode"*/}
                {/*  onChange={this.handleOnChange}*/}
                {/*  className=" ar-round-input ar-card-form-input"*/}
                {/*  placeholder="CVC (código de seguridad)"*/}
                {/*  value={this.state.securityCode}*/}
                {/*  type="text"*/}
                {/*  autoComplete="off"*/}
                {/*  onFocus={() => this.setState({ securityCodeFocus: true })}*/}
                {/*  onBlur={() => this.setState({ securityCodeFocus: false })}*/}
                {/*/>*/}
                <CardCvcElement
                  className="ar-round-input-left ar-card-form-input w-100 "
                  name="securityCode"
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
              <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 pr-2">
                {/*<Input*/}
                {/*  name="expirationDate"*/}
                {/*  onChange={this.handleOnChange}*/}
                {/*  className=" ar-round-input ar-card-form-input"*/}
                {/*  placeholder="MM/AAAA"*/}
                {/*  value={this.state.expirationDate}*/}
                {/*  type="text"*/}
                {/*  autoComplete="off"*/}
                {/*  onFocus={() => this.setState({ expirationDateFocus: true })}*/}
                {/*  onBlur={() => this.setState({ expirationDateFocus: false })}*/}
                {/*/>*/}
                <CardExpiryElement
                  name="expirationDate"
                  className="ar-round-input-left ar-card-form-input w-100 "
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
              <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1">
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
            className="btn-icon ar-round-button ar-payment-button-now box-shadow w-100"
            color="red-0"
            type="button"
          >
            Pagar esta reserva ahora
            <i className="ar-icon-chevron-right" />
          </Button>
          <Button
            className="btn-icon ar-round-button ar-payment-button-back-2 shadow-none"
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
  }
}

CreditCardPaymentForm.propTypes = {
  dispatch: PropTypes.func,
  handleBackClick: PropTypes.func,
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
