import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/step3Actions';
import * as generalActions from '../../actions/generalActions';
import * as step2Actions from '../../actions/step2Actions';
import CustomNavBar from '../Components/Molecules/Navbars/CustomNavBar';
import CustomFooter from '../Components/Molecules/Footers/CustomFooter';
import Banner from '../Components/Molecules/banners/Banner';
import AutorentaLoader from '../Components/Molecules/Loaders/AutorentaLoader';
import UpToTop from '../Components/Atoms/UpToTop';
import StepsHeader from '../Components/Molecules/Headers/StepsHeader';
import { Col, Row } from 'reactstrap';
import ReservationState from '../Components/Organism/Step3/ReservationState';
import Payment from '../Components/Organism/Step3/Payment';
import ReservationDetails from '../Components/Organism/Step3/ReservationDetails';
import { pages, redirectTo } from '../../utils/helpers/redirectTo';
import AgencyOrOrganizationPayment from '../Components/Organism/Step3/AgencyOrOrganizationPayment';
import { isMobile, isServer, isSmallTablet, isTablet } from '../../utils/helpers/isError';
import SuccessNotification from '../Components/Molecules/Notifications/SuccessNotification';
import * as generalAction from '../../actions/generalActions';

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isTablet: false,
      isSmallTablet: false,
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  componentDidMount() {
    if (isMobile()) {
      this.setState({ isMobile: true });
    }
    if (isTablet()) {
      this.setState({ isTablet: true });
    }
    if (isSmallTablet()) {
      this.setState({ isSmallTablet: true });
    }
    if (!isServer()) {
      window.addEventListener('resize', () => {
        if (isMobile()) {
          this.setState({ isMobile: true, isTablet: false, isSmallTablet: false });
        } else if (isTablet()) {
          this.setState({ isMobile: false, isTablet: true, isSmallTablet: false });
        } else if (isSmallTablet()) {
          this.setState({ isMobile: false, isTablet: false, isSmallTablet: true });
        } else {
          this.setState({ isMobile: false, isTablet: false, isSmallTablet: false });
        }
      });
    }
  }

  componentWillUnmount() {
    if (!isServer()) {
      window.removeEventListener('resize', null);
    }
  }

  handleOnLoad = () => {
    if (!isServer()) {
      this.dispatch(generalActions.addPageToHistory(window.location.pathname));
      window.scrollTo(0, 0);
      if (this.props.params) {
        const body = {
          passenger_lastname: this.props.params.lastname,
          reservation: this.props.params.code,
        };
        if (this.props.params.partner_code) {
          body.partner_code = this.props.params.partner_code;
        }
        this.dispatch(generalActions.searchReservation(body));
        this.dispatch(step2Actions.loadAirlines());
      } else if (this.props.result.cars.length === 0) {
        redirectTo(pages.home);
      }
    }
  };

  render() {
    const { translate } = this.props;
    const { isMobile, isSmallTablet, isTablet } = this.state;
    if (this.props.reservation) {
      return (
        <>
          <SuccessNotification translate={translate} />
          <CustomNavBar translate={translate} isMobile={isMobile} isSmallTablet={isSmallTablet} isTablet={isTablet} />
          <StepsHeader
            step={3}
            translate={translate}
            isMobile={isMobile}
            isTablet={isTablet}
            isSmallTablet={isSmallTablet}
          />
          {!isMobile && !isSmallTablet ? (
            <Row className="justify-content-center mt-4 ml-0 mr-0">
              <div className="ar-central-container d-flex justify-content-center">
                <Col className="step2-container">
                  <ReservationState
                    cancelReservation={actions.cancelReservation}
                    translate={translate}
                    isMobile={isMobile}
                    isTablet={isTablet}
                    isSmallTablet={isSmallTablet}
                  />
                  {this.props.reservation.sale_status_id !== 3 ? (
                    !this.props.reservation.organization ? (
                      <Payment
                        loadCountries={actions.loadCountries}
                        payReservation={actions.payReservation}
                        translate={translate}
                        isMobile={isMobile}
                        isTablet={isTablet}
                        isSmallTablet={isSmallTablet}
                      />
                    ) : (
                      <AgencyOrOrganizationPayment
                        loadCountries={actions.loadCountries}
                        payReservation={actions.payReservation}
                        translate={translate}
                        isMobile={isMobile}
                        isTablet={isTablet}
                        isSmallTablet={isSmallTablet}
                      />
                    )
                  ) : null}
                  <ReservationDetails
                    translate={translate}
                    isMobile={isMobile}
                    isTablet={isTablet}
                    isSmallTablet={isSmallTablet}
                  />
                </Col>
              </div>
            </Row>
          ) : (
            <Col className={`${isSmallTablet ? 'px-6' : 'px-4'}`}>
              <ReservationState
                cancelReservation={actions.cancelReservation}
                translate={translate}
                isMobile={isMobile}
                isTablet={isTablet}
                isSmallTablet={isSmallTablet}
              />
              {this.props.reservation.sale_status_id !== 3 ? (
                !this.props.reservation.organization ? (
                  <Payment
                    loadCountries={actions.loadCountries}
                    payReservation={actions.payReservation}
                    translate={translate}
                    isMobile={isMobile}
                    isTablet={isTablet}
                    isSmallTablet={isSmallTablet}
                  />
                ) : (
                  <AgencyOrOrganizationPayment
                    loadCountries={actions.loadCountries}
                    payReservation={actions.payReservation}
                    translate={translate}
                    isMobile={isMobile}
                    isTablet={isTablet}
                    isSmallTablet={isSmallTablet}
                  />
                )
              ) : null}
              <ReservationDetails
                translate={translate}
                isMobile={isMobile}
                isTablet={isTablet}
                isSmallTablet={isSmallTablet}
              />
            </Col>
          )}
          {!isMobile && !isTablet && !isSmallTablet ? <Banner translate={translate} /> : <></>}
          <CustomFooter
            subscribeToNewsletter={generalAction.subscribeNewsletter}
            translate={translate}
            isMobile={isMobile}
            isTablet={isTablet}
            isSmallTablet={isSmallTablet}
          />
          {!isMobile && !isTablet && !isSmallTablet ? <UpToTop /> : null}
          <AutorentaLoader translate={translate} />
        </>
      );
    } else {
      return (
        <div>
          <AutorentaLoader translate={translate} />
        </div>
      );
    }
  }
}

Step3.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step3Reducer;
};

export default connect(mapStateToProps)(Step3);
