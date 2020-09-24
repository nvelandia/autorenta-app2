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
import { isServer } from '../../utils/helpers/isError';

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {
    if (this.props.params) {
      const body = {
        pickup_location: this.props.params[0],
        pickup_date: this.props.params[1],
        pickup_time: this.props.params[2],
        dropoff_location: this.props.params[3],
        dropoff_date: this.props.params[4],
        dropoff_time: this.props.params[5],
        passenger_country_id: this.props.params[6],
        passenger_age: this.props.params[7],
        vehicle_type: this.props.params[8],
      };
      this.dispatch(actions.searchFleet(body));
    } else if (this.props.result.cars.length === 0) {
      redirectTo(pages.home);
    }
    if (!isServer()) {
      window.scrollTo(0, 0);
    }
  };

  render() {
    const { params } = this.props;
    return (
      <>
        <CustomNavBar />
        <StepsHeader
          step={1}
          step1URL={`${pages.step1}/${params[0]}/${params[1]}/${params[2]}/${params[3]}/${params[4]}/${params[5]}/${params[6]}/${params[7]}/${params[8]}`}
        />
        <ActiveSearch
          searchLocation={homeActions.searchLocation}
          modifySearchFleet={actions.modifySearchFleet}
          haveToCloseModifyModal={actions.haveToCloseModifyModal}
        />
        <Result
          addFitlter={actions.addFilter}
          orderByMinToMax={actions.orderByMinToMax}
          orderByMaxToMin={actions.orderByMaxToMin}
          toggleShowFeaturedFirst={actions.toggleShowFeaturedFirst}
          selectCar={actions.selectCar}
          showLoader={generalActions.showLoader}
        />
        <Banner />
        <CustomFooter />
        <UpToTop />
        <AutorentaLoader />
      </>
    );
  }
}

Step1.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(Step1);
