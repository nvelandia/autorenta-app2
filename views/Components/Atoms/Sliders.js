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
    console.log(this.props.priceRange);
    var slider2 = this.refs.slider2;
    Slider.create(slider2, {
      start: [parseFloat(this.props.priceRange.minPrice), parseFloat(this.props.priceRange.maxPrice)],
      connect: [false, true, false],
      step: 0.01,
      range: { min: parseFloat(this.props.priceRange.minPrice), max: parseFloat(this.props.priceRange.maxPrice) },
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
  priceRange: PropTypes.object,
};

export default Sliders;
