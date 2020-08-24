import React from 'react';

import { Button, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Label from '../../Atoms/Label';
import { isoStringToDateWithTimeInText } from '../../../../utils/helpers/dateHelpers';
import ModalModifySearch from './ModalModifySearch';
import CustomButton from '../../Atoms/CustomButton';

class ActiveSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModifyModal: false,
      placeToPickUp: '',
      placeToPickUpFocus: false,
      placeToDropOff: '',
      placeToDropOffFocus: false,
      dateToPickUpFocus: false,
      dateToDropOffFocus: false,
      countrySelected: '',
      ageSelected: '',
      carTypeSelected: '',
    };
    this.dispatch = props.dispatch;
  }

  showModifyModal = () => {
    this.setState({ showModifyModal: true });
  };

  hideModal = () => {
    this.setState({ showModifyModal: false });
  };

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value, placeToPickUpFocus: false });
  };

  render() {
    return (
      <>
        <ModalModifySearch
          showModal={this.state.showModifyModal}
          hideModal={this.hideModal}
          searchLocation={this.props.searchLocation}
        />
        <Row className="justify-content-center ar-search-banner p-4 mx-0">
          <Col xl="9" className="p-0">
            <Row className="justify-content-between bg-ar-white-0 align-items-center ">
              <div>
                <h3>Búsqueda activa</h3>
              </div>
              <div className="ar-search-date-and-place">
                <div className="ar-search-icon">
                  <icon className="ar-icon-calendar" />
                </div>
                <div>
                  {this.props.result.locations.pickup ? (
                    <>
                      <p className="ar-search-date">
                        {isoStringToDateWithTimeInText(
                          this.props.result.locations.pickup.date,
                          this.props.result.locations.pickup.time,
                        )}
                      </p>
                      <p className="ar-search-place">
                        {this.props.result.locations.pickup.location + ` (${this.props.result.locations.pickup.iata})`}
                      </p>{' '}
                    </>
                  ) : null}
                </div>
              </div>
              <div className="mr--4 ml--4">
                <img src={'/svg/searchView/next-arrow.svg'} width={'20px'} />
              </div>
              <div className="ar-search-date-and-place">
                <div className="ar-search-icon">
                  <icon className="ar-icon-calendar" />
                </div>
                <div>
                  {this.props.result.locations.dropoff ? (
                    <>
                      <p className="ar-search-date">
                        {isoStringToDateWithTimeInText(
                          this.props.result.locations.dropoff.date,
                          this.props.result.locations.dropoff.time,
                        )}
                      </p>
                      <p className="ar-search-place">
                        {this.props.result.locations.dropoff.location +
                          ` (${this.props.result.locations.dropoff.iata})`}
                      </p>{' '}
                    </>
                  ) : null}
                </div>
              </div>
              <div className="d-flex justify-content-between pr-3">
                <Label classes={'ar-label-common fs--15 mr-3'} title={'Edad:'} value={' +25 años'} />
                <CustomButton
                  text={'Modificar'}
                  event={this.showModifyModal}
                  color={'red-0'}
                  icon={'ar-icon-chevron-right'}
                  fontSize={'fs--15'}
                  name={'ar-modify-button'}
                />
              </div>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

ActiveSearch.propTypes = {
  dispatch: PropTypes.func,
  searchLocation: PropTypes.func,
  loadCountries: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(ActiveSearch);