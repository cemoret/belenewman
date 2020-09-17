import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_index: null,
      transform: 0,
      hover: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onMouseEnterReference(side) {
    this.setState({ hover: side });
  }

  onMouseLeaveReference() {
    this.setState({ hover: null });
  }

  renderMenu() {
    return (
      <div className="col-12">
        <div className="menu">
          <Link to={"/"}>
            <h4 className="text-center">Belen Newman</h4>
          </Link>
        </div>
      </div>
    );
  }

  renderFileType(cover, random) {
    if (cover.type === "video") {
      return (
        <video
          loop
          autoPlay
          muted
          className="img-cover"
          src={cover[random].src}
          type="video/mov"
        ></video>
      );
    }
    return (
      <div>
        <img src={cover[random].src} className="img-cover" alt="gallery" />
      </div>
    );
  }

  renderLeftSide(hover) {
    const left = 0;

    const cover = [
      {
        type: `image`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver1.png?alt=media&token=2a8c5a08-ac9c-490b-9995-ae85cb09290a`
      },
      {
        type: `image`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_right_1.png?alt=media&token=51999346-5391-4927-b54a-3e53f38feacb`
      }
    ];

    var random = Math.floor(Math.random() * 2 + 1) - 1;
    return (
      <div
        className={`transition-cover
          ${hover === 0 && "col-md-6 col-12 px-0"}
          ${hover === 1 && "col-md-3 col-12 px-0"}
          ${hover === 2 && "col-md-3 col-12 px-0"}
          ${hover === null && "col-md-4 col-12 px-0"}
        `}
        onMouseEnter={() => this.onMouseEnterReference(left)}
        onMouseLeave={() => this.onMouseLeaveReference()}
      >
        <Link to={"/works"}>
          <div className="center">
            {hover === 0 ? (
              this.renderFileType(cover, random)
            ) : (
              <div
                className="img-cover"
                style={{ backgroundColor: "#FFFFFF" }}
              ></div>
            )}
            <h3 className="centered">Selected</h3>
          </div>
        </Link>
      </div>
    );
  }

  renderCenterSide(hover) {
    const center = 1;

    const cover = [
      {
        type: `image`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_right_1.png?alt=media&token=51999346-5391-4927-b54a-3e53f38feacb`
      },
      {
        type: `image`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_right_2.png?alt=media&token=13e1a05a-96a9-4adc-ab54-4e6e7a306cbf`
      }
    ];

    var random = Math.floor(Math.random() * 2 + 1) - 1;

    return (
      <div
        className={`transition-cover
          ${hover === 0 && "col-md-3 col-12 px-0"}
          ${hover === 1 && "col-md-6 col-12 px-0"}
          ${hover === 2 && "col-md-3 col-12 px-0"}
          ${hover === null && "col-md-4 col-12 px-0"}
        `}
        onMouseEnter={() => this.onMouseEnterReference(center)}
        onMouseLeave={() => this.onMouseLeaveReference()}
      >
        <Link to={"/cases"}>
          <div className="img-container">
            {hover === 1 ? (
              this.renderFileType(cover, random)
            ) : (
              <div
                className="img-cover img-container"
                style={{ backgroundColor: "#C4C4C4" }}
              ></div>
            )}

            <h3 className="centered">Cases</h3>
          </div>
        </Link>
      </div>
    );
  }

  renderRightSide(hover) {
    const right = 2;

    const cover = [
      {
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver1.png?alt=media&token=2a8c5a08-ac9c-490b-9995-ae85cb09290a`
      },
      {
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_right_2.png?alt=media&token=13e1a05a-96a9-4adc-ab54-4e6e7a306cbf`
      },
      {
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_right_1.png?alt=media&token=51999346-5391-4927-b54a-3e53f38feacb`
      }
    ];

    var random = Math.floor(Math.random() * 2 + 1) - 1;

    return (
      <div
        className={`transition-cover
          ${hover === 0 && "col-md-3 col-12 px-0"}
          ${hover === 1 && "col-md-3 col-12 px-0"}
          ${hover === 2 && "col-md-6 col-12 px-0"}
          ${hover === null && "col-md-4 col-12 px-0"}
        `}
        onMouseEnter={() => this.onMouseEnterReference(right)}
        onMouseLeave={() => this.onMouseLeaveReference()}
      >
        <Link to={"/about"}>
          <div className="img-container">
            {hover === 2 ? (
              this.renderFileType(cover, random)
            ) : (
              <div
                className="img-cover img-container"
                style={{ backgroundColor: "#FFFF" }}
              ></div>
            )}

            <h3 className="centered">About</h3>
          </div>
        </Link>
      </div>
    );
  }

  render() {
    const { hover } = this.state;
    return (
      <div className="content-box-lg">
        <div className="row m-footer">
          {this.renderLeftSide(hover)}
          {this.renderCenterSide(hover)}
          {this.renderRightSide(hover)}
          {this.renderMenu()}
        </div>
      </div>
    );
  }
}

export default Home;
