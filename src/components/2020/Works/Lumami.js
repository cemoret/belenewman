import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Footer from "../Footer";

class Lumami extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_index: null,
      work: {
        name: `LuMaMi`,
        type: `Digital / App`,
        year: `2020`,
        city: `Barcelona, Spain`,
        content: `App that seeks to establish responsible consumption habits, promoting change, in order to be able to make informed and conscious decisions. We can't be perfect, but let's try LUMAMI.`,
        cover: [
          {
            type: `img`,
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2Flumami%2Flumami(1).png?alt=media&token=565e9c56-f22b-4008-821c-0335dd0f2090`
          },

          {
            type: `img`,
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2Flumami%2Flumami(2).png?alt=media&token=4f009371-46aa-47bc-a8ae-5b7e24c69463`
          },
          {
            type: `video`,
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/videos%2FLUMAMI_video01.mp4?alt=media&token=44642b99-9aad-4295-b284-00d3be1b9484`
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
          <h5>Project designed with Sara Latorre Zambrana</h5>
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
            Excesses such as massive animal consumption, waste of piece-rate
            food, off-season crops and the massive import of fruits and
            vegetables. There are many problems, many things to change. Where do
            we start?
          </h5>
          <h5 className="pr-3">
            The name LUMAMI comes from a story from my mother's childhood, when
            I asked my grandmother what to eat, she answered "lumami" and my
            mother imagined a great dish. But what finally ended up being the
            leftovers of Monday, Tuesday and Wednesday (in Spanish Lunes, Martes
            y Miércoles).
          </h5>
        </div>
        <div className="col-md-4 col-12 px-1">
          <h5 className="regular pb-2">&nbsp;</h5>
          <h5 className="pr-3">
            An application that offers you small daily challenges affordable for
            everyone, related to food, cooking and responsible consumption. We
            want to make life easier and help contribute to a better eating
            model. These challenges will be varied and simple tasks, without
            complications. It will be a way to progressively incorporate a new
            way of consuming more consciously.
          </h5>
          <h5 className="pr-3">
            Since not all of us think the same or have the same objectives, we
            created 3 goals, that include different faces of responsible
            consumption. Reduce animal consumption, cook without waste and buy
            seasonal and local.
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
            There are 21 challenges for each goal, since to add a new habit, it
            is said that we need 21 days to make it part of our lifestyle. In
            order to explain the challenge well to the user and at the same time
            be able to give information capsules to understand the reason for
            it, the challenges are structured on 4 screens.
          </h5>
        </div>
        <div className="col-md-4 col-12 px-1">
          <h5 className="regular pb-2 hide-md">&nbsp;</h5>
          <h5 className="pr-3">
            The use of a strong color palette that guides the user in each
            challenge. It also differs when you receive rewards or finish a
            challenge. We also designed illustrations by hand, to soften the
            activist side and thus they were more friendly.
          </h5>
          <h5 className="pr-3">
            The use of a single, modern-looking typeface maintains good balance
            and balance. Allows for a clean and timeless design.
          </h5>
        </div>
      </div>
    );
  }

  renderImages1() {
    return (
      <div>
        <div className="row m-0">
          <div className="col-12 p-1"></div>
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
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2Flumami%2Flumami(3).png?alt=media&token=ee607c74-789e-4998-a64a-aab51c5933f6`}
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
          <div className="col-lg-12 p-1">
            <video
              loop
              width="100%"
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/videos%2FLUMAMI_01.mp4?alt=media&token=9bd2edc5-d052-407c-a413-d51cb1216b42`}
              autoPlay
              muted
              type="video/mov"
            ></video>
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
          <div className="col-lg-12 p-1">
            <video
              loop
              width="100%"
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/videos%2FLUMAMI_02.mp4?alt=media&token=56e73278-3429-4945-8624-04087c959df6`}
              autoPlay
              muted
              type="video/mov"
            ></video>
          </div>
          <div className="col-lg-12 p-0">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Lumami;
