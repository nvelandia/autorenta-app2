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
    };
  }

  handleOnSelect = (event, item) => {
    this.props.handleOnSelect(event);
    this.setState({ value: item.name });
  };

  render() {
    const { items, classes, name, color } = this.props;
    return (
      <UncontrolledDropdown group className="w-100">
        <DropdownToggle color={color} className={`ar-round-button ${classes}`}>
          <div>
            {this.state.value}
            <span className="ar-icon-chevron-down va-middle ar-dropdown-chevron-country ml-1 ar-blue-0-text" />
          </div>
        </DropdownToggle>
        <DropdownMenu className={'ar-dropdown-menu-overflow'}>
          {items.map((item, index) => {
            return (
              <DropdownItem
                key={index}
                id={index}
                name={name}
                value={item.id}
                onClick={(e) => this.handleOnSelect(e, item)}
              >
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
  handleOnSelect: PropTypes.func,
};

export default CountryDropdown;
