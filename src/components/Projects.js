import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import UpperMenu from './Menu/upperMenu';
import MiddleMenu from './Menu/middleMenu';
import Footer from './Menu/Footer';
// import Top from './Menu/Top';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
      text: 'black'
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = e => {
    if (window.scrollY > window.innerHeight) {
      this.setState({ color: 'white', text: 'black' });
    } else {
      this.setState({ color: 'black', text: 'white' });
    }
  };

  render() {
    // const { color, text } = this.state;
    return (
      <div className="content-box-lg">
        {/* <MiddleMenu /> */}
        {/* <UpperMenu /> */}

        {/* <Link to="/projects/follow-the-forest"> */}
        <div className="row height-85x2 m-0">
          <div className="col-sm-6 col-12 p-0">
            <div
              className="img-100"
              style={{
                backgroundColor: 'black',
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/projects%2Finstagram%2FNY.jpeg?alt=media&token=b103e866-cc42-487b-a2ac-c6e23e08cfe9)`
              }}
            />
          </div>
          <div className="col-sm-6 col-12 p-0">
            <div
              className="img-100"
              style={{
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/projects%2Finstagram%2FbelenTest2.png?alt=media&token=04ae6987-5185-4ed4-9e77-0beb76801200)`
              }}
            />
          </div>
        </div>
        {/* </Link> */}

        {/* <Link to="/projects/follow-the-forest">
          <div className="row height-85 m-0">
            <div className="col-12 p-0">
              <div
                className="img-85"
                style={{
                  backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fftforest.jpg?alt=media&token=e250c221-6275-47fd-a90a-036fd81779ef)`
                }}
              />
            </div>
          </div>
        </Link> */}

        {/* <Top /> */}
        <Footer />
      </div>
    );
  }
}

export default Projects;
