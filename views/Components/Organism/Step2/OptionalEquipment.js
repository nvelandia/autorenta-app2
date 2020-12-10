import React from 'react';
import { Card, CardBody, UncontrolledTooltip } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OptionalEquipmentDropdown from '../../Molecules/dropdowns/OptionalEquipmentDropdown';

class OptionalEquipment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

  // addExtras = () => {
  //   const body = {
  //     pickup_location: this.props.carSelected.pickup_office.location,
  //     pickup_date: this.props.location.pickup.date,
  //     pickup_time: this.props.location.pickup.time,
  //     pickup_extended_location: this.props.carSelected.pickup_office.extended_location,
  //     dropoff_extended_location: this.props.carSelected.dropoff_office.extended_location,
  //     dropoff_location: this.props.carSelected.dropoff_office.location,
  //     dropoff_date: this.props.location.dropoff.date,
  //     dropoff_time: this.props.location.dropoff.time,
  //     passenger_country_id: this.props.searchParams.passenger_country_id,
  //     passenger_age: this.props.searchParams.passenger_age,
  //     passenger_email: this.props.organization.organization_id
  //       ? this.props.organization.email
  //       : this.props.formData.email,
  //     passenger_name: this.props.formData.name,
  //     passenger_lastname: this.props.formData.surname,
  //     passenger_phone: this.props.formData.phone,
  //     rate_code: this.props.discount.rate_code
  //       ? this.props.discount.rate_code
  //       : this.props.carSelected.rates[this.props.rateSelected].rate_code,
  //     vendor: this.props.carSelected.company.code,
  //     sipp: this.props.carSelected.typeAlias,
  //     car_name: this.props.carSelected.name,
  //     car_image: this.props.carSelected.image,
  //     pickup_country_code: this.props.searchParams.pickup_country_code,
  //     dropoff_country_code: this.props.searchParams.dropoff_country_code,
  //   };
  //   this.props.organization.customer_id ? (body.partner_code = this.props.organization.customer_id) : null;
  //   this.props.carSelected.car_id ? (body.car_id = this.props.carSelected.car_id) : null;
  //   this.props.formData.airline_iata ? (body.airline_iata = this.props.formData.airline_iata) : null;
  //   this.props.formData.airline_flight ? (body.airline_flight = this.props.formData.airline_flight) : null;
  //   this.props.customerDiscount.customer_discount_id
  //     ? (body.customer_discount_id = this.props.customerDiscount.customer_discount_id)
  //     : null;
  //   if (this.props.discount.name) {
  //     this.props.formData.discount_code ? (body.discount_code = this.props.formData.discount_code) : null;
  //     this.props.formData.coupon ? (body.coupon = this.props.formData.coupon) : null;
  //   }
  //   if (this.props.optionalEquipment.length !== 0) {
  //     const extras = [];
  //     for (const item of this.props.optionalEquipment) {
  //       if (item.multiple === 1) {
  //         switch (item.quantity) {
  //           case 1:
  //             extras.push(item.code);
  //             break;
  //           case 2:
  //             extras.push(item.code);
  //             extras.push(item.code);
  //             break;
  //           case 3:
  //             extras.push(item.code);
  //             extras.push(item.code);
  //             extras.push(item.code);
  //             break;
  //           default:
  //             break;
  //         }
  //       } else {
  //         extras.push(item.code);
  //       }
  //     }
  //     body.extras = extras;
  //   }
  //   this.dispatch(this.props.addExtra(body));
  // };

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
    // this.addExtras();
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
    // this.addExtras();
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
                  if (item.multiple && item.base_amount !== '0.00') {
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
                          <label id={'extra-' + index} className="ar-select-description">
                            {item.name}
                          </label>
                        </div>
                        <label className="ar-optional-item">
                          <strong>USD {parseFloat(item.base_amount).toFixed(2)} </strong>
                        </label>
                        <UncontrolledTooltip
                          className="ar-tooltip"
                          delay={0}
                          placement="right"
                          target={'extra-' + index}
                        >
                          Tooltip on top
                        </UncontrolledTooltip>
                      </div>
                    );
                  }
                })}
              </div>
              {this.props.carSelected.extras.map((item, index) => {
                if (!item.multiple && item.base_amount !== '0.00') {
                  return (
                    <div key={index} className="custom-control custom-checkbox ar-optional-equipment-checkbox">
                      <input
                        className="custom-control-input"
                        id={item.name}
                        type="checkbox"
                        defaultChecked={false}
                        onClick={(e) => this.handleOnChange(item, e)}
                      />
                      <label
                        id={'extra-multiple' + index}
                        className="custom-control-label ar-optional-item"
                        htmlFor={item.name}
                      >
                        {item.name}
                      </label>
                      <label className="ar-optional-item">
                        <strong>USD {parseFloat(item.base_amount).toFixed(2)} </strong>
                      </label>
                      <UncontrolledTooltip
                        className="ar-tooltip"
                        delay={0}
                        placement="right"
                        target={'extra-multiple' + index}
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
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
  addExtra: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step2Reducer;
};

export default connect(mapStateToProps)(OptionalEquipment);
