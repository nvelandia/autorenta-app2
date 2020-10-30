import React from 'react';
import { Button, Card, CardBody, CardHeader, CardText, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isoStringToDateWithTimeInText } from '../../../../utils/helpers/dateHelpers';
import Google from '../../Molecules/maps/Google';

class LocationSelected extends React.Component {
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
    const { location, title, officeLocation } = this.props;
    return (
      <Card className="card-frame ar-location-selected">
        <CardBody className="p-0">
          <Row className="ar-location-top">
            <div className="ar-location-icon">
              <i className="ar-icon-calendar" />
            </div>
            <div className="ar-location-text-container">
              {location && officeLocation ? (
                <>
                  <h5 className="ar-location-title">{title}</h5>
                  <p className="ar-location-date">
                    {isoStringToDateWithTimeInText(location.date, location.time, this.props.locale)}
                  </p>
                  <p className="ar-location-place">{`${officeLocation.city},${officeLocation.country} (${officeLocation.location})`}</p>{' '}
                </>
              ) : (
                <>
                  <h5 className="ar-location-title">{title}</h5>
                  <p className="ar-location-date">
                    {isoStringToDateWithTimeInText(location.date, location.time, this.props.locale)}
                  </p>
                  <p className="ar-location-place">{location.location + ` (${location.iata})`}</p>{' '}
                </>
              )}
            </div>
          </Row>
          <Row className="ar-location-bottom">
            {officeLocation ? (
              <Google lat={parseFloat(officeLocation.latitude)} lng={parseFloat(officeLocation.longitude)} />
            ) : (
              <Google lat={parseFloat(location.latitude)} lng={parseFloat(location.longitude)} />
            )}
          </Row>
        </CardBody>
      </Card>
    );
  }
}

LocationSelected.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
  showDetailModal: PropTypes.func,
  showAditionalModal: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { ...state.searchReducer, ...state.Intl };
};

export default connect(mapStateToProps)(LocationSelected);
