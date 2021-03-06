import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Carousel from "../works/Carousel";

class Revolver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null,
      gallery: {
        name: "Revolver",
        work: [
          {
            alt: "revolver image work 1",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Fgallery%2Fgallery1.png?alt=media&token=64369aa3-f355-4ab6-9bd1-403f143ed91c`
          },
          {
            alt: "revolver image work 2",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Fgallery%2Fgallery2.png?alt=media&token=08832fbb-a715-491e-8690-5940346c2ffe`
          },
          {
            alt: "revolver image work 3",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Fgallery%2Fgallery3.png?alt=media&token=3065f125-2510-4f2b-93df-856ca69af150`
          },
          {
            alt: "revolver image work 4",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Fgallery%2Fgallery4.png?alt=media&token=16e9028e-8a83-4573-9255-1b6572838e45`
          },
          {
            alt: "revolver image work 5",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Fgallery%2Fgallery5.png?alt=media&token=b9f270ce-abad-4d05-b5f5-a87f9186a5b0`
          },
          {
            alt: "revolver image work 6",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Fgallery%2Fgallery6.png?alt=media&token=e71812c9-72b3-420c-a2f8-88125392a5a3`
          },
          {
            alt: "revolver image work 7",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Fgallery%2Fgallery7.png?alt=media&token=721db43e-3f44-45e3-8ab7-e0ea73eeaa8f`
          },
          {
            alt: "revolver image work 8",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Fgallery%2Fgallery8.png?alt=media&token=dc756489-01b8-4181-8512-26d2eae5303d`
          }
        ]
      }
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  renderContent() {
    return (
      <div className="pw-5">
        <h1 className="hbig text-center">Revolver</h1>
        <h4 className="text-center pb-3">Case Study</h4>

        <img
          src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Frevolver_cover_case.png?alt=media&token=8f4ba2b3-ce21-4b87-826d-e5b734c8b6ce`}
          className="img-auto"
          alt="gallery"
        />

        <div className="row pt-5">
          <div className="col-md-4 col-12">
            <h3>Revolver Bistró</h3>
            <h4>Size: 325 people</h4>
            <h4>Location: Santiago, Chile</h4>
          </div>

          <div className="col-md-4 col-12">
            <h3>Creative Team:</h3>
            <h4>- Arturo Murua (Director) </h4>
            <h4>- Ignacio Murua (CEO)</h4>
            <h4>- María Belén de Landea (COO)</h4>
            <h4>- Matías Caamaño (Project Manager)</h4>
            <h4>- Camila Moreno (Executive Chef)</h4>
            <h4>- Matías Lopez (Architect)</h4>
            <h4>- Belén Newman (Creative Director)</h4>
          </div>

          <div className="col-md-4 col-12">
            <h3>Subcontracts:</h3>
            <h4>- POP diseño</h4>
            <h4>- Imprenta PROCOLOR</h4>
            <h4>- Decorag S.A.</h4>
            <h4>- Printlab digital</h4>
            <h4>
              - Carlos Molina&nbsp;
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={`https://estudiocc.cl/`}
                className="link"
              >
                (estudiocc.cl)
              </a>
            </h4>
            <h4>- Julin Serra</h4>
            <h4>- Ricardo Vivallo</h4>
          </div>
        </div>

        <h2 className="py-5">
          Comer & Beber, is a hospitality business in Santiago, Chile, that has
          6 restaurants. They use seasonal food with national products, crossing
          with different styles such as Italian, French and Chilean cuisine.
          This group of restaurants and their team is capable of always
          providing a great service and value to their customers.
        </h2>

        <h1 className="pb-3">Brief</h1>
        <h3 className="pb-5">
          Create a restaurant concepts under the imaginary of the nouvelle vague
          50s in France. Gold, plants and glamor are essential parts of the
          restaurant's branding process: a sublime bistro. The objective was to
          create a practical but at the same time emotional restaurant,
          suggesting the idea of ​​modern French design, which leads us to
          larger imageries such as the furniture, lighting fixture and
          decorative elements that are typical industrial design of that time.
          These values ​​give context and also seek to remain within people
          collective imagination who visit the place.
        </h3>

        <h1 className="pb-3">Benchmark</h1>
        <h3 className="pb-5">
          The idea itself is simple: present this bistro as something friendly,
          with seasonal ingredients and local consumption, as the most obvious
          and reasonable way to live.
        </h3>
        <img
          src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Fbenchmark.png?alt=media&token=b9e2f484-bfce-41a6-b53c-ffca5c5b49b6`}
          className="img-auto"
          alt="gallery"
        />
        <h1 className="pt-5 pb-3">Teamwork</h1>
        <h3 className="pb-5">
          We have been working as a team for more than 5 months, visiting the
          under construction site to view construction details, troubleshoot and
          prioritize tasks. Also on the other hand, we develop a series of
          tastings with the design team and kitchen staff to try the best
          options for the main menu. We analyze the type of dishes, utensils,
          and glassware that would go, such as the waiters uniforms and the
          aesthetics in terms of decoration, among others. In this sense, the
          concept identification became more evident.
        </h3>

        <img
          src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Fconstruction.png?alt=media&token=e0710a7c-8c80-4b59-b395-8981729db89e`}
          className="img-auto"
          alt="gallery"
        />

        <div className="pt-3">
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Fwalls.png?alt=media&token=ee2dca08-8e7a-4129-99bb-bfbf33fc7287`}
            className="img-auto"
            alt="gallery"
          />
        </div>

        <div className="py-3">
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Farch.png?alt=media&token=a4e31d95-d3a5-43b1-aefe-86825c5ae8a0`}
            className="img-auto"
            alt="gallery"
          />
        </div>

        <h1 className="pt-5 pb-3">User Experience and Branding</h1>

        <h3 className="pb-5">
          The creative team worked closely with the suppliers seeking to perfect
          the visual imaginary that we had created and thus be able to develop a
          dialogue between the restaurant (including the staff); and customers.
          <br />
          <br />
          We use bright and bold colors to align the concept we execute. The
          typographic logo is based on the 50s signwriting as well as type
          chisel. It includes a variable system of logos that reflect a freer
          and more flexible atmosphere. We designed a series of typographic
          inspired by fonts and compositions premises of that time. Revolver
          Bistró creates an environment that allows a genuine and glamorous
          French restaurant experience.
        </h3>

        <div className="py-3">
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Fidentity.png?alt=media&token=7d904cb2-e58c-4d7e-81a4-c551d12d0c70`}
            className="img-auto"
            alt="gallery"
          />
        </div>

        <div className="py-3">
          <Carousel
            workSelected={this.state.gallery}
            css={"carousel-img-n"}
            autoPlay={true}
            speed={500}
            autoplaySpeed={3000}
          />
        </div>

        <h1 className="pt-5 pb-3">Marketing & Communication Strategist</h1>

        <h3 className="pb-3">
          The image had to be recognizable. Social networks should gain
          strength. That is why we needed a narrative that was able to reflect
          the design through photography, tone of voice and how the restaurant
          was going to communicate. By targeting a mostly female audience, we
          created that voice, feminine and sociable. Able to empathize with
          users. This closeness not only guarantees followers but leads who
          became real users and brand evangelizers.
        </h3>

        <video
          loop
          autoPlay
          muted
          className={"carousel-img-n"}
          src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Fphoto_cook_session.mov?alt=media&token=5bb96968-5ea6-4675-8c20-e0439d1765e5`}
          type="video/mov"
        ></video>

        <h1 className="pt-5 pb-3">User Centered Design</h1>

        <h3 className="pb-5">
          To engage users and develop a sense of togetherness with the company,
          one of the first steps was to promote the 'User Centered Design'
          philosophy. In doing so, we wanted to directly engage people as part
          of our speech, sharing ideas and correcting on the run. Improvements
          in the different work areas within the premises. Changes on the fly,
          which generate constant improvement as the client generates new needs.
          But above all we wanted to highlight the user-centered nature and the
          advantage of being able to adapt to their needs.
          <br />
          <br />
          Within the user knowledge process, we focus on carrying out the
          experiment of being an incognito customer. Every week, we went as
          incognito consumers to see points such as: customer service, design
          problems, flavors, decoration and improvements. Constantly working
          based on observed behavior, the context in which it happened and user
          feedback.
        </h3>

        <video
          loop
          autoPlay
          muted
          className={"carousel-img-n"}
          src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Frevolver_IG_stories.mov?alt=media&token=5db469d0-b805-49e6-8d09-ce74bf05e4b5`}
          type="video/mov"
        ></video>

        <h1 className="pt-5 pb-3">Lean Process</h1>

        <h3 className="pb-5">
          We carry out tastings of new dishes. The continuous season ingredients
          rotation and the dishes that are sold the least, generates constant
          change in the menu.
          <br />
          <br />I personally created 4 dishes in collaboration with the kitchen
          staff, incorporating the vegetarian option, which are until this day
          on the menu . I also worked as a hostess to understand how the user
          perceived the place from the first moment. In this way, it's not only
          design for the final consumer, but also those who prepare, administer
          and offer the service.
        </h3>

        <div className="py-3">
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Fphoto_session.png?alt=media&token=bc757d45-6bc3-4d60-92ac-97a16faf6b87`}
            className="img-auto"
            alt="gallery"
          />
        </div>

        <h3 className="py-5">
          With agile principles, such as the Lean methodology, we implement
          continuous improvements to maintain and improve the service quality by
          building, measurement, and learning. A great part of the work is to be
          involved and empathize with the user.
        </h3>
        <img
          src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver%2Fend.png?alt=media&token=6177818c-8427-49be-a0c9-ea38a747726e`}
          className="img-auto"
          alt="gallery"
        />

        <div className="pt-5">
          <div className="row m-0 d-none d-md-block">
            <div className="col-12 px-0">
              <Link to={`/`}>
                <span className="h3">←&nbsp;&nbsp;</span>
                <h3 className="inline-block link">Back</h3>
              </Link>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={`https://www.instagram.com/belennewman`}
                className="pl-5"
              >
                <span className="h3">↗&nbsp;&nbsp;</span>
                <h3 className="inline-block link">Instagram</h3>
              </a>

              <a
                href="mailto:belenewman@gmail.com?subject = Feedback&body = Message"
                rel="noopener noreferrer"
                target="_blank"
                className="pl-5"
              >
                <span className="h3">↗&nbsp;&nbsp;</span>
                <h3 className="inline-block link">Email</h3>
              </a>
            </div>
          </div>

          {/*<div onClick={() => this.scrollToTop()}>Top</div>*/}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="content-box-lg">
        <div className="row m-0">
          <div
            className="col-1ym fixed-md-top px-0"
            style={{ backgroundColor: "#F9F9F9" }}
          >
            <Link to={"/works"}>
              <h3 className="menu-v m-0">Selected</h3>
            </Link>
          </div>

          <div className="col-md-11 col-12 px-0 pb-50 pt-50" id="scrolly">
            <div className="px-5">{this.renderContent()}</div>
          </div>
          <div
            className="col-1ym fixed-md-botton px-0"
            style={{ backgroundColor: "#F0F2F8" }}
          >
            <Link to={"/about"}>
              <h3 className="menu-v m-0">About</h3>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Revolver;
