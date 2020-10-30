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
import { isServer } from '../../utils/helpers/isError';
import * as actions from '../../actions/promotionActions';
import * as homeActions from '../../actions/homeActions';
import { pages, redirectTo } from '../../utils/helpers/redirectTo';
import AutorentaLoader from '../Components/Molecules/Loaders/AutorentaLoader';
import StepsHeader from '../Components/Molecules/Headers/StepsHeader';
import Faq from '../Components/Organism/StaticsPages/Faq';

class StaticPages extends React.Component {
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
    const { translate, faq } = this.props;
    return (
      <>
        <CustomNavBar translate={translate} />
        <StepsHeader step={3} translate={translate} />
        {faq ? <Faq translate={translate} /> : <div className="ar-error-container"></div>}
        <Banner translate={translate} />
        <CustomFooter subscribeToNewsletter={generalAction.subscribeNewsletter} translate={translate} />
        <UpToTop />
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
