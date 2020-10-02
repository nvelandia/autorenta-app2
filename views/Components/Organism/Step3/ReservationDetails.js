import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LocationSelected from '../Step2/LocationSelected';

class ReservationDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

  handleOnSelect = (value, propertyIndex) => {};

  handleOnChange = (index) => {};

  renderSelectedPlan = () => {
    const list = this.props.plan.includes.map((item, index) => {
      if (item.selected) {
        return (
          <div key={index} className="ar-card-details-rate-item">
            <p>
              <i className="ar-icon-check-solid ar-green-text" /> {item.nickName}{' '}
            </p>
          </div>
        );
      }
      return (
        <div key={index} className="ar-card-details-rate-item">
          <p>
            <i className="ar-icon-close-solid ar-red-text" /> {item.nickName}{' '}
          </p>
        </div>
      );
    });
    return (
      <Row className="m-0 justify-content-between">
        <div>{list.slice(0, 4)}</div>
        <div>{list.slice(4, 8)}</div>
      </Row>
    );
  };

  render() {
    const locations = {
      pickup: { date: '2020-08-25', time: '12:00', location: 'Miami, Florida, Estados Unidos', iata: 'MIA' },
      dropoff: { date: '2020-08-28', time: '12:00', location: 'Miami, Florida, Estados Unidos', iata: 'MIA' },
    };

    const details = [
      { label: 'Nombre y apellido', value: 'Ricardo Javier Alcibar' },
      { label: 'E-mail', value: 'javier.alcibar@outlook.com' },
      { label: 'Teléfono', value: '+54 112 158-0577' },
      { label: 'Total estimado de la reserva', value: 'USD 1575.00' },
      { label: 'Compañía aérea', value: 'American Airlines' },
      { label: 'Número de vuelo', value: 'AA305' },
      { label: 'Código promocional aplicado', value: 'K042200' },
      { label: 'Número de cupón aplicado', value: 'UUWA039' },
    ];

    return (
      <>
        <Card className="card-frame ar-reserve-details">
          <div className="d-flex justify-content-around align-items-center">
            <div className="ar-reserve-details-text-container">
              <h1 className="ar-reserve-details-title">
                <i className="ar-icon-customer-type" />
                Detalle de la reserva
              </h1>
              <div>
                {details.map((item, index) => {
                  return (
                    <h6 key={index}>
                      {item.label}:&nbsp;<strong>{item.value}</strong>
                    </h6>
                  );
                })}
              </div>
            </div>
            <div className="ar-reserve-details-map-container">
              <LocationSelected location={this.props.location.pickup} title={'oficina de inicio'} />
              <LocationSelected location={this.props.location.dropoff} title={'oficina de devolución'} />
            </div>
          </div>
        </Card>
        <Card className="card-frame ar-reserve-details p-0">
          <CardBody className="p-0 ar-reserve-details-car">
            <Row className="ar-car-top">
              <div className="ar-car-top-left">
                <div className="ar-car-image">
                  <img src={this.props.car.image} alt={'Company logo'} />
                </div>
                <div className="ar-car-company-logo">
                  <img src={this.props.car.company.logo} alt={'Company logo'} />
                </div>
                <div className="ar-car-type">
                  <h3 className="ar-red-text">{this.props.car.typeCar.name}</h3>
                  <h6 className="mb-0">{this.props.car.name.toLowerCase()}</h6>
                </div>
              </div>
              <Row className="m-0 ar-car-features">
                <div className="ar-car-features-group pl-0">
                  <div className="ar-car-feature-item">
                    <i className="ar-icon-passenger ar-light-blue-3-text" />
                    <h6>{this.props.car.seats} asientos</h6>
                  </div>
                  <div className="ar-car-feature-item">
                    <i className="ar-icon-doors ar-light-blue-3-text" />
                    <h6>{this.props.car.doors} puertas</h6>
                  </div>
                </div>
                <div className="ar-car-features-group">
                  <div className="ar-car-feature-item">
                    <i className="ar-icon-luggage ar-light-blue-3-text" />
                    <h6>{this.props.car.bags_big} maletas grandes</h6>
                  </div>
                  <div className="ar-car-feature-item">
                    <i className="ar-icon-carry-on ar-light-blue-3-text" />
                    <h6>{this.props.car.bags_small} maletas pequeñas</h6>
                  </div>
                </div>
                <div className="ar-car-features-group pr-0 ">
                  <div className="ar-car-feature-item">
                    <i className="ar-icon-transmission ar-light-blue-3-text" />
                    <h6>Transmisión {this.props.car.gear}</h6>
                  </div>
                  <div className="ar-car-feature-item">
                    {this.props.car.air ? (
                      <>
                        <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                        <h6>Aire acondicionado</h6>
                      </>
                    ) : (
                      <i>&nbsp;</i>
                    )}
                  </div>
                </div>
              </Row>
            </Row>
          </CardBody>
        </Card>
        <Card className="card-frame ar-reserve-details ">
          <div className="ar-reserve-selected-plan">
            <div className="ar-reserve-selected-plan-text">
              <h1 className="ar-reserve-selected-plan-title">
                <i className="ar-icon-plan-selected" />
                Plan seleccionado
              </h1>
              <div className="ar-card-details-rates">
                <h5>Tarifa Todo Incluido</h5>
                <h6>MOST INCLUSIVE - AR</h6>
                <div className="ar-card-details-rates-list">{this.renderSelectedPlan()}</div>
              </div>
            </div>
            <Card className="ar-reserve-selected-plan-prices">
              <div className="ar-reserve-selected-plan-prices-title">
                <i className="ar-icon-taxes" />
                Detalle de tarifa, cargos e impuestos
              </div>
              <div className="ar-reserve-selected-plan-prices-list">
                <div className="ar-reserve-selected-plan-prices-item">
                  <h6>Tarifa base</h6>
                  <strong>USD 1356.00</strong>
                </div>
                {this.props.car.fees.map((fee) => {
                  return (
                    <div className="ar-reserve-selected-plan-prices-item">
                      <h6>{fee.description}</h6>
                      <strong>
                        {fee.currency} {fee.amount}
                      </strong>
                    </div>
                  );
                })}
              </div>
              <div className="ar-reserve-selected-plan-prices-total">
                <h6>Total Estimado</h6>
                <h1>1356.00</h1>
              </div>
            </Card>
            <Card className="ar-reserve-selected-plan-prices">
              <div className="ar-reserve-selected-plan-prices-title">
                <i className="ar-icon-optional-equipment" />
                Equipamiento adicional solicitado
              </div>
              <div className="ar-reserve-selected-plan-prices-list">
                <div className="ar-reserve-selected-plan-prices-item">
                  <h6>1 Asiento elevador para niños</h6>
                  <strong>USD 65.00</strong>
                </div>
                <div className="ar-reserve-selected-plan-prices-item">
                  <h6>1 Asiento para bebés</h6>
                  <strong>USD 65.00</strong>
                </div>
                <div className="ar-reserve-selected-plan-prices-item">
                  <h6>Radio Satelital XM</h6>
                  <strong>USD 79.00</strong>
                </div>
              </div>
              <div className="ar-reserve-selected-plan-prices-total">
                <h6>Total Estimado</h6>
                <h1>209.00</h1>
              </div>
            </Card>
          </div>
        </Card>
        <Card className="card-frame ar-reserve-details">
          <CardBody className="ar-reserve-terms">
            <h1 className="ar-reserve-details-title">
              <i className="ar-icon-terms-and-conditions" />
              Condiciones generales de la renta
            </h1>
            <div className="ar-text-card">
              <p>
                Autorenta confirma grupos o categorías y no marcas o modelos de vehículos, los mismos son a modo
                orientativo y pueden variar sin previo aviso. La imágen es a modo ilustrativo.
              </p>
              <p>
                Recuerda que deberás presentar una tarjeta de crédito internacional válida a nombre del titular de la
                renta al momento de retirar el vehículo por las oficinas de la compañía rentadora.
              </p>
              <p>
                Algunas rentadoras podrían aplicar cargos y restricciones por conductores por debajo de la edad mínima.
              </p>
              <p>
                El equipamiento opcional no puede ser reservado, sólo quedará requerido. El mismo será confirmado y
                abonado en la oficina de retiro del vehículo. Su costo no está incluido en el precio de esta renta y se
                muestra un precio estimado de los mismos a modo orientativo.
              </p>
              <p>
                La mayoría de las compañías rentadoras ofrecen un período de gracia de dos horas desde la hora acordada
                de devolución y la hora real en la que se recoge el vehículo. Si crees que llegarás tarde, recomendamos
                te pongas en contacto directamente con la oficina local de la compañía.
              </p>
              <p>
                En cuanto a la devolución del vehículo, las compañías de alquiler suelen ofrecer un período de gracia de
                29 minutos entre la hora acordada de devolución y la hora real en que se devuelve el vehículo en la
                oficina local. Una vez pasado este período de tiempo, es posible que la compañía cargue el equivalente a
                un día adicional de alquiler.
              </p>
              <p>
                Pueden aplicarse restricciones geográficas, incluso en planes de tarifas que incluyan kilometraje /
                millaje ilimitado. Algunas compañías rentadoras no permiten cruzar algunas fronteras nacionales o
                internacionales con el vehículo o aplican cargos adicionales a quien lo haga.
              </p>
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}

ReservationDetails.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
};

const mapStateToProps = (state) => {
  return state.step3Reducer;
};

export default connect(mapStateToProps)(ReservationDetails);
