import React from 'react';
// reactstrap components
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Button } from 'reactstrap';

class Flags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: 'down',
    };
  }

  componentDidMount() {
    if (this.state.direction !== 'right' && window.innerWidth < 450) {
      this.setState({ direction: 'right' });
    } else {
      this.setState({ direction: 'down' });
    }
  }

  render() {
    return (
      <>
        <UncontrolledDropdown className="ar-button-flag mt-auto mb-auto" direction={this.state.direction}>
          <DropdownToggle color="white-3" className="ar-round-button ar-language-button m-0">
            <span className="ar-icon-language ar-language" /> ES <span className="ar-icon-chevron-down mt-1" />
          </DropdownToggle>
          <DropdownMenu className="ar-dropdown-menu">
            <DropdownItem className="ar-dropdown-item" href="#EN" onClick={(e) => e.preventDefault()}>
              EN
            </DropdownItem>
            <DropdownItem className="ar-dropdown-item" href="#ES" onClick={(e) => e.preventDefault()}>
              ES
            </DropdownItem>
            <DropdownItem className="ar-dropdown-item" href="#PT" onClick={(e) => e.preventDefault()}>
              PT
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </>
    );
  }
}

export default Flags;
