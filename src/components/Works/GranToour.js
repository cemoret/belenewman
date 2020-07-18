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
        name: `Grandtour`,
        type: `Magazine`,
        year: `2020`,
        city: `Barcelona, Spain`,
        content: `A magazine with a critical eye on mass tourism and how this privileged movement shapes our lifes.`,
        cover: [
          {
            type: `video`,
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/videos%2FGRANTOUR_Revista.mp4?alt=media&token=83ac7e04-8a5a-41f8-b8ca-58cf2edbe246`
          },
          {
            type: `img`,
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FGRANDTOUR%2FGRANDTOUR(4).png?alt=media&token=ffbd3290-c9c6-47a7-a245-0609615040be`
          },

          {
            type: `video`,
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/videos%2FGRANTOUR_Portada.mp4?alt=media&token=b8b9c8b7-a41f-4367-a75f-9a077a4f47fc`
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
          <h5>Art Direction / Editorial</h5>
          <h5>Barcelona, Spain - 2020</h5>
          <h5>Project designed with Inés Piñeiro Ozores</h5>
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
            We all already know the good part of tourism. Everyone is more than
            used to seeing the impact of vacations on travelers. It’s very
            common for someone to tell you that a trip has changed his life but,
            what about the hidden reality of that travel?
          </h5>
          <h5 className="pr-3">
            The main objective of GRANTOUR is showing the reality behind the
            mass tourism.
          </h5>
        </div>
        <div className="col-md-4 col-12 px-1">
          <h5 className="regular pb-2">&nbsp;</h5>
          <h5 className="pr-3">
            The publication shows a different way of traveling in each issue,
            exploring how cruises, coast turism or the phenomenom of theme-park
            cities, for example, affects people's lives. The aim of GRANTOUR is
            talking about this in a kindly way, focusing on people's stories
            suffering the consequences of mass tourism.
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
            Each issue is organized around four different perspectives.
          </h5>
          <h5 className="pr-3">
            Verticality represent “the unity between divinity and power”
          </h5>
          <h5 className="pr-3">
            This categories works as “drawers” of content and allow us to see
            the same topic from different angles.
          </h5>
          <h5 className="pb-2">
            <strong>LIVING.</strong> | How does tourism affect to rental prices?
            And to our mental health? How does gentrification work? What is it
            like to live traveling?
          </h5>
          <h5 className="pb-2">
            <strong>WORK.</strong> | Is the seasonal work provided by tourism
            optimal? What is it like to work on the top-manta? What happens to
            the local commerce that disappears in our cities?
          </h5>
        </div>
        <div className="col-md-4 col-12 px-1">
          <h5 className="regular pb-2 hide-md">&nbsp;</h5>

          <h5 className="pb-2">
            <strong>ENVIRONMENT.</strong> | Is your trip sustainable? What are
            the environmental consequences of this unbridled tourism? And what
            about landscape?
          </h5>
          <h5 className="pb-2">
            <strong>IDENTITY.</strong> | When were souvenirs born? Are paella
            and sangria our new gastronomy? Are we able to understand a place in
            such a short time?
          </h5>
          <h5 className="pb-2">
            A clear design is the key to make it easy to locate where you are in
            the magazine and to focus on the content. The magazine follows a
            simple layout to give prominence to the visual content and show it
            in a friendly way. Each one of the parts, is identified with a
            bright color. Navigation, inspired by the signage, always places you
            in which part of the magazine you are, being present throughout the
            publication.
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
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FGRANDTOUR%2FGRANDTOUR(5).png?alt=media&token=d3825397-2429-4b58-bb3f-66ac7c54248e`}
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
          <div className="col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FGRANDTOUR%2FGRANDTOUR(6).png?alt=media&token=6d351e4d-3abf-43d1-b476-650644502f5c`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FGRANDTOUR%2FGRANDTOUR(7).png?alt=media&token=b29307fa-eaad-4d24-b889-b8c8f3a43f51`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FGRANDTOUR%2FGRANDTOUR(8).png?alt=media&token=a62af371-7321-476e-aee1-5015e2a6225a`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FGRANDTOUR%2FGRANDTOUR(9).png?alt=media&token=9f9b0684-c73a-4cae-a2ab-376985d93a95`}
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
