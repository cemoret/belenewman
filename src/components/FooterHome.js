import React, { Component } from "react";

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
