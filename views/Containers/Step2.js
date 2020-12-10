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
import { pages, redirectTo } from '../../utils/helpers/redirectTo';
import { isMobile, isServer, isSmallTablet, isTablet } from '../../utils/helpers/isError';
import * as generalAction from '../../actions/generalActions';
import Requirements from '../Components/Organism/Step2/Requirements';

class Step2 extends React.Component {
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

  beforeClose = (event) => {
    var confirmationMessage = 'o/';

    event.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
    return confirmationMessage;
  };

  handleOnLoad = () => {
    this.dispatch(generalActions.hideLoader());
    this.dispatch(actions.loadAirlines());
    if (!isServer()) {
      this.dispatch(generalActions.addPageToHistory(window.location.pathname));
      window.scrollTo(0, 0);
      if (!this.props.carSelected || !this.props.location) {
        redirectTo(pages.error);
      }
      window.addEventListener('beforeunload', this.beforeClose);
    }
  };

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
      window.removeEventListener('beforeunload', this.beforeClose);
    }
  }

  render() {
    const params = this.props.searchParams;
    const { translate } = this.props;
    const { isMobile, isSmallTablet, isTablet } = this.state;
    if (!this.props.carSelected || !this.props.location) {
      return <></>;
    }
    return (
      <>
        <CustomNavBar translate={translate} isMobile={isMobile} isSmallTablet={isSmallTablet} isTablet={isTablet} />
        <StepsHeader
          step={2}
          step1URL={`${pages.step1}?pickup_place_id=${params.pickup_place_id}&dropoff_place_id=${params.dropoff_place_id}&pickup_date=${params.pickup_date}&dropoff_date=${params.dropoff_date}&pickup_time=${params.pickup_time}&dropoff_time=${params.dropoff_time}&passenger_country_id=${params.passenger_country_id}&passenger_age=${params.passenger_age}&vehicle_type=${params.vehicle_type}`}
          translate={translate}
          isMobile={isMobile}
          isSmallTablet={isSmallTablet}
          isTablet={isTablet}
          showLoader={() => this.dispatch(generalActions.showLoader())}
        />
        {!isMobile && !isSmallTablet ? (
          <Row className="justify-content-center mt-4 ml-0 mr-0">
            <div className="ar-central-container d-flex justify-content-center">
              <Col className="step2-container">
                <CarSelected
                  car={this.props.carSelected}
                  translate={translate}
                  isMobile={isMobile}
                  isSmallTablet={isSmallTablet}
                  isTablet={isTablet}
                />
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
                  addExtra={actions.addExtra}
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
                    isTablet={isTablet}
                    isSmallTablet={isSmallTablet}
                  />
                ) : null}
                {this.props.clientType === translate('step2.clientType.passenger') ? (
                  <Passenger
                    updateFormData={actions.updateFormData}
                    validatePromotion={actions.validatePromotion}
                    clearValidateIdError={actions.clearValidateIdError}
                    translate={translate}
                    isMobile={isMobile}
                    isTablet={isTablet}
                    isSmallTablet={isSmallTablet}
                  />
                ) : null}
                <Requirements
                  translate={translate}
                  isMobile={isMobile}
                  isSmallTablet={isSmallTablet}
                  isTablet={isTablet}
                />
                {isTablet ? (
                  <div className="ar-card-details p-0 w-100">
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
                      isTablet={isTablet}
                      isSmallTablet={isSmallTablet}
                    />
                  </div>
                ) : null}
              </Col>
              {!isTablet ? (
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
              ) : null}
            </div>
          </Row>
        ) : (
          <Row className="m-0 justify-content-center">
            <Col className="px-3 step2-container ">
              <CarSelected
                car={this.props.carSelected}
                translate={translate}
                isMobile={isMobile}
                isSmallTablet={isSmallTablet}
                isTablet={isTablet}
              />
              <LocationSelected
                location={this.props.location.pickup}
                title={translate('step3.reservationDetails.pickUpTitle')}
                officeLocation={this.props.carSelected.pickup_office}
                translate={translate}
              />
              <LocationSelected
                location={this.props.location.dropoff}
                title={translate('step3.reservationDetails.dropOffTitle')}
                officeLocation={this.props.carSelected.dropoff_office}
                translate={translate}
              />
              <OptionalEquipment
                addOptionalEquipment={actions.addOptionalEquipment}
                translate={translate}
                isMobile={isMobile}
                addExtra={actions.addExtra}
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
                  isTablet={isTablet}
                  isSmallTablet={isSmallTablet}
                />
              ) : null}
              {this.props.clientType === translate('step2.clientType.passenger') ? (
                <Passenger
                  updateFormData={actions.updateFormData}
                  validatePromotion={actions.validatePromotion}
                  clearValidateIdError={actions.clearValidateIdError}
                  translate={translate}
                  isMobile={isMobile}
                  isTablet={isTablet}
                  isSmallTablet={isSmallTablet}
                />
              ) : null}
              <Requirements
                translate={translate}
                isMobile={isMobile}
                isSmallTablet={isSmallTablet}
                isTablet={isTablet}
              />
              <div className="ar-card-details">
                <Details
                  createReservationSuccessfully={actions.createReservationSuccessfully}
                  changePlan={actions.changePlan}
                  confirmReservation={actions.confirmReservation}
                  validatePromotion={actions.validatePromotion}
                  setErrors={actions.setErrors}
                  translate={translate}
                  isMobile={isMobile}
                  isTablet={isTablet}
                  isSmallTablet={isSmallTablet}
                  showLoader={generalActions.showLoader}
                  clearValidateIdError={actions.clearValidateIdError}
                />
              </div>
            </Col>
          </Row>
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
