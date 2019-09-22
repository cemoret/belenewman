import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// Components
import UpperMenu from './Menu/upperMenu';
import MiddleMenu from './Menu/middleMenu';
import Footer from './Menu/Footer';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daysToLaunch: 21
    };
  }

  render() {
    return (
      <div className="content-box-lg">
        <MiddleMenu color="black" />
        <UpperMenu color="black" backgroundColor="white" />

        <div className="row height-100 m-0">
          <div className="col-12 p-0">
            <div className="text-center text-middle line-through" style={{ color: 'black' }}>
              Shop under construction
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Shop;
