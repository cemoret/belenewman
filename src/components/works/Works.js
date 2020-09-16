import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Carousel from "../../components/works/Carousel";
import WorkList from "../../components/works/WorkList";

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null,
      listNumber: 0,
      works: [
        {
          name: "Practice",
          work: [
            {
              alt: "image name",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_right_1.png?alt=media&token=51999346-5391-4927-b54a-3e53f38feacb`
            },
            {
              alt: "image name",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_right_1.png?alt=media&token=51999346-5391-4927-b54a-3e53f38feacb`
            }
          ]
        },
        {
          name: "Revolver",
          work: [
            {
              alt: "image name",
              type: "image",

              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_right_1.png?alt=media&token=51999346-5391-4927-b54a-3e53f38feacb`
            },
            {
              alt: "image name",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_right_1.png?alt=media&token=51999346-5391-4927-b54a-3e53f38feacb`
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderCarousel(works, listNumber) {
    var workSelected = works[listNumber];
    return (
      <div className="">
        <Carousel workSelected={workSelected} />
        <ul className="cover-list">
          <WorkList listNumber={listNumber} works={works} />
        </ul>
      </div>
    );
  }

  render() {
    const { works, listNumber } = this.state;

    return (
      <div className="content-box-lg">
        <div className="row m-0">
          <div className="col-11 px-0">
            {this.renderCarousel(works, listNumber)}
          </div>
          <div className="col-1ym px-0" style={{ backgroundColor: "#EEEEEE" }}>
            <Link to={"/cases"}>
              <h3 className="menu-v">Cases</h3>
            </Link>
          </div>
          <div className="col-1ym px-0" style={{ backgroundColor: "#E1E1E1" }}>
            <Link to={"/about"}>
              <h3 className="menu-v">About</h3>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Works;
