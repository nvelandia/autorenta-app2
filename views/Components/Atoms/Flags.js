import React from 'react';
// reactstrap components
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Button } from 'reactstrap';

class Flags extends React.Component {
  render() {
    return (
      <>
        <UncontrolledDropdown>
          <DropdownToggle color="asd" className="ar-round ar-white-button">
            <span className="btn-inner--icon">
              <span className="icon-language-icon" />
            </span>{' '}
            ES{' '}
            <span className="btn-inner--icon">
              <span className="icon-chevron-down" />
            </span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#EN" onClick={(e) => e.preventDefault()}>
              EN
            </DropdownItem>
            <DropdownItem href="#ES" onClick={(e) => e.preventDefault()}>
              ES
            </DropdownItem>
            <DropdownItem href="#PT" onClick={(e) => e.preventDefault()}>
              PT
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </>
    );
  }
}

export default Flags;
