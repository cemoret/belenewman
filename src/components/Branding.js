import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// Components
import UpperMenu from './Menu/upperMenu';
import MiddleMenu from './Menu/middleMenu';
import Footer from './Menu/Footer';

class Branding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content-box-lg">
        <MiddleMenu />
        <UpperMenu />

        <div className="row height-100 m-0">
          <div className="col-12 p-0">
            <div
              id="black"
              className="img-100"
              style={{
                backgroundColor: 'white',
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2FbrandIdentity.jpg?alt=media&token=33185827-9c40-4c2b-83ec-8657025013e2)`
              }}
            />
          </div>
        </div>

        <div className="row height-100x2 m-0">
          <div className="col-sm-6 col-12 p-0">
            <div
              className="img-100"
              style={{
                backgroundColor: 'black',
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/branding%2Fram1.jpg?alt=media&token=801f74b9-c570-4a46-aff5-99428e6ae7e8)`
              }}
            />
          </div>
          <div className="col-sm-6 col-12 p-0">
            <div
              className="img-100"
              style={{
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/branding%2Fram2.jpg?alt=media&token=6995aab9-e5dd-42e3-95f5-d38d2e2102e2)`
              }}
            />
          </div>
        </div>

        <div className="row height-100 m-0">
          <div className="col-12 p-0">
            <div
              className="img-100"
              style={{
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/branding%2Fpublicfc.jpg?alt=media&token=d733026b-28c8-4eef-92b0-e18dea9e090e)`
              }}
            />
          </div>
        </div>

        <div className="row height-100 m-0">
          <div className="col-12 p-0">
            <div
              className="img-100"
              style={{
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/branding%2Fcocacola.jpg?alt=media&token=ad0bb4a2-9b62-42b6-b69f-23eb10322f82)`
              }}
            />
          </div>
        </div>

        <div className="row height-100 m-0">
          <div className="col-12 p-0">
            <div
              className="img-100"
              style={{
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/branding%2Fkopal.jpg?alt=media&token=7870accf-1fae-49f2-85bd-66df7fbfcd2e)`
              }}
            />
          </div>
        </div>

        <div className="row height-100 m-0">
          <div className="col-12 p-0">
            <div
              className="img-100"
              style={{
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/branding%2Fdomei.jpg?alt=media&token=825310c2-b3fe-4a4e-9d54-792f703fa7ac)`
              }}
            />
          </div>
        </div>

        <div className="row height-100x2 m-0">
          <div className="col-sm-6 col-12 p-0">
            <div
              className="img-100"
              style={{
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/branding%2Fcapu1.jpg?alt=media&token=3b3f1ba8-5f11-44ea-bc59-85138c46a918)`
              }}
            />
          </div>
          <div className="col-sm-6 col-12 p-0">
            <div
              className="img-100"
              style={{
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/branding%2Fcapu2.jpg?alt=media&token=a4f1519f-45f6-4894-b3e3-08690749a8b8)`
              }}
            />
          </div>
        </div>

        <div className="row height-100x2 m-0">
          <div className="col-sm-6 col-12 p-0">
            <div
              className="img-100"
              style={{
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/branding%2Fbarra.jpg?alt=media&token=19ee16bc-3b3f-4227-80cc-fea38ba96333)`
              }}
            />
          </div>
          <div className="col-sm-6 col-12 p-0">
            <div
              className="img-100"
              style={{
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/branding%2Fnun.jpg?alt=media&token=8585b710-34f6-4879-81f0-28bb9967fadc)`
              }}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Branding;
