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
              <span className="icon-menu-down-arrow" />
            </span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
              <img alt="..." src={'/img/icons/flags/DE.png'} />
              Deutsch
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
              <img alt="..." src={'/img/icons/flags/GB.png'} />
              English(UK)
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
              <img alt="..." src={'/img/icons/flags/US.png'} />
              English
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </>
    );
  }
}

export default Flags;
