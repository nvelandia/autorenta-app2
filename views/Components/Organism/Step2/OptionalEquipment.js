import React from 'react';
import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OptionalEquipmentDropdown from '../../Molecules/dropdowns/OptionalEquipmentDropdown';

class OptionalEquipment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {};

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Card className="card-frame ar-optional-equipment">
        <CardBody className="p-0">
          <div className="ar-icon-optional-equipment ar-title-with-icon">Agrega equipamiento opcional a tu renta</div>
          <div className="ar-text-card">
            El equipamietno opcional puede ser reservado, sólo quedará requerido a la compañía rentadora y será
            confirmado y abonado en la oficina al inicio de la renta. Su costo no estincluido en el precio prepago de
            esta reserva y se mostrará un precio estimado a modo orientativo pudiendo variar sin previo aviso.
          </div>
          <div className="ar-options-section-card">
            <div className="ar-checkbox-options-container">
              {[1, 2, 3, 4, 5, 6].map((item) => {
                return (
                  <div className="custom-control custom-checkbox ar-optional-equipment-checkbox mr-1">
                    <input
                      className="custom-control-input"
                      id={item}
                      type="checkbox"
                      //onClick={(e) => this.props.handleOnSelect(key, category)}
                    />
                    <label className="custom-control-label ar-optional-item" htmlFor={item}>
                      {' '}
                      Opcion {item}
                    </label>
                    <label className="ar-optional-item">
                      <strong>USD 16.99 </strong>(por día)
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="ar-select-options-container">
              {[0, 1, 2].map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div className="d-flex align-items-center">
                      <OptionalEquipmentDropdown
                        items={[0, 1, 3, 4, 5]}
                        title={item}
                        color={'white-0'}
                        dispatch={this.props.dispatch}
                      />
                      <label className="ar-select-description">Asientos para bebes</label>
                    </div>
                    <label className="ar-optional-item">
                      <strong>USD 16.99 </strong>(por día)
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

OptionalEquipment.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
  showDetailModal: PropTypes.func,
  showAditionalModal: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(OptionalEquipment);
