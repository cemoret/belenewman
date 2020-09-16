import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Footer from "../Footer";

class Revolver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_index: null,
      work: {
        name: `Revolver`,
        type: `Restaurant`,
        year: `2019`,
        city: `Santiago, Chile`,
        content: `Revolver Bistró, a restaurant with French inspirations from the 50s with a Latin touch.`,
        cover: [
          {
            type: `img`,
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FRevolver(1).png?alt=media&token=7e6622e0-68f6-42e9-9e2f-041cf9e7c4b7`
          },
          {
            type: `img`,
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FRevolver(2).png?alt=media&token=bc5b31f2-58fa-4f62-8ba7-b9a3cc3e209e`
          },

          {
            type: `img`,
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FRevolver(3).png?alt=media&token=5af880b4-29df-4555-9560-bf7beb6aabc4`
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
          <h5>Project designed for Comer y Beber CO</h5>
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
            Revolver is a bistro designed under the imagination of France's
            nouvelle vague from the 1950s. Under the conceptualization of French
            modern design, we work on elements such as the color palette,
            glitter to give more glamor. After that, a more Latin side is added.
          </h5>
        </div>
        <div className="col-md-4 col-12 px-1">
          <h5 className="regular pb-2">&nbsp;</h5>
          <h5 className="pr-3">
            This place is part of the Comer & Beber company that had 6
            restaurants, which was in charge of the design and art direction.
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
            The development of the brand and the art direction are highlighted
            to highlight the concept with which he worked. Like the neon on the
            walls, the design of the paintings with scenes from French films,
            the work with Ricardo Vivallo, who developed the collages. I also
            designed the food cards and uniforms for the staff, both kitchen and
            waiters. The graphic of the dishes, coasters and choice of cutlery
            and glassware. The typographic mix in the kitchen windows emphasizes
            the variety of dishes that the place has. To then fix the logo in
            gold on the windows that overlook the terrace.
          </h5>
        </div>
        <div className="col-md-4 col-12 px-1">
          <h5 className="regular pb-2 hide-md">&nbsp;</h5>
          <h5 className="pr-3">
            In addition to developing all this visual imagery, taking it to
            design and user experience, I was in charge of seeing social media.
            Adding a tone of voice very friendly and close to customers. With
            Carlos Molina, photographer, we took photos of some dishes, where I
            was in charge of the art and production management.
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
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FRevolver%2FRevolver(4).png?alt=media&token=1b6b8621-5da5-437a-b795-936818615492`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FRevolver%2FRevolver(5).png?alt=media&token=1fbaf953-6857-4ba3-859f-48f85ba79955`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FRevolver%2FRevolver(6).png?alt=media&token=711c40e4-a2f5-4a33-aff5-3f2cf48eb35a`}
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
        <div className="row pt-5 m-0">
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FRevolver%2FRevolver(7).png?alt=media&token=56629442-3c65-4d86-b17c-7457c27c05b3`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FRevolver%2FRevolver(8).png?alt=media&token=18cab437-7172-481a-a18e-495d2fe419a6`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FRevolver%2FRevolver(9).png?alt=media&token=4da20a42-d194-40b9-ba3b-9992ec47ad5d`}
              className="img-cover"
              alt="gallery"
            />
          </div>
        </div>

        <div className="row m-0">
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FRevolver%2FRevolver(10).png?alt=media&token=3863766b-8cbe-4f17-b11e-56ae7e2cc0dd`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FRevolver%2FRevolver(11).png?alt=media&token=e2c340f8-e69f-4b15-8029-1debfd3e6013`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FRevolver%2FRevolver(12).png?alt=media&token=866d0c68-5ab8-4bbb-9e54-2686400b9614`}
              className="img-cover"
              alt="gallery"
            />
          </div>
        </div>

        <div className="row pt-5 m-0">
          <div className="col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FRevolver%2FRevolver(13).png?alt=media&token=da5d5f23-6725-45a2-a16e-aa9d68970b7e`}
              className="img-cover"
              alt="gallery"
            />
          </div>
        </div>

        <div className="row pt-5 m-0">
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FRevolver%2FRevolver(14).png?alt=media&token=61f9a410-4de9-4d11-b761-38345ed02cab`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FRevolver%2FRevolver(15).png?alt=media&token=fd6ee147-90fe-437d-bd9e-51f3eadcdce3`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FRevolver%2FRevolver(16).png?alt=media&token=201985d2-54ba-49f5-a223-0a3bcf4aaf04`}
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

export default Revolver;
