import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MiddleMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [{ title: 'cemoret' }, { title: 'shop' }],
      text: 'white'
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = e => {
    if (window.scrollY > window.innerHeight) {
      this.setState({ text: 'black' });
    } else {
      this.setState({ text: 'white' });
    }
  };

  render() {
    const { menu } = this.state;
    // const { text } = this.state;
    const { color } = this.props;
    return (
      <div className="d-none d-md-block">
        <nav className="container-fluid fixed-top hidden-sm-down text-center">
          <div className="">
            <NavLink
              exact
              to="/"
              style={{ color }}
              // style={{ color: text }}
              className="line-through nav-center-y-left menu-font px-3">
              {menu[0].title.toUpperCase()}
            </NavLink>
            <NavLink
              exact
              to="/shop"
              style={{ color }}
              // style={{ color: text }}
              className="nav-center-y-right menu-font px-3">
              {menu[1].title.toUpperCase()}
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }
}

export default MiddleMenu;
