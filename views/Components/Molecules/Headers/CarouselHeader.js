import React from 'react';

import Carousels from '../../Atoms/Carousels';

class CarouselHeader extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <>
        <Carousels items={items} />
        <div className="ar-carousel-header-border">
          <div className="ar-carousel-border-left" />
          <div className="ar-carousel-border-center" />
          <div className="ar-carousel-border-right" />
        </div>
      </>
    );
  }
}

export default CarouselHeader;
