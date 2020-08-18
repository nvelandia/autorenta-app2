import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as homeActions from '../../actions/homeActions';
//import * as actions from '../../actions/searchActions';
import CustomNavBar from '../Components/Molecules/Navbars/CustomNavBar';
import CustomFooter from '../Components/Molecules/Footers/CustomFooter';
import Banner from '../Components/Molecules/banners/Banner';
import AutorentaLoader from '../Components/Molecules/Loaders/AutorentaLoader';
import UpToTop from '../Components/Atoms/UpToTop';
import StepsHeader from '../Components/Molecules/Headers/StepsHeader';
import { actionNames } from '../../utils/constants/actionConstants';
import CarSelected from '../Components/Organism/Step2/CarSelected';
import Details from '../Components/Organism/Step2/Details';
import { Row, Col } from 'reactstrap';

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
    //this.mock();
  }

  mock = () => {
    this.dispatch({
      type: actionNames.searchFleet,
      body: {
        pickup_location: 'MIA',
        pickup_date: '2020-08-11',
        pickup_time: '12:00',
        dropoff_location: 'MIA',
        dropoff_date: '2020-08-12',
        dropoff_time: '12:00',
        passenger_country_id: 1,
        passenger_age: 22,
      },
    });
  };

  render() {
    const car = {
      image: '/img/custom/searchView/mitsubishi-mirage-alamo.jpg',
      doors: 5,
      gear: 'Manual',
      bags_small: 3,
      bags_big: 2,
      seats: 5,
      name: 'Ford Fiesta',
      typeCar: {
        name: 'Económico / Pequeño',
      },
      company: {
        logo: '/svg/searchView/avis-logo.svg',
      },
    };
    return (
      <>
        <CustomNavBar />
        <StepsHeader step={3} />
        <Row className="justify-content-center mt-2">
          <Col xl="6" lg="6" className="pr-0">
            <CarSelected car={car} />
          </Col>
          <Col xl="3" lg="3">
            <Details />
          </Col>
        </Row>

        <Banner />
        <CustomFooter />
        <UpToTop />
        <AutorentaLoader />
      </>
    );
  }
}

Step2.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(Step2);
