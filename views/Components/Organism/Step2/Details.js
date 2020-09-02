import React from 'react';
import { Button, Card } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomButton from '../../Atoms/CustomButton';
import ModalChangePlan from './ModalChangePlan';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChangePlanModal: false,
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  showChangePlanModal = () => {
    this.setState({ showChangePlanModal: true });
  };

  hideModal = () => {
    this.setState({ showChangePlanModal: false });
  };

  handleOnLoad = () => {};

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const additionalEquipment = [
      { name: 'Asiento elevador para niños', price: '65.00' },
      { name: 'Asiento para bebés', price: '65.00' },
      { name: 'Radio Satelital XM', price: '79.00' },
    ];
    const charges = [
      { name: 'Tarifa base', price: '1356.03' },
      { name: 'Total de equipamiento adicional', price: '209.00' },
      { name: 'Impuestos y cargos', price: '0.00' },
    ];
    return (
      <Card>
        <ModalChangePlan
          showModal={this.state.showChangePlanModal}
          hideModal={this.hideModal}
          changePlan={this.props.changePlan}
          information={[]}
        />
        <div className="ar-card-details-title">
          <h1>Detalles de la reserva</h1>
        </div>
        <div className="ar-card-details-subtitle">
          <h2>PLAN SELECCIONADO</h2>
          <CustomButton
            text={'Cambiar plan'}
            event={() => this.showChangePlanModal()}
            color={'red-0'}
            name={'ar-button-change-plan'}
            icon={'ar-icon-chevron-right'}
            justify={'justify-content-between'}
          />
        </div>
        <div className="ar-card-details-rates">
          <h5>Tarifa todo incluido</h5>
          <h6>MOST INCLUSIVE - AR</h6>
          <div className="ar-card-details-rates-list">
            {this.props.plan.includes.map((item, index) => {
              if (item.selected) {
                return (
                  <div key={index} className="ar-card-details-rate-item">
                    <p>
                      <i className="ar-icon-check-solid ar-green-text" /> {item.name}{' '}
                    </p>
                  </div>
                );
              }
              return (
                <div key={index} className="ar-card-details-rate-item">
                  <p>
                    <i className="ar-icon-close-solid ar-red-text" /> {item.name}{' '}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ar-card-details-subtitle">
          <h2>EQUIPAMIENTO ADICIONAL SOLICITADO</h2>
        </div>
        <div className="ar-card-details-additional-equipment">
          <div className="ar-card-details-additional-equipment-list">
            {additionalEquipment.map((item, index) => {
              return (
                <div key={index} className="ar-card-details-additional-equipment-item">
                  <p>{item.name}</p>
                  <strong>USD {item.price}</strong>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ar-card-details-subtitle">
          <h2>DETALLES DE CARGOS</h2>
        </div>
        <div className="ar-card-details-additional-equipment">
          <div className="ar-card-details-additional-equipment-list">
            {charges.map((item, index) => {
              return (
                <div key={index} className="ar-card-details-additional-equipment-item">
                  <p>{item.name}</p>
                  <strong>USD {item.price}</strong>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ar-card-details-total">
          <div className="ar-card-details-total-title">
            <h4>TOTAL ESTIMADO</h4>
            <div className="ar-card-details-total-amount">
              <p>USD</p>
              <strong>1356.03</strong>
            </div>
          </div>
          <p className="ar-card-details-total-small-letter">
            Recuerda que deberás presentar una tarjeta de crédito internacional válida y a nombre del titular de la
            renta al momento de retirar el vehículo por las oficinas de la compañía rentadora.
          </p>
          <p className="ar-card-details-total-small-letter">
            Algunas compañías rentadoras podrían aplicar cargos y restricciones por conductores por debajo de la edad
            mínima.
          </p>
          <p className="ar-card-details-total-small-letter">
            Los impuestos y cargos mencionados NO están incluidos en la tarifa base, algunos de ellos sólo pueden ser
            abonados en destino.
          </p>
          <div className="custom-control custom-checkbox">
            <input className="custom-control-input" id="customCheck1" type="checkbox" />
            <label className="custom-control-label ar-card-details-total-small-letter" htmlFor="customCheck1">
              He leido y acepto los términos y condiciones vigentes en el país destino de la renta.
            </label>
          </div>
          <div className="ar-button-confirm-container">
            <Button className="btn-icon ar-round-button ar-button-confirm" color="red-0" type="button">
              Confirmar reserva
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
};

const mapStateToProps = (state) => {
  return state.stepDosReducer;
};

export default connect(mapStateToProps)(Details);
