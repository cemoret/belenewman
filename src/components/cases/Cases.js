import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components

class Cases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null,
      cases: [
        {
          name: `Practice`,
          link: `/cases/practice`,
          image: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_right_1.png?alt=media&token=51999346-5391-4927-b54a-3e53f38feacb`
        },
        {
          name: `Revolver`,
          link: `/cases/revolver`,
          image: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cover%2Fcover_right_1.png?alt=media&token=51999346-5391-4927-b54a-3e53f38feacb`
        }
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onMouseEnterLi(id) {
    this.setState({ listNumber: id });
  }

  onMouseLeaveLi() {
    this.setState({ listNumber: null });
  }

  renderCases() {
    const { cases } = this.state;

    return cases.map(({ name, link, image }, index) => {
      const { listNumber, listSelected } = this.state;
      return (
        <div
          key={index}
          className="col-6"
          onMouseEnter={() => this.onMouseEnterLi(index)}
          onMouseLeave={() => this.onMouseLeaveLi()}
        >
          <Link to={link}>
            <img src={image} className="img-case" alt="gallery" />

            <h4 className="m-0 p-1">
              {listNumber === index || listSelected === index ? (
                <span>→&nbsp;</span>
              ) : (
                <span />
              )}
              ({index + 1})&nbsp;
              {name}
            </h4>
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="content-box-lg">
        <div className="row m-0">
          <div
            className="col-1ym fixed-md-top px-0"
            style={{ backgroundColor: "#E1E1E1" }}
          >
            <Link to={"/works"}>
              <h3 className="menu-v m-0">Selected</h3>
            </Link>
          </div>

          <div className="col-md-11 col-12 px-0 pb-50 pt-50" id="scrolly">
            <div className="row m-0 p-5">{this.renderCases()}</div>
          </div>
          <div
            className="col-1ym fixed-md-botton px-0"
            style={{ backgroundColor: "#EEEEEE" }}
          >
            <Link to={"/about"}>
              <h3 className="menu-v m-0">About</h3>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Cases;
