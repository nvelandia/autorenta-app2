import React from "react";
import classnames from "classnames";

import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col, Container,
    Form,
    FormGroup, Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from "reactstrap";


class MakeYourReservation extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container className="mt--8 pb-5">
                <Row className="justify-content-center">
                    <Col lg="9" md="8">
                        <Card className="bg-secondary border-0">
                            <CardHeader className="bg-transparent pb-5">
                                <div className="text-muted text-center mt-2 mb-4">
                                    <small>Sign up with</small>
                                </div>
                                <div className="text-center">
                                    <Button
                                        className="btn-neutral btn-icon mr-4"
                                        color="default"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                      <span className="btn-inner--icon mr-1">
                        <img
                            alt="..."
                            src={require("public/img/icons/common/github.svg")}
                        />
                      </span>
                                        <span className="btn-inner--text">Github</span>
                                    </Button>
                                    <Button
                                        className="btn-neutral btn-icon"
                                        color="default"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                      <span className="btn-inner--icon mr-1">
                        <img
                            alt="..."
                            src={require("public/img/icons/common/google.svg")}
                        />
                      </span>
                                        <span className="btn-inner--text">Google</span>
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardBody className="px-lg-5 py-lg-5">
                                <div className="text-center text-muted mb-4">
                                    <small>Or sign up with credentials</small>
                                </div>
                                <Form role="form">
                                    <FormGroup
                                        className={classnames({
                                            //focused: this.state.focusedName
                                        })}
                                    >
                                        <InputGroup className="input-group-merge input-group-alternative mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-hat-3" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Name"
                                                type="text"
                                                onFocus={() => this.setState({ focusedName: true })}
                                                onBlur={() => this.setState({ focusedName: false })}
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup
                                        className={classnames({
                                            //focused: this.state.focusedEmail
                                        })}
                                    >
                                        <InputGroup className="input-group-merge input-group-alternative mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-email-83" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Email"
                                                type="email"
                                                onFocus={() => this.setState({ focusedEmail: true })}
                                                onBlur={() => this.setState({ focusedEmail: false })}
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup
                                        className={classnames({
                                            //focused: this.state.focusedPassword
                                        })}
                                    >
                                        <InputGroup className="input-group-merge input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-lock-circle-open" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Password"
                                                type="password"
                                                onFocus={() =>
                                                    this.setState({ focusedPassword: true })
                                                }
                                                onBlur={() =>
                                                    this.setState({ focusedPassword: false })
                                                }
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <div className="text-muted font-italic">
                                        <small>
                                            password strength:{" "}
                                            <span className="text-success font-weight-700">
                          strong
                        </span>
                                        </small>
                                    </div>
                                    <Row className="my-4">
                                        <Col xs="12">
                                            <div className="custom-control custom-control-alternative custom-checkbox">
                                                <input
                                                    className="custom-control-input"
                                                    id="customCheckRegister"
                                                    type="checkbox"
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="customCheckRegister"
                                                >
                            <span className="text-muted">
                              I agree with the{" "}
                                <a
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                Privacy Policy
                              </a>
                            </span>
                                                </label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Button className="mt-4" color="info" type="button">
                                            Create account
                                        </Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MakeYourReservation;

