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
import * as actions from '../../actions/promotionActions';
import * as homeActions from '../../actions/homeActions';
import { pages, redirectTo } from '../../utils/helpers/redirectTo';
import AutorentaLoader from '../Components/Molecules/Loaders/AutorentaLoader';

class Promotion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {
    if (this.props.params) {
      this.dispatch(homeActions.loadOffers(this.props.params[0]));
    } else {
      redirectTo(pages.home);
    }
    if (!isServer()) {
      window.scrollTo(0, 0);
    }
  };

  render() {
    const { translate } = this.props;
    if (this.props.offers.length !== 0) {
      const items = [
        {
          src: this.props.offers[0].image,
          altText: '',
          caption: '',
          header: '',
          id: 1,
        },
      ];
      return (
        <>
          <CustomNavBar translate={translate} />
          <ImageHeader items={items} translate={translate} />
          <Breadcrumbs translate={translate} title={this.props.offers[0].title} />
          <CardPromotion translate={translate} />
          <Banner translate={translate} />
          <CustomFooter subscribeToNewsletter={generalAction.subscribeNewsletter} translate={translate} />
          <UpToTop />
        </>
      );
    } else {
      return <AutorentaLoader translate={translate} />;
    }
  }
}

Promotion.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.promotionReducer;
};

export default connect(mapStateToProps)(Promotion);
