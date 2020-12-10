import React from 'react';

import Carousels from '../../Atoms/Carousels';

class CarouselHeader extends React.Component {
  render() {
    const { items, translate, isMobile } = this.props;
    return (
      <>
        <Carousels items={items} translate={translate} isMobile={isMobile} />
      </>
    );
  }
}

export default CarouselHeader;
