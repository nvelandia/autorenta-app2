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
import { routes } from '../../../../utils/constants/routes';
import Flags from '../../Atoms/Flags';
import SearchReservationModal from '../Modals/SearchReservationModal';

import * as actions from '../../../../actions/generalActions';
import * as homeActions from '../../../../actions/homeActions';
import NewSearchModal from '../Modals/NewSearchModal';
import MakeYourReservation from '../../Organism/Home/MakeYourReservation';
import NotificationAlert from 'react-notification-alert';

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
            <span className="ar-icon-chevron-down" />
          </button>
          <UncontrolledCollapse className="navbar-custom-collapse m-2" navbar toggler="#navbar-collapse">
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6" />
                <Col className="collapse-close" xs="6">
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
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="d-flex justify-content-between ml-4 w-100" navbar>
              <NavItem className="m-0">
                <NavLink className="ar-nav-link ar-nav-link-blue " href={routes.HOME}>
                  <span className="ar-icon-home" />
                </NavLink>
              </NavItem>
              <NavItem className="m-0">
                <NavLink className="ar-nav-link" href={routes.PROMOTIONS}>
                  <span className="nav-link-inner--text ar-nav-link-blue">
                    <strong>Promociones</strong>
                  </span>
                </NavLink>
              </NavItem>
              <NavItem className="m-0">
                <NavLink className="ar-nav-link" onClick={this.showSearchReservationModal}>
                  <span className="nav-link-inner--text ar-nav-link-blue">
                    <strong>Buscar reservación</strong>
                  </span>
                </NavLink>
              </NavItem>
              <NavItem className="m-0">
                <NavLink className="ar-nav-link" href={routes.AGENTS}>
                  <span className="nav-link-inner--text ar-nav-link-blue">
                    <strong>Agentes de viaje</strong>
                  </span>
                </NavLink>
              </NavItem>
              <NavItem className="m-0">
                <NavLink className="ar-nav-link" href={routes.BUSINESS}>
                  <span className="nav-link-inner--text ar-nav-link-blue">
                    <strong>AutoRenta Business</strong>
                  </span>
                </NavLink>
              </NavItem>
              <NavItem className="m-0">
                <NavLink className="ar-nav-link" href={routes.ON_THE_GO}>
                  <span className="nav-link-inner--text ar-nav-link-red">
                    <strong>AutoRenta ON THE GO</strong>
                  </span>
                </NavLink>
              </NavItem>
              <NavItem className="d-none d-lg-block ar-nav-button-link ml-3 mr-0">
                <Button
                  className=" btn-icon ar-round-button ar-nav-button"
                  color="blue-4"
                  onClick={this.showNewSearchModal}
                >
                  <span className="nav-link-inner--text">Reservar </span>
                  <span className="btn-inner--icon">
                    <span className="ar-icon-chevron-right va-middle fs-i--1" />
                  </span>
                </Button>
              </NavItem>
              <NavItem className="d-none d-lg-block ar-nav-button-link mr-0">
                <Flags className="ar-nav-button-link" />
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
        <SearchReservationModal
          searchReservation={actions.searchReservation}
          showModal={this.state.showSearchReservationModal}
          hideModal={this.hideModal}
        />
        <NewSearchModal
          searchLocation={homeActions.searchLocation}
          loadCountries={homeActions.loadCountries}
          nextStep={homeActions.nextStep}
          showModal={this.state.showNewSearchModal}
          hideModal={this.hideModal}
        />
      </Navbar>
    );
  }
}

export default CustomNavbar;
