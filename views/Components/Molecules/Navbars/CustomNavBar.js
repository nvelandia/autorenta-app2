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
import React from "react";
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
    UncontrolledTooltip,
    Button
} from "reactstrap";
import {routes} from "../../../../utils/constants/routes";

import homeIcon from "../../../../public/svg/home-icon.svg";
import Flags from "../../Atoms/Flags";

class CustomNavbar extends React.Component {
    render() {
        return (
            <>
                <Navbar
                    className="navbar-horizontal navbar-main bg-ar-navbar"
                    expand="lg"
                    id="navbar-main"
                >
                    <Container>
                        <NavbarBrand>
                            <img
                                className="ar-nav-brand"
                                alt="..."
                                src={"/svg/autorenta-logo.svg"}
                            />
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
                            <span className="navbar-toggler-icon" />
                        </button>
                        <UncontrolledCollapse
                            className="navbar-custom-collapse"
                            navbar
                            toggler="#navbar-collapse"
                        >
                            <div className="navbar-collapse-header">
                                <Row>
                                    <Col className="collapse-brand" xs="6">

                                    </Col>
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
                            <Nav className="ml-lg-auto" navbar>
                                <NavItem>
                                    <NavLink
                                        className=" ar-nav-link ar-nav-link-blue "
                                        href={routes.HOME}
                                    >
                                        <a className="ar-nav-link-blue">
                                            <span className="icon-home-icon"/>
                                        </a>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="ar-nav-link" href={routes.PROMOTIONS} >
                                        <span className="nav-link-inner--text ar-nav-link-blue"><strong>Promociones</strong></span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="ar-nav-link" href={routes.SEARCH} >
                                        <span className="nav-link-inner--text ar-nav-link-blue"><strong>Buscar reservación</strong></span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="ar-nav-link" href={routes.AGENTS} >
                                        <span className="nav-link-inner--text ar-nav-link-blue"><strong>Agentes de viaje</strong></span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="ar-nav-link" href={routes.BUSINESS} >
                                        <span className="nav-link-inner--text ar-nav-link-blue"><strong>Autorenta Business</strong></span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="ar-nav-link" href={routes.ON_THE_GO} >
                                        <span className="nav-link-inner--text ar-nav-link-red"><strong>Autorenta ON THE GO</strong></span>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="d-none d-lg-block ml-lg-1">
                                    <Button
                                        className=" btn-icon ar-round ar-nav-button ar-button-blue"
                                        color="default"
                                        href=""
                                    >
                                        <span className="nav-link-inner--text">Reservar </span>
                                        <span className="btn-inner--icon">
                                            <span className="icon-chevron-right-solid"/>
                                        </span>
                                    </Button>
                                </NavItem>
                                <NavItem className="d-none d-lg-block ml-lg-1">
                                    <Flags/>
                                </NavItem>
                            </Nav>
                        </UncontrolledCollapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default CustomNavbar;
