import React from 'react';
import { Button, Card, CardBody, CardHeader, CardText, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CarSelected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {};

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { car } = this.props;
    return (
      <Card className="card-frame ar-car-selected">
        <CardBody className="p-0">
          <Row className="ar-car-top">
            <div className="ar-car-company-logo">
              <img src={car.company.logo} alt={'Company logo'} />
            </div>
            <div className="ar-car-data-left">
              <div className="ar-icon-info ar-data-icon ">
                <p className="ml-2 ">Algunas rentadoras cobran un cargo extra a conductores menores de 25 años.</p>
              </div>
            </div>
            <div className="ar-car-data-right">
              <div className="ar-icon-check-solid ar-data-icon ar-green-text">
                <p className="ml-2 ar-blue-0-text">Cancela gratis tu reserva con 45hs de anticipación.</p>
              </div>
            </div>
          </Row>
          <Row className="ar-car-bottom">
            <div className="ar-car-bottom-left">
              <div className="ar-car-type">
                <h3 className="ar-icon-car-category ar-car-type-key">{car.typeCar.name}</h3>
                <h6 className="mb-0">{car.name}</h6>
              </div>
              <div className="ar-car-features">
                <Row className="m-0 h-100">
                  <div className="ar-car-features-group">
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-passenger ar-light-blue-3-text" />
                      <h6>{car.seats} asientos</h6>
                    </div>
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-doors ar-light-blue-3-text" />
                      <h6>{car.doors} puertas</h6>
                    </div>
                  </div>
                  <div className="ar-car-features-group">
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-luggage ar-light-blue-3-text" />
                      <h6>{car.bags_big} maletas grandes</h6>
                    </div>
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-carry-on ar-light-blue-3-text" />
                      <h6>{car.bags_small} maletas pequeñas</h6>
                    </div>
                  </div>
                  <div className="ar-car-features-group">
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-transmission ar-light-blue-3-text" />
                      <h6>Transmisión {car.gear}</h6>
                    </div>
                    <div className="ar-car-feature-item">
                      <i className="ar-icon-air-conditioning ar-light-blue-3-text" />
                      <h6>{car.doors ? 'Aire acondicionado' : null}</h6>
                    </div>
                  </div>
                </Row>
              </div>
            </div>

            <div className="ar-car-image">
              <div className="mt-2">
                <img src={car.image} alt="Car image" />
              </div>
            </div>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

CarSelected.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
  showDetailModal: PropTypes.func,
  showAditionalModal: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(CarSelected);
