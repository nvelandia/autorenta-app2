import React from 'react';
import PropTypes from 'prop-types';
// reactstrap components
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Row } from 'reactstrap';

class OptionalEquipmentDropdown extends React.Component {
  constructor(props) {
    super(props);
    const { title } = props;
    this.state = {
      value: title,
    };
  }

  handleOnSelect = (event, actions) => {
    if (actions) {
      this.props.dispatch(actions());
    }
    this.setState({ value: event.target.value });
  };

  render() {
    const { items, name, color, actions } = this.props;
    return (
      <UncontrolledDropdown group>
        <DropdownToggle color={color} className="ar-round-button ar-select-option">
          <div className={'ar-select-selected'}>
            {this.state.value}
            <span className="ar-icon-chevron-down" />
          </div>
        </DropdownToggle>
        <DropdownMenu>
          {items.map((item, index) => {
            return (
              <DropdownItem
                key={index}
                id={index}
                name={name}
                value={item}
                onClick={(e) => this.handleOnSelect(e, actions[index])}
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
  dispatch: PropTypes.func,
};

export default OptionalEquipmentDropdown;
