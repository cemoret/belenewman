import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components

class Revolver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderContent() {
    return (
      <div>
        <h2 className="p-5">
          Creative processes are always connected with references. That’s why we
          are making a visual archive through a digital publication allowing all
          to know the process of creative people, and their development through
          references.
        </h2>
      </div>
    );
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
            {this.renderContent()}
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

export default Revolver;
