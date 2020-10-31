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
import { vehicleTypes } from '../../utils/constants/vehicleTypes';
import { pages, redirectTo } from '../../utils/helpers/redirectTo';
import { isMobile, isServer } from '../../utils/helpers/isError';
import { Row } from 'reactstrap';
import MakeYourReservation from '../Components/Organism/Home/MakeYourReservation';

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickup: {},
      dropoff: {},
      isMobile: false,
      searched: false,
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = async () => {
    this.dispatch(generalActions.showLoader());
    if (!isServer()) {
      let pickup = {};
      let dropoff = {};
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ placeId: this.props.params[0] }, (result, status) => {
        pickup = result[0];
        console.log(pickup);
        for (const component of pickup.address_components) {
          if (component.types.includes('country')) {
            pickup.countryCode = component.short_name;
          }
        }
        this.setState({ pickup });
      });
      geocoder.geocode({ placeId: this.props.params[3] }, (result, status) => {
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
    if (!this.state.isMobile && isMobile()) {
      this.setState({ isMobile: true });
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
        pickup_date: this.props.params[1],
        pickup_time: this.props.params[2] ? this.props.params[2].slice(0, 5) : this.props.params[2],
        dropoff_date: this.props.params[4],
        dropoff_time: this.props.params[5],
        passenger_country_id: this.props.params[6],
        passenger_age: this.props.params[7],
        vehicle_type: this.props.params[8],
        pickup_location: 'MIA',
        dropoff_location: 'MIA',
        pickup_latitude: this.state.pickup.geometry.location.lat().toString(),
        pickup_longitude: this.state.pickup.geometry.location.lng().toString(),
        dropoff_latitude: this.state.dropoff.geometry.location.lat().toString(),
        dropoff_longitude: this.state.dropoff.geometry.location.lng().toString(),
        pickup_country_code: this.state.pickup.countryCode,
        dropoff_country_code: this.state.dropoff.countryCode,
      };
      const googleLocation = { pickup: this.state.pickup, dropoff: this.state.dropoff };
      const placesId = { pickup_place_id: this.props.params[0], dropoff_place_id: this.props.params[3] };
      this.dispatch(actions.searchFleet(body, googleLocation, placesId));
    }
  };

  render() {
    const { params, translate } = this.props;
    const isMobile = this.state.isMobile;
    this.handleSearch();
    return (
      <>
        <CustomNavBar translate={translate} isMobile={isMobile} />
        <StepsHeader
          step={1}
          step1URL={`${pages.step1}/${params[0]}/${params[1]}/${params[2]}/${params[3]}/${params[4]}/${params[5]}/${params[6]}/${params[7]}/${params[8]}`}
          translate={translate}
          isMobile={isMobile}
          showLoader={() => this.dispatch(generalActions.showLoader())}
        />
        <ActiveSearch
          searchLocation={homeActions.searchLocation}
          modifySearchFleet={actions.modifySearchFleet}
          haveToCloseModifyModal={actions.haveToCloseModifyModal}
          translate={translate}
          isMobile={isMobile}
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
            seeBaseRateDetails={actions.seeBaseRateDetails}
            closeDetailsModal={actions.closeDetailsModal}
          />
        ) : this.props.result.carFeatures.length !== 0 ? (
          <Row className="m-4 justify-content-center">
            <div className="ar-central-container d-flex justify-content-center">
              <h1>{translate('step1.resultMessage')}</h1>
            </div>
          </Row>
        ) : (
          <Row className="m-4 justify-content-center">
            <div className="ar-central-container d-flex justify-content-center mb-4">
              <h1>{translate('common.loader.text')}</h1>
            </div>
          </Row>
        )}
        {!isMobile ? <Banner translate={translate} /> : <></>}
        <CustomFooter translate={translate} isMobile={isMobile} />
        <UpToTop />
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
