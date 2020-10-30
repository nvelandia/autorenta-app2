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
import { isMobile, isServer } from '../../utils/helpers/isError';

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {
    this.dispatch(generalActions.hideLoader());
    this.dispatch(actions.loadAirlines());
    if (!isServer()) {
      this.dispatch(generalActions.addPageToHistory(window.location.pathname));
      window.scrollTo(0, 0);
    }
  };

  componentDidMount() {
    if (!this.state.isMobile && isMobile()) {
      this.setState({ isMobile: true });
    }
  }

  render() {
    const params = this.props.searchParams;
    const { translate } = this.props;
    const isMobile = this.state.isMobile;

    return (
      <>
        <CustomNavBar translate={translate} isMobile={isMobile} />
        <StepsHeader
          step={2}
          step1URL={`${pages.step1}/${params.pickup_place_id}/${params.pickup_date}/${params.pickup_time}/${params.dropoff_place_id}/${params.dropoff_date}/${params.dropoff_time}/${params.passenger_country_id}/${params.passenger_age}/${params.vehicle_type}`}
          translate={translate}
          isMobile={isMobile}
          showLoader={() => this.dispatch(generalActions.showLoader())}
        />
        {!isMobile ? (
          <Row className="justify-content-center mt-4 ml-0 mr-0">
            <div className="ar-central-container d-flex">
              <Col>
                <CarSelected car={this.props.carSelected} translate={translate} isMobile={isMobile} />
                <div className="d-flex justify-content-between">
                  <LocationSelected
                    location={this.props.location.pickup}
                    title={'oficina de inicio'}
                    officeLocation={this.props.carSelected.pickup_office}
                    translate={translate}
                  />
                  <LocationSelected
                    location={this.props.location.dropoff}
                    title={'oficina de devolución'}
                    officeLocation={this.props.carSelected.dropoff_office}
                    translate={translate}
                  />
                </div>
                <OptionalEquipment
                  addOptionalEquipment={actions.addOptionalEquipment}
                  translate={translate}
                  isMobile={isMobile}
                />
                <ClientType
                  clearValidateIdError={actions.clearValidateIdError}
                  selectClientType={actions.selectClientType}
                  validateId={actions.validateId}
                  translate={translate}
                  loadDiscount={actions.loadDiscount}
                />
                {this.props.organization.organization_id ? (
                  <AgencyOrCorporation
                    updateFormData={actions.updateFormData}
                    validatePromotion={actions.validatePromotion}
                    translate={translate}
                    clearValidateIdError={actions.clearValidateIdError}
                    isMobile={isMobile}
                  />
                ) : null}
                {this.props.clientType === 'Pasajero / Cliente directo' ? (
                  <Passenger
                    updateFormData={actions.updateFormData}
                    validatePromotion={actions.validatePromotion}
                    clearValidateIdError={actions.clearValidateIdError}
                    translate={translate}
                    isMobile={isMobile}
                  />
                ) : null}
              </Col>
              <div className="ar-card-details">
                <Details
                  createReservationSuccessfully={actions.createReservationSuccessfully}
                  changePlan={actions.changePlan}
                  confirmReservation={actions.confirmReservation}
                  validatePromotion={actions.validatePromotion}
                  setErrors={actions.setErrors}
                  translate={translate}
                  showLoader={generalActions.showLoader}
                  clearValidateIdError={actions.clearValidateIdError}
                  isMobile={isMobile}
                />
              </div>
            </div>
          </Row>
        ) : (
          <Col className="px-3">
            <CarSelected car={this.props.carSelected} translate={translate} isMobile={isMobile} />
            <LocationSelected
              location={this.props.location.pickup}
              title={'oficina de inicio'}
              officeLocation={this.props.carSelected.pickup_office}
              translate={translate}
            />
            <LocationSelected
              location={this.props.location.dropoff}
              title={'oficina de devolución'}
              officeLocation={this.props.carSelected.dropoff_office}
              translate={translate}
            />
            <OptionalEquipment
              addOptionalEquipment={actions.addOptionalEquipment}
              translate={translate}
              isMobile={isMobile}
            />
            <ClientType
              clearValidateIdError={actions.clearValidateIdError}
              selectClientType={actions.selectClientType}
              validateId={actions.validateId}
              translate={translate}
              loadDiscount={actions.loadDiscount}
            />
            {this.props.organization.organization_id ? (
              <AgencyOrCorporation
                updateFormData={actions.updateFormData}
                validatePromotion={actions.validatePromotion}
                translate={translate}
                clearValidateIdError={actions.clearValidateIdError}
                isMobile={isMobile}
              />
            ) : null}
            {this.props.clientType === 'Pasajero / Cliente directo' ? (
              <Passenger
                updateFormData={actions.updateFormData}
                validatePromotion={actions.validatePromotion}
                clearValidateIdError={actions.clearValidateIdError}
                translate={translate}
                isMobile={isMobile}
              />
            ) : null}
            <div className="ar-card-details">
              <Details
                createReservationSuccessfully={actions.createReservationSuccessfully}
                changePlan={actions.changePlan}
                confirmReservation={actions.confirmReservation}
                validatePromotion={actions.validatePromotion}
                setErrors={actions.setErrors}
                translate={translate}
                isMobile={isMobile}
                showLoader={generalActions.showLoader}
                clearValidateIdError={actions.clearValidateIdError}
              />
            </div>
          </Col>
        )}
        {!isMobile ? <Banner translate={translate} /> : <></>}
        <CustomFooter translate={translate} isMobile={isMobile} />
        <UpToTop />
        <AutorentaLoader translate={translate} isMobile={isMobile} />
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
