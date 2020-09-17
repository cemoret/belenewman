import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components

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
          <h2 className="pb-3">
            Senior Designer, Art Director & UX/UI{" "}
            <span role="img" aria-label="hand-emoji">
              👋🏻
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

          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://www.instagram.com/belenewman`}
          >
            <span className="h2">↗&nbsp;</span>
            <h2 className="inline-block link">Instagram</h2>
          </a>

          <a
            href="mailto:belenewman@gmail.com?subject = Feedback&body = Message"
            rel="noopener noreferrer"
            target="_blank"
            className="px-5"
          >
            <span className="h2">↗&nbsp;</span>
            <h2 className="inline-block link">Email</h2>
          </a>

          <div className="pt-5">
            <Link to={`/`}>
              <span className="h2">←&nbsp;</span>
              <h2 className=" inline-block link">Back</h2>
            </Link>
          </div>
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
                style={{ backgroundColor: "#EEEEEE" }}
              >
                <Link to={"/works"}>
                  <div className="h100v">
                    <h3 className="menu-v m-0">Selected</h3>
                  </div>
                </Link>
              </div>
              <div
                className="col-md-6 col-12 px-0"
                style={{ backgroundColor: "#E1E1E1" }}
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
