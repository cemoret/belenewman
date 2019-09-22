import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// Components
import UpperMenu from '../../components/Menu/upperMenu';
import MiddleMenu from '../../components/Menu/middleMenu';
import Top from '../../components/Menu/Top';
import Footer from '../../components/Menu/Footer';

class Nun extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MiddleMenu color="black" />
        <UpperMenu color="black" />
        <div className="container-project">
          <div className="row m-0">
            <div className="col-12 p2p">
              <div className="h2 text-center pt-6p">Nun</div>
            </div>

            <div className="col-md-6 col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fnun%2FnunLogo.jpg?alt=media&token=80a576cd-dbc3-4b21-8f1a-56d624a5b978"
                  alt={'Logo Nun'}
                />
              </div>
            </div>

            <div className="col-md-6 col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fnun%2FmercadoLocal.jpg?alt=media&token=62a804de-3d97-40b1-aef0-d68a55ec5883"
                  alt={'Mercado Local'}
                />
              </div>
            </div>

            <div className="col-12 p2p">
              <div className="h3 text-center p6p">
                Nun is a cozy market in an emerging neighborhood in Providencia, Santiago. We
                created an identity system, packaging and signage that plays to the humble yet
                decadent nature of the place, it's offerings and local environment.
              </div>
            </div>

            <div className="col-md-6 col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fnun%2FbelenNun.jpg?alt=media&token=bef2dfe7-db5f-42b0-b009-3d37c8893d31"
                  alt={'Belen at Mercado Nun'}
                />
              </div>
              <div className="img-loader pt-6p">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fnun%2Fsentence.jpg?alt=media&token=84129202-60ea-44e5-aca8-5a8c570da815"
                  alt={'Belen at Mercado Nun'}
                />
              </div>
            </div>

            <div className="col-md-6 col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fnun%2Fbillboards.jpg?alt=media&token=6511113b-9af4-4519-8599-1818ba1243c9"
                  alt={'Billboards'}
                />
              </div>
            </div>

            <div className="col-md-6 col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fnun%2FbreadShelf.jpg?alt=media&token=ef5c75b4-9d45-4f85-be58-9c60a84271a9"
                  alt={'Bread Shelf'}
                />
              </div>
            </div>

            <div className="col-md-6 col-12 p2p">
              <div className="h3 text-left p6p">
                We design the furniture that echoes and embraces the imperfect nature of the organic
                and heart-filled food.
              </div>
            </div>

            <div className="col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fnun%2Ficons.jpg?alt=media&token=daf4df7f-52de-40e1-853a-12975725872f"
                  alt={'Icons Nun'}
                />
              </div>
            </div>

            <div className="col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fnun%2Fmenu01.jpg?alt=media&token=f394112d-93b0-4991-bbf1-6495fe1cdb43"
                  alt={'Menu 01'}
                />
              </div>
            </div>

            <div className="col-md-6 col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fnun%2Fmenu02.jpg?alt=media&token=dde57749-5963-44a7-ab6a-f29de7f61f1c"
                  alt={'Menu 02'}
                />
              </div>
            </div>

            <div className="col-md-6 col-12 p2p">
              <div className="h3 text-left p6p">
                With simpler details to show things on the menu
              </div>
            </div>

            <div className="col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fnun%2Fmenu04.jpg?alt=media&token=e77baf11-80bd-4993-8523-3b6ce3e387bc"
                  alt={'Menu 04'}
                />
              </div>
            </div>
          </div>
        </div>
        <Top />
        <Footer />
      </div>
    );
  }
}

export default Nun;
