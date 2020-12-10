import React from 'react';
import { Button, Card, CardBody, FormGroup, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClientTypeDropdown from '../../Molecules/dropdowns/ClientTypeDropdown';
import classnames from 'classnames';
import NotificationAlert from 'react-notification-alert';

class ClientType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientType: '',
      agencyCodeFocus: false,
      corporationCodeFocus: false,
      agencyCode: '', //AG8112MX1
      corporationCode: '', //CO4772MX2
      error: {
        clientType: false,
      },
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {
    this.dispatch(this.props.loadDiscount());
  };

  handleOnSelect = (value) => {
    this.setState({
      clientType: value,
      agencyCode: '',
      corporationCode: '',
      error: { ...this.state.error, clientType: false },
    });
    this.dispatch(this.props.selectClientType(value));
  };

  handleValidateClick = (agency) => {
    if (agency) {
      this.dispatch(this.props.validateId(this.state.agencyCode));
    } else {
      this.dispatch(this.props.validateId(this.state.corporationCode));
    }
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (this.props.error.validationId) {
      this.dispatch(this.props.clearValidateIdError());
    }
  };

  notify = (type) => {
    let options = {
      place: 'tc',
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
            {this.props.translate('common.error.attention')}
          </span>
          <span data-notify="message">{this.props.translate('common.error.idInvalid')}</span>
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
    if (error.validationId) {
      this.notify('autorenta');
      this.dispatch(this.props.clearValidateIdError());
    }
    if (error.clientType && !this.state.error.clientType) {
      this.setState({ error: { ...this.state.error, clientType: true } });
    }
    return (
      <Card className="card-frame ar-client-type-card">
        <div className="rna-wrapper">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <CardBody className="p-0">
          <div className="ar-icon-customer-type ar-title-with-icon">{translate('step2.clientType.title')}</div>
          <Row className="m-0 align-items-center ar-client-type-container">
            <div className="ar-select-client-type-container">
              <ClientTypeDropdown
                items={[
                  translate('step2.clientType.passenger'),
                  translate('step2.clientType.agency'),
                  translate('step2.clientType.corporation'),
                ]}
                title={translate('step2.clientType.choose')}
                color={'white-0'}
                dispatch={this.props.dispatch}
                classes={`ar-select-button ${this.state.error.clientType ? 'ar-error-border' : ''}`}
                handleOnSelectClientType={this.handleOnSelect}
              />
            </div>
            {this.state.clientType === translate('step2.clientType.agency') ? (
              <FormGroup
                className={
                  'ar-validate-input-agency ' +
                  classnames({
                    focused: this.state.agencyCodeFocus,
                  })
                }
              >
                <InputGroup
                  className={`input-group-merge input-group-alternative ar-round-input shadow-none ${
                    error['validationId'] ? 'ar-error-border' : null
                  }`}
                >
                  <Input
                    className="ar-round-input ar-input-agency-code"
                    placeholder={
                      !this.props.error.validationId
                        ? translate('step2.clientType.typeYourId')
                        : this.props.error.validationId
                    }
                    type="text"
                    name="agencyCode"
                    onFocus={() => this.setState({ agencyCodeFocus: true })}
                    onBlur={() => this.setState({ agencyCodeFocus: false })}
                    onChange={this.handleOnChange}
                  />
                  <InputGroupAddon addonType="append">
                    <Button
                      className=" btn-icon w-100 ar-validate-input-agency-button"
                      color="red-0"
                      onClick={() => this.handleValidateClick(true)}
                    >
                      <span className="nav-link-inner--text"> {translate('step2.clientType.validate')} </span>
                      <i className="ar-icon-chevron-right" />
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            ) : null}
            {this.state.clientType === translate('step2.clientType.corporation') ? (
              <FormGroup
                className={
                  'ar-validate-input-agency ' +
                  classnames({
                    focused: this.state.corporationCodeFocus,
                  })
                }
              >
                <InputGroup
                  className={`input-group-merge input-group-alternative ar-round-input shadow-none ${
                    error['validationId'] ? 'ar-error-border' : null
                  }`}
                >
                  <Input
                    className="ar-round-input ar-input-agency-code"
                    placeholder={
                      !this.props.error.validationId
                        ? translate('step2.clientType.typeYourId')
                        : this.props.error.validationId
                    }
                    type="text"
                    name="corporationCode"
                    onFocus={() => this.setState({ corporationCodeFocus: true })}
                    onBlur={() => this.setState({ corporationCodeFocus: false })}
                    onChange={this.handleOnChange}
                  />
                  <InputGroupAddon addonType="append">
                    <Button
                      className=" btn-icon w-100 ar-validate-input-agency-button"
                      color="red-0"
                      onClick={() => this.handleValidateClick(false)}
                    >
                      <span className="nav-link-inner--text">{translate('step2.clientType.validate')} </span>
                      <i className="ar-icon-chevron-right" />
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            ) : null}
          </Row>
          {this.state.clientType === translate('step2.clientType.passenger') ? (
            <img className="fade-in" src={this.props.customerDiscount.image} alt="" />
          ) : null}
        </CardBody>
      </Card>
    );
  }
}

ClientType.propTypes = {
  dispatch: PropTypes.func,
  selectClientType: PropTypes.func,
  validateId: PropTypes.func,
  loadDiscount: PropTypes.func,
  clearValidateIdError: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step2Reducer;
};

export default connect(mapStateToProps)(ClientType);
