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
    const { translate, isMobile } = this.props;
    if (this.props.needToCloseModifyModal) {
      this.hideModal();
      this.props.dispatch(this.props.haveToCloseModifyModal(false));
    }
    return (
      <>
        <ModalModifySearch
          showModal={this.state.showModifyModal}
          hideModal={this.hideModal}
          searchLocation={this.props.searchLocation}
          modifySearchFleet={this.props.modifySearchFleet}
          translate={translate}
          showLoader={this.props.showLoader}
          loadLocation={this.props.loadLocation}
        />
        <Row className="justify-content-center ar-search-banner p-4 mx-0">
          <div className="ar-central-container">
            <Row className="justify-content-between bg-ar-white-0 align-items-center ">
              <div className="ar-step1-active-search-title-container">
                <h3>{translate('step1.activeSearch.title')}</h3>
              </div>
              <div className="ar-search-date-and-place">
                <div className="ar-search-icon">
                  <i className="ar-icon-calendar" />
                  {isMobile ? <div className="ar-pseudo-arrow"></div> : null}
                </div>
                <div>
                  {this.props.result.locations.pickup ? (
                    <>
                      <p className="ar-search-date">
                        {isoStringToDateWithTimeInText(
                          this.props.result.locations.pickup.date,
                          this.props.result.locations.pickup.time,
                          this.props.locale,
                        )}
                      </p>
                      <p className="ar-search-place">{this.props.result.locations.pickup.formated_address}</p>{' '}
                    </>
                  ) : null}
                </div>
              </div>
              {!isMobile ? (
                <div className="mr--4 ml--4">
                  <img src={'/svg/searchView/next-arrow.svg'} width={'20px'} />
                </div>
              ) : null}
              <div className="ar-search-date-and-place">
                <div className="ar-search-icon">
                  <i className="ar-icon-calendar" />
                </div>
                <div>
                  {this.props.result.locations.dropoff ? (
                    <>
                      <p className="ar-search-date">
                        {isoStringToDateWithTimeInText(
                          this.props.result.locations.dropoff.date,
                          this.props.result.locations.dropoff.time,
                          this.props.locale,
                        )}
                      </p>
                      <p className="ar-search-place">{this.props.result.locations.dropoff.formated_address}</p>
                    </>
                  ) : null}
                </div>
              </div>
              {!isMobile ? (
                <div className="d-flex justify-content-between pr-3 ar-step1-custom-button-modify-container">
                  <Label
                    classes={'ar-label-common fs--15 mr-3'}
                    title={translate('step1.activeSearch.age')}
                    value={this.props.searchParams.passenger_age + translate('step1.activeSearch.years')}
                  />
                  <CustomButton
                    text={translate('step1.activeSearch.modify')}
                    event={this.showModifyModal}
                    color={'red-0'}
                    icon={'ar-icon-chevron-right'}
                    fontSize={'fs--15'}
                    name={'ar-modify-button'}
                  />
                </div>
              ) : (
                <CustomButton
                  text={translate('step1.activeSearch.modify')}
                  event={this.showModifyModal}
                  color={'red-0'}
                  fontSize={'fs--15'}
                  name={'ar-modify-button'}
                  width={'d-flex justify-content-center w-100 mb-25'}
                />
              )}
            </Row>
          </div>
        </Row>
      </>
    );
  }
}

ActiveSearch.propTypes = {
  dispatch: PropTypes.func,
  searchLocation: PropTypes.func,
  loadCountries: PropTypes.func,
  modifySearchFleet: PropTypes.func,
  haveToCloseModifyModal: PropTypes.func,
  showLoader: PropTypes.func,
  loadLocation: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { ...state.searchReducer, ...state.Intl };
};

export default connect(mapStateToProps)(ActiveSearch);
