import React from 'react';
import { Button, Card, CardBody, FormGroup, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClientTypeDropdown from '../../Molecules/dropdowns/ClientTypeDropdown';
import classnames from 'classnames';

class ClientType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientType: '',
      agencyCodeFocus: false,
      corporationCodeFocus: false,
      agencyCode: '',
      corporationCode: '',
    };
    this.dispatch = props.dispatch;
  }

  handleOnSelect = (value) => {
    this.setState({ clientType: value });
    this.dispatch(this.props.selectClientType(value));
  };

  render() {
    return (
      <Card className="card-frame ar-client-type-card">
        <CardBody className="p-0">
          <div className="ar-icon-customer-type ar-title-with-icon">Tipo de cliente</div>
          <Row className="m-0 align-items-center ar-client-type-container">
            <div className="ar-select-client-type-container">
              <ClientTypeDropdown
                items={['Pasajero / Cliente directo', 'Agencia de viajes', 'Corporativo / Empresas']}
                title={'Selecciona una opción'}
                color={'white-0'}
                dispatch={this.props.dispatch}
                classes={'ar-select-button'}
                handleOnSelectClientType={this.handleOnSelect}
              />
            </div>
            {this.state.clientType === 'Pasajero / Cliente directo' ? (
              <img src={'/img/custom/step2/banner-pay-online-discount.png'} alt="offer" />
            ) : null}
            {this.state.clientType === 'Agencia de viajes' ? (
              <FormGroup
                className={
                  'ar-validate-input-agency ' +
                  classnames({
                    focused: this.state.agencyCodeFocus,
                  })
                }
              >
                <InputGroup className="input-group-merge input-group-alternative ar-round-input shadow-none">
                  <Input
                    className="ar-round-input ar-input-agency-code"
                    placeholder="Ingresa tu número de ID"
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
                      onClick={this.handleSearchClick}
                    >
                      <span className="nav-link-inner--text">Validar </span>
                      <i className="ar-icon-chevron-right" />
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            ) : null}
            {this.state.clientType === 'Corporativo / Empresas' ? (
              <FormGroup
                className={
                  'ar-validate-input-agency ' +
                  classnames({
                    focused: this.state.corporationCodeFocus,
                  })
                }
              >
                <InputGroup className="input-group-merge input-group-alternative ar-round-input shadow-none">
                  <Input
                    className="ar-round-input ar-input-agency-code"
                    placeholder="Ingresa tu número de ID"
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
                      onClick={this.handleSearchClick}
                    >
                      <span className="nav-link-inner--text">Validar </span>
                      <i className="ar-icon-chevron-right" />
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            ) : null}
          </Row>
        </CardBody>
      </Card>
    );
  }
}

ClientType.propTypes = {
  dispatch: PropTypes.func,
  selectClientType: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(ClientType);
