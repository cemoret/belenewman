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
      <div className="row m-0 about" id="scrolly">
        <div className="col-lg-10 col-12 p-5 pb-3">
          <h2 className="pb-3">Belén Newman</h2>
          <h3 className="">
            Senior Designer, Art Director & UX/UI
            <span className="h4" role="img" aria-label="hand-emoji">
              &nbsp;&nbsp;👋🏻
            </span>
          </h3>

          <h3 className="">7 years of experience</h3>
          <h3 className="">Based in Barcelona</h3>
          <h3 className="pt-5">
            My work has been based on contact with people and generating
            experiences for them. Developing a structure with a solid conceptual
            foundation, creating a design with a focus on typography, image,
            color and composition. My job is to be able to communicate and
            generate content in collaboration with other roles through design. I
            have good teamwork and problem solving skills. I am interested in
            developing emotionally charged projects, through the transfer of
            knowledge, storytelling and thus finding new ways to design.
          </h3>
        </div>

        <div className="col-md-6 col-12 px-5">
          <h3 className="pb-3">Education:</h3>
          <h4>- Graphic designer | Universidad Diego Portales</h4>
          <h4>- Master’s Degree in Editorial Design | ELISAVA</h4>

          <h3 className="py-3">Portfolio:</h3>
          <h4>- Design by Belén Newman</h4>
          <h4>- Code by Carlos Moret</h4>
        </div>

        <div className="col-md-6 col-12 px-5">
          <h3 className="pb-3">Software:</h3>
          <h4>- Figma, Sketch & Adobe XD</h4>
          <h4>- Invision</h4>
          <h4>- Illustrator</h4>
          <h4>- InDesign</h4>
          <h4>- Photoshop & Lightroom</h4>
          <h4>- HTML, CSS & Javascript</h4>
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
