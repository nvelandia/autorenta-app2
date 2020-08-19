import React from 'react';
// react plugin used to create datetimepicker
import ReactDatetime from 'react-datetime';

// reactstrap components
import { FormGroup, InputGroupAddon, InputGroupText, InputGroup, Col, Row, Input } from 'reactstrap';

class RangeDatePicker extends React.Component {
  state = {};

  handleOnBlur = (handleDate) => {
    if (this.state.startDate && this.state.endDate) {
      handleDate(this.state.startDate, this.state.endDate);
    }
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
                  timeFormat={'H:mm'}
                  renderDay={(props, currentDate, selectedDate) => {
                    let classes = props.className;
                    if (
                      this.state.startDate &&
                      this.state.endDate &&
                      this.state.startDate._d + '' === currentDate._d + ''
                    ) {
                      classes += ' start-date';
                    } else if (
                      this.state.startDate &&
                      this.state.endDate &&
                      new Date(this.state.startDate._d + '') < new Date(currentDate._d + '') &&
                      new Date(this.state.endDate._d + '') > new Date(currentDate._d + '')
                    ) {
                      classes += ' middle-date';
                    } else if (this.state.endDate && this.state.endDate._d + '' === currentDate._d + '') {
                      classes += ' end-date';
                    }
                    return (
                      <td {...props} className={classes}>
                        {currentDate.date()}
                      </td>
                    );
                  }}
                  onChange={(e) => this.setState({ startDate: e })}
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
                  renderDay={(props, currentDate, selectedDate) => {
                    let classes = props.className;
                    if (
                      this.state.startDate &&
                      this.state.endDate &&
                      this.state.startDate._d + '' === currentDate._d + ''
                    ) {
                      classes += ' start-date';
                    } else if (
                      this.state.startDate &&
                      this.state.endDate &&
                      new Date(this.state.startDate._d + '') < new Date(currentDate._d + '') &&
                      new Date(this.state.endDate._d + '') > new Date(currentDate._d + '')
                    ) {
                      classes += ' middle-date';
                    } else if (this.state.endDate && this.state.endDate._d + '' === currentDate._d + '') {
                      classes += ' end-date';
                    }
                    return (
                      <td {...props} className={classes}>
                        {currentDate.date()}
                      </td>
                    );
                  }}
                  onChange={(e) => this.setState({ endDate: e })}
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
