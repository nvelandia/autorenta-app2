import React from 'react';

import Carousels from '../../Atoms/Carousels';

const items = [
  {
    src: '/img/custom/slide-home-1.jpg',
    altText: '',
    caption: '',
    header: '',
    id: 1,
  },
  {
    src: '/img/custom/slide-home-2.jpg',
    altText: '',
    caption: '',
    header: '',
    id: 2,
  },
  {
    src: '/img/custom/slide-home-3.jpg',
    altText: '',
    caption: '',
    header: '',
    id: 3,
  },
];

class CarouselHeader extends React.Component {
  render() {
    return (
      <>
        <Carousels items={items} />
      </>
    );
  }
}

export default CarouselHeader;
