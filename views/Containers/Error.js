import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as generalAction from '../../actions/generalActions';
import CustomNavBar from '../Components/Molecules/Navbars/CustomNavBar';
import CustomFooter from '../Components/Molecules/Footers/CustomFooter';
import AutorentaLoader from '../Components/Molecules/Loaders/AutorentaLoader';
import UpToTop from '../Components/Atoms/UpToTop';
import { isMobile, isServer, isSmallTablet, isTablet } from '../../utils/helpers/isError';
import * as generalActions from '../../actions/generalActions';
import StepsHeader from '../Components/Molecules/Headers/StepsHeader';
import { Button } from 'reactstrap';
import { pages as page, redirectTo } from '../../utils/helpers/redirectTo';

class Error extends React.Component {
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
    this.dispatch(generalAction.hideLoader());
    if (!isServer()) {
      this.dispatch(generalActions.addPageToHistory(window.location.pathname));
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

  handleOnClick = () => {
    redirectTo(page.home);
  };

  render() {
    const { translate, params } = this.props;
    const { isMobile, isSmallTablet, isTablet } = this.state;
    let message = translate('error.message');
    let message2 = null;
    let img = '/img/custom/Error/bug-image.png';
    if (params) {
      if (params.code === '1') {
        message = translate('step1.resultMessage');
      }
      if (params.code === '2') {
        message = translate('error.access1_1');
        message2 = translate('error.access1_2');
        img = '/img/custom/Error/bug-search-image.png';
      }
      if (params.code === '3') {
        message = translate('error.canceled');
        img = '/img/custom/Error/bug-search-image.png';
      }
    }
    console.log(params);
    return (
      <>
        <CustomNavBar translate={translate} isMobile={isMobile} isSmallTablet={isSmallTablet} isTablet={isTablet} />
        <StepsHeader step={3} translate={translate} />
        <div className="ar-error-container">
          <img src={img} alt="" />
          <div className="ar-central-container d-flex justify-content-center">
            <h1>{translate('common.error.attention')}</h1>
          </div>
          <div className="ar-central-container d-flex justify-content-center mb-4">
            {!message2 ? (
              <h3>{message}</h3>
            ) : (
              <div className="d-flex flex-column align-items-center">
                <h3 className="mb-0">{message}</h3>
                <h3 className="mb-0">{message2}</h3>
              </div>
            )}
          </div>
          <div className="ar-register-button-container">
            <Button className=" btn-icon ar-round-button" color="red-0" onClick={this.handleOnClick}>
              <span className="nav-link-inner--text">{translate('error.goHome')}</span>
            </Button>
          </div>
        </div>
        <CustomFooter
          subscribeToNewsletter={generalAction.subscribeNewsletter}
          translate={translate}
          isMobile={isMobile}
          isTablet={isTablet}
          isSmallTablet={isSmallTablet}
        />
        {!isMobile && !isTablet && !isSmallTablet ? <UpToTop /> : null}

        <div>
          <AutorentaLoader translate={translate} />
        </div>
      </>
    );
  }
}

Error.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.generalReducer;
};

export default connect(mapStateToProps)(Error);
