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
        <UncontrolledDropdown direction={this.state.direction}>
          <DropdownToggle color="asd" className="ar-round-button ar-white-button">
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
