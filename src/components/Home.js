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

  renderFileType(cover, random) {
    if (cover[random].type === "video") {
      return (
        <video
          loop
          autoPlay
          muted
          className="img-cover"
          src={cover[random].src}
          type="video/mov"
          alt={cover[random].alt}
        ></video>
      );
    }
    return (
      <div>
        <img
          src={cover[random].src}
          className="img-cover"
          alt={cover[random].alt}
        />
      </div>
    );
  }

  renderLeftSide(hover) {
    const left = 0;

    const cover = [
      {
        alt: `1`,
        type: `image`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_selected_2.png?alt=media&token=e5fc345e-6b13-4257-8fd0-c87f2fe4c927`
      },
      {
        alt: `2`,
        type: `image`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_selected_3.png?alt=media&token=537f1dec-87ba-4729-89a4-beb1629cbd09`
      },
      {
        alt: `3`,
        type: `image`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_selected_4.png?alt=media&token=856a22c9-b6f5-4316-8d50-239bcd236b89`
      },
      {
        alt: `4`,
        type: `image`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_selected_5.png?alt=media&token=ba9f31f1-d6d5-4f49-9f0b-aef14fe6c7c0`
      },
      {
        alt: `5`,
        type: `image`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_selected_6.png?alt=media&token=d133c213-1fff-49c2-9364-98f9d619b631`
      },
      {
        alt: `6`,
        type: `video`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_selected_7.mov?alt=media&token=b8c41ad8-9e41-4e55-841b-00958867c46f`
      },
      {
        alt: `7`,
        type: `image`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_selected_8.png?alt=media&token=ba89567b-e7d7-446c-84a5-38d86c101a86`
      }
    ];

    var random = Math.floor(Math.random() * cover.length + 1) - 1;
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
              <div className="img-cover" style={{ backgroundColor: "#FFFFFF" }}>
                <h3 className="centered">Selected</h3>
              </div>
            )}
          </div>
        </Link>
      </div>
    );
  }

  renderCenterSide(hover) {
    const center = 1;

    const cover = [
      {
        alt: `1`,
        type: `image`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_cases_1.png?alt=media&token=54711f4f-7d12-4db3-85a0-d305accb8b15`
      },
      {
        alt: `2`,
        type: `image`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_cases_2.png?alt=media&token=c91af8f3-3e7b-4f50-9ee0-5d43f713ad5f`
      },
      {
        alt: `3`,
        type: `image`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_cases_3.png?alt=media&token=547fcdab-4f6f-4b88-879d-9ed2ef9a66c5`
      },
      {
        alt: `4`,
        type: `video`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_cases_4.mov?alt=media&token=746343de-2ca8-4163-9e47-096454fdac24`
      }
    ];

    var random = Math.floor(Math.random() * cover.length + 1) - 1;

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
                style={{ backgroundColor: "#D9DFF6" }}
              >
                <h3 className="centered">Cases</h3>
              </div>
            )}
          </div>
        </Link>
      </div>
    );
  }

  renderRightSide(hover) {
    const right = 2;

    const cover = [
      {
        alt: `1`,
        type: `image`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_about_1.png?alt=media&token=7d61531b-4c08-45ef-a33a-610c12142e90`
      },
      {
        alt: `2`,
        type: `video`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_about_2.mov?alt=media&token=a4528c67-8666-4461-abc8-4065be04b82f`
      },
      {
        alt: `3`,
        type: `image`,
        src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_about_3.png?alt=media&token=54dd087a-419e-4137-bd82-48e666380a84`
      }
    ];

    var random = Math.floor(Math.random() * cover.length + 1) - 1;

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
                style={{ backgroundColor: "#F0F2F8" }}
              >
                <h3 className="centered">About</h3>
              </div>
            )}
          </div>
        </Link>
      </div>
    );
  }

  render() {
    const { hover } = this.state;
    return (
      <div className="content-box-lg">
        <div className="row m-0">
          {this.renderLeftSide(hover)}
          {this.renderCenterSide(hover)}
          {this.renderRightSide(hover)}
        </div>
      </div>
    );
  }
}

export default Home;
