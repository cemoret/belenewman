import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Queires & Mutations
// Components
// Images & Icons
import { ReactComponent as ArrowNextIcon } from "../../images/icons/arrow_right.svg";
import { ReactComponent as ArrowPrevIcon } from "../../images/icons/arrow_left.svg";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowNextIcon
        id={`svg-icon`}
        className="slider-arrow-next"
        alt="ArrowLeftIcon"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowPrevIcon
        id={`svg-icon`}
        className="slider-arrow-next"
        alt="ArrowLeftIcon"
      />
    </div>
  );
}

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      numberSlide: 0
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ numberSlide: this.props.workSelected.length });
  }

  nextSlide() {
    this.slider.slickNext();
  }

  prevSlide() {
    this.slider.slickPrev();
  }

  renderImages() {
    const { workSelected } = this.props;

    return workSelected.work.map(({ alt, type, src }, index) => {
      if (type === "video") {
        return (
          <div key={index} style={{ position: "relative" }}>
            <video
              controls
              className="carousel-img"
              src={src}
              type="video/mov"
            ></video>
          </div>
        );
      }
      return (
        <div key={index} style={{ position: "relative" }}>
          <img
            key={index}
            src={src}
            className="carousel-img"
            alt={alt}
            style={{ cursor: "pointer" }}
          />
        </div>
      );
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      speed: 10,
      autoplay: false,
      autoplaySpeed: 300,
      className: "carousel",
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      afterChange: current => this.setState({ activeSlide: current })
    };

    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.renderImages()}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
