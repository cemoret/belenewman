import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RRSS: {
        instagram: [
          {
            name: "instagram",
            http: `${"https://www.instagram.com/belennewman/"}`
          }
        ]
      }
    };
  }

  render() {
    const { RRSS } = this.state;
    const date = new Date().getFullYear();

    return (
      <div className="row h5 pt-5 m-0">
        <div className="col-12 p-1 pb-3">
          <Link to={`/`} id="footerlink">
            <h5 className="regular">
              <img
                src="https://img.icons8.com/ios-glyphs/100/000000/back.png"
                style={{ width: "15px" }}
                alt={`arrow`}
              />
              <span className="pl-1">Back</span>{" "}
            </h5>
          </Link>
        </div>
        <div className="col-md-3 col-12 p-1">
          <a
            href="mailto:belenewman@gmail.com?subject"
            target="_blank"
            rel="noopener noreferrer"
            id="footerlink"
          >
            belenewman@gmail.com
          </a>
        </div>
        <div className="col-md-3 col-12 p-1">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={RRSS.instagram[0].http}
          >
            <h5 className="d-inline text-nobrand pr-2">(+34) 634 758 671</h5>
          </a>
        </div>
        <div className="col-md-3 col-12 p-1">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={RRSS.instagram[0].http}
          >
            <h5 className="d-inline text-nobrand pr-2">
              {RRSS.instagram[0].name}
            </h5>
          </a>
        </div>
        <div className="col-md-3 col-12 p-1">
          <h5 className="d-inline">© {date}</h5>
        </div>
      </div>
    );
  }
}

export default Footer;
