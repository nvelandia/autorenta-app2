import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/homeActions';
import * as generalAction from '../../actions/generalActions';
import CustomNavBar from '../Components/Molecules/Navbars/CustomNavBar';
import CarouselHeader from '../Components/Molecules/Headers/CarouselHeader';
import MakeYourReservation from '../Components/Organism/Home/MakeYourReservation';
import Main from '../Layouts/Main';
import Offer from '../Components/Organism/Home/Offer';
import CustomFooter from '../Components/Molecules/Footers/CustomFooter';
import Banner from '../Components/Molecules/banners/Banner';
import AutorentaLoader from '../Components/Molecules/Loaders/AutorentaLoader';
import UpToTop from '../Components/Atoms/UpToTop';
import { isMobile, isServer } from '../../utils/helpers/isError';
import * as generalActions from '../../actions/generalActions';

// const items = [
//   {
//     src: '/img/custom/slide-home-1.jpg',
//     altText: '',
//     caption: '',
//     header: '',
//     id: 1,
//     style: 'ar-header-image',
//   },
//   {
//     src: '/img/custom/slide-home-2.jpg',
//     altText: '',
//     caption: '',
//     header: '',
//     id: 2,
//     style: 'ar-header-image',
//   },
//   {
//     src: '/img/custom/slide-home-3.jpg',
//     altText: '',
//     caption: '',
//     header: '',
//     id: 3,
//     style: 'ar-header-image',
//   },
// ];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {
    this.dispatch(generalAction.hideLoader());
    this.dispatch(actions.loadBanners());
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
    const { translate } = this.props;
    const isMobile = this.state.isMobile;
    let items = [];
    if (this.props.banners.length !== 0) {
      items = this.props.banners;
    }
    return (
      <>
        <CustomNavBar translate={translate} isMobile={isMobile} />
        <CarouselHeader items={items} isMobile={isMobile} translate={translate} />
        <MakeYourReservation
          searchLocation={actions.searchLocation}
          loadCountries={actions.loadCountries}
          showLoader={generalAction.showLoader}
          translate={translate}
          isMobile={isMobile}
          loadLocation={actions.loadLocations}
        />
        <Offer loadOffers={actions.loadOffers} translate={translate} isMobile={isMobile} />
        {!isMobile ? <Banner translate={translate} /> : <></>}
        <CustomFooter
          subscribeToNewsletter={generalAction.subscribeNewsletter}
          translate={translate}
          isMobile={isMobile}
        />
        {!isMobile ? <UpToTop /> : null}
        <AutorentaLoader translate={translate} />
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
