import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Card, CardBody, Col, FormGroup, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
import classnames from 'classnames';
import ClientTypeDropdown from '../../Molecules/dropdowns/ClientTypeDropdown';
import NotificationAlert from 'react-notification-alert';
import SuccessNotification from '../../Molecules/Notifications/SuccessNotification';

class AgencyOrCorporation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFocus: false,
      surnameFocus: false,
      phoneFocus: false,
      airline_flightFocus: false,
      promotionCodeFocus: false,
      couponNumberFocus: false,
      name: '',
      surname: '',
      phone: '',
      airline_iata: '',
      airline_flight: '',
      promotionCode: '',
      couponNumber: '',
      error: {
        name: false,
        surname: false,
        airline_iata: false,
        airline_flight: false,
      },
    };
    this.dispatch = this.props.dispatch;
  }

  handleOnSelect = (value) => {
    this.setState({ airline_iata: value, error: { ...this.state.error, airline_iata: false } });
    this.dispatch(this.props.updateFormData({ airline_iata: value }));
    if (value === '' && this.state.airline_flight === '') {
      this.setState({ error: { ...this.state.error, airline_flight: false } });
    }
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: { ...this.state.error, [event.target.name]: false },
    });
    if (event.target.name === 'airline_flight' && event.target.value === '' && this.state.airline_iata === '') {
      this.setState({ error: { ...this.state.error, airline_iata: false } });
    }

    this.dispatch(this.props.updateFormData({ [event.target.name]: event.target.value }));
  };

  handleOnBlur = (event) => {
    this.setState({ [event.target.name + 'Focus']: false });
  };

  handleValidateClick = (type) => {
    const body = {
      ...this.props.searchParams,
      vendor: this.props.carSelected.company.code,
      sipp: this.props.carSelected.typeAlias,
      rate: this.props.carSelected.rates[this.props.rateSelected].rate_code,
    };
    if (type === 'couponNumber') {
      body.coupon = this.state.couponNumber;
    } else {
      body.discount_code = this.state.promotionCode;
    }
    this.dispatch(this.props.validatePromotion(body));
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

  prepareErrors = (error) => {
    const errors = {};
    if (error.name && !this.state.error.name) {
      errors.name = true;
    }
    if (error.surname && !this.state.error.surname) {
      errors.surname = true;
    }
    if (error.airline_iata && !this.state.error.airline_iata) {
      errors.airline_iata = true;
    }
    if (error.airline_flight && !this.state.error.airline_flight) {
      errors.airline_flight = true;
    }
    if (errors.name || errors.surname || errors.airline_iata || errors.airline_flight) {
      this.setState({ error: { ...this.state.error, ...errors } });
    }
  };

  render() {
    const { translate, isMobile, isTablet, isSmallTablet } = this.props;
    const error = this.props.error;
    if (error.validationPromotion) {
      this.notify('autorenta', this.props.translate('common.error.couponORCodeInvalid'));
      this.dispatch(this.props.clearValidateIdError());
    }
    if (this.props.showNotification) {
      this.notify('success', this.props.translate('common.validationMessages.codePromotionalSuccess'));
      this.setState({ showNotification: false });
    }
    let airlines = [{ name: translate('step2.agencyOrCorporation.flyCompany'), iata: '' }];
    airlines = airlines.concat(this.props.airlines);
    this.prepareErrors(error);

    if (!isMobile && !isSmallTablet) {
      return (
        <Card className="card-frame ar-passenger-card fade-in">
          <div className="rna-wrapper">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <SuccessNotification translate={translate} />
          <CardBody className="p-0">
            <div className="ar-icon-customer-type ar-title-with-icon">
              {translate('step2.agencyOrCorporation.title')}
            </div>
            <div className="ar-passenger-form-container">
              <div className="ar-subtitle">{translate('step2.agencyOrCorporation.subtitle')}</div>
              <Row className="ar-passenger-form-row">
                <Col className="pl-0" xl={4} lg={4}>
                  <FormGroup
                    className={
                      'm-0 ' +
                      classnames({
                        focused: this.state.nameFocus,
                      })
                    }
                  >
                    <InputGroup
                      className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                        this.state.error.name ? ' ar-error-border' : null
                      }`}
                    >
                      <Input
                        className="ar-round-input ar-input-passenger-data"
                        placeholder={translate('step2.agencyOrCorporation.name')}
                        type="text"
                        autoComplete="off"
                        name="name"
                        onFocus={() => this.setState({ nameFocus: true })}
                        onBlur={this.handleOnBlur}
                        onChange={this.handleOnChange}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col xl={4} lg={4}>
                  <FormGroup
                    className={
                      'm-0 ' +
                      classnames({
                        focused: this.state.surnameFocus,
                      })
                    }
                  >
                    <InputGroup
                      className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                        this.state.error.surname ? ' ar-error-border' : null
                      }`}
                    >
                      <Input
                        className="ar-round-input ar-input-passenger-data"
                        placeholder={translate('step2.agencyOrCorporation.surname')}
                        type="text"
                        autoComplete="off"
                        name="surname"
                        required={true}
                        onFocus={() => this.setState({ surnameFocus: true })}
                        onBlur={this.handleOnBlur}
                        onChange={this.handleOnChange}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col className="pr-0" xl={4} lg={4} />
              </Row>
              <Row className="ar-passenger-form-row">
                <Col className="pl-0" xl={4} lg={4}>
                  <FormGroup
                    className={
                      'm-0 ' +
                      classnames({
                        focused: this.state.phoneFocus,
                      })
                    }
                  >
                    <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1 shadow-none">
                      <Input
                        className="ar-round-input ar-input-passenger-data"
                        placeholder={translate('step2.agencyOrCorporation.phone')}
                        type="text"
                        autoComplete="off"
                        name="phone"
                        onFocus={() => this.setState({ phoneFocus: true })}
                        onBlur={this.handleOnBlur}
                        onChange={this.handleOnChange}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col xl={4} lg={4}>
                  <div className="ar-select-fly-agency-container">
                    <ClientTypeDropdown
                      items={airlines}
                      title={translate('step2.agencyOrCorporation.flyCompany')}
                      color={'white-0'}
                      dispatch={this.props.dispatch}
                      classes={`ar-select-button ${this.state.error.airline_iata ? 'ar-error-border' : ''}`}
                      handleOnSelectClientType={this.handleOnSelect}
                      airline={true}
                    />
                  </div>
                </Col>
                <Col className="pr-0" xl={4} lg={4}>
                  <FormGroup
                    className={
                      'm-0 ' +
                      classnames({
                        focused: this.state.airline_flightFocus,
                      })
                    }
                  >
                    <InputGroup
                      className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                        this.state.error.airline_flight ? ' ar-error-border' : null
                      }`}
                    >
                      <Input
                        className="ar-round-input ar-input-passenger-data"
                        placeholder={translate('step2.agencyOrCorporation.flyNumber')}
                        type="text"
                        autoComplete="off"
                        name="airline_flight"
                        onFocus={() => this.setState({ airline_flightFocus: true })}
                        onBlur={this.handleOnBlur}
                        onChange={this.handleOnChange}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <div className="ar-subtitle">{translate('step2.agencyOrCorporation.additionalInformation')}</div>
              <Row className="ar-passenger-form-row">
                <FormGroup
                  className={
                    'ar-validate-input-passenger ' +
                    classnames({
                      focused: this.state.promotionCodeFocus,
                    })
                  }
                >
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder={translate('step2.agencyOrCorporation.promotionalCode')}
                      type="text"
                      autoComplete="off"
                      name="promotionCode"
                      onFocus={() => this.setState({ promotionCodeFocus: true })}
                      onBlur={this.handleOnBlur}
                      onChange={this.handleOnChange}
                    />
                    <InputGroupAddon addonType="append">
                      <Button
                        className=" btn-icon w-100 ar-validate-input-passenger-button"
                        color="red-0"
                        name="promotionCode"
                        onClick={() => this.handleValidateClick('promotionCode')}
                      >
                        <span className="nav-link-inner--text">{translate('step2.clientType.validate')} </span>
                        <i className="ar-icon-chevron-right" />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
                <FormGroup
                  className={
                    'ar-validate-input-passenger ' +
                    classnames({
                      focused: this.state.couponNumberFocus,
                    })
                  }
                >
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder={translate('step2.agencyOrCorporation.coupon')}
                      type="text"
                      autoComplete="off"
                      name="couponNumber"
                      onFocus={() => this.setState({ couponNumberFocus: true })}
                      onBlur={this.handleOnBlur}
                      onChange={this.handleOnChange}
                    />
                    <InputGroupAddon addonType="append">
                      <Button
                        className=" btn-icon w-100 ar-validate-input-passenger-button"
                        color="red-0"
                        onClick={() => this.handleValidateClick('couponNumber')}
                        name="couponNumber"
                      >
                        <span className="nav-link-inner--text">{translate('step2.clientType.validate')} </span>
                        <i className="ar-icon-chevron-right" />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Row>
            </div>
          </CardBody>
        </Card>
      );
    } else {
      return (
        <Card className="card-frame ar-passenger-card">
          <div className="rna-wrapper">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <SuccessNotification translate={translate} />
          <CardBody className="p-0">
            <div className="ar-icon-customer-type ar-title-with-icon">
              {translate('step2.agencyOrCorporation.title')}
            </div>
            <div className="ar-passenger-form-container">
              <div className="ar-subtitle">{translate('step2.agencyOrCorporation.subtitle')}</div>
              <div className="ar-passenger-form-row">
                <FormGroup
                  className={
                    'm-0 w-100 ' +
                    classnames({
                      focused: this.state.nameFocus,
                    })
                  }
                >
                  <InputGroup
                    className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                      this.state.error.name ? ' ar-error-border' : null
                    }`}
                  >
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder={translate('step2.agencyOrCorporation.name')}
                      type="text"
                      autoComplete="off"
                      name="name"
                      required={true}
                      onFocus={() => this.setState({ nameFocus: true })}
                      onBlur={this.handleOnBlur}
                      onChange={this.handleOnChange}
                    />
                  </InputGroup>
                </FormGroup>
              </div>
              <div className="ar-passenger-form-row">
                <FormGroup
                  className={
                    'm-0 w-100 ' +
                    classnames({
                      focused: this.state.surnameFocus,
                    })
                  }
                >
                  <InputGroup
                    className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                      this.state.error.surname ? ' ar-error-border' : null
                    }`}
                  >
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder={translate('step2.agencyOrCorporation.surname')}
                      type="text"
                      autoComplete="off"
                      name="surname"
                      required={true}
                      onFocus={() => this.setState({ surnameFocus: true })}
                      onBlur={this.handleOnBlur}
                      onChange={this.handleOnChange}
                    />
                  </InputGroup>
                </FormGroup>
              </div>
              <div className="ar-passenger-form-row">
                <FormGroup
                  className={
                    'm-0 w-100 ' +
                    classnames({
                      focused: this.state.phoneFocus,
                    })
                  }
                >
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1 shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder={translate('step2.agencyOrCorporation.phone')}
                      type="text"
                      autoComplete="off"
                      name="phone"
                      onFocus={() => this.setState({ phoneFocus: true })}
                      onBlur={this.handleOnBlur}
                      onChange={this.handleOnChange}
                    />
                  </InputGroup>
                </FormGroup>
              </div>
              <div className="ar-passenger-form-row">
                <div className="ar-select-fly-agency-container w-100">
                  <ClientTypeDropdown
                    items={this.props.airlines}
                    title={translate('step2.agencyOrCorporation.flyCompany')}
                    color={'white-0'}
                    dispatch={this.props.dispatch}
                    classes={`ar-select-button w-100 ${this.state.error.airline_iata ? 'ar-error-border' : ''}`}
                    handleOnSelectClientType={this.handleOnSelect}
                    airline={true}
                  />
                </div>
              </div>
              <div className="ar-passenger-form-row">
                <FormGroup
                  className={
                    'm-0 w-100 ' +
                    classnames({
                      focused: this.state.airline_flightFocus,
                    })
                  }
                >
                  <InputGroup
                    className={`input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                      this.state.error.airline_flight ? ' ar-error-border' : null
                    }`}
                  >
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder={translate('step2.agencyOrCorporation.flyNumber')}
                      type="text"
                      autoComplete="off"
                      name="airline_flight"
                      onFocus={() => this.setState({ airline_flightFocus: true })}
                      onBlur={this.handleOnBlur}
                      onChange={this.handleOnChange}
                    />
                  </InputGroup>
                </FormGroup>
              </div>
              <div className="ar-subtitle">{translate('step2.agencyOrCorporation.additionalInformation')}</div>
              <div className="ar-passenger-form-row">
                <FormGroup
                  className={
                    'ar-validate-input-passenger w-100 ' +
                    classnames({
                      focused: this.state.promotionCodeFocus,
                    })
                  }
                >
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder={translate('step2.agencyOrCorporation.promotionalCode')}
                      type="text"
                      autoComplete="off"
                      name="promotionCode"
                      onFocus={() => this.setState({ promotionCodeFocus: true })}
                      onBlur={this.handleOnBlur}
                      onChange={this.handleOnChange}
                    />
                    <InputGroupAddon addonType="append">
                      <Button
                        className=" btn-icon w-100 ar-validate-input-passenger-button"
                        color="red-0"
                        name="promotionCode"
                        onClick={() => this.handleValidateClick('promotionCode')}
                      >
                        <span className="nav-link-inner--text">{translate('step2.clientType.validate')} </span>
                        <i className="ar-icon-chevron-right" />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </div>
              <div className="ar-passenger-form-row">
                <FormGroup
                  className={
                    'ar-validate-input-passenger w-100 ' +
                    classnames({
                      focused: this.state.couponNumberFocus,
                    })
                  }
                >
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder={translate('step2.agencyOrCorporation.coupon')}
                      type="text"
                      autoComplete="off"
                      name="couponNumber"
                      onFocus={() => this.setState({ couponNumberFocus: true })}
                      onBlur={this.handleOnBlur}
                      onChange={this.handleOnChange}
                    />
                    <InputGroupAddon addonType="append">
                      <Button
                        className=" btn-icon w-100 ar-validate-input-passenger-button"
                        color="red-0"
                        onClick={() => this.handleValidateClick('couponNumber')}
                        name="couponNumber"
                      >
                        <span className="nav-link-inner--text">{translate('step2.clientType.validate')} </span>
                        <i className="ar-icon-chevron-right" />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </div>
            </div>
          </CardBody>
        </Card>
      );
    }
  }
}

AgencyOrCorporation.proptypes = {
  dispatch: PropTypes.func,
  updateFormData: PropTypes.func,
  validatePromotion: PropTypes.func,
  clearValidateIdError: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step2Reducer;
};

export default connect(mapStateToProps)(AgencyOrCorporation);
