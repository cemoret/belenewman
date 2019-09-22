import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// Components
import UpperMenu from '../../components/Menu/upperMenu';
import MiddleMenu from '../../components/Menu/middleMenu';
import Top from '../../components/Menu/Top';
import Footer from '../../components/Menu/Footer';

class Hooleap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container padding-medium">
        <MiddleMenu color="black" />
        <UpperMenu color="black" backgroundColor="white" />
        <div className="container-project">
          <div className="row pt-5">
            <div className="col-12 text-center medium">
              <h6 className="font-serif bold">Hooleap</h6>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-12">
              <h2 className="text-center font-serif regular">
                Creacion de Hooleap, un Marketplece para Educacion en persona.
              </h2>
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h4 className="font-serif">
                Hooleap es una plataforma para hacer workshops en persona. Ayudando a los creadores
                a compartir sus habilidades a través de la plataforma.
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">Problema</h3>
              <h4 className="font-serif pt-3">Doers (Talento Local - Instructores):</h4>
              <h5 className="pt-3">
                <li className="pb-3">
                  Dificultadas para tener una presencia diguital con un sistema seguro de pagos.
                </li>
                <li className="pb-3">
                  Perdida de tiempo en coordinar la logistica de un taller o clase
                </li>
                <li className="pb-3">
                  Encontrar personas para completar el cupo y tener presencia en la comunidad.
                </li>
                <li className="pb-3">No porderse ganar la vida haciendo lo que les apaciona.</li>
              </h5>
              <h4 className="font-serif pt-3">Clientes:</h4>
              <h5 className="pt-3">
                <li className="pb-3">Dificultadas para encontrar talleres en la cuidad.</li>
                <li className="pb-3">
                  Miedo a realizar transferencias y compartir sus datos a una persona desconocida.
                  Falta de sistema de referencias y reviews.
                </li>
                <li className="pb-3">
                  Una falta en diversidad y creatividad en los talleres dado a los negocios
                  estandarizados.
                </li>
                <li className="pb-3">No porderse ganar la vida haciendo lo que les apaciona.</li>
              </h5>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">Brand Guidelines</h3>
              <h4 className="font-serif pt-3">
                Creacion de la Identidad Grafica de la marca Hooleap. Una marca que debe generar
                confianza entre ambas partes del marketplace, dada la naturaleza de los workshop en
                persona, tiene que ser una marca cercana.
              </h4>
              <h4 className="font-serif pt-3">
                El Manual de Marca, tiene todos los componentes necesarios para generar una
                presencia online y offline. Pensada desde la vision del usuario final y online, para
                luego llevarla a todos los aspectos de la experiencia de los usuarios en ambos lados
                del marketplace.
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-03.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-05.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-07.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-13.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-16.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-18.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-23.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-27.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-30.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">UI Kit</h3>
              <h4 className="font-serif pt-3">
                Es una transformacion de la identidad de marca y grafica de la marca a un conjunto
                de elementos web que seran parte de la interaccion del usuario en internet,
                desarrollado desde los dispositivos moviles hasta el ordenador.
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-12">
              <div
                className="img-4x3"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/UXKit.jpg)`,
                  paddingTop: '70%'
                }}
              />
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">Home</h3>
              <h4 className="font-serif pt-3">
                El objetivo principal del Home para Hooleap en la etapa en la que se encuentra, es
                la de poder explicar de forma rapida y facil de que se trata Hooleap y que tan
                diversos pueden ser los talleres que pueden encontrar. Para lograr este objetivo se
                muestra una pequeña descripcion con la bajada de Hooleap, luego las categorias
                disponibles con imagenes de reconocimineto rapido, para luego terminar con los
                talleres mas importantes en cada categoria. Generando una curiosidad por navegar y
                descubrir mas cursos dentro de la platadorma.
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-12 py-5">
              <div
                className="img-3x4 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/home.jpg)`,
                  paddingTop: '270%'
                }}
              />
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h4 className="font-serif pt-3">
                Tuvimos varias pruebas de usuario con el Home y nos dimos cuenta de los siguientes
                puntos:
                <li className="py-3">
                  Una explicacion inicial larga de Hooleap es contraproducente para la lectura del
                  usuario.
                </li>
                <li className="pb-3">
                  Fue necesario agrandar las categorias generales de Hooleap, ya que el usuario no
                  siempre se sentia identificado con los talleres y pensaba que la oferta era mas
                  limitada.
                </li>
                <li className="py-3">
                  Incluimos al final del Home una seccion con los tutores (doer), lo cual genero
                  confianza y dio a entender que Hooleap es el intermediario y que existe una gran
                  variedad de ofertas de talleres dictados por locales.
                </li>
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">Filtros y Categorizacion</h3>
              <h4 className="font-serif pt-3">
                Implementacion de Identidad grafica desarrollada por Estudio Prado. Adaptar la
                identidad grafica a un estandar web que pueda funcionar en todos los dispositivos
                manteniendo la escencia de la marca
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-12 py-5">
              <div
                className="img-3x4 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/filter2.jpg)`,
                  paddingTop: '71%'
                }}
              />
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">Filtros y Categorizacion</h3>
              <h4 className="font-serif pt-3">
                Implementacion de Identidad grafica desarrollada por Estudio Prado. Adaptar la
                identidad grafica a un estandar web que pueda funcionar en todos los dispositivos
                manteniendo la escencia de la marca
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-6 pb-5">
              <div
                className="img-4x3 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/reviewSystem.jpg)`,
                  paddingTop: '58%'
                }}
              />
            </div>
            <div className="col-6 pb-5">
              <div
                className="img-4x3 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/reviewSystem2.jpg)`,
                  paddingTop: '58%'
                }}
              />
            </div>
            <div className="col-6 pb-5">
              <div
                className="img-4x3 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/error404.jpg)`,
                  paddingTop: '58%'
                }}
              />
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">Payment System</h3>
              <h4 className="font-serif pt-3">
                Implementacion de Identidad grafica desarrollada por Estudio Prado. Adaptar la
                identidad grafica a un estandar web que pueda funcionar en todos los dispositivos
                manteniendo la escencia de la marca
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-6 pb-5">
              <div
                className="img-4x3 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/payment.jpg)`,
                  paddingTop: '83%'
                }}
              />
            </div>
            <div className="col-6 pb-5">
              <div
                className="img-4x3 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/order.jpg)`,
                  paddingTop: '83%'
                }}
              />
            </div>
            <div className="col-6 pb-5">
              <div
                className="img-4x3 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/receipt.jpg)`,
                  paddingTop: '83%'
                }}
              />
            </div>
            <div className="col-6 pb-5">
              <div
                className="img-4x3 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/ordersList.jpg)`,
                  paddingTop: '70%'
                }}
              />
            </div>
          </div>
        </div>
        <Top />
        <Footer />
      </div>
    );
  }
}

export default Hooleap;
