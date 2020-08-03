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

  handleOnSelect = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { items, classes } = this.props;
    return (
      <>
        <UncontrolledDropdown className="w-100">
          <DropdownToggle className="w-100 ar-round-input bg-ar-white-1" color="asdas">
            <Row className="justify-content-between pl-3 pr-3">
              {this.state.value}&nbsp;
              <span className="btn-inner--icon">
                <span className="icon-chevron-down" />
              </span>
            </Row>
          </DropdownToggle>
          <DropdownMenu className={classes}>
            {items.map((item, index) => {
              return (
                <DropdownItem key={index} id={index} value={item} onClick={this.handleOnSelect}>
                  {item}
                </DropdownItem>
              );
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
};

export default CustomDropDown;
