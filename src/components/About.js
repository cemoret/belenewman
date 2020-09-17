import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Footer from "./Footer";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderAbout() {
    return (
      <div className="row m-0 about">
        <div className="col-md-8 col-12 p-5">
          <h1 className="pb-3">Belen Newman</h1>
          <h2 className="pb-3">
            Senior Designer, Art Director & UX/UI
            <span className="h4" role="img" aria-label="hand-emoji">
              &nbsp;&nbsp;👋🏻
            </span>
          </h2>
          <h2 className="pb-5">
            My work has been based on contact with people and generating
            experiences for them. Developing a structure with a solid conceptual
            foundation, creating a design with a focus on typography, image,
            color and composition. My job is to be able to communicate and
            generate content in collaboration with other trades through design.
            I have good teamwork and problem solving skills. I am interested in
            developing emotionally charged projects, through the transfer of
            knowledge, storytelling and thus finding new ways to design.
          </h2>
        </div>

        <div className="col-md-4 col-12 p-5">
          <h3 className="pb-3">Software:</h3>
          <h3>Sketch App</h3>
          <h3>Figma</h3>
          <h3>Invision</h3>
          <h3>Invision Studio</h3>
          <h3>Adobe Illustrator</h3>
          <h3>Lightroom</h3>
        </div>
        <div className="p-5">
          <Footer />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="content-box-lg">
        <div className="row m-0">
          <div className="col-md-1 col-12 px-0">
            <div className="row m-0 fixed-md-top">
              <div
                className="col-md-6 col-12 px-0"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <Link to={"/works"}>
                  <div className="h100v">
                    <h3 className="menu-v m-0">Selected</h3>
                  </div>
                </Link>
              </div>
              <div
                className="col-md-6 col-12 px-0"
                style={{ backgroundColor: "#D9DFF6" }}
              >
                <Link to={"/cases"}>
                  <div className="h100v">
                    <h3 className="menu-v m-0">Cases</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-11 col-12 px-0 pt-100">
            {this.renderAbout()}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
