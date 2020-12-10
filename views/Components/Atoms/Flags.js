import React from 'react';
// reactstrap components
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Button } from 'reactstrap';
import { IntlActions, IntlReducer as Intl } from 'react-redux-multilingual';
import { connect } from 'react-redux';

class Flags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.locale,
      direction: 'down',
    };
    this.dispatch = props.dispatch;
  }

  componentDidMount() {
    if (this.state.direction !== 'right' && window.innerWidth < 450) {
      this.setState({ direction: 'right' });
    } else {
      this.setState({ direction: 'down' });
    }
  }

  handleOnClick = (e) => {
    this.dispatch(IntlActions.setLocale(e.target.value));
  };

  render() {
    return (
      <>
        <UncontrolledDropdown className="ar-button-flag mt-auto mb-auto" direction={this.state.direction}>
          <DropdownToggle color="white-3" className="ar-round-button ar-language-button m-0">
            <span className="ar-icon-language ar-language" /> {this.state.value.toUpperCase() + ' '}
            <span className="ar-icon-chevron-down mt-i-1 fs-i--1" />
          </DropdownToggle>
          <DropdownMenu className="ar-dropdown-menu">
            <DropdownItem className="ar-dropdown-item" value="en" onClick={this.handleOnClick}>
              EN
            </DropdownItem>
            <DropdownItem className="ar-dropdown-item" value="es" onClick={this.handleOnClick}>
              ES
            </DropdownItem>
            <DropdownItem className="ar-dropdown-item" value="pt" onClick={this.handleOnClick}>
              PT
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state.Intl;
};

export default connect(mapStateToProps)(Flags);
