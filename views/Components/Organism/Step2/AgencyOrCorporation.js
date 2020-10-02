import React from 'react';
import PropTypes from 'prop-types';
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

class AgencyOrCorporation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFocus: false,
      surnameFocus: false,
      phoneFocus: false,
      flyNumberFocus: false,
      promotionCodeFocus: false,
      couponNumberFocus: false,
      name: '',
      surname: '',
      phone: '',
      airlineCompany: '',
      flyNumber: '',
      promotionCode: '',
      couponNumber: '',
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

  handleValidateClick = (event) => {
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
    if (event.target.name === 'couponNumber') {
      body.coupon = this.state.couponNumber;
    } else {
      body.discount_code = this.state.promotionCode;
    }
    this.dispatch(this.props.validatePromotion(body));
  };

  render() {
    return (
      <Card className="card-frame ar-passenger-card fade-in">
        <CardBody className="p-0">
          <div className="ar-icon-customer-type ar-title-with-icon">Información del pasajero</div>
          <div className="ar-passenger-form-container">
            <div className="ar-subtitle">Información personal del titular de la renta</div>
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
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1 shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder="Nombre"
                      type="text"
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
                  <InputGroup className="input-group-merge input-group-alternative ar-round-input bg-ar-white-1 shadow-none">
                    <Input
                      className="ar-round-input ar-input-passenger-data"
                      placeholder="Apellido"
                      type="text"
                      name="surname"
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
                      placeholder="Teléfono"
                      type="text"
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
                    items={this.props.airlines.map((item) => {
                      return item.name;
                    })}
                    title={'Compañía aérea (opcional)'}
                    color={'white-0'}
                    dispatch={this.props.dispatch}
                    classes={'ar-select-button'}
                    handleOnSelectClientType={this.handleOnSelect}
                  />
                </div>
              </Col>
              <Col className="pr-0" xl={4} lg={4}>
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
                      placeholder="Número de vuelo (opcional)"
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
            <div className="ar-subtitle">Información adicional</div>
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
                    placeholder="Código promocional"
                    type="text"
                    name="promotionCode"
                    onFocus={() => this.setState({ promotionCodeFocus: true })}
                    onBlur={() => this.setState({ promotionCodeFocus: false })}
                    onChange={this.handleOnChange}
                  />
                  <InputGroupAddon addonType="append">
                    <Button
                      className=" btn-icon w-100 ar-validate-input-passenger-button"
                      color="red-0"
                      name="promotionCode"
                      onClick={this.handleValidateClick}
                    >
                      <span className="nav-link-inner--text">Validar </span>
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
                    placeholder="Número de cupón"
                    type="text"
                    name="couponNumber"
                    onFocus={() => this.setState({ couponNumberFocus: true })}
                    onBlur={() => this.setState({ couponNumberFocus: false })}
                    onChange={this.handleOnChange}
                  />
                  <InputGroupAddon addonType="append">
                    <Button
                      className=" btn-icon w-100 ar-validate-input-passenger-button"
                      color="red-0"
                      onClick={this.handleValidateClick}
                      name="couponNumber"
                    >
                      <span className="nav-link-inner--text">Validar </span>
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

AgencyOrCorporation.proptypes = {
  dispatch: PropTypes.func,
  updateFormData: PropTypes.func,
  validatePromotion: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step2Reducer;
};

export default connect(mapStateToProps)(AgencyOrCorporation);
