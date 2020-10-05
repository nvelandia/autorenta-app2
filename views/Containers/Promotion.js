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
import { isServer } from '../../utils/helpers/isError';

class Promotion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {
    if (!isServer()) {
      window.scrollTo(0, 0);
    }
  };

  render() {
    const items = [
      {
        src: this.props.promotionSelected.image,
        altText: '',
        caption: '',
        header: '',
        id: 1,
        style: 'ar-header-image',
      },
    ];
    const { translate } = this.props;
    return (
      <>
        <CustomNavBar translate={translate} />
        <ImageHeader items={items} translate={translate} />
        <Breadcrumbs translate={translate} />
        <CardPromotion translate={translate} />
        <Banner translate={translate} />
        <CustomFooter subscribeToNewsletter={generalAction.subscribeNewsletter} translate={translate} />
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
