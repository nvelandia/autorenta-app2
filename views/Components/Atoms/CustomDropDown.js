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
    const { items, classes, name } = this.props;
    return (
      <>
        <UncontrolledDropdown className="w-100">
          <DropdownToggle
            className="w-100 ar-round-input bg-ar-white-1 ar-last-row-make-your-reservation"
            color="asdas"
          >
            <Row className="justify-content-between pl-3 pr-3">
              {this.state.value}
              <span className="icon-chevron-down" />
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
                  <DropdownItem key={index} id={index} name={name} value={item} onClick={this.handleOnSelect}>
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
