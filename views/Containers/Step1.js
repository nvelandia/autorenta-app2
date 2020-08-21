import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as homeActions from '../../actions/homeActions';
//import * as actions from '../../actions/searchActions';
import CustomNavBar from '../Components/Molecules/Navbars/CustomNavBar';
import CustomFooter from '../Components/Molecules/Footers/CustomFooter';
import Banner from '../Components/Molecules/banners/Banner';
import AutorentaLoader from '../Components/Molecules/Loaders/AutorentaLoader';
import UpToTop from '../Components/Atoms/UpToTop';
import StepsHeader from '../Components/Molecules/Headers/StepsHeader';
import ActiveSearch from '../Components/Organism/Step1/ActiveSearch';
import Result from '../Components/Organism/Step1/Result';
import { actionNames } from '../../utils/constants/actionConstants';

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
    //this.mock();
  }

  mock = () => {
    this.dispatch({
      type: actionNames.searchFleet,
      body: {
        pickup_location: 'MIA',
        pickup_date: '2020-08-22',
        pickup_time: '12:00',
        dropoff_location: 'MIA',
        dropoff_date: '2020-08-28',
        dropoff_time: '12:00',
        passenger_country_id: 1,
        passenger_age: 22,
      },
    });
  };

  render() {
    return (
      <>
        <CustomNavBar />
        <StepsHeader step={1} />
        <ActiveSearch searchLocation={homeActions.searchLocation} />
        <Result />
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
