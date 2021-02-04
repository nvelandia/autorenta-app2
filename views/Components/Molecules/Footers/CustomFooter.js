import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, InputGroup, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import NotificationAlert from 'react-notification-alert';
import { pages } from '../../../../utils/helpers/redirectTo';
import SearchReservationModal from '../Modals/SearchReservationModal';
import * as actions from '../../../../actions/generalActions';
import SuccessNotification from '../Notifications/SuccessNotification';

class CustomFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      nameFocus: false,
      emailFocus: false,
      error: {},
      showSearchReservationModal: false,
    };
    this.dispatch = props.dispatch;
  }

  hideModal = () => {
    this.setState({ showSearchReservationModal: false, showNewSearchModal: false });
  };

  handleOnClick = () => {
    const regEx = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (this.state.name === '' || this.state.email === '') {
      const error = {};
      for (const field in this.state) {
        if (this.state[field] === '') {
          error[field] = true;
        }
      }
      this.setState({ error: error });
      this.notify('autorenta', this.props.translate('common.error.completeAllFields'));
    } else if (!regEx.test(this.state.email)) {
      const error = { email: true };
      this.setState({ error: error });
      this.notify('autorenta', this.props.translate('common.error.invalidEmail'));
    } else {
      this.dispatch(this.props.subscribeToNewsletter(this.state.name, this.state.email));
    }
  };

  showSearchReservationModal = () => {
    this.setState({ showSearchReservationModal: true });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: { ...this.state.error, [event.target.name]: false },
    });
  };

  notify = (type, message) => {
    let options = {
      place: 'tc',
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
            {this.props.translate('common.error.attention')}
          </span>
          <span data-notify="message">{message}</span>
        </div>
      ),
      type: type,
      icon: 'ni ni-bell-55',
      autoDismiss: 10,
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  render() {
    const error = this.state.error;
    const { translate, isMobile, isTablet, isSmallTablet } = this.props;
    return (
      <div className="ar-footer">
        <div className="rna-wrapper">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <SuccessNotification translate={translate} />
        <Row className="ar-footer-up bg-ar-blue-2 justify-content-center mx-0">
          <div className="ar-footer-up-container">
            <Row className="ar-subscribe">
              {isTablet ? (
                <>
                  <div className="ar-subscribe-text w-100">
                    <h2 className="m-0 ar-white-1-text">{translate('common.footer.subscribe')}</h2>
                  </div>
                  <Row className="mx-0">
                    <Col xs="12" sm="4">
                      <InputGroup
                        className={`input-group-merge input-group-alternative ar-round-input bg-ar-white-1 ${
                          error['name'] ? 'ar-error-border' : null
                        }`}
                      >
                        <Input
                          className="ar-round-input h-auto ar-blue-0-text"
                          placeholder={translate('common.footer.fullName')}
                          type="text"
                          name="name"
                          autoComplete="off"
                          onFocus={() => this.setState({ nameFocus: true })}
                          onBlur={() => this.setState({ nameFocus: false })}
                          onChange={this.handleOnChange}
                        />
                      </InputGroup>
                    </Col>
                    <Col xs="12" sm="4">
                      <InputGroup
                        className={`input-group-merge input-group-alternative ar-round-input bg-ar-white-1 ${
                          error['email'] ? 'ar-error-border' : null
                        }`}
                      >
                        <Input
                          className="ar-round-input h-auto"
                          placeholder={translate('common.footer.email')}
                          type="email"
                          name="email"
                          autoComplete="off"
                          onFocus={() => this.setState({ emailFocus: true })}
                          onBlur={() => this.setState({ emailFocus: false })}
                          onChange={this.handleOnChange}
                        />
                      </InputGroup>
                    </Col>
                    <div className="ar-register-button-container">
                      <Button className=" btn-icon ar-round-button" color="red-0" onClick={this.handleOnClick}>
                        <span className="nav-link-inner--text">
                          {!isMobile && !isTablet && !isSmallTablet
                            ? translate('common.footer.register')
                            : translate('common.footer.register').toUpperCase()}
                        </span>
                        {!isMobile && !isTablet && !isSmallTablet ? (
                          <span className="btn-inner--icon">
                            <span className="ar-icon-chevron-right va-middle fs-i--1" />
                          </span>
                        ) : null}
                      </Button>
                    </div>{' '}
                  </Row>
                </>
              ) : (
                <>
                  <div className="ar-subscribe-text">
                    <h2 className="m-0 ar-white-1-text">{translate('common.footer.subscribe')}</h2>
                  </div>
                  <Col xs="12" lg="">
                    <InputGroup
                      className={`input-group-merge input-group-alternative ar-round-input bg-ar-white-1 ${
                        error['name'] ? 'ar-error-border' : null
                      }`}
                    >
                      <Input
                        className="ar-round-input h-auto ar-blue-0-text"
                        placeholder={translate('common.footer.fullName')}
                        type="text"
                        name="name"
                        autoComplete="off"
                        onFocus={() => this.setState({ nameFocus: true })}
                        onBlur={() => this.setState({ nameFocus: false })}
                        onChange={this.handleOnChange}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs="12" lg="">
                    <InputGroup
                      className={`input-group-merge input-group-alternative ar-round-input bg-ar-white-1 ${
                        error['email'] ? 'ar-error-border' : null
                      }`}
                    >
                      <Input
                        className="ar-round-input h-auto"
                        placeholder={translate('common.footer.email')}
                        type="email"
                        name="email"
                        autoComplete="off"
                        onFocus={() => this.setState({ emailFocus: true })}
                        onBlur={() => this.setState({ emailFocus: false })}
                        onChange={this.handleOnChange}
                      />
                    </InputGroup>
                  </Col>
                  <div className="ar-register-button-container">
                    <Button className=" btn-icon ar-round-button" color="red-0" onClick={this.handleOnClick}>
                      <span className="nav-link-inner--text">
                        {!isMobile && !isTablet && !isSmallTablet
                          ? translate('common.footer.register')
                          : translate('common.footer.register').toUpperCase()}
                      </span>
                      {!isMobile && !isTablet && !isSmallTablet ? (
                        <span className="btn-inner--icon">
                          <span className="ar-icon-chevron-right va-middle fs-i--1" />
                        </span>
                      ) : null}
                    </Button>
                  </div>{' '}
                </>
              )}
            </Row>
            <Row className="justify-content-between ar-links">
              <Col className="ar-links-align-items-center d-flex p-0">
                {isMobile || isSmallTablet ? (
                  <Row className="justify-content-between ar-links">
                    <Row className="ar-social-logos-mobile-only-container">
                      <Col className="ar-social-logos-mobile-only">
                        <a href={pages.instagram}>
                          <img src={'/svg/footer-instagram-logo.svg'} />
                        </a>
                      </Col>
                      <Col className="ar-social-logos-mobile-only">
                        <a href={pages.whatsapp}>
                          <img src={'/svg/footer-whatsapp-logo.svg'} />
                        </a>
                      </Col>
                      <Col className="ar-social-logos-mobile-only">
                        <a href={pages.facebook}>
                          <img src={'/svg/footer-facebook-logo.svg'} />
                        </a>
                      </Col>
                      <Col className="ar-social-logos-mobile-only">
                        <a href={pages.linkedIn}>
                          <img src={'/svg/footer-linkedin-logo.svg'} />
                        </a>
                      </Col>
                      <Col className="ar-social-logos-mobile-only">
                        <a href={pages.twitter}>
                          <img src={'/svg/footer-twitter-logo.svg'} />
                        </a>
                      </Col>
                    </Row>
                    <Col xl="2" lg="3" className="ar-group-logos">
                      <img className="ar-logo-footer" src={'/svg/autorenta-logo-footer.svg'} />
                      <Row className="justify-content-between pl-1">
                        <Col className="ar-social-logos">
                          <a href={pages.instagram}>
                            <img src={'/svg/footer-instagram-logo.svg'} />
                          </a>
                        </Col>
                        <Col className="ar-social-logos">
                          <a href={pages.whatsapp}>
                            <img src={'/svg/footer-whatsapp-logo.svg'} />
                          </a>
                        </Col>
                        <Col className="ar-social-logos">
                          <a href={pages.facebook}>
                            <img src={'/svg/footer-facebook-logo.svg'} />
                          </a>
                        </Col>
                        <Col className="ar-social-logos">
                          <a href={pages.linkedIn}>
                            <img src={'/svg/footer-linkedin-logo.svg'} />
                          </a>
                        </Col>
                        <Col className="ar-social-logos">
                          <a href={pages.twitter}>
                            <img src={'/svg/footer-twitter-logo.svg'} />
                          </a>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs="12" lg="" className="ar-group-links">
                      <h3 className="ar-blue-6-text">{translate('common.footer.contactUs')}</h3>
                      <div>
                        <a className="ar-link">{translate('common.footer.sawgrass')}</a>
                      </div>
                      <div>
                        <a className="ar-link">{translate('common.footer.suite')}</a>
                      </div>
                      <div>
                        <a className="ar-link" href={`mailto:${translate('common.footer.info')}`}>{translate('common.footer.info')}</a>
                      </div>
                    </Col>
                  </Row>
                ) : isTablet ? (
                  <Row className="justify-content-between ar-links mx-0">
                    <Row className="ar-group-logos justify-content-between mx-0">
                      <img className="ar-logo-footer" src={'/svg/autorenta-logo-footer.svg'} />
                      <Row className="justify-content-between pl-1 w-25 mx-0">
                        <Col className="ar-social-logos">
                          <a href={pages.instagram}>
                            <img src={'/svg/footer-instagram-logo.svg'} />
                          </a>
                        </Col>
                        <Col className="ar-social-logos">
                          <a href={pages.whatsapp}>
                            <img src={'/svg/footer-whatsapp-logo.svg'} />
                          </a>
                        </Col>
                        <Col className="ar-social-logos">
                          <a href={pages.facebook}>
                            <img src={'/svg/footer-facebook-logo.svg'} />
                          </a>
                        </Col>
                        <Col className="ar-social-logos">
                          <a href={pages.linkedIn}>
                            <img src={'/svg/footer-linkedin-logo.svg'} />
                          </a>
                        </Col>
                        <Col className="ar-social-logos">
                          <a href={pages.twitter}>
                            <img src={'/svg/footer-twitter-logo.svg'} />
                          </a>
                        </Col>
                      </Row>
                    </Row>
                    <Row className="mx-0 justify-content-between w-100">
                      <div className="ar-group-links">
                        <h3 className="ar-blue-6-text">{translate('common.footer.contactUs')}</h3>
                        <div>
                          <a className="ar-link">{translate('common.footer.sawgrass')}</a>
                        </div>
                        <div>
                          <a className="ar-link">{translate('common.footer.suite')}</a>
                        </div>
                        <div>
                          <a className="ar-link">{translate('common.footer.info')}</a>
                        </div>
                      </div>
                      <div className="ar-group-links">
                        <h3 className="ar-blue-6-text">{translate('common.footer.affiliates')}</h3>
                        <div>
                          <a className="ar-link" href={pages.access}>
                            {translate('common.footer.access')}
                          </a>
                        </div>
                        <div>
                          <a className="ar-link" href={pages.register}>
                            {translate('common.footer.registerAccount')}
                          </a>
                        </div>
                        <div>
                          <a className="ar-link">{translate('common.footer.promotions')}</a>
                        </div>
                      </div>
                      <div className="ar-group-links">
                        <h3 className="ar-blue-6-text">{translate('common.footer.clientAttention')}</h3>
                        <div>
                          <a className="ar-link">{translate('common.footer.adviser')}</a>
                        </div>
                        <div>
                          <a href={pages.faq} className="ar-link">
                            {translate('common.footer.faq')}
                          </a>
                        </div>
                        <div>
                          <a onClick={this.showSearchReservationModal} className="ar-link">
                            {translate('common.footer.searchReservation')}
                          </a>
                        </div>
                      </div>
                      <div className="ar-group-links">
                        <h3 className="ar-blue-6-text">{translate('common.footer.aboutUs')}</h3>
                        <div>
                          <a href={pages.cancellationPolicy} className="ar-link">
                            {translate('common.footer.politics')}
                          </a>
                        </div>
                        <div>
                          <a href={pages.cookies} className="ar-link">
                            {translate('common.footer.cookies')}
                          </a>
                        </div>
                        <div>
                          <a href={pages.privacyPolicy} className="ar-link">
                            {translate('common.footer.privacy')}
                          </a>
                        </div>
                      </div>
                    </Row>
                  </Row>
                ) : (
                  <Row className="justify-content-between ar-links">
                    <Col xl="2" lg="3" className="ar-group-logos">
                      <img className="ar-logo-footer" src={'/svg/autorenta-logo-footer.svg'} />
                      <Row className="justify-content-between pl-1">
                        <Col className="ar-social-logos">
                          <a href={pages.instagram}>
                            <img src={'/svg/footer-instagram-logo.svg'} />
                          </a>
                        </Col>
                        <Col className="ar-social-logos">
                          <a href={pages.whatsapp}>
                            <img src={'/svg/footer-whatsapp-logo.svg'} />
                          </a>
                        </Col>
                        <Col className="ar-social-logos">
                          <a href={pages.facebook}>
                            <img src={'/svg/footer-facebook-logo.svg'} />
                          </a>
                        </Col>
                        <Col className="ar-social-logos">
                          <a href={pages.linkedIn}>
                            <img src={'/svg/footer-linkedin-logo.svg'} />
                          </a>
                        </Col>
                        <Col className="ar-social-logos">
                          <a href={pages.twitter}>
                            <img src={'/svg/footer-twitter-logo.svg'} />
                          </a>
                        </Col>
                      </Row>
                    </Col>
                    <div className="ar-group-links">
                      <h3 className="ar-blue-6-text">{translate('common.footer.contactUs')}</h3>
                      <div>
                        <a className="ar-link">{translate('common.footer.sawgrass')}</a>
                      </div>
                      <div>
                        <a className="ar-link">{translate('common.footer.suite')}</a>
                      </div>
                      <div>
                        <a className="ar-link">{translate('common.footer.info')}</a>
                      </div>
                    </div>
                    <div className="ar-group-links">
                      <h3 className="ar-blue-6-text">{translate('common.footer.clientAttention')}</h3>
                      <div>
                        <a className="ar-link">{translate('common.footer.adviser')}</a>
                      </div>
                      <div>
                        <a href={pages.faq} className="ar-link">
                          {translate('common.footer.faq')}
                        </a>
                      </div>
                      <div>
                        <a onClick={this.showSearchReservationModal} className="ar-link">
                          {translate('common.footer.searchReservation')}
                        </a>
                      </div>
                    </div>
                    <div className="ar-group-links">
                      <h3 className="ar-blue-6-text">{translate('common.footer.affiliates')}</h3>
                      <div>
                        <a className="ar-link" href={pages.access}>
                          {translate('common.footer.access')}
                        </a>
                      </div>
                      <div>
                        <a className="ar-link" href={pages.register}>
                          {translate('common.footer.registerAccount')}
                        </a>
                      </div>
                      <div>
                        <a className="ar-link">{translate('common.footer.promotions')}</a>
                      </div>
                    </div>
                    <div className="ar-group-links">
                      <h3 className="ar-blue-6-text">{translate('common.footer.aboutUs')}</h3>
                      <div>
                        <a href={pages.cancellationPolicy} className="ar-link">
                          {translate('common.footer.politics')}
                        </a>
                      </div>
                      <div>
                        <a href={pages.cookies} className="ar-link">
                          {translate('common.footer.cookies')}
                        </a>
                      </div>
                      <div>
                        <a href={pages.privacyPolicy} className="ar-link">
                          {translate('common.footer.privacy')}
                        </a>
                      </div>
                    </div>
                  </Row>
                )}
              </Col>
            </Row>
          </div>
        </Row>
        <Row className="ar-footer-down bg-ar-blue-5 text-center align-items-center ml-0 mr-0">
          {!isMobile && !isTablet && !isSmallTablet ? (
            <div>
              <p>{translate('common.footer.copyRight')}</p>
              <img src="/svg/Stripe.svg" alt="" />
            </div>
          ) : (
            <p>{translate('common.footer.copyRight')}</p>
          )}
        </Row>
        <SearchReservationModal
          searchReservation={actions.searchReservation}
          showModal={this.state.showSearchReservationModal}
          hideModal={this.hideModal}
          translate={translate}
          isMobile={isMobile}
        />
      </div>
    );
  }
}

CustomFooter.propTypes = {
  dispatch: PropTypes.func,
  subscribeToNewsletter: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.generalReducer;
};

export default connect(mapStateToProps)(CustomFooter);
