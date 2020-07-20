import React from "react";

import Carousels from "../../Atoms/Carousels";

const items = [
    {
        src: require("public/img/custom/slide-home-1.jpg"),
        altText: '',
        caption: '',
        header: ''
    },
    {
        src: require("public/img/custom/slide-home-2.jpg"),
        altText: '',
        caption: '',
        header: ''
    },
    {
        src: require("public/img/custom/slide-home-3.jpg"),
        altText: '',
        caption: '',
        header: ''
    }
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
