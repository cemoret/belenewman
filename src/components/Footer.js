import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <footer>
        <div className="row m-0 d-none d-md-block">
          <div className="col-12 px-0">
            <Link to={`/`}>
              <span className="h3">←&nbsp;&nbsp;</span>
              <h3 className="inline-block link">Back</h3>
            </Link>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.instagram.com/belenewman`}
              className="pl-5"
            >
              <span className="h3">↗&nbsp;&nbsp;</span>
              <h3 className="inline-block link">Instagram</h3>
            </a>

            <a
              href="mailto:belenewman@gmail.com?subject = Feedback&body = Message"
              rel="noopener noreferrer"
              target="_blank"
              className="pl-5"
            >
              <span className="h3">↗&nbsp;&nbsp;</span>
              <h3 className="inline-block link">Email</h3>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
