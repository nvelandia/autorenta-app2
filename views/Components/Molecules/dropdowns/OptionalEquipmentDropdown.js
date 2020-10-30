import React from 'react';
import PropTypes from 'prop-types';
// reactstrap components
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';

class OptionalEquipmentDropdown extends React.Component {
  constructor(props) {
    super(props);
    const { title } = props;
    this.state = {
      value: title,
    };
  }

  handleOnSelect = (item, itemOriginal) => {
    this.props.handleOnSelect(item, itemOriginal);
    this.setState({ value: item });
  };

  render() {
    const { values, itemOriginal, color } = this.props;
    return (
      <UncontrolledDropdown group>
        <DropdownToggle color={color} className="ar-round-button ar-select-option">
          <div className={'ar-select-selected'}>
            {this.state.value}
            <span className="ar-icon-chevron-down" />
          </div>
        </DropdownToggle>
        <DropdownMenu className="ar-dropdown-optional-equipment">
          {values.map((item, index) => {
            return (
              <DropdownItem
                key={index}
                id={index}
                name={itemOriginal.name}
                value={item}
                onClick={() => this.handleOnSelect(item, itemOriginal)}
              >
                {item}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

OptionalEquipmentDropdown.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  handleOnSelect: PropTypes.func,
};

export default OptionalEquipmentDropdown;
