import React from 'react';
import { connect } from 'react-redux';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import classnames from 'classnames';
import ClientTypeDropdown from '../../Molecules/dropdowns/ClientTypeDropdown';
import PropTypes from 'prop-types';
import NotificationAlert from 'react-notification-alert';

class Passenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFocus: false,
      surnameFocus: false,
      emailFocus: false,
      phoneFocus: false,
      flyNumberFocus: false,
      promotionCodeFocus: false,
      couponNumberFocus: false,
      name: '',
      surname: '',
      email: '',
      phone: '',
      airlineCompany: '',
      flyNumber: '',
      promotionCode: '', //'AWD N299900',
      couponNumber: '', // 'UUWA039',
    };
    this.dispatch = this.props.dispatch;
  }

  handleOnSelect = (value) => {
    this.setState({ airlineCompany: value });
    this.dispatch(this.props.updateFormData({ airlineCompany: value }));
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnBlur = (event) => {
    this.setState({ [event.target.name + 'Focus']: false });
    this.dispatch(this.props.updateFormData({ [event.target.name]: event.target.value }));
  };

  handleValidateClick = (type) => {
    const body = {
      pickup_location: this.props.searchParams.pickup_location,
      pickup_date: this.props.searchParams.pickup_date,
      pickup_time: this.props.searchParams.pickup_time,
      dropoff_location: this.props.searchParams.dropoff_location,
      dropoff_date: this.props.searchParams.dropoff_date,
      dropoff_time: this.props.searchParams.dropoff_time,
      passenger_country_id: this.props.searchParams.passenger_country_id,
      passenger_age: this.props.searchParams.passenger_age,
      vehicle_type: this.props.searchParams.vehicle_type,
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

  notify = (type) => {
    let options = {
      place: 'tc',
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
            {' '}
            ¡Atención!
          </span>
          <span data-notify="message">El número de cupón o no código promocional no es valido</span>
        </div>
      ),
      type: type,
      icon: 'ni ni-bell-55',
      autoDismiss: 10,
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  render() {
    const { translate } = this.props;
    const error = this.props.error;
    if (error.validationPromotion) {
      this.notify('autorenta');
      this.dispatch(this.props.clearValidateIdError());
    }
    return (
      <Card className="card-frame ar-passenger-card">
        <div className="rna-wrapper">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <CardBody className="p-0">
          <div className="ar-icon-customer-type ar-title-with-icon">{translate('step2.agencyOrCorporation.title')}</div>
          <div className="ar-passenger-form-container">
            <div className="ar-subtitle">{translate('step2.agencyOrCorporation.subtitle')}</div>
            <Row className="ar-passenger-form-row">
              <Col className="pl-0">
                <FormGroup
                  className={
                    'm-0 ' +
                    classnames({
                      focused: this.state.nameFocus,
                    })
                  }
                >
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1 shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder={translate('step2.agencyOrCorporation.name')}
                      type="text"
                      name="name"
                      onFocus={() => this.setState({ nameFocus: true })}
                      onBlur={this.handleOnBlur}
                      onChange={this.handleOnChange}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup
                  className={
                    'm-0 ' +
                    classnames({
                      focused: this.state.surnameFocus,
                    })
                  }
                >
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1 shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder={translate('step2.agencyOrCorporation.surname')}
                      type="text"
                      name="surname"
                      onFocus={() => this.setState({ surnameFocus: true })}
                      onBlur={this.handleOnBlur}
                      onChange={this.handleOnChange}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col className="pr-0">
                <FormGroup
                  className={
                    'm-0 ' +
                    classnames({
                      focused: this.state.emailFocus,
                    })
                  }
                >
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1 shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder={translate('step2.passenger.email')}
                      type="email"
                      name="email"
                      onFocus={() => this.setState({ emailFocus: true })}
                      onBlur={this.handleOnBlur}
                      onChange={this.handleOnChange}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row className="ar-passenger-form-row">
              <Col className="pl-0">
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
                      name="phone"
                      onFocus={() => this.setState({ phoneFocus: true })}
                      onBlur={this.handleOnBlur}
                      onChange={this.handleOnChange}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col>
                <div className="ar-select-fly-agency-container">
                  <ClientTypeDropdown
                    items={this.props.airlines.map((item) => {
                      return item.name;
                    })}
                    title={translate('step2.agencyOrCorporation.flyCompany')}
                    color={'white-0'}
                    dispatch={this.props.dispatch}
                    classes={'ar-select-button'}
                    handleOnSelectClientType={this.handleOnSelect}
                  />
                </div>
              </Col>
              <Col className="pr-0">
                <FormGroup
                  className={
                    'm-0 ' +
                    classnames({
                      focused: this.state.flyNumberFocus,
                    })
                  }
                >
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1 shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder={translate('step2.agencyOrCorporation.flyNumber')}
                      type="text"
                      name="flyNumber"
                      onFocus={() => this.setState({ flyNumberFocus: true })}
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
  }
}

Passenger.proptypes = {
  dispatch: PropTypes.func,
  updateFormData: PropTypes.func,
  validatePromotion: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step2Reducer;
};

export default connect(mapStateToProps)(Passenger);
