import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LocationSelected from '../Step2/LocationSelected';

class RentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

  handleOnSelect = (value, propertyIndex) => {};

  handleOnChange = (index) => {};

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
              {details.map((item, index) => {
                return (
                  <h6 key={index}>
                    {item.label}:&nbsp;<strong>{item.value}</strong>
                  </h6>
                );
              })}
            </div>
            <div className="ar-reserve-details-map-container">
              <LocationSelected location={locations.pickup} title={'oficina de inicio'} />
              <LocationSelected location={locations.dropoff} title={'oficina de devolución'} />
            </div>
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

RentDetails.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
};

const mapStateToProps = (state) => {
  return state.step3Reducer;
};

export default connect(mapStateToProps)(RentDetails);
