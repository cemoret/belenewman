import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Footer from "../Footer";

class BarraChocolate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_index: null,
      work: {
        name: `Barra`,
        type: `Identity / Packaging`,
        year: `2018`,
        city: `Santiago, Chile`,
        content: `Barra Chocolate identity and packaging design`,
        cover: [
          {
            type: `img`,
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FBarra(2).png?alt=media&token=5a9f8d55-fe16-4308-81c6-01f00fb00515`
          },
          {
            type: `img`,
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FBarra(3).png?alt=media&token=a73ab2f3-95c8-411d-b641-53ef390b92f3`
          },
          {
            type: `img`,
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FBarra(1).png?alt=media&token=26defa85-784b-46ea-99e2-dff6425a1f33`
          }
        ]
      }
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderHeader(work) {
    return (
      <div className="row m-0">
        <div className="col-md-4 col-12 px-1 pb-5">
          <h4 className="regular pb-2">{work.name}</h4>
          <h5>{work.type}</h5>
          <h5>Interior Design / Graphic & Digital Design Pieces</h5>
          <h5>
            {work.city} - {work.year}
          </h5>
          <h5>Project designed with Carlos Moret Kopal</h5>
          <Link to={`/`} id="footerlink">
            <h5 className="regular pt-3">
              <img
                src="https://img.icons8.com/ios-glyphs/100/000000/back.png"
                style={{ width: "15px" }}
                alt={`arrow`}
              />
              <span className="pl-1">Back</span>{" "}
            </h5>
          </Link>
        </div>

        <div className="col-md-4 col-12 px-1">
          <h5 className="regular pb-2">Overview</h5>
          <h5 className="pr-3">
            A simple brand, like its name. The idea arises with the aim of
            merging cooking and design, through the bean to bar concept we
            developed this company that connects these 2 worlds in a very simple
            and clear way.
          </h5>
        </div>
        <div className="col-md-4 col-12 px-1">
          <h5 className="regular pb-2">&nbsp;</h5>
          <h5 className="pr-3">
            Made on a small scale, giving importance to the quality of the
            ingredients and how that could be transmitted in a bar under a
            strong design. We increase the consumption of chocolates from the
            grain to the bar, teaching customers about our products.
          </h5>
        </div>
      </div>
    );
  }

  renderProcess() {
    return (
      <div className="row m-0 pb-5">
        <div className="col-md-4 col-12 px-1 d-none d-md-block">
          <h5 className="regular pb-2">&nbsp;</h5>
        </div>

        <div className="col-md-4 col-12 px-1">
          <h4 className="regular pb-2">Process</h4>
          <h5 className="pr-3">
            The ingredients are key. On the labels, with a box containing
            relevant information: brand, type of chocolate, flavor and batch,
            which is stamped each time the bars are packaged; This last gesture
            represents the small industrial of the brand. It has collaborations
            from different illustrators, Catalina Bu, Matías Prado, Camilo
            Huinca, Jennifer Bouron, Matías Ulloa, Eleonora Arosio, Martina
            Kaukova. In addition, we participate with national brands such as
            Obra, and international TOPSHOP and TOPMAN, among others.
          </h5>
        </div>
        <div className="col-md-4 col-12 px-1">
          <h5 className="regular pb-2 hide-md">&nbsp;</h5>
          <h5 className="pr-3">
            We appeared on Spanish blogs, ranking ourselves among the 8 best
            designed packaging in the world and we appeared in magazines. This
            project won 2nd place in the Seal of Excellence in Design, Graphic
            Category 2015, Design Area of the National Council of Culture and
            Arts of Chile.
          </h5>
        </div>
      </div>
    );
  }

  renderImages1() {
    return (
      <div>
        <div className="row m-0">
          <div className="col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FBarra%2FBarra(4).png?alt=media&token=3ba12cad-2d49-4dda-af51-709afdda5588`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FBarra%2FBarra(5).png?alt=media&token=2af17fc7-ac5b-4f68-a20f-3a987aa610ea`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FBarra%2FBarra(6).png?alt=media&token=40aeac0f-5224-4dad-8f2f-4da191651b35`}
              className="img-cover"
              alt="gallery"
            />
          </div>
        </div>
      </div>
    );
  }

  renderImages2() {
    return (
      <div>
        <div className="row m-0">
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FBarra%2FBarra(7).png?alt=media&token=5b8c0703-038d-409a-bb29-e4a378a06cd3`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FBarra%2FBarra(8).png?alt=media&token=56094262-0525-412f-8044-c783bddedd3b`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FBarra%2FBarra(9).png?alt=media&token=e2603af2-5637-46fc-aa32-8f4c286cb3df`}
              className="img-cover"
              alt="gallery"
            />
          </div>
        </div>

        <div className="row m-0">
          <div className="col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FBarra%2FBarra(10).png?alt=media&token=0c1115a4-fac0-4e62-8fd5-b9bfff655cda`}
              className="img-cover"
              alt="gallery"
            />
          </div>
        </div>
      </div>
    );
  }

  renderWork(work) {
    const { cover } = work;
    return cover.map(({ img, type }, index) => {
      if (type === "video") {
        return (
          <div key={index} className="col-md-4 col-12 p-1">
            <video
              loop
              width="100%"
              height="100%"
              src={img}
              autoPlay
              muted
              type="video/mov"
            ></video>
          </div>
        );
      } else {
        return (
          <div key={index} className="col-md-4 col-12 p-1">
            <img src={img} className="img-cover" alt="gallery" />
          </div>
        );
      }
    });
  }

  render() {
    const { work } = this.state;
    return (
      <div className="content-box-lg">
        <div className="row m-0 p-5">
          <div className="col-lg-12 pb-5 px-0">{this.renderHeader(work)}</div>
          <div className="col-lg-12 p-0">
            <div className="row m-0">{this.renderWork(work)}</div>
          </div>
          <div className="col-lg-12 p-0">
            <div className="row m-0">{this.renderImages1()}</div>
          </div>

          <div className="col-lg-12 p-0 pt-5">
            <div className="row m-0">{this.renderProcess()}</div>
          </div>
          <div className="col-lg-12 p-0">
            <div className="row m-0">{this.renderImages2()}</div>
          </div>
          <div className="col-lg-12 p-0">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default BarraChocolate;
