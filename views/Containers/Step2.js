import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/step2Actions';
import * as generalActions from '../../actions/generalActions';
import CustomNavBar from '../Components/Molecules/Navbars/CustomNavBar';
import CustomFooter from '../Components/Molecules/Footers/CustomFooter';
import Banner from '../Components/Molecules/banners/Banner';
import AutorentaLoader from '../Components/Molecules/Loaders/AutorentaLoader';
import UpToTop from '../Components/Atoms/UpToTop';
import StepsHeader from '../Components/Molecules/Headers/StepsHeader';
import CarSelected from '../Components/Organism/Step2/CarSelected';
import Details from '../Components/Organism/Step2/Details';
import { Row, Col } from 'reactstrap';
import LocationSelected from '../Components/Organism/Step2/LocationSelected';
import OptionalEquipment from '../Components/Organism/Step2/OptionalEquipment';
import ClientType from '../Components/Organism/Step2/ClientType';
import Passenger from '../Components/Organism/Step2/Passenger';
import AgencyOrCorporation from '../Components/Organism/Step2/AgencyOrCorporation';
import { pages } from '../../utils/helpers/redirectTo';

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {
    this.dispatch(actions.loadAirlines());
  };

  render() {
    this.dispatch(generalActions.hideLoader());
    const params = this.props.searchParams;
    return (
      <>
        <CustomNavBar />
        <StepsHeader
          step={2}
          step1URL={`${pages.step1}/${params.pickup_location}/${params.pickup_date}/${params.pickup_time}/${params.dropoff_location}/${params.dropoff_date}/${params.dropoff_time}/${params.passenger_country_id}/${params.passenger_age}/${params.vehicle_type}`}
        />
        <Row className="justify-content-center mt-4 ml-0 mr-0">
          <div className="ar-central-container d-flex">
            <Col>
              <CarSelected car={this.props.carSelected} />
              <div className="d-flex justify-content-between">
                <LocationSelected location={this.props.location.pickup} title={'oficina de inicio'} />
                <LocationSelected location={this.props.location.dropoff} title={'oficina de devolución'} />
              </div>
              <OptionalEquipment addOptionalEquipment={actions.addOptionalEquipment} />
              <ClientType
                clearValidateIdError={actions.clearValidateIdError}
                selectClientType={actions.selectClientType}
                validateId={actions.validateId}
              />
              {this.props.organization.organization_id ? (
                <AgencyOrCorporation
                  updateFormData={actions.updateFormData}
                  validatePromotion={actions.validatePromotion}
                />
              ) : null}
              {this.props.clientType === 'Pasajero / Cliente directo' ? (
                <Passenger updateFormData={actions.updateFormData} />
              ) : null}
            </Col>
            <div className="ar-card-details">
              <Details
                createReservationSuccessfully={actions.createReservationSuccessfully}
                changePlan={actions.changePlan}
                confirmReservation={actions.confirmReservation}
              />
            </div>
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

Step2.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step2Reducer;
};

export default connect(mapStateToProps)(Step2);
