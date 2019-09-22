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
        <MiddleMenu />
        <UpperMenu />

        <Link to="/projects/follow-the-forest">
          <div className="row height-100 m-0">
            <div className="col-12 p-0">
              <div
                className="img-100"
                style={{
                  backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fftforest.jpg?alt=media&token=e250c221-6275-47fd-a90a-036fd81779ef)`
                }}
              />
            </div>
          </div>
        </Link>

        <Link to="/projects/hooleap">
          <div className="row height-100 m-0">
            <div className="col-12 p-0">
              <div
                className="img-100"
                style={{
                  backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fcovers%2Fhooleap.jpg?alt=media&token=4702208e-4600-4895-8095-e72a58d3129e)`
                }}
              />
            </div>
          </div>
        </Link>

        <Link to="/projects/barra-chocolate">
          <div className="row height-100 m-0">
            <div className="col-12 p-0">
              <div
                className="img-100"
                style={{
                  backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fcovers%2FcoverBarraCatalinaBu.jpg?alt=media&token=4177f31b-4a52-416f-a3b5-f4234ad912d2)`
                }}
              />
            </div>
          </div>
        </Link>

        {/* <div id="header">
          <h5 className="py-4 my-0 text-center" style={{ backgroundColor: color, color: text }}>
            cemoret@gmail.com
          </h5>
        </div> */}

        <Link to="/branding">
          <div className="row height-100 m-0">
            <div className="col-12 p-0">
              <div
                className="img-100"
                style={{
                  backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2FbrandIdentity.jpg?alt=media&token=33185827-9c40-4c2b-83ec-8657025013e2)`
                }}
              />
            </div>
          </div>
        </Link>

        <Link to="/projects/nun">
          <div className="row height-100 m-0">
            <div className="col-12 p-0">
              <div
                className="img-100"
                style={{
                  backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fnun.jpg?alt=media&token=17509fc8-8f31-4fa6-9eab-470b1ada30e2)`
                }}
              />
            </div>
          </div>
        </Link>
        {/* <Top /> */}
        <Footer />
      </div>
    );
  }
}

export default Projects;
