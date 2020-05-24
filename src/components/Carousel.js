import React, { Component } from "react";
import Swiper from "react-id-swiper";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderImages = () => {
    const images = this.props.gallery;
    if (images) {
      return images.map(({ src }, index) => {
        return (
          <div key={index}>
            <img src={src} className="img-content" alt="gallery" />
          </div>
        );
      });
    }
    return (
      <div className="row m-0 p-2">
        <div className="col-12">Without Images</div>
      </div>
    );
  };

  render() {
    const params = {
      speed: 50,
      effect: "fade",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    };
    return <Swiper {...params}>{this.renderImages()}</Swiper>;
  }
}

export default Carousel;
