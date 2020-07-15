import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { Provider } from 'react-redux';
// import PageChange from "views/Components/Atoms/PageChange/PageChange.js";
import configureStore from '../config/configureStore';

/**
 * unique import to styles with extension scss
 */
// plugins styles from node_modules
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
//plugins styles downloaded
import "../styles/vendor/fullcalendar/dist/fullcalendar.min.css";
import "../styles/vendor/sweetalert2/dist/sweetalert2.min.css";
import "../styles/vendor/select2/dist/css/select2.min.css";
import "../styles/vendor/quill/dist/quill.core.css";
import "../styles/vendor/nucleo/css/nucleo.css";
import "../styles/vendor/@fortawesome/fontawesome-free/css/all.min.css";
// core styles
import "../styles/scss/argon-dashboard-pro-react.scss?v1.1.0";

// Router.events.on("routeChangeStart", url => {
//   document.body.classList.add("body-page-transition");
//   ReactDOM.render(
//     <PageChange path={url} />,
//     document.getElementById("page-transition")
//   );
// });
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
const store = configureStore();

class MyApp extends App {
  componentDidMount() {

  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be accessed by the client
    return { pageProps };
  }
  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;
    return (
        <Provider store={store}>
          <React.Fragment>
            <Head>
              <title>3 Clicks - AutoRenta</title>
            </Head>
            <Component {...pageProps} />
          </React.Fragment>
        </Provider>
    );
  }
}

export const dispatch = store.dispatch;
export default MyApp;