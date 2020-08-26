import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as generalAction from '../../actions/generalActions';
import CustomNavBar from '../Components/Molecules/Navbars/CustomNavBar';
import CustomFooter from '../Components/Molecules/Footers/CustomFooter';
import Banner from '../Components/Molecules/banners/Banner';
import UpToTop from '../Components/Atoms/UpToTop';
import ImageHeader from '../Components/Molecules/Headers/ImageHeader';
import Breadcrumbs from '../Components/Atoms/Breadcrumbs';
import CardPromotion from '../Components/Organism/Promotion/CardPromotion';

const items = [
  {
    src: '/img/custom/promotion/promotion-top-header-bg.jpg',
    altText: '',
    caption: '',
    header: '',
    id: 1,
    style: 'ar-header-image',
  },
];

class Promotion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

  render() {
    return (
      <>
        <CustomNavBar />
        <ImageHeader items={items} />
        <Breadcrumbs />
        <CardPromotion />
        <Banner />
        <CustomFooter subscribeToNewsletter={generalAction.subscribeNewsletter} />
        <UpToTop />
      </>
    );
  }
}

Promotion.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(Promotion);
