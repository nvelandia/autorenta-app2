import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as generalAction from '../../actions/generalActions';
import CustomNavBar from '../Components/Molecules/Navbars/CustomNavBar';
import CustomFooter from '../Components/Molecules/Footers/CustomFooter';
import Banner from '../Components/Molecules/banners/Banner';
import UpToTop from '../Components/Atoms/UpToTop';
import { isMobile, isServer, isSmallTablet, isTablet } from '../../utils/helpers/isError';
import StepsHeader from '../Components/Molecules/Headers/StepsHeader';
import Faq from '../Components/Organism/StaticsPages/Faq';
import Privacy from '../Components/Organism/StaticsPages/Privacy';

class StaticPages extends React.Component {
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
    const { translate, faq, cookies, privacy, cancellation } = this.props;
    const { isMobile, isSmallTablet, isTablet } = this.state;
    return (
      <>
        <CustomNavBar translate={translate} isMobile={isMobile} isSmallTablet={isSmallTablet} isTablet={isTablet} />
        <StepsHeader step={3} translate={translate} />
        {faq || cookies || cancellation ? (
          <Faq translate={translate} faq={faq} cookies={cookies} cancellation={cancellation} />
        ) : privacy ? (
          <Privacy translate={translate} />
        ) : (
          <div className="ar-error-container"></div>
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
      </>
    );
  }
}

StaticPages.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.generalReducer;
};

export default connect(mapStateToProps)(StaticPages);
