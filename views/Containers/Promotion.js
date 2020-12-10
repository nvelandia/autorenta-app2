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
import { isMobile, isServer, isSmallTablet, isTablet } from '../../utils/helpers/isError';
import * as homeActions from '../../actions/homeActions';
import AutorentaLoader from '../Components/Molecules/Loaders/AutorentaLoader';
import GridPromotion from '../Components/Organism/Promotion/GridPromotion';

class Promotion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isTablet: false,
      isSmallTablet: false,
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {
    if (!isServer()) {
      window.scrollTo(0, 0);
      if (this.props.params) {
        this.dispatch(homeActions.loadOffers(this.props.params.id));
      }
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

  render() {
    const { translate } = this.props;
    const { isMobile, isSmallTablet, isTablet } = this.state;
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
          <CustomNavBar translate={translate} isMobile={isMobile} isSmallTablet={isSmallTablet} isTablet={isTablet} />
          <ImageHeader
            items={items}
            translate={translate}
            isMobile={isMobile}
            isSmallTablet={isSmallTablet}
            isTablet={isTablet}
          />
          {this.props.offers.length === 1 ? (
            <>
              <Breadcrumbs
                translate={translate}
                title={this.props.offers[0].title}
                isMobile={isMobile}
                isSmallTablet={isSmallTablet}
                isTablet={isTablet}
              />
              <CardPromotion
                translate={translate}
                isMobile={isMobile}
                isSmallTablet={isSmallTablet}
                isTablet={isTablet}
              />
            </>
          ) : (
            <>
              <Breadcrumbs
                translate={translate}
                title={translate('promotion.title')}
                isMobile={isMobile}
                isSmallTablet={isSmallTablet}
                isTablet={isTablet}
              />
              <GridPromotion
                translate={translate}
                isMobile={isMobile}
                isSmallTablet={isSmallTablet}
                isTablet={isTablet}
              />
            </>
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
          <AutorentaLoader translate={translate} />
        </>
      );
    } else {
      return (
        <div>
          <AutorentaLoader translate={translate} />
        </div>
      );
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
