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

  handleOnSelect = (value, item) => {
    const optionalEquipment = this.props.optionalEquipment.map((item) => {
      return item;
    });
    let newOptionalEquipment = [];
    if (value === 0) {
      newOptionalEquipment = optionalEquipment.filter((equipment) => equipment.name !== item.name);
    } else {
      newOptionalEquipment = optionalEquipment.filter((equipment) => equipment.name !== item.name);
      item.quantity = value;
      newOptionalEquipment.push(item);
    }
    this.dispatch(this.props.addOptionalEquipment(newOptionalEquipment));
  };

  handleOnChange = (item, e) => {
    const optionalEquipment = this.props.optionalEquipment.map((item) => {
      return item;
    });
    let newOptionalEquipment = [];
    if (!e.target.checked) {
      newOptionalEquipment = optionalEquipment.filter((equipment) => equipment.name !== item.name);
    } else {
      newOptionalEquipment = optionalEquipment;
      newOptionalEquipment.push(item);
    }
    this.dispatch(this.props.addOptionalEquipment(newOptionalEquipment));
  };

  render() {
    const { translate, isMobile } = this.props;

    let elevatorSeat;
    let title;
    if (!isMobile) {
      elevatorSeat = translate('step2.optionalEquipment.elevatorSeat');
      title = translate('step2.optionalEquipment.title');
    } else {
      elevatorSeat = translate('step2.optionalEquipment.elevatorSeatMobile');
      title = translate('step2.optionalEquipment.titleMobile');
    }
    const optionalEquipment = {
      others: [{ name: translate('step2.optionalEquipment.GPS'), price: 19.0 }],
      additionalSeats: [
        { name: translate('step2.optionalEquipment.babySeat'), price: 14.0, quantity: 0 },
        { name: translate('step2.optionalEquipment.childrenSeat'), price: 14.0, quantity: 0 },
        { name: elevatorSeat, price: 14.0, quantity: 0 },
      ],
    };

    return (
      <Card className="card-frame ar-optional-equipment">
        <CardBody className="p-0">
          <div className="ar-icon-optional-equipment ar-title-with-icon">{title}</div>
          <div className="ar-text-card">{translate('step2.optionalEquipment.text')}</div>
          <div className="ar-options-section-card">
            <div className="ar-checkbox-options-container">
              <div className="ar-select-options-container">
                {this.props.carSelected.extras.map((item, index) => {
                  if (item.multiple) {
                    return (
                      <div key={index} className="d-flex justify-content-between align-items-center mb-1">
                        <div className="d-flex align-items-center">
                          <OptionalEquipmentDropdown
                            values={[0, 1, 2, 3]}
                            title={0}
                            color={'white-0'}
                            handleOnSelect={this.handleOnSelect}
                            itemOriginal={item}
                          />
                          <label className="ar-select-description">{item.name}</label>
                        </div>
                        <label className="ar-optional-item">
                          <strong>USD {parseFloat(item.base_amount).toFixed(2)} </strong>
                        </label>
                      </div>
                    );
                  }
                })}
              </div>
              {this.props.carSelected.extras.map((item, index) => {
                if (!item.multiple) {
                  return (
                    <div key={index} className="custom-control custom-checkbox ar-optional-equipment-checkbox">
                      <input
                        className="custom-control-input"
                        id={item.name}
                        type="checkbox"
                        defaultChecked={false}
                        onClick={(e) => this.handleOnChange(item, e)}
                      />
                      <label className="custom-control-label ar-optional-item" htmlFor={item.name}>
                        {item.name}
                      </label>
                      <label className="ar-optional-item">
                        <strong>USD {parseFloat(item.base_amount).toFixed(2)} </strong>
                      </label>
                    </div>
                  );
                }
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
  addOptionalEquipment: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step2Reducer;
};

export default connect(mapStateToProps)(OptionalEquipment);
