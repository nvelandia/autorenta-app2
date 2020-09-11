import React from 'react';

import { Row, Carousel, CarouselControl, CarouselItem } from 'reactstrap';

class CustomCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      animating: false,
    };
  }

  next = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  renderSlides = () => {
    return this.props.items.map((item, index) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={index}
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
        >
          <Row>
            {item[0]}
            {item[1]}
            {item[2]}
            {item[3]}
          </Row>
        </CarouselItem>
      );
    });
  };

  render() {
    return (
      <div>
        <style>{`.custom-tag { max-width: 100%; height: 25vw; }`}</style>
        <Carousel activeIndex={this.props.activeIndex} next={this.next} previous={this.previous} interval={false}>
          {this.renderSlides()}
        </Carousel>
      </div>
    );
  }
}

export default CustomCarousel;