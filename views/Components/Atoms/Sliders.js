import React from 'react';
// plugin that creates slider
import Slider from 'nouislider';
import PropTypes from 'prop-types';

import { Row, Col } from 'reactstrap';

class Sliders extends React.Component {
  state = {
    slider2Values: ['200.00', '400.00'],
  };
  componentDidMount() {
    var slider2 = this.refs.slider2;
    Slider.create(slider2, {
      start: [200.0, 400.0],
      connect: [false, true, false],
      step: 0.01,
      range: { min: 100.0, max: 500.0 },
    }).on(
      'update',
      function (values, handle) {
        this.props.handlePriceChange(values[0], values[1]);
        this.setState({
          slider2Values: [values[0], values[1]],
        });
      }.bind(this),
    );
  }

  render() {
    return (
      <div className="mt-3">
        <div ref="slider2" />
        <Row>
          <Col xs="6">
            <span className="range-slider-value value-low">{this.state.slider2Values[0]}</span>
          </Col>
          <Col className="text-right" xs="6">
            <span className="range-slider-value value-high">{this.state.slider2Values[1]}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

Sliders.propTypes = {
  handlePriceChange: PropTypes.func,
};

export default Sliders;
