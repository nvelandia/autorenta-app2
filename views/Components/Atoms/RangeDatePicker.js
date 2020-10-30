import React from 'react';
// react plugin used to create datetimepicker
import ReactDatetime from 'react-datetime';

// reactstrap components
import { FormGroup, InputGroupAddon, InputGroupText, InputGroup, Col, Row, Input } from 'reactstrap';
import moment from 'moment';
import classnames from 'classnames';
import { isServer } from '../../../utils/helpers/isError';

class RangeDatePicker extends React.Component {
  state = {
    startDate: this.props.defaultStartDate ? this.props.defaultStartDate : '',
    endDate: this.props.defaultEndDate ? this.props.defaultEndDate : '',
    dateToDropOffFocus: false,
    dateToPickUpFocus: false,
    selections: 0,
  };

  handleOnBlur = (handleDate) => {
    handleDate(this.state.startDate, this.state.endDate);
    this.setState({ dateToDropOffFocus: false, dateToPickUpFocus: false });
  };

  handleSelectDate = (e) => {
    var m = moment(e._d, 'ddd MMM D YYYY HH:mm:ss ZZ');
    if (m.hours() === 0) {
      m.set({ h: 10, m: 0 });
      e._d = m.toDate();
    }

    if (moment(this.state.startDate._d).format('DD-MM-YYYY') === moment(e._d).format('DD-MM-YYYY')) {
      this.setState({ startDate: e, selections: 1 });
    } else if (moment(this.state.endDate._d).format('DD-MM-YYYY') === moment(e._d).format('DD-MM-YYYY')) {
      this.setState({ endDate: e, selections: 0 });
    } else if (this.state.selections === 0) {
      if (this.state.endDate) {
        if (!moment(e).isBefore(this.state.endDate)) {
          this.setState({ startDate: e, endDate: '', selections: 1 });
        }
      }
      this.setState({ startDate: e, selections: 1 });
    } else {
      this.setState({ endDate: e, selections: 0 });
    }
  };

  handleSelectStartDate = (e) => {
    var m = moment(e._d, 'ddd MMM D YYYY HH:mm:ss ZZ');
    if (m.hours() === 0) {
      m.set({ h: 10, m: 0 });
      e._d = m.toDate();
    }
    this.setState({ startDate: e, dateToPickUpFocus: false });
  };

  handleSelectEndDate = (e) => {
    var m = moment(e._d, 'ddd MMM D YYYY HH:mm:ss ZZ');
    if (m.hours() === 0) {
      m.set({ h: 10, m: 0 });
      e._d = m.toDate();
    }
    this.setState({ endDate: e, dateToDropOffFocus: false });
  };

