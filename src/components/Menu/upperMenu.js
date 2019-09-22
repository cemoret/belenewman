import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class UpperMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [{ title: 'Projects' }, { title: 'Branding' }, { title: 'About' }, { title: 'CV' }]
    };
  }

  render() {
    const { menu } = this.state;
    const { color, backgroundColor } = this.props;

    return (
      <div className="">
        <nav
          style={{ backgroundColor }}
          className="container-fluid fixed-top hidden-sm-down text-center px-0">
          <div className="py-1">
            <div className="navbar navbar-text py-3">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                style={{ color }}
                className="menu-font px-4">
                {menu[0].title.toUpperCase()}
              </NavLink>
              <NavLink
                exact
                to="/branding"
                activeClassName="active"
                style={{ color }}
                className="menu-font px-4">
                {menu[1].title.toUpperCase()}
              </NavLink>
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                style={{ color }}
                className="menu-font px-4">
                {menu[2].title.toUpperCase()}
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default UpperMenu;
