import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as homeActions from '../../actions/homeActions';
import * as generalActions from '../../actions/generalActions';
import * as actions from '../../actions/step1Actions';
import CustomNavBar from '../Components/Molecules/Navbars/CustomNavBar';
import CustomFooter from '../Components/Molecules/Footers/CustomFooter';
import Banner from '../Components/Molecules/banners/Banner';
import AutorentaLoader from '../Components/Molecules/Loaders/AutorentaLoader';
import UpToTop from '../Components/Atoms/UpToTop';
import StepsHeader from '../Components/Molecules/Headers/StepsHeader';
import ActiveSearch from '../Components/Organism/Step1/ActiveSearch';
import Result from '../Components/Organism/Step1/Result';
import { pages } from '../../utils/helpers/redirectTo';
import { isMobile, isServer, isSmallTablet, isTablet } from '../../utils/helpers/isError';
import { Row } from 'reactstrap';
import * as generalAction from '../../actions/generalActions';

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickup: {},
      dropoff: {},
      isMobile: false,
      isTablet: false,
      isSmallTablet: false,
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = async () => {
    if (this.props.history[this.props.history.length - 1] !== '/step2') {
      this.dispatch(generalActions.showLoader('searching'));
    }
    if (!isServer() && this.props.params) {
      let pickup = {};
      let dropoff = {};
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ placeId: this.props.params.pickup_place_id }, (result, status) => {
        pickup = result[0];
        for (const component of pickup.address_components) {
          if (component.types.includes('country')) {
            pickup.countryCode = component.short_name;
          }
        }
        this.setState({ pickup });
      });
      geocoder.geocode({ placeId: this.props.params.dropoff_place_id }, (result, status) => {
        dropoff = result[0];
        for (const component of dropoff.address_components) {
          if (component.types.includes('country')) {
            dropoff.countryCode = component.short_name;
          }
        }
        this.setState({ dropoff });
      });
    }
    if (!isServer()) {
      this.dispatch(generalActions.addPageToHistory(window.location.pathname));
      window.scrollTo(0, 0);
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
    }
  }

  handleSearch = () => {
    if (
      this.props.params &&
      this.props.history[this.props.history.length - 1] !== '/step2' &&
      this.state.pickup.countryCode &&
      this.state.dropoff.countryCode &&
      !this.props.filters.bags
    ) {
      const body = {
        pickup_date: this.props.params.pickup_date,
        pickup_time: this.props.params.pickup_time
          ? this.props.params.pickup_time.slice(0, 5)
          : this.props.params.pickup_time,
        dropoff_date: this.props.params.dropoff_date,
        dropoff_time: this.props.params.dropoff_time,
        passenger_country_id: this.props.params.passenger_country_id,
        passenger_age: this.props.params.passenger_age,
        vehicle_type: this.props.params.vehicle_type,
        pickup_location: 'MIA', //Hardcodeado solamente en esta primer llamada
        dropoff_location: 'MIA', //Hardcodeado solamente en esta primer llamada
        pickup_latitude: this.state.pickup.geometry.location.lat().toString(),
        pickup_longitude: this.state.pickup.geometry.location.lng().toString(),
        dropoff_latitude: this.state.dropoff.geometry.location.lat().toString(),
        dropoff_longitude: this.state.dropoff.geometry.location.lng().toString(),
        pickup_country_code: this.state.pickup.countryCode,
        dropoff_country_code: this.state.dropoff.countryCode,
      };
      const googleLocation = { pickup: this.state.pickup, dropoff: this.state.dropoff };
      const placesId = {
        pickup_place_id: this.props.params.pickup_place_id,
        dropoff_place_id: this.props.params.dropoff_place_id,
      };
      this.dispatch(actions.searchFleet(body, googleLocation, placesId));
    }
  };

  render() {
    const { params, translate } = this.props;
    const { isMobile, isSmallTablet, isTablet } = this.state;
    this.handleSearch();
    return (
      <>
        <CustomNavBar translate={translate} isMobile={isMobile} isSmallTablet={isSmallTablet} isTablet={isTablet} />
        <StepsHeader
          step={1}
          step1URL={
            params
              ? `${pages.step1}?pickup_place_id=${params.pickup_place_id}&dropoff_place_id=${params.dropoff_place_id}&pickup_date=${params.pickup_date}&dropoff_date=${params.dropoff_date}&pickup_time=${params.pickup_time}&dropoff_time=${params.dropoff_time}&passenger_country_id=${params.passenger_country_id}&passenger_age=${params.passenger_age}&vehicle_type=${params.vehicle_type}`
              : ''
          }
          translate={translate}
          isMobile={isMobile}
          isSmallTablet={isSmallTablet}
          isTablet={isTablet}
          showLoader={() => this.dispatch(generalActions.showLoader())}
        />
        <ActiveSearch
          searchLocation={homeActions.searchLocation}
          modifySearchFleet={actions.modifySearchFleet}
          haveToCloseModifyModal={actions.haveToCloseModifyModal}
          translate={translate}
          isMobile={isMobile}
          isSmallTablet={isSmallTablet}
          isTablet={isTablet}
          showLoader={generalActions.showLoader}
          loadLocation={homeActions.loadLocations}
        />
        {this.props.result.cars.length !== 0 ? (
          <Result
            addFitlter={actions.addFilter}
            orderByMinToMax={actions.orderByMinToMax}
            orderByMaxToMin={actions.orderByMaxToMin}
            toggleShowFeaturedFirst={actions.toggleShowFeaturedFirst}
            selectCar={actions.selectCar}
            showLoader={generalActions.showLoader}
            translate={translate}
            isMobile={isMobile}
            isSmallTablet={isSmallTablet}
            isTablet={isTablet}
            seeBaseRateDetails={actions.seeBaseRateDetails}
            closeDetailsModal={actions.closeDetailsModal}
          />
        ) : (
          <Row className="m-4 justify-content-center">
            <div className="ar-central-container h-800" />
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

Step1.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { history } = state.generalReducer;
  return { ...state.searchReducer, history };
};

export default connect(mapStateToProps)(Step1);
