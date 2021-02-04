import React from 'react';
import { Row, CarouselItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Carousel from 'react-elastic-carousel'

class CustomCarouselMobile extends React.Component {
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
    const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
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
          className={this.props.height ? this.props.height : 'custom-tag'}
          tag="div"
          key={index}
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
        >
          {!this.props.isMobile ? (
            <Row className={`mx-0 ${this.props.justify ? this.props.justify : ''}`}>
              {item[0] ? item[0] : null}
              {item[1] ? item[1] : null}
              {item[2] ? item[2] : null}
              {item[3] ? item[3] : null}
            </Row>
          ) : (
            <Row className={`mx-0 ${this.props.justify ? this.props.justify : ''}`} style={{width: '100vw'}}>{item[0] ? item[0] : null}</Row>
          )}
        </div>
      );
    });
  };

  render() {
    console.log('active', this.props.activeIndex)
    return (
      <>
        <style>{`.custom-tag { max-width: 100%; height: 25vw; }`}</style>
        <Carousel
          activeIndex={this.state.activeIndex}
          onNextEnd={this.next}
          onPrevEnd={this.previous}
          className="zi-10"
          showArrows={false}
          pagination={false}
        >
          {this.renderSlides()}
        </Carousel>
      </>
    );
  }
}

export default CustomCarouselMobile;
