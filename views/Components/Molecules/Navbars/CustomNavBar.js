/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
// react library for routing
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import Flags from '../../Atoms/Flags';
import SearchReservationModal from '../Modals/SearchReservationModal';

import * as actions from '../../../../actions/generalActions';
import * as homeActions from '../../../../actions/homeActions';
import NewSearchModal from '../Modals/NewSearchModal';
import { pages } from '../../../../utils/helpers/redirectTo';

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchReservationModal: false,
      showNewSearchModal: false,
    };
  }

  showNewSearchModal = () => {
    this.setState({ showNewSearchModal: true });
  };

  showSearchReservationModal = () => {
    this.setState({ showSearchReservationModal: true });
  };

  hideModal = () => {
    this.setState({ showSearchReservationModal: false, showNewSearchModal: false });
  };
  render() {
    const { translate, isMobile } = this.props;
    return (
      <Navbar className="sticky-top navbar-horizontal navbar-main bg-ar-navbar p-2" expand="xl" id="navbar-main">
        <Container className="ar-container-navbar">
          <NavbarBrand href={'/'}>
            <img className="ar-nav-brand" alt="..." src={'/svg/autorenta-logo.svg'} />
          </NavbarBrand>
          <button
            aria-controls="navbar-collapse"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbar-collapse"
            data-toggle="collapse"
            id="navbar-collapse"
            type="button"
          >
            <img src={'/svg/bars-solid.svg'} alt={'menu'} className="w-25px" />
          </button>
          <UncontrolledCollapse
            className="navbar-custom-collapse m-2 ar-modal-navbar"
            navbar
            toggler="#navbar-collapse"
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <img className="ar-nav-brand-mobile" alt="..." src={'/svg/autorenta-logo.svg'} />
                </Col>
                <Col className="collapse-close d-flex align-items-center justify-content-end" xs="5">
                  <button
                    aria-controls="navbar-collapse"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbar-collapse"
                    data-toggle="collapse"
                    id="navbar-collapse"
                    type="button"
                  >
                    <i className="ar-icon-close-solid" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="d-flex justify-content-between ml-4 w-100" navbar>
              <NavItem className="m-0">
                <NavLink className="ar-nav-link ar-nav-link-blue " href={pages.home}>
                  {!isMobile ? (
                    <span className="ar-icon-home" />
                  ) : (
                    <span className="nav-link-inner--text ar-nav-link-blue">
                      <strong>Home</strong>
                    </span>
                  )}
                </NavLink>
              </NavItem>
              <NavItem className="m-0">
                <NavLink className="ar-nav-link" href={pages.promotion + '/0'}>
                  <span className="nav-link-inner--text ar-nav-link-blue">
                    <strong>{translate('common.navbar.links.promotions')}</strong>
                  </span>
                </NavLink>
              </NavItem>
              <NavItem className="m-0">
                <NavLink className="ar-nav-link" onClick={this.showSearchReservationModal}>
                  <span className="nav-link-inner--text ar-nav-link-blue">
                    <strong>{translate('common.navbar.links.searchReservation')}</strong>
                  </span>
                </NavLink>
              </NavItem>
              <NavItem className="m-0">
                <NavLink className="ar-nav-link" href={pages.agents}>
                  <span className="nav-link-inner--text ar-nav-link-blue">
                    <strong>{translate('common.navbar.links.travelAgency')}</strong>
                  </span>
                </NavLink>
              </NavItem>
              <NavItem className="m-0">
                <NavLink className="ar-nav-link" href={pages.business}>
                  <span className="nav-link-inner--text ar-nav-link-blue">
                    <strong>{translate('common.navbar.links.AutoRentaBusiness')}</strong>
                  </span>
                </NavLink>
              </NavItem>
              <NavItem className="m-0">
                <NavLink className="ar-nav-link" href={pages.onTheGo}>
                  <span className="nav-link-inner--text ar-nav-link-red">
                    <strong>{translate('common.navbar.links.AutoRentaOnTheGo')}</strong>
                  </span>
                </NavLink>
              </NavItem>
              {!isMobile ? (
                <>
                  <NavItem className="d-none d-lg-block ar-nav-button-link ml-3 mr-0">
                    <Button
                      className=" btn-icon ar-round-button ar-nav-button"
                      color="blue-4"
                      onClick={this.showNewSearchModal}
                    >
                      <span className="nav-link-inner--text">{translate('common.navbar.button.reserve')}</span>
                      <span className="btn-inner--icon">
                        <span className="ar-icon-chevron-right va-middle fs-i--1" />
                      </span>
                    </Button>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ar-nav-button-link mr-0">
                    <Flags className="ar-nav-button-link" />
                  </NavItem>
                </>
              ) : (
                <Row className="mx-0 mt-25 mb-1">
                  <NavItem className="d-none d-lg-block ar-nav-button-link ml-0 mr-0">
                    <Button
                      className=" btn-icon ar-round-button ar-nav-button"
                      color="blue-4"
                      onClick={this.showNewSearchModal}
                    >
                      <span className="nav-link-inner--text">{translate('common.navbar.button.reserve')}</span>
                      <span className="btn-inner--icon">
                        <span className="ar-icon-chevron-right va-middle fs-i--1" />
                      </span>
                    </Button>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ar-nav-button-link mr-0">
                    <Flags className="ar-nav-button-link" />
                  </NavItem>
                </Row>
              )}
            </Nav>
          </UncontrolledCollapse>
        </Container>
        <SearchReservationModal
          searchReservation={actions.searchReservation}
          showModal={this.state.showSearchReservationModal}
          hideModal={this.hideModal}
          translate={translate}
          isMobile={isMobile}
        />
        <NewSearchModal
          searchLocation={homeActions.searchLocation}
          loadCountries={homeActions.loadCountries}
          showModal={this.state.showNewSearchModal}
          hideModal={this.hideModal}
          translate={translate}
          isMobile={isMobile}
        />
      </Navbar>
    );
  }
}

export default CustomNavbar;
