import React from 'react';
// react plugin used to create datetimepicker
import ReactDatetime from 'react-datetime';

// reactstrap components
import { FormGroup, InputGroupAddon, InputGroupText, InputGroup, Col, Row, Input } from 'reactstrap';
import moment from 'moment';

class RangeDatePicker extends React.Component {
  state = {};

  handleOnBlur = (handleDate) => {
    if (this.state.startDate && this.state.endDate) {
      handleDate(this.state.startDate, this.state.endDate);
    }
  };

  handleSelectStartDate = (e) => {
    var m = moment(e._d, 'ddd MMM D YYYY HH:mm:ss ZZ');
    if (m.hours() === 0) {
      m.set({ h: 10, m: 0 });
      e._d = m.toDate();
    }
    this.setState({ startDate: e });
  };

  handleSelectEndDate = (e) => {
    var m = moment(e._d, 'ddd MMM D YYYY HH:mm:ss ZZ');
    if (m.hours() === 0) {
      m.set({ h: 10, m: 0 });
      e._d = m.toDate();
    }
    this.setState({ endDate: e });
  };

  render() {
    const { handleDate } = this.props;
    return (
      <>
        <Row>
          <Col xs={12}>
            <FormGroup>
              <InputGroup className="input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="ar-round-input-left">
                    <i className="ar-icon-calendar ar-round-input-left" />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    className: 'form-control ar-round-input-right',
                    placeholder: 'Fecha y hora de retiro',
                  }}
                  timeFormat={'HH:mm'}
                  value={this.state.startDate}
                  timeConstraints={{ hours: { min: 10, max: 18 }, minutes: { step: 30 } }}
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
                  onChange={(e) => this.handleSelectStartDate(e)}
                  onBlur={() => this.handleOnBlur(handleDate)}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs={12}>
            <FormGroup>
              <InputGroup className="input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="ar-round-input-left">
                    <i className="ar-icon-calendar ar-round-input-left" />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    className: 'form-control ar-round-input-right',
                    placeholder: 'Fecha y hora de entrega',
                  }}
                  timeFormat={'H:mm'}
                  value={this.state.endDate}
                  timeConstraints={{ hours: { min: 10, max: 18 }, minutes: { step: 30 } }}
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
                  onChange={(e) => this.handleSelectEndDate(e)}
                  onBlur={() => this.handleOnBlur(handleDate)}
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
