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

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

  render() {
    return (
      <>
        <CustomNavBar />
        <StepsHeader step={2} />
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
