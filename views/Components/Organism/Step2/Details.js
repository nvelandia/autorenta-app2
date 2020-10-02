import React from 'react';
import { Button, Card } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomButton from '../../Atoms/CustomButton';
import ModalChangePlan from './ModalChangePlan';
import { createReservationSuccessfully } from '../../../../actions/step2Actions';
import { pages, redirectTo } from '../../../../utils/helpers/redirectTo';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChangePlanModal: false,
      conditionsAndTerms: false,
    };
    this.dispatch = props.dispatch;
  }

  showChangePlanModal = () => {
    this.setState({ showChangePlanModal: true });
  };

  hideModal = () => {
    this.setState({ showChangePlanModal: false });
  };

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckbox = () => {
    this.setState({ conditionsAndTerms: !this.state.conditionsAndTerms });
  };

  handleOnClick = () => {
    const formData = {
      pickup_location: this.props.location.pickup.iata,
      pickup_date: this.props.location.pickup.date,
      pickup_time: this.props.location.pickup.time,
      dropoff_location: this.props.location.dropoff.iata,
      dropoff_date: this.props.location.dropoff.date,
      dropoff_time: this.props.location.dropoff.time,
      passenger_country_id: this.props.searchParams.passenger_country_id,
      passenger_age: this.props.searchParams.passenger_age,
      passenger_email: this.props.organization.organization_id
        ? this.props.organization.email
        : this.props.formData.email,
      passenger_name: this.props.formData.name,
      passenger_lastname: this.props.formData.surname,
      passenger_phone: this.props.formData.phone,
      rate_code: this.props.carSelected.rates[this.props.rateSelected].rate_code,
      vendor: this.props.carSelected.company.code,
      sipp: this.props.carSelected.typeAlias,
    };
    this.props.organization.customer_id ? (formData.partner_code = this.props.organization.customer_id) : null;

    this.dispatch(this.props.confirmReservation(formData));

    // this.dispatch(
    //   this.props.createReservationSuccessfully(
    //     this.props.carSelected,
    //     this.props.location,
    //     this.props.searchParams,
    //     this.props.organization,
    //   ),
    // );
    // redirectTo(pages.step3);
  };

  calucalteSubTotalsAndTotal = () => {
    let subtotal = 0;
    this.props.optionalEquipment.others.forEach((item) => {
      if (item.added) {
        subtotal = subtotal + Number.parseFloat(item.price);
      }
    });
    this.props.optionalEquipment.additionalSeats.forEach((item) => {
      if (item.quantity !== 0) {
        subtotal = subtotal + Number.parseFloat(item.price);
      }
    });
    let total = subtotal + Number.parseFloat(this.props.carSelected.rates[this.props.rateSelected].price);

    return {
      subtotal: subtotal.toFixed(2),
      tarifa: this.props.carSelected.rates[this.props.rateSelected].price,
      total: total.toFixed(2),
    };
  };

  render() {
    const charges = [
      { name: 'Tarifa base', price: this.calucalteSubTotalsAndTotal().tarifa },
      { name: 'Total de equipamiento adicional', price: this.calucalteSubTotalsAndTotal().subtotal },
      { name: 'Impuestos y cargos', price: '0.00' },
    ];
    return (
      <Card>
        {this.state.showChangePlanModal ? (
          <ModalChangePlan
            showModal={this.state.showChangePlanModal}
            hideModal={this.hideModal}
            changePlan={this.props.changePlan}
            information={[]}
          />
        ) : null}
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
          <h5>{this.props.carSelected.rates[this.props.rateSelected].name}</h5>
          <h6>
            {this.props.carSelected.rates[this.props.rateSelected].name +
              ' - ' +
              this.props.carSelected.rates[this.props.rateSelected].rate_code}
          </h6>
          <div className="ar-card-details-rates-list">
            {this.props.carSelected.rates[this.props.rateSelected].includes.map((item, index) => {
              if (item.selected) {
                return (
                  <div key={index} className="ar-card-details-rate-item">
                    <p>
                      <i className="ar-icon-check-solid ar-green-text" /> {item}{' '}
                    </p>
                  </div>
                );
              }
              return (
                <div key={index} className="ar-card-details-rate-item">
                  <p>
                    <i className="ar-icon-close-solid ar-red-text" /> {item}{' '}
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
            {this.props.optionalEquipment.others.map((item, index) => {
              if (item.added) {
                return (
                  <div key={index} className="ar-card-details-additional-equipment-item">
                    <p>{item.name}</p>
                    <strong>USD {item.price}</strong>
                  </div>
                );
              }
            })}
            {this.props.optionalEquipment.additionalSeats.map((item, index) => {
              if (item.quantity !== 0) {
                return (
                  <div key={index} className="ar-card-details-additional-equipment-item">
                    <p>{item.name}</p>
                    <strong>USD {item.price}</strong>
                  </div>
                );
              }
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
              <strong>{this.calucalteSubTotalsAndTotal().total}</strong>
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
            <input
              className="custom-control-input"
              id="customCheck1"
              type="checkbox"
              name="conditionsAndTerms"
              checked={this.state.conditionsAndTerms}
              onChange={this.handleCheckbox}
            />
            <label className="custom-control-label ar-card-details-total-small-letter" htmlFor="customCheck1">
              He leido y acepto los términos y condiciones vigentes en el país destino de la renta.
            </label>
          </div>
          <div className="ar-button-confirm-container">
            <Button
              className="btn-icon ar-round-button ar-button-confirm"
              color="red-0"
              type="button"
              disabled={!this.state.conditionsAndTerms}
              onClick={this.handleOnClick}
            >
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
  confirmReservation: PropTypes.func,
  createReservationSuccessfully: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step2Reducer;
};

export default connect(mapStateToProps)(Details);
