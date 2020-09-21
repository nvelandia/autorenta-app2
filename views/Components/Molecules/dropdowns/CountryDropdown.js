import React from 'react';
import PropTypes from 'prop-types';
// reactstrap components
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Row } from 'reactstrap';

class CountryDropdown extends React.Component {
  constructor(props) {
    super(props);
    const { title } = props;
    this.state = {
      value: title,
      changeColor: false,
    };
  }

  handleOnSelect = (event) => {
    this.setState({ value: event.target.value, changeColor: 'ar-red-text' });
    this.props.handleOnSelectClientType(event.target.value);
  };

  render() {
    const { items, classes, name, color } = this.props;
    return (
      <UncontrolledDropdown group className="w-100">
        <DropdownToggle color={color} className={`ar-round-button ${classes}`}>
          <div className={`${this.state.changeColor}`}>
            {this.state.value}
            <span className="ar-icon-chevron-down va-middle ar-dropdown-chevron ml-1 ar-blue-0-text" />
          </div>
        </DropdownToggle>
        <DropdownMenu>
          {items.map((item, index) => {
            return (
              <DropdownItem key={index} id={index} name={name} value={item} onClick={this.handleOnSelect}>
                {item.name}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

CountryDropdown.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  handleOnSelectClientType: PropTypes.func,
};

export default CountryDropdown;
