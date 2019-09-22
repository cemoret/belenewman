import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  renderButton() {
    return (
      <div className="">
        <button className="link-button underline" onClick={() => this.scrollToTop()}>
          Top
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="row m-0">
        <div className="col-12 text-center py-3">{this.renderButton()}</div>
      </div>
    );
  }
}

export default Top;
