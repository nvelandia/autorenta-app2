import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/step3Actions';
import * as generalActions from '../../actions/generalActions';
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
import { isServer } from '../../utils/helpers/isError';

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {
    if (!isServer()) {
      window.scrollTo(0, 0);
    }
    if (this.props.params) {
      const body = {
        passenger_lastname: this.props.params[0],
        reservation: this.props.params[1],
      };
      if (this.props.params[2]) {
        body.agencyOrCorporationId = this.props.params[2];
      }
      this.dispatch(generalActions.searchReservation(body));
    } else if (this.props.result.cars.length === 0) {
      redirectTo(pages.home);
    }
  };

  render() {
    const { translate } = this.props;

    if (this.props.reservation) {
      return (
        <>
          <CustomNavBar translate={translate} />
          <StepsHeader step={3} translate={translate} />
          <Row className="justify-content-center mt-4 ml-0 mr-0">
            <div className="ar-central-container d-flex">
              <Col>
                <ReservationState cancelReservation={actions.cancelReservation} translate={translate} />
                {!this.props.organization.name ? (
                  <Payment
                    loadCountries={actions.loadCountries}
                    payReservation={actions.payReservation}
                    translate={translate}
                  />
                ) : (
                  <AgencyOrOrganizationPayment loadCountries={actions.loadCountries} translate={translate} />
                )}
                <ReservationDetails translate={translate} />
              </Col>
            </div>
          </Row>
          <Banner translate={translate} />
          <CustomFooter translate={translate} />
          <UpToTop />
          <AutorentaLoader translate={translate} />
        </>
      );
    } else {
      return <AutorentaLoader translate={translate} />;
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