  render() {
    const { handleDate, error, translate, isMobile } = this.props;
    return (
      <>
        <Row>
          <Col xs={12}>
            <FormGroup
              className={classnames(
                {
                  focused: this.state.dateToPickUpFocus,
                },
                'ar-date-container',
              )}
            >
              <InputGroup
                className={`input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                  error.dateToPickUp ? ' ar-error-border' : null
                }`}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="ar-round-input-left">
                    <i className="ar-icon-calendar ar-date " />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    className: `form-control ar-round-input-right ar-date ${
                      this.state.dateToPickUpFocus ? 'bg-ar-white-0' : ''
                    }`,
                    placeholder: translate('home.makeYourReservation.dateToPickUp'),
                    readOnly: isMobile,
                  }}
                  viewDate={
                    this.state.startDate
                      ? moment(this.state.startDate).add(1, 'days').set({ h: 10, m: 0 })
                      : moment().add(1, 'days').set({ h: 10, m: 0 })
                  }
                  timeFormat={'HH:mm'}
                  value={this.state.startDate}
                  timeConstraints={{ minutes: { step: 30 } }}
                  isValidDate={(currentDate, selectedDate) => {
                    if (moment().isBefore(currentDate)) {
                      if (this.state.selections === 0) {
                        return true;
                      } else {
                        if (this.state.startDate) {
                          return moment(this.state.startDate).isBefore(currentDate);
                        }
                        return true;
                      }
                    }
                    return false;
                  }}
                  renderDay={(props, currentDate, selectedDate) => {
                    let classes = props.className;
                    if (
                      this.state.startDate &&
                      this.state.endDate &&
                      moment(this.state.startDate._d).format('DD-MM-YYYY') + '' ===
                        moment(currentDate._d).format('DD-MM-YYYY') + ''
                    ) {
                      classes += ' start-date';
                    } else if (
                      this.state.startDate &&
                      this.state.endDate &&
                      moment(this.state.startDate._d).format('MM-DD-YYYY') + '' <
                        moment(currentDate._d).format('MM-DD-YYYY') + '' &&
                      moment(this.state.endDate._d).format('MM-DD-YYYY') + '' >
                        moment(currentDate._d).format('MM-DD-YYYY') + ''
                    ) {
                      classes += ' middle-date';
                    } else if (
                      this.state.endDate &&
                      moment(this.state.endDate._d).format('DD-MM-YYYY') + '' ===
                        moment(currentDate._d).format('DD-MM-YYYY') + ''
                    ) {
                      classes += ' end-date';
                    }
                    return (
                      <td {...props} className={classes}>
                        {currentDate.date()}
                      </td>
                    );
                  }}
                  onChange={(e) => this.handleSelectDate(e)}
                  onBlur={() => this.handleOnBlur(handleDate)}
                  onFocus={() => this.setState({ dateToPickUpFocus: true })}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs={12}>
            <FormGroup
              className={classnames(
                {
                  focused: this.state.dateToDropOffFocus,
                },
                'ar-date-container',
              )}
            >
              <InputGroup
                className={`input-group-alternative shadow-none ar-round-input bg-ar-white-1 ${
                  error.dateToDropOff ? ' ar-error-border' : null
                }`}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="ar-round-input-left">
                    <i className="ar-icon-calendar ar-date" />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    className: `form-control ar-round-input-right ar-date ${
                      this.state.dateToDropOffFocus ? 'bg-ar-white-0' : ''
                    }`,
                    placeholder: translate('home.makeYourReservation.dateToDropOff'),
                    readOnly: isMobile,
                  }}
                  viewDate={this.state.startDate}
                  timeFormat={'H:mm'}
                  value={this.state.endDate}
                  timeConstraints={{ minutes: { step: 30 } }}
                  isValidDate={(currentDate, selectedDate) => {
                    if (moment().isBefore(currentDate)) {
                      if (this.state.selections === 1) {
                        if (this.state.startDate) {
                          return moment(this.state.startDate).isBefore(currentDate);
                        }
                        return false;
                      } else {
                        return true;
                      }
                    }
                    return false;
                  }}
                  renderDay={(props, currentDate, selectedDate) => {
                    let classes = props.className;
                    if (
                      this.state.startDate &&
                      moment(this.state.startDate._d).format('DD-MM-YYYY') + '' ===
                        moment(currentDate._d).format('DD-MM-YYYY') + ''
                    ) {
                      classes += ' start-date';
                    } else if (
                      this.state.startDate &&
                      this.state.endDate &&
                      moment(this.state.startDate._d).format('MM-DD-YYYY') + '' <
                        moment(currentDate._d).format('MM-DD-YYYY') + '' &&
                      moment(this.state.endDate._d).format('MM-DD-YYYY') + '' >
                        moment(currentDate._d).format('MM-DD-YYYY') + ''
                    ) {
                      classes += ' middle-date';
                    } else if (
                      this.state.endDate &&
                      moment(this.state.endDate._d).format('DD-MM-YYYY') + '' ===
                        moment(currentDate._d).format('DD-MM-YYYY') + ''
                    ) {
                      classes += ' end-date';
                    }
                    return (
                      <td {...props} className={classes}>
                        {currentDate.date()}
                      </td>
                    );
                  }}
                  onChange={(e) => this.handleSelectDate(e)}
                  onBlur={() => this.handleOnBlur(handleDate)}
                  onFocus={() => this.setState({ dateToDropOffFocus: true })}
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default RangeDatePicker;
