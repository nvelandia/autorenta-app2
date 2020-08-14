import React from 'react';
import PropTypes from 'prop-types';
// reactstrap components
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Row } from 'reactstrap';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    const { title } = props;
    this.state = {
      value: title,
    };
  }

  handleOnSelect = (event) => {
    if (this.props.handleSelect) {
      this.props.handleSelect(event);
    }
    this.setState({ value: event.target.value });
  };

  render() {
    const { items, classes, name, color } = this.props;
    return (
      <UncontrolledDropdown group>
        <DropdownToggle color={color} className="ar-round-button">
          <Row className="justify-content-between pl-3 pr-3 fs--1">
            {this.state.value}
            <span className="ar-icon-chevron-down va-middle ar-dropdown-chevron ml-1" />
          </Row>
        </DropdownToggle>
        <DropdownMenu>
          {items.map((item, index) => {
            return (
              <DropdownItem key={index} id={index} name={name} value={item} onClick={this.handleOnSelect}>
                {item}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

Dropdown.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  handleSelect: PropTypes.func,
};

export default Dropdown;
