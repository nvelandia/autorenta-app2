import React from 'react';
import PropTypes from 'prop-types';
// reactstrap components
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';

class ClientTypeDropdown extends React.Component {
  constructor(props) {
    super(props);
    const { title } = props;
    this.state = {
      value: title,
      changeColor: false,
    };
  }

  handleOnSelect = (event) => {
    if (!this.props.airline) {
      this.setState({ value: event.target.value, changeColor: 'ar-red-text' });
    } else {
      if (event.target.value === '') {
        this.setState({ value: event.target.name, changeColor: false });
      } else {
        this.setState({ value: event.target.name, changeColor: 'ar-red-text' });
      }
    }

    this.props.handleOnSelectClientType(event.target.value);
  };

  render() {
    const { items, classes, name, color, airline } = this.props;
    return (
      <UncontrolledDropdown group className="w-100">
        <DropdownToggle color={color} className={`ar-round-button ${classes}`}>
          <div className={`ar-client-type-select ${this.state.changeColor}`}>
            {this.state.value}
            <span className="ar-icon-chevron-down va-middle ar-dropdown-chevron ml-1 ar-blue-0-text" />
          </div>
        </DropdownToggle>
        <DropdownMenu className={`${airline ? 'ar-dropdown-menu-overflow' : ''}`}>
          {!airline
            ? items.map((item, index) => {
                return (
                  <DropdownItem key={index} id={index} name={name} value={item} onClick={this.handleOnSelect}>
                    {item}
                  </DropdownItem>
                );
              })
            : items.map((item, index) => {
                return (
                  <DropdownItem key={index} id={index} name={item.name} value={item.iata} onClick={this.handleOnSelect}>
                    {item.name}
                  </DropdownItem>
                );
              })}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

ClientTypeDropdown.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  handleOnSelectClientType: PropTypes.func,
};

export default ClientTypeDropdown;
