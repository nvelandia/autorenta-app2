import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/step3Actions';
import * as generalActions from '../../actions/generalActions';
import CustomNavBar from '../Components/Molecules/Navbars/CustomNavBar';
import CustomFooter from '../Components/Molecules/Footers/CustomFooter';
import Banner from '../Components/Molecules/banners/Banner';
import AutorentaLoader from '../Components/Molecules/Loaders/AutorentaLoader';
import UpToTop from '../Components/Atoms/UpToTop';
import StepsHeader from '../Components/Molecules/Headers/StepsHeader';
import { Col, Row } from 'reactstrap';
import RentState from '../Components/Organism/Step3/RentState';
import Payment from '../Components/Organism/Step3/Payment';
import RentDetails from '../Components/Organism/Step3/RentDetails';

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {};

  render() {
    this.dispatch(generalActions.hideLoader());
    return (
      <>
        <CustomNavBar />
        <StepsHeader step={3} />
        <Row className="justify-content-center mt-4 ml-0 mr-0">
          <div className="ar-central-container d-flex">
            <Col>
              <RentState />
              <Payment />
              <RentDetails />
            </Col>
          </div>
        </Row>
        <Banner />
        <CustomFooter />
        <UpToTop />
        <AutorentaLoader />
      </>
    );
  }
}

Step3.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step3Reducer;
};

export default connect(mapStateToProps)(Step3);
