import React from 'react';

import Carousels from '../../Atoms/Carousels';

class CarouselHeader extends React.Component {
  render() {
    const { items, translate, isMobile } = this.props;
    return (
      <>
        <Carousels items={items} translate={translate} isMobile={isMobile} />
        {!isMobile ? (
          <div className="ar-carousel-header-border">
            <div className="ar-carousel-border-left" />
            <div className="ar-carousel-border-center" />
            <div className="ar-carousel-border-right" />
          </div>
        ) : null}
      </>
    );
  }
}

export default CarouselHeader;
