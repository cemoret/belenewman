import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// Components
import UpperMenu from '../../components/Menu/upperMenu';
import MiddleMenu from '../../components/Menu/middleMenu';
import Top from '../../components/Menu/Top';
import Footer from '../../components/Menu/Footer';

class Barra extends Component {
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
              <div className="h2 text-center pt-6p">Barra</div>
            </div>

            <div className="col-12 p2p">
              <div className="h3 text-center p6p">
                Barra Chocolate was a project created by Belén Newman and Carlos Moret in 2015.
                Project that seeks to take chocolate to a purer level by making a chocolate from the
                grain to the bar.
                <br />
                <br />
              </div>
            </div>

            <div className="col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2FMatiasPradoDetail.jpg?alt=media&token=3a12906c-39bb-4c2c-bb21-070f139d5c26"
                  alt={'barra packaging matias prado detail'}
                />
              </div>
            </div>

            <div className="col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2FMatiasPrado.jpg?alt=media&token=48f208bd-2030-4148-a7f1-488296189dc5"
                  alt={'barra packaging matias prado'}
                />
              </div>
            </div>

            <div className="col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2FCatalinaBuDetail.jpg?alt=media&token=a9203f31-a4e2-466b-b758-049d843a3928"
                  alt={'barra packaging matias prado detail'}
                />
              </div>
            </div>

            <div className="col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2FCatalinaBu.jpg?alt=media&token=fc2000a6-3748-4e94-acec-661768ce2831"
                  alt={'barra packaging matias prado'}
                />
              </div>
            </div>

            <div className="col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2FOnlyJokeDetail.jpg?alt=media&token=6a2f38b7-b017-4930-bc2c-d24928a186f1"
                  alt={'barra packaging Only Joke detail'}
                />
              </div>
            </div>

            <div className="col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2FOnlyJoke.jpg?alt=media&token=ff0ff9ef-37c2-4ff1-b864-4441bbf9314f"
                  alt={'barra packaging Only Joke'}
                />
              </div>
            </div>

            <div className="col-12 p2p">
              <div className="h3 text-center p6p">
                The brand has collaborations of different illustrators and artists such as: Catalina
                Bu, Matías Prado, Camilo Huinca, Jennifer Bouron, Eleonora Arosio and Mati Ulloa
                among others.
              </div>
            </div>

            <div className="col-md-6 col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2FbusinessCard1.jpg?alt=media&token=5d014fc8-7cfc-4f50-90e4-703dac786dbf"
                  alt={'Business Card Barra 01'}
                />
              </div>
            </div>
            <div className="col-md-6 col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2FbusinessCard2.jpg?alt=media&token=b4d98994-ba02-427b-858f-45db2cf0bf06"
                  alt={'Business Card Barra 02'}
                />
              </div>
            </div>

            <div className="col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2FiconsBarra.jpg?alt=media&token=a979668f-f055-463b-98fd-850431700698"
                  alt={'Iconos Barra'}
                />
              </div>
            </div>

            <div className="col-md-6 col-12 p2p">
              <div className="h3 text-center p6p">
                Awards : Barra Chocolate won the second place in Seal of Excellence in Design,
                Graphic Category 2015, Design Area of the National Council of Culture and Arts
                (CNCA) - Government of Chile.
              </div>
            </div>

            <div className="col-md-6 col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2Fawards.jpg?alt=media&token=94789848-48c7-47f0-9798-2e8df6b7ac5e"
                  alt={'Awards Icon'}
                />
              </div>
            </div>

            {/* <div className="col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2FbluePrint.jpg?alt=media&token=8fbc4a5b-e62d-4399-b23c-5d220f0436e1"
                  alt={'Blue Prints Factory'}
                />
              </div>
            </div> */}

            <div className="col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2FSupCorte1.jpg?alt=media&token=40f62b26-857b-43a5-bf54-83cfa061ee75"
                  alt={'Sup Corte 01'}
                />
              </div>
            </div>

            <div className="col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2FSupCorte2.jpg?alt=media&token=ba5a391d-f590-4474-b14b-61f04fb0e570"
                  alt={'Sup Corte 02'}
                />
              </div>
            </div>

            <div className="col-md-6 col-12 p2p">
              <div className="h3 text-left p6p">
                The ratio of cocoa and sugar is 2/3, that is why it was decided to intervene the bar
                2/3 of its height and the rest leave it blank as sugar.
              </div>
            </div>

            <div className="col-md-6 col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2FSupCorte3.jpg?alt=media&token=4e470006-76b5-4ef1-ae3d-f54fc592331f"
                  alt={'Sup Corte 03'}
                />
              </div>
            </div>

            <div className="col-md-6 col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2FSupCorte4.jpg?alt=media&token=8f00b5fb-faca-4066-9b9b-52ff0f116202"
                  alt={'Sup Corte 04'}
                />
              </div>
            </div>

            <div className="col-md-6 col-12 p2p">
              <div className="h3 text-right p6p">
                The photographs were taken by Carlos Molina at Estudio CC and Art Direction by Belén
                Newman.
              </div>
            </div>

            <div className="col-12 p2p">
              <div className="img-loader">
                <img
                  className="img-content"
                  style={{ display: 'inline' }}
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca42d.appspot.com/o/projects%2Fbarra%2FbarraWeb.jpg?alt=media&token=90032304-ab06-451a-9ca6-d1dd9695cb47"
                  alt={'website barra'}
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

export default Barra;
