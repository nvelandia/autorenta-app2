import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

const Carousels = (props) => {
  const { items, translate } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag ar-custom-tag-carousel"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img className={'d-block w-100 ' + item.style} src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className="fade-in ar-carousel-header-container">
      <style>{`.custom-tag { max-width: 100%; height: 25vw; }`}</style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <div className="ar-carousel-header-border">
        <div className="ar-carousel-border-left" />
        <div className="ar-carousel-border-center" />
        <div className="ar-carousel-border-right" />
      </div>
    </div>
  );
};

export default Carousels;
