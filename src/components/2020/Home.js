import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Footer from "./FooterHome";

class Apocalypse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_index: null,
      works: [
        {
          link: `/cronology-of-the-apocalypse`,
          name: `Once Upon a Time The End`,
          type: `Book`,
          year: `2020`,
          city: `Barcelona, Spain`,
          content: `It is a book with the chronology of all the predictions of Apocalypse that have existed until today. An investigation of the social effects that have occurred after these predictions. See how they have affected the population.`,
          cover: [
            {
              type: `img`,
              img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FCronology%20of%20the%20Apocalypse(1).png?alt=media&token=eff35c4f-cc1c-433c-b709-37beadc70765`
            },

            {
              type: `img`,
              img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FCronology%20of%20the%20Apocalypse(2).png?alt=media&token=ef116861-4c13-459d-8cb2-50fe972d6704`
            },
            {
              type: null,
              img: null
            },
            {
              type: `img`,
              img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FCronology%20of%20the%20Apocalypse(3).png?alt=media&token=e175b6f3-2df8-4a43-a308-364d10ba758a`
            }
          ]
        },
        {
          link: `/grandtour`,
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
              type: null,
              img: null
            },
            {
              type: `img`,
              img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/works%2FGRANDTOUR%2FGRANDTOUR(4).png?alt=media&token=ffbd3290-c9c6-47a7-a245-0609615040be`
            },

            {
              type: `video`,
              img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/videos%2FGRANTOUR_Portada.mp4?alt=media&token=12c39a69-3acb-412f-960f-68376d5ca209`
            }
          ]
        },
        {
          link: `/lumami`,
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
              type: null,
              img: null
            },
            {
              type: `video`,
              img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/videos%2FLUMAMI_video01.mp4?alt=media&token=44642b99-9aad-4295-b284-00d3be1b9484`
            }
          ]
        },
        {
          link: `/revolver`,
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
              type: null,
              img: null
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
        },
        {
          link: `/barra`,
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
              type: null,
              img: null
            },
            {
              type: `img`,
              img: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/covers%2FBarra(1).png?alt=media&token=26defa85-784b-46ea-99e2-dff6425a1f33`
            }
          ]
        }
      ],
      RRSS: {
        instagram: [
          {
            name: "Instagram",
            http: `${"https://www.instagram.com/belennewman/"}`
          }
        ]
      },
      transform: 0
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderHeader() {
    return (
      <div className="row m-0">
        <div className="col-md-6 col-12 px-1">
          <h4 className="regular">Belen Newman</h4>
          <h5 className="regular">Graphic and digital designer.</h5>
          <h5>(+34)&nbsp;&nbsp;634 758 671</h5>
          <h5>
            <a
              href="mailto:belenewman@gmail.com?subject"
              target="_blank"
              rel="noopener noreferrer"
              id="footerlink"
            >
              belenewman@gmail.com
            </a>
          </h5>
        </div>
        <div className="col-md-6 col-12 px-1">
          <h5>
            My work has been based on connect with people and generating unique
            experiences for them. Developing a solid conceptual foundation by
            creating a design with a focus on content, typography, image, color
            and composition. My goal is to be able to communicate and generate
            conversations in collaboration with interdisciplinary people through
            design. I love to work with teams that enjoy being together. I am
            interested in developing projects full of emotion, through knowledge
            transfer, storytelling and that allow me to find new ways of design.
          </h5>
        </div>
      </div>
    );
  }

  rederFeatureWork() {
    const { works } = this.state;
    return works.map(
      ({ link, name, type, year, city, content, cover }, index) => {
        return (
          <div key={index} className="row py-5">
            {this.renderWork(cover, link)}

            <div className="col-12 px-0">
              <div className="row pt-2 m-0">
                <div className="col-md-3 col-12 px-1">
                  <Link to={link}>
                    <h5>
                      ( {index + 1}/5 )&nbsp;
                      {name}
                    </h5>
                  </Link>
                </div>
                <div className="col-md-3 col-12 px-1">
                  <Link to={link}>
                    <h5>{type}</h5>
                  </Link>
                </div>

                <div className="col-md-3 col-12 px-1">
                  <Link to={link}>
                    <h5>
                      {city} - {year}
                    </h5>
                  </Link>
                </div>
                <div className="col-md-3 col-12 px-1">
                  <Link to={link}>
                    <h5>{content}</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }
    );
  }

  renderWork(cover, link) {
    return cover.map(({ img, type }, index) => {
      if (img === null) {
        return (
          <div key={index} className="col-md-3 col-12 px-1">
            <span></span>
          </div>
        );
      }
      if (type === "video") {
        return (
          <div key={index} className="col-md-3 col-12 p-1">
            <Link to={link}>
              <video
                loop
                width="100%"
                height="100%"
                src={img}
                autoPlay
                muted
                type="video/mov"
              ></video>
            </Link>
          </div>
        );
      } else {
        return (
          <div key={index} className="col-md-3 col-12 p-1">
            <Link to={link}>
              <img src={img} className="img-cover" alt="gallery" />
            </Link>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div className="content-box-lg">
        <div className="row m-0 p-5">
          <div className="col-lg-12 pb-5 px-0">{this.renderHeader()}</div>
          <div className="col-lg-12 px-0">
            <h4 className="regular">Featured Works</h4>
          </div>
          <div className="col-lg-12">{this.rederFeatureWork()}</div>
          <div className="col-lg-12 p-0">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Apocalypse;
