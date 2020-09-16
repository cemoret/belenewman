import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Footer from "../Footer";

class Apocalypse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_index: null,
      work: {
        name: `Once Upon a Time The End`,
        type: `Book`,
        year: `2020`,
        city: `Barcelona, Spain`,
        content: `It is a book with the chronology of all the predictions of Apocalypse that have existed until today. An investigation of the social effects that have occurred after these predictions. See how they have affected the population.`,
        cover: [
          {
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FCronology%20of%20the%20Apocalypse(1).png?alt=media&token=eff35c4f-cc1c-433c-b709-37beadc70765`
          },

          {
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FCronology%20of%20the%20Apocalypse(2).png?alt=media&token=ef116861-4c13-459d-8cb2-50fe972d6704`
          },
          {
            img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FCronology%20of%20the%20Apocalypse(3).png?alt=media&token=e175b6f3-2df8-4a43-a308-364d10ba758a`
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
          <h5>Chronology of the Apocalypse</h5>
          <h5>{work.type}</h5>
          <h5>Art Direction / Editorial</h5>
          <h5>Barcelona, Spain - 2020</h5>
          <h5>Project designed with Ana Badía Alzuria</h5>
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
            This civilization is over and everybody seems to enjoy it. From the
            beginning of the earliest writings to the series we see today, they
            teach us various ways of how we are going to die. In fact we are the
            only species on earth that knows it is going to die. While this is
            happening, we are in the first seats with popcorn waiting for him
            and as a group we do not put definitive remedies.
          </h5>
        </div>
        <div className="col-md-4 col-12 px-1">
          <h5 className="regular pb-2">&nbsp;</h5>
          <h5 className="pr-3">
            It is a book with the chronology of all the predictions of
            Apocalypse that have existed until today. We want to investigate the
            social effects that have occurred after these predictions. See how
            they have affected the population. They can be artistic, scientific,
            literature, collective consequences, etc. We propose to explore how
            these apocalypses have evolved, depending on the times when
            predictions were made.
          </h5>
          <h5 className="pr-3">
            We seek to raise awareness of the gravity of the moment we are in.
            And we want to insist on the fact that although historically it has
            been seen as entertainment, it is not.
          </h5>
        </div>
      </div>
    );
  }

  renderProcess() {
    return (
      <div className="row m-0">
        <div className="col-md-4 col-12 px-1 d-none d-md-block">
          <h5 className="regular pb-2">&nbsp;</h5>
        </div>

        <div className="col-md-4 col-12 px-1">
          <h4 className="regular pb-2">Process</h4>
          <h5 className="pr-3">
            Once Upon a Time The End, it is a nod to the world of entertainment.
            How the traditional stories that we have known since childhood begin
            and end. We look for the contrast between the simplicity of what it
            evokes and the complexity of the subject we deal with inside.
          </h5>
          <h5 className="pr-3">
            Verticality represent “the unity between divinity and power”
          </h5>
          <h5 className="pr-3">
            We wanted it to be very vertical, like The Prophecies of Nostradamus
            (which is one of our conceptual references). And that the same
            verticality was also transmitted in the inner pages.
          </h5>
        </div>
        <div className="col-md-4 col-12 px-1">
          <h5 className="regular pb-2 hide-md">&nbsp;</h5>
          <h5 className="pr-3">
            We use only one font: Practice by Óptimo. An elegant typeface that
            offers a clear reading with a contemporary aesthetic. And very
            versatile, and allows it to be used for different text hierarchies.
          </h5>
          <h5 className="pr-3">
            As we see, each Apocalypse is accompanied by a title, a quick
            description of the Apocalypse, the context that surrounds it and the
            corresponding images.
          </h5>
          <h5 className="pr-3">
            The treatment of images from the past is always in black and white,
            since they are archival images, and it also allows us to unify.
          </h5>
          <h5 className="pr-3">
            And since it is a very long book and to avoid it being monotonous,
            we decided to incorporate several breaks, pauses between the story,
            to make the reading more enjoyable.
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
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2F01%20-%20Cronology%20of%20the%20Apocalypse%2FCronology%20of%20the%20Apocalypse(5).png?alt=media&token=79844be0-61cb-44d5-bcb9-7466ad117dc9`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2F01%20-%20Cronology%20of%20the%20Apocalypse%2FCronology%20of%20the%20Apocalypse(4).png?alt=media&token=78de78a5-b2c1-4ecc-acec-8cfa529405d7`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2F01%20-%20Cronology%20of%20the%20Apocalypse%2FCronology%20of%20the%20Apocalypse(6).png?alt=media&token=e0479d22-4cfe-4869-932e-80398c6fa841`}
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
      <div className="pt-5">
        <div className="row m-0">
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2F01%20-%20Cronology%20of%20the%20Apocalypse%2FCronology%20of%20the%20Apocalypse(7).png?alt=media&token=0f05123d-dbe6-4192-ad1f-73be6389df05`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2F01%20-%20Cronology%20of%20the%20Apocalypse%2FCronology%20of%20the%20Apocalypse(8).png?alt=media&token=f434eacc-b0b5-47ee-84f1-e9c1e6124f87`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2F01%20-%20Cronology%20of%20the%20Apocalypse%2FCronology%20of%20the%20Apocalypse(9).png?alt=media&token=753cf638-e235-4137-8424-828e5386fa34`}
              className="img-cover"
              alt="gallery"
            />
          </div>
        </div>
        <div className="row m-0">
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2F01%20-%20Cronology%20of%20the%20Apocalypse%2FCronology%20of%20the%20Apocalypse(10).png?alt=media&token=35446cb4-b8cd-4f39-99b7-9c3b203c1af4`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2F01%20-%20Cronology%20of%20the%20Apocalypse%2FCronology%20of%20the%20Apocalypse(11).png?alt=media&token=2ef86b19-5994-4fc7-a622-3bab21c62075`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2F01%20-%20Cronology%20of%20the%20Apocalypse%2FCronology%20of%20the%20Apocalypse(12).png?alt=media&token=9cfc0767-1b07-45ae-83bb-3c4d48eb908d`}
              className="img-cover"
              alt="gallery"
            />
          </div>
        </div>

        <div className="row pt-5 m-0">
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2F01%20-%20Cronology%20of%20the%20Apocalypse%2FCronology%20of%20the%20Apocalypse(13).png?alt=media&token=a3eb1994-3f16-40db-ab31-0726332c6914`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2F01%20-%20Cronology%20of%20the%20Apocalypse%2FCronology%20of%20the%20Apocalypse(14).png?alt=media&token=c8191e3e-a898-4381-b31c-93a13a4a9bcd`}
              className="img-cover"
              alt="gallery"
            />
          </div>
          <div className="col-md-4 col-12 p-1">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2F01%20-%20Cronology%20of%20the%20Apocalypse%2FCronology%20of%20the%20Apocalypse(15).png?alt=media&token=e7e0e9f7-119c-48c2-953f-a0428dcb4422`}
              className="img-cover"
              alt="gallery"
            />
          </div>
        </div>
      </div>
    );
  }

  renderWork() {
    const { cover } = this.state.work;
    return cover.map(({ img }, index) => {
      return (
        <div key={index} className="col-md-4 col-12 p-1">
          <img src={img} className="img-cover" alt="gallery" />
        </div>
      );
    });
  }

  render() {
    const { work } = this.state;
    return (
      <div className="content-box-lg">
        <div className="row m-0 p-5">
          <div className="col-lg-12 pb-5 px-0">{this.renderHeader(work)}</div>
          <div className="col-lg-12 p-0">
            <div className="row m-0">{this.renderWork()}</div>
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

export default Apocalypse;
