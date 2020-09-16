import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// Components

class Error404 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_index: null,
      work: {
        cover: [
          {
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FCronology%20of%20the%20Apocalypse(1).png?alt=media&token=eff35c4f-cc1c-433c-b709-37beadc70765`
          },

          {
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FCronology%20of%20the%20Apocalypse(2).png?alt=media&token=ef116861-4c13-459d-8cb2-50fe972d6704`
          },
          {
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FCronology%20of%20the%20Apocalypse(3).png?alt=media&token=e175b6f3-2df8-4a43-a308-364d10ba758a`
          }
        ]
      }
    };
  }

  componentDidMount() {}

  renderMessage() {
    return (
      <div className="row m-0">
        <div className="col-3 px-1">
          <h5 className="regular pb-2">&nbsp;</h5>
        </div>

        <div className="col-3 p-1">
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FCronology%20of%20the%20Apocalypse(3).png?alt=media&token=e175b6f3-2df8-4a43-a308-364d10ba758a`}
            className="img-cover"
            alt="gallery"
          />
        </div>

        <div className="col-3 px-1">
          <h3 className="">
            <Link to={`/`}>
              <span className="" id="footerlink">
                Back to <br />
                Portfolio
              </span>
            </Link>
          </h3>
        </div>
        <div className="col-3 px-1">
          <h5 className="regular pb-2">&nbsp;</h5>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="row m-0 pt-5">
        <div className="col-12 pt-5 px-0">{this.renderMessage()}</div>

        <div className="col-12 px-0 pt-error pb-error">
          <h4 className="text-center b-grey marquee py-2 my-0 font-mono">
            <span>
              &nbsp;Error 404 / Error 404 / Error 404 / Error 404 / Error 404 /
              Error 404 / Error 404 /
            </span>
            <span>
              &nbsp;Error 404 / Error 404 / Error 404 / Error 404 / Error 404 /
              Error 404 / Error 404 /
            </span>
            <span>
              &nbsp;Error 404 / Error 404 / Error 404 / Error 404 / Error 404 /
              Error 404 / Error 404 /
            </span>
          </h4>
        </div>
      </div>
    );
  }
}

export default Error404;
