import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/step2Actions';
import * as generalActions from '../../actions/generalActions';
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
import Passenger from '../Components/Organism/Step2/Passenger';
import Agency from '../Components/Organism/Step2/Agency';
import Corporation from '../Components/Organism/Step2/Corporation';

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

  render() {
    this.dispatch(generalActions.hideLoader());
    return (
      <>
        <CustomNavBar />
        <StepsHeader step={3} />
        <Row className="justify-content-center mt-4 ml-0 mr-0">
          <div className="ar-central-container d-flex">
            <Col>
              <CarSelected car={this.props.carSelected} />
              <div className="d-flex justify-content-between">
                <LocationSelected location={this.props.location.pickup} title={'oficina de inicio'} />
                <LocationSelected location={this.props.location.dropoff} title={'oficina de devolución'} />
              </div>
              <OptionalEquipment />
              <ClientType selectClientType={actions.selectClientType} />
              {this.props.clientType === 'Agencia de viajes' ? <Agency /> : null}
              {this.props.clientType === 'Pasajero / Cliente directo' ? <Passenger /> : null}
              {this.props.clientType === 'Corporativo / Empresas' ? <Corporation /> : null}
            </Col>
            <div className="ar-card-details">
              <Details changePlan={actions.changePlan} />
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
  return state.step2Reducer;
};

export default connect(mapStateToProps)(Step2);
