import React from 'react';
import PropTypes from 'prop-types';
// reactstrap components
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Row } from 'reactstrap';

class ClientTypeDropdown extends React.Component {
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
    const { items, classes, name, color, actions } = this.props;
    return (
      <UncontrolledDropdown group className="w-100">
        <DropdownToggle color={color} className={`ar-round-button ${classes}`}>
          <div className="ar-client-type-select">
            {this.state.value}
            <span className="ar-icon-chevron-down va-middle ar-dropdown-chevron ml-1" />
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

ClientTypeDropdown.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  dispatch: PropTypes.func,
};

export default ClientTypeDropdown;
