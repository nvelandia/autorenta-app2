import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/homeActions';
import CustomNavBar from '../Components/Molecules/Navbars/CustomNavBar';
import CarouselHeader from '../Components/Molecules/Headers/CarouselHeader';
import MakeYourReservation from '../Components/Organism/Home/MakeYourReservation';
import Main from '../Layouts/Main';
import Offer from '../Components/Organism/Home/Offer';
import CustomFooter from '../Components/Molecules/Footers/CustomFooter';
import Banner from '../Components/Molecules/banners/Banner';
import AutorentaLoader from '../Components/Molecules/Loaders/AutorentaLoader';
import UpToTop from '../Components/Atoms/UpToTop';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

  render() {
    return (
      <>
        <CustomNavBar />
        <CarouselHeader />
        <MakeYourReservation searchLocation={actions.searchLocation} />
        <Offer />
        <Banner />
        <CustomFooter />
        <UpToTop />
        <AutorentaLoader />
      </>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(Home);
