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
import { pages } from '../../utils/helpers/redirectTo';
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
  };

  render() {
    this.dispatch(generalActions.hideLoader());
    const params = this.props.searchParams;
    return (
      <>
        <CustomNavBar />
        <StepsHeader
          step={3}
          step1URL={`${pages.step1}/${params.pickup_location}/${params.pickup_date}/${params.pickup_time}/${params.dropoff_location}/${params.dropoff_date}/${params.dropoff_time}/${params.passenger_country_id}/${params.passenger_age}/${params.vehicle_type}`}
        />
        <Row className="justify-content-center mt-4 ml-0 mr-0">
          <div className="ar-central-container d-flex">
            <Col>
              <ReservationState cancelReservation={actions.cancelReservation} />
              {!this.props.organization.name ? (
                <Payment loadCountries={actions.loadCountries} />
              ) : (
                <AgencyOrOrganizationPayment loadCountries={actions.loadCountries} />
              )}
              <ReservationDetails />
            </Col>
          </div>
        </Row>
        <Banner />
        <CustomFooter />
        <UpToTop />
        <AutorentaLoader />
      </>
    );
  }
}

Step3.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step3Reducer;
};

export default connect(mapStateToProps)(Step3);
