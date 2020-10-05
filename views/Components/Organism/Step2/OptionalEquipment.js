import React from 'react';
import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OptionalEquipmentDropdown from '../../Molecules/dropdowns/OptionalEquipmentDropdown';

class OptionalEquipment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

  handleOnSelect = (value, propertyIndex) => {
    let newOptionalEquipmentAdditionalSeats = this.props.optionalEquipment.additionalSeats;
    newOptionalEquipmentAdditionalSeats[propertyIndex].quantity = value;
    this.dispatch(this.props.addOptionalEquipment(newOptionalEquipmentAdditionalSeats));
  };

  handleOnChange = (index) => {
    let newOptionalEquipmentOthers = this.props.optionalEquipment.others;
    newOptionalEquipmentOthers[index].added = !newOptionalEquipmentOthers[index].added;
    this.dispatch(this.props.addOptionalEquipment(newOptionalEquipmentOthers, true));
  };

  render() {
    const { translate } = this.props;
    return (
      <Card className="card-frame ar-optional-equipment">
        <CardBody className="p-0">
          <div className="ar-icon-optional-equipment ar-title-with-icon">
            {translate('step2.optionalEquipment.title')}
          </div>
          <div className="ar-text-card">{translate('step2.optionalEquipment.text')}</div>
          <div className="ar-options-section-card">
            <div className="ar-checkbox-options-container">
              {this.props.optionalEquipment.others.map((item, index) => {
                return (
                  <div key={index} className="custom-control custom-checkbox ar-optional-equipment-checkbox mr-1">
                    <input
                      className="custom-control-input"
                      id={item.name}
                      type="checkbox"
                      onClick={(e) => this.handleOnChange(index)}
                    />
                    <label className="custom-control-label ar-optional-item" htmlFor={item.name}>
                      {item.name}
                    </label>
                    <label className="ar-optional-item">
                      <strong>USD {item.price} </strong> {translate('step2.optionalEquipment.perDay')}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="ar-select-options-container">
              {this.props.optionalEquipment.additionalSeats.map((item, index) => {
                return (
                  <div key={index} className="d-flex justify-content-between align-items-center mb-1">
                    <div className="d-flex align-items-center">
                      <OptionalEquipmentDropdown
                        values={[0, 1, 2, 3]}
                        title={item.quantity.toString()}
                        color={'white-0'}
                        handleOnSelect={this.handleOnSelect}
                        propertyIndex={index}
                      />
                      <label className="ar-select-description">{item.name}</label>
                    </div>
                    <label className="ar-optional-item">
                      <strong>USD {item.price} </strong> {translate('step2.optionalEquipment.perDay')}
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
  addOptionalEquipment: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step2Reducer;
};

export default connect(mapStateToProps)(OptionalEquipment);
