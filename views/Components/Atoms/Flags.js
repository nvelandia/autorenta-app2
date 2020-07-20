import React from "react";
// reactstrap components
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown, Button,
} from "reactstrap";

class Flags extends React.Component {
    render() {
        return (
            <>
                <UncontrolledDropdown>
                    <DropdownToggle color="asd" className="ar-round ar-white-button">
                        <span className="btn-inner--icon">
                            <span className="icon-language-icon"/>
                        </span>
                        {" "}ES{" "}
                        <span className="btn-inner--icon">
                            <span className="icon-menu-down-arrow"/>
                        </span>
                    </DropdownToggle>
                    <DropdownMenu>
                        <li>
                            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                <img
                                    alt="..."
                                    src={require("public/img/icons/flags/DE.png")}
                                />
                                Deutsch
                            </DropdownItem>
                        </li>
                        <li>
                            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                <img
                                    alt="..."
                                    src={require("public/img/icons/flags/GB.png")}
                                />
                                English(UK)
                            </DropdownItem>
                        </li>
                        <li>
                            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                <img
                                    alt="..."
                                    src={require("public/img/icons/flags/US.png")}
                                />
                                English
                            </DropdownItem>
                        </li>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </>
        );
    }
}

export default Flags;
