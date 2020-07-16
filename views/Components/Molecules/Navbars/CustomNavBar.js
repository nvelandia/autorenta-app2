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

class CustomNavbar extends React.Component {
    render() {
        return (
            <>
                <Navbar
                    className="navbar-horizontal navbar-main navbar-dark bg-ar-navbar"
                    expand="lg"
                    id="navbar-main"
                >
                    <Container>
                        <NavbarBrand to="/" >
                            <img
                                alt="..."
                                src={require("public/img/brand/argon-react-white.png")}
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
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink
                                        className="nav-link-icon ar-nav-link-blue"
                                        href={routes.HOME}
                                    >
                                        <i className="fab fa-facebook-square ar-nav-link-blue" />
                                        <span className="nav-link-inner--text d-lg-none">
                                          Facebook
                                        </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href={routes.PROMOTIONS} >
                                        <span className="nav-link-inner--text ar-nav-link-blue">Promociones</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href={routes.SEARCH} >
                                        <span className="nav-link-inner--text ar-nav-link-blue">Buscar reservación</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href={routes.AGENTS} >
                                        <span className="nav-link-inner--text ar-nav-link-blue">Agentes de viaje</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href={routes.BUSINESS} >
                                        <span className="nav-link-inner--text ar-nav-link-blue">Autorenta Business</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href={routes.ON_THE_GO} >
                                        <span className="nav-link-inner--text ar-nav-link-red">Autorenta ON THE GO</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <hr className="d-lg-none" />
                            <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                <NavItem className="d-none d-lg-block ml-lg-4">
                                    <Button
                                        className="btn-neutral btn-icon ar-round"
                                        color="default"
                                        href=""
                                    >
                                        <span className="nav-link-inner--text">Reservar</span>
                                        <span className="btn-inner--icon">
                                          <i className="fas fa-shopping-cart mr-2" />
                                        </span>
                                    </Button>
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
