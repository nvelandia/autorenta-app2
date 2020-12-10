import React from 'react';

import { Carousel, CarouselControl, CarouselItem } from 'reactstrap';
import { isMobile } from '../../../../utils/helpers/isError';

class ImageHeader extends React.Component {
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
    return this.props.items.map((item) => {
      return (
        <CarouselItem
          className={`custom-tag ar-custom-tag-carousel ${
            this.props.isMobile || this.props.isSmallTablet ? 'd-flex justify-content-center ar-promotion-header' : ''
          }`}
          tag="div"
          key={item.id}
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
        >
          <img
            className={`d-block ${this.props.isMobile || this.props.isSmallTablet ? 'w-auto h-100 ' : 'w-100 '}  ${
              item.style
            }`}
            src={item.src}
            alt={item.altText}
          />
        </CarouselItem>
      );
    });
  };

  render() {
    const { items } = this.props;
    return (
      <div>
        <style>{`.custom-tag { max-width: 100%; height: 25vw; }`}</style>
        <Carousel activeIndex={this.state.activeIndex} next={this.next} previous={this.previous}>
          {this.renderSlides()}
          {/*<CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />*/}
          {/*<CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />*/}
        </Carousel>
      </div>
    );
  }
}

export default ImageHeader;
