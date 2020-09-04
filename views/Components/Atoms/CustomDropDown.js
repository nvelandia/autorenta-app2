import React from 'react';
import PropTypes from 'prop-types';
// reactstrap components
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Row } from 'reactstrap';

class CustomDropDown extends React.Component {
  constructor(props) {
    super(props);
    const { title } = props;
    this.state = {
      value: title,
    };
  }

  handleOnSelectObject = (event, item) => {
    if (this.props.handleSelect) {
      this.props.handleSelect(event);
    }
    this.setState({ value: item.name });
  };

  handleOnSelect = (event) => {
    if (this.props.handleSelect) {
      this.props.handleSelect(event);
    }
    this.setState({ value: event.target.value });
  };

  render() {
    const { items, classes, name, height } = this.props;
    return (
      <>
        <UncontrolledDropdown className={`w-100 ${height}`}>
          <DropdownToggle
            className="w-100 ar-round-input bg-ar-white-1 ar-last-row-make-your-reservation h-100"
            color="asdas"
          >
            <Row className="justify-content-between ar-pl-3 pr-3 align-items-center ">
              <div className="tx-overflow-clip ws-nowrap mw-89">{this.state.value}</div>
              <span className="ar-icon-chevron-down fs-i--1 mt-i-1" />
            </Row>
          </DropdownToggle>
          <DropdownMenu className={classes}>
            {items.map((item, index) => {
              if (typeof item === 'object') {
                return (
                  <DropdownItem
                    key={index}
                    id={index}
                    name={name}
                    value={item.id}
                    onClick={(e) => this.handleOnSelectObject(e, item)}
                  >
                    {item.name}
                  </DropdownItem>
                );
              } else {
                return (
                  <DropdownItem
                    className="ls-3"
                    key={index}
                    id={index}
                    name={name}
                    value={item}
                    onClick={this.handleOnSelect}
                  >
                    {item}
                  </DropdownItem>
                );
              }
            })}
          </DropdownMenu>
        </UncontrolledDropdown>
      </>
    );
  }
}

CustomDropDown.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  handleSelect: PropTypes.func,
};

export default CustomDropDown;
