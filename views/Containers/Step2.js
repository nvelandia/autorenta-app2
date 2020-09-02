import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/step2Actions';
import CustomNavBar from '../Components/Molecules/Navbars/CustomNavBar';
import CustomFooter from '../Components/Molecules/Footers/CustomFooter';
import Banner from '../Components/Molecules/banners/Banner';
import AutorentaLoader from '../Components/Molecules/Loaders/AutorentaLoader';
import UpToTop from '../Components/Atoms/UpToTop';
import StepsHeader from '../Components/Molecules/Headers/StepsHeader';
import CarSelected from '../Components/Organism/Step2/CarSelected';
import Details from '../Components/Organism/Step2/Details';
import { Row, Col } from 'reactstrap';
import LocationSelected from '../Components/Organism/Step2/LocationSelected';
import OptionalEquipment from '../Components/Organism/Step2/OptionalEquipment';
import ClientType from '../Components/Organism/Step2/ClientType';

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

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
    const location = {
      pickup: { date: '2020-08-25', time: '12:00', location: 'Miami, Florida, Estados Unidos', iata: 'MIA' },
      dropoff: { date: '2020-08-28', time: '12:00', location: 'Miami, Florida, Estados Unidos', iata: 'MIA' },
    };

    return (
      <>
        <CustomNavBar />
        <StepsHeader step={3} />
        <Row className="justify-content-center mt-4 ml-0 mr-0">
          <div className="ar-central-container d-flex">
            <Col>
              <CarSelected car={car} />
              <div className="d-flex justify-content-between">
                <LocationSelected location={location.pickup} title={'oficina de inicio'} />
                <LocationSelected location={location.dropoff} title={'oficina de devolución'} />
              </div>
              {this.props.optionalEquipment ? <OptionalEquipment /> : null}
              <ClientType />
            </Col>
            <div className="ar-card-details">
              {this.props.plans ? <Details changePlan={actions.changePlan} /> : null}
            </div>
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

Step2.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.stepDosReducer;
};

export default connect(mapStateToProps)(Step2);
