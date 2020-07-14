import React, { Component } from "react";
import Router from "next/router";

export default class Index extends Component {
    static getInitialProps({store}) {}

    componentDidMount = () => {
        Router.push("/components");
    };

    render() {
        return <div />;
    }
}