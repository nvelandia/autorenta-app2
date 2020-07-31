import React from 'react';

import Carousels from '../../Atoms/Carousels';

class CarouselHeader extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <>
        <Carousels items={items} />
      </>
    );
  }
}

export default CarouselHeader;
