import React from 'react';
import Carousel from 'react-elastic-carousel'
import { Row } from 'reactstrap';

class PriceCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      animating: false,
    };
  }

  next = ({index}) => {
    if (this.state.animating) return;
    // const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: index + 1 });
  };

  previous = ({index}) => {
    if (this.state.animating) return;
    // const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: index - 1 });
  };

  goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  renderSlides = () => {
    return this.props.items.map((item, index) => {
      return (
        <div
          className="custom-tag ar-price-active"
          key={index}
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
        >
          <Row className={`mx-0`}>{item[0] ? item[0] : null}</Row>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="w-100">
        <style>{`.custom-tag { max-width: 100%; height: 100%; width: 80%; }`}</style>
        <Carousel 
          activeIndex={this.props.activeIndex}
          onNextEnd={this.next}
          onPrevEnd={this.previous}
          interval={false}
          showArrows={false}
          pagination={false}
        >
          {this.renderSlides()}
        </Carousel>
      </div>
    );
  }
}

export default PriceCarousel;
