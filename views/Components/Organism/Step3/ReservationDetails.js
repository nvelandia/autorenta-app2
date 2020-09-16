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
              <LocationSelected location={locations.pickup} title={'oficina de inicio'} />
              <LocationSelected location={locations.dropoff} title={'oficina de devolución'} />
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
                <h5>Tarifa todo incluido</h5>
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
                <div className="ar-reserve-selected-plan-prices-item">
                  <h6>Impuestos y cargos</h6>
                  <strong>USD 0.00</strong>
                </div>
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
        <Card className="card-frame ar-optional-equipment">
          <CardBody className="p-0">
            <div className="ar-icon-optional-equipment ar-title-with-icon">Agrega equipamiento opcional a tu renta</div>
            <div className="ar-text-card">
              El equipamietno opcional puede ser reservado, sólo quedará requerido a la compañía rentadora y será
              confirmado y abonado en la oficina al inicio de la renta. Su costo no estincluido en el precio prepago de
              esta reserva y se mostrará un precio estimado a modo orientativo pudiendo variar sin previo aviso.
            </div>
            <div className="ar-options-section-card">
              <div className="ar-checkbox-options-container"></div>
              <div className="ar-select-options-container"></div>
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
