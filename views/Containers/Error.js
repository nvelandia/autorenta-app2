import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/homeActions';
import * as generalAction from '../../actions/generalActions';
import CustomNavBar from '../Components/Molecules/Navbars/CustomNavBar';
import CarouselHeader from '../Components/Molecules/Headers/CarouselHeader';
import CustomFooter from '../Components/Molecules/Footers/CustomFooter';
import Banner from '../Components/Molecules/banners/Banner';
import AutorentaLoader from '../Components/Molecules/Loaders/AutorentaLoader';
import UpToTop from '../Components/Atoms/UpToTop';
import { isMobile, isServer } from '../../utils/helpers/isError';
import * as generalActions from '../../actions/generalActions';
import StepsHeader from '../Components/Molecules/Headers/StepsHeader';
import { Button, Row } from 'reactstrap';
import { pages as page, redirectTo } from '../../utils/helpers/redirectTo';

const items = [
  {
    src: '/img/custom/slide-home-1.jpg',
    altText: '',
    caption: '',
    header: '',
    id: 1,
    style: 'ar-header-image',
  },
  {
    src: '/img/custom/slide-home-2.jpg',
    altText: '',
    caption: '',
    header: '',
    id: 2,
    style: 'ar-header-image',
  },
  {
    src: '/img/custom/slide-home-3.jpg',
    altText: '',
    caption: '',
    header: '',
    id: 3,
    style: 'ar-header-image',
  },
];

class Error extends React.Component {
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

  handleOnClick = () => {
    redirectTo(page.home);
  };

  render() {
    const { translate } = this.props;
    const isMobile = this.state.isMobile;
    return (
      <>
        <CustomNavBar translate={translate} isMobile={isMobile} />
        <StepsHeader step={3} translate={translate} />
        <div className="ar-error-container">
          <div className="ar-central-container d-flex justify-content-center mb-4">
            <h1>{translate('error.message')}</h1>
          </div>
          <div className="ar-register-button-container">
            <Button className=" btn-icon ar-round-button" color="red-0" onClick={this.handleOnClick}>
              <span className="nav-link-inner--text">{translate('error.goHome')}</span>
              <span className="btn-inner--icon">
                <span className="ar-icon-chevron-right va-middle fs-i--1" />
              </span>
            </Button>
          </div>
        </div>
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

Error.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.generalReducer;
};

export default connect(mapStateToProps)(Error);
