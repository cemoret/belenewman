import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Carousel from "../works/Carousel";

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null,
      component_gallery: {
        work: [
          {
            alt: "component_gallery-1",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fcomponent_gallery%2Fcomponents1.png?alt=media&token=ece32b2f-7e1f-41e7-bfa8-c4826315cbdb`
          },
          {
            alt: "component_gallery-2",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fcomponent_gallery%2Fcomponents2.png?alt=media&token=a4248300-9e07-4e18-8e90-1dccc82a4b79`
          },
          {
            alt: "component_gallery-3",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fcomponent_gallery%2Fcomponents3.png?alt=media&token=f450ff05-10b2-4c46-a83e-4e2c4def031b`
          },
          {
            alt: "component_gallery-4",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fcomponent_gallery%2Fcomponents4.png?alt=media&token=0a60a0b1-b312-4142-a4d9-5f9418feaae6`
          },
          {
            alt: "component_gallery-5",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fcomponent_gallery%2Fcomponents5.png?alt=media&token=0c5253f9-4230-4352-8240-94e99cf12611`
          },
          {
            alt: "component_gallery-6",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fcomponent_gallery%2Fcomponents6.png?alt=media&token=aa878be7-b406-4cb3-a43d-7a3f7ae00520`
          },
          {
            alt: "component_gallery-7",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fcomponent_gallery%2Fcomponents7.png?alt=media&token=22196a32-a11d-4d65-9169-ea4c95d966ff`
          },
          {
            alt: "component_gallery-8",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fcomponent_gallery%2Fcomponents8.png?alt=media&token=ab892726-e264-4245-905c-289ecacfd2cd`
          },
          {
            alt: "component_gallery-9",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fcomponent_gallery%2Fcomponents9.png?alt=media&token=535fd024-ef4f-4866-8ce5-599fe448d8ac`
          },
          {
            alt: "component_gallery-10",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fcomponent_gallery%2Fcomponents10.png?alt=media&token=1fa8b4c5-8468-4564-9ff5-3ca716cc34d8`
          }
        ]
      },
      persona_gallery: {
        work: [
          {
            alt: "persona_gallery-1",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fpersona_gallery%2Fpersona1.png?alt=media&token=19d37750-3963-4a75-97e8-39960febd501`
          },
          {
            alt: "persona_gallery-2",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fpersona_gallery%2Fpersona2.png?alt=media&token=77051e0f-35fb-4efd-bdea-954fb53a0115`
          },
          {
            alt: "persona_gallery-3",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fpersona_gallery%2Fpersona3.png?alt=media&token=dd1d1f9a-c2cc-4784-9efd-49d2dfc4e79c`
          },
          {
            alt: "persona_gallery-4",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fpersona_gallery%2Fpersona4.png?alt=media&token=af0338a8-7bb8-4e19-8f6d-7c404dbbccbb`
          }
        ]
      },
      rebrand_gallery: {
        work: [
          {
            alt: "rebrand_gallery-0",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Frebrand_gallery%2Frebrand0.png?alt=media&token=6c2c9e93-145c-4f8b-b934-308610d66798`
          },
          {
            alt: "rebrand_gallery-1",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Frebrand_gallery%2Frebrand1.png?alt=media&token=79e57868-8241-4c72-964b-ef49a3931e6c`
          },
          {
            alt: "rebrand_gallery-2",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Frebrand_gallery%2Frebrand2.png?alt=media&token=46f4b1f6-71ad-4d90-93e8-ca83716006d2`
          },
          {
            alt: "rebrand_gallery-3",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Frebrand_gallery%2Frebrand3.png?alt=media&token=3e313fa6-0803-4612-a670-14dd9da3ec4e`
          },
          {
            alt: "rebrand_gallery-4",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Frebrand_gallery%2Frebrand4.png?alt=media&token=610f6a3e-c384-4631-b582-c19fc527c66b`
          }
        ]
      },
      scenario_gallery: {
        work: [
          {
            alt: "scenario_gallery-1",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fscenario_gallery%2Fescenario1.png?alt=media&token=fd9e0f87-454d-4ab1-8703-67b20752d18b`
          },
          {
            alt: "scenario_gallery-2",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fscenario_gallery%2Fescenario2.png?alt=media&token=d703316a-794b-4ace-9de4-a1979bc21364`
          },
          {
            alt: "scenario_gallery-3",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fscenario_gallery%2Fescenario3.png?alt=media&token=37fe7d43-f727-4be0-8b36-a1bd1b78bb31`
          },
          {
            alt: "scenario_gallery-4",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fscenario_gallery%2Fescenario4.png?alt=media&token=f62ab216-1860-4e5f-ab00-7dcd9f3a316b`
          }
        ]
      },
      wireframe_gallery: {
        work: [
          {
            alt: "scenario_gallery-1",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fwireframe_gallery%2Fwireframe1.png?alt=media&token=710a57d1-01ec-474d-89b2-9f95e8ed75d9`
          },
          {
            alt: "scenario_gallery-2",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fwireframe_gallery%2Fwireframe2.png?alt=media&token=a41b7d7e-56c5-48d0-a275-6712ee877f4b`
          },
          {
            alt: "scenario_gallery-3",
            type: "image",
            src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fwireframe_gallery%2Fwireframe3.png?alt=media&token=f7e97a13-03d6-452d-847f-0cfd1cc36216`
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
        <h1 className="hbig text-center">Practice</h1>
        <h4 className="text-center pb-3">Case Study</h4>

        <img
          src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fpractice_cover_case.png?alt=media&token=67020ab0-7383-420d-87a0-39fc74d4e154`}
          className="img-auto"
          alt="gallery"
        />

        <div className="row pt-5">
          <div className="col-md-4 col-12">
            <h3>Practice & From:</h3>
            <h4>
              <a
                href="https://from.practice.so/"
                rel="noopener noreferrer"
                target="_blank"
                className="pl-2"
              >
                <span className="h3">↗&nbsp;&nbsp;</span>
                <span className="inline-block link">from.practice.so</span>
              </a>
            </h4>
            <h4>
              <a
                href="https://itscircular.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="pl-2"
              >
                <span className="h3">↗&nbsp;&nbsp;</span>
                <span className="inline-block link">
                  itscircular.com (practice.so)
                </span>
              </a>
            </h4>

            <h4>7th edition Barcelona Activa Incubator</h4>
            <h4>Location: Barcelona, Spain</h4>
          </div>

          <div className="col-md-4 col-12">
            <h3>Team:</h3>
            <h4>- Carlos Moret (Co-founder) </h4>
            <h4>- Alejandro de Francisco Castillo (Co-founder)</h4>
            <h4>- Ignacio Ochoa (Back End Developer)</h4>
            <h4>- Diego Auvert (Front End Developer)</h4>
            <h4>- Belén Newman (Senior Designer - UX/UI)</h4>
          </div>

          <div className="col-md-4 col-12">
            <h3>Supported by:</h3>
            <h4>- Barcelona Activa</h4>
            <h4>
              - ELISAVA (Elisava Escuela Universitaria de Diseño e Ingeniería de
              Barcelona)
            </h4>
            <h4>- YCombinator - Startup School</h4>
          </div>
        </div>

        <h1 className="pt-5">Problem</h1>

        <h3 className="py-3">
          Today there are more than 1.24 billion websites and there are over 3.5
          billion Google searches in the world, every minute on a day. This
          trend will be greater in the future. With so much information it is
          very common to see people who use references on the internet to work,
          study or research, with many tabs open in the browser. So we wonder
          how in 2020 with so many web tools available to sort information, we
          still find a large number of tabs open.
        </h3>

        <img
          src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fproblem.png?alt=media&token=9282ad37-8460-45f8-bb64-8bf90bada372`}
          className="img-auto"
          alt="problem"
        />
        <h2 className="py-3">
          The problem is no longer having access to information, but what we do
          with it.
        </h2>

        <h1 className="pt-5">Team, Methodology and Process</h1>
        <h3 className="py-3">
          Using various techniques with which we study the user experience,
          observing how it affects the relationship between people and the
          product, to understand usability and accessibility problems they
          encounter. With this, we manage to propose an effective and intuitive
          interaction, reflecting the detected user needs and developing a
          design consistent with the brand's communication objectives.
        </h3>

        <h1 className="pt-3">Research</h1>
        <h3 className="py-3">
          A total of 30 interviews were managed with design students, visual
          designers, design agencies and educational institutions, with a focus
          on the city of Barcelona.
          <br />
          <br />
          These interviews focused on analyzing 3 main problems:
          <br />
          <br />
          → Save links
          <br />
          → Organization and Sharing
          <br />→ Incubation of ideas within creative process
        </h3>

        <h1 className="pt-5">Interviews</h1>
        <div className="row m-0">
          <div className="col-md-6 col-12">
            <h2 className="py-3">Students Insights</h2>
            <h3 className="py-3">
              Searching for references is a daily problem that ends up with a
              lot of information that is difficult to manage.
              <br />
              "I usually look for references every week"
              <br />
              <br />
              Saving and sharing links is a problem.
              <br />
              "We paste them in a Google Doc and after a while I no longer
              remember which link was, and I have to open them one by one"
              <br />
              <br />
              Many do not turn off the computer for fear of losing their open
              tabs.
              <br />
              "When the browser has closed and I lose all my windows, it causes
              me great frustration"
              <br />
              <br />
              The ideation phase is disorganized and often individual
              <br />
              "I have my references organized and then I start doing tests in
              Illlustrator"
            </h3>
          </div>
          <div className="col-md-6 col-12">
            <h2 className="py-3">Educational institutions Insights</h2>
            <h3 className="py-3">
              Santiago Albert, Director of Master's studies at ELISAVA
              <br />
              “A problem shared between students and teachers”
              <br />
              <br />
              Marc Panero Director of the Master's Degree in Graphic Design and
              the Master's Degree in Editorial Design and Co-director of the
              Master's Degree in Data and Design
              <br />
              “Have a space to share the common information that is generated
              within a class”
            </h3>
          </div>
        </div>

        <h1 className="pt-5">Surveys</h1>
        <h3 className="py-3">
          33 surveys in total were conducted with different professionals in the
          creative area and among students in the sector, focusing on finding
          the connection that had with the fact of saving links.
        </h3>
        <h2 className="py-3">Insights</h2>
        <h3 className="py-3">
          33.4% links save every day
          <br />
          42.4% links save weekly
          <br />
          60.6% web pages and articles save
          <br />
          <br />
          Tools most used during teamwork
          <br />
          → Drive: Numerous files and mostly large ones.
          <br />
          → What’s App: Files for quick feedback
          <br />
          <br />
          The problem with managing links increases when users are working in
          teams
          <br />
          "Part of the team never reviews what I have been uploading"
          <br />
          "The biggest problem is being able to quickly view the content"
        </h3>

        <h1 className="pt-5">Benchmark</h1>
        <h3 className="pt-3">
          We implement an analysis of different platforms and tools with similar
          characteristics and/or functionalities to our core idea. We focus on
          finding their differentiating elements and what makes them stand out.
          Then classifying into larger groups.
        </h3>
        <img
          src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2FBenchmark.png?alt=media&token=c3eac158-4ae7-4de4-942e-08dd851a0d00`}
          className="img-auto"
          alt="gallery"
        />

        <h1 className="pt-5">User Personas</h1>
        <h3 className="py-3">
          For people modeling and scenarios, 4 user typologies were detected,
          which share some lines in common, but in some contexts and situations
          they demand different design solutions.
        </h3>
        <div className="">
          <Carousel
            workSelected={this.state.persona_gallery}
            css={"carousel-img-n"}
            autoPlay={true}
            speed={500}
            autoplaySpeed={3000}
          />
        </div>

        <h1 className="pt-5">Scenarios</h1>
        <div className="">
          <Carousel
            workSelected={this.state.scenario_gallery}
            css={"carousel-img-n"}
            autoPlay={true}
            speed={500}
            autoplaySpeed={3000}
          />
        </div>

        <h1 className="pt-5">User Journey</h1>
        <h3 className="py-3">
          From the scenarios we develop a User Journey with one of our user
          personas, Paula, to create a deeper graphic story with the aim of
          discovering the Insights throughout a user experience.
        </h3>

        <img
          src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2FuserJorney.png?alt=media&token=05cb8e9c-c5a6-47ab-ae41-09045ac793fd`}
          className="img-auto"
          alt="User Journey"
        />

        <h1 className="pt-5">Requirements</h1>
        <h3 className="py-3">
          Modeling with Personas and Scenarios allowed us to obtain a list of
          requirements on how the design should be and behave. A strategic
          document that serves as a communication tool between the team and at
          the same time for evaluate the process.
          <br />
          <br />
          We classify the main requirements into 3 categories:
        </h3>

        <div className="row m-0">
          <div className="col-md-4 col-12">
            <h2 className="py-3">Functional</h2>
            <h3 className="py-3">
              → Save links and other files visually.
              <br />
              → Organization in public and private folders.
              <br />
              → Share files and folders.
              <br />
              → Preview of the links within the tool.
              <br />
              → Content interpretation of the platforms with a public API.
              <br />
              → Figma Plugin .
              <br />
              → Different visualization for types of files.
              <br />
            </h3>
          </div>
          <div className="col-md-4 col-12">
            <h2 className="py-3">Information</h2>
            <h3 className="py-3">
              → Title / Name link.
              <br />
              → Screenshot and / or scraping of the Web.
              <br />
              → Have access to additional information on each link.
              <br />
              → User public profile.
              <br />
              → Onboarding and tool use cases.
              <br />
              → Notify when links already saved.
              <br />
            </h3>
          </div>
          <div className="col-md-4 col-12">
            <h2 className="py-3">Experiential</h2>
            <h3 className="py-3">
              → Look & Feel friendly.
              <br />
              → Have an elegant aesthetic like VSCO but with a personalized
              touch like Notion.
              <br />
              → Security.
              <br />
              → Make the tool friendly.
              <br />
              → Transmit calm.
              <br />
            </h3>
          </div>
        </div>

        <h1 className="pt-5">Information Architecture</h1>
        <h3 className="py-3">
          Throughout our process we have noted the continuous evolution of the
          tool. That is why we have implemented a flexible and dynamic
          architecture to allow constant updating as the user continues to play
          and experiment with content and the software.
        </h3>
        <img
          src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2FInformationArchitecture.png?alt=media&token=e7e252f6-8a75-4d91-b943-7fd71c5c4648`}
          className="img-auto"
          alt="User Journey"
        />

        <h1 className="pt-5">Wireframe</h1>
        <div className="">
          <Carousel
            workSelected={this.state.wireframe_gallery}
            css={"carousel-img-n"}
            autoPlay={true}
            speed={500}
            autoplaySpeed={3000}
          />
        </div>

        <h1 className="pt-5">Brand</h1>
        <h3 className="py-3">
          We seek an aesthetic based on the essential: explaining what the tool
          and the objective are about. To achieve this, we articulate our
          personality around 3 concepts: Clarity, friendly and contemporary. Our
          voice reflects how our user sees himself, that is why we want to speak
          like a friend who every day has something new to tell and show to
          them.
          <br />
          <br />
          We propose a minimalist UI. We wanted the design to be simple,
          interactive and contemporary. We designed a flexible modular system
          that allows you to quickly save, organize and share content. The
          design achieved is clean, fresh, and non-invasive.
          <br />
          <br />
          The typeface selected is "Inter" due to the versatility it offers and
          the ease of reading in print and digitally. The predominant colors
          don't break into the tool, so its main purpose is to highlight the
          different parts.
        </h3>
        <img
          src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2FbrandIdentity.png?alt=media&token=d0e4eed6-758f-410f-9535-bac9ae3e618f`}
          className="img-auto"
          alt="User Journey"
        />

        <h1 className="pt-5">Components</h1>
        <h3 className="py-3">
          The transformation of a link into a visual block is part of the value
          proposition provided by the tool. The customization of the blocks is
          achieved with two functionalities in the block. One with the customize
          button and the other adding a file.
          <br />
          <br />
          The customization is achieved through 3 combinable states:
          <br />
          <br />
          1.1 Typography
          <br />
          1.2 Background color
          <br />
          1.3 Emojis
        </h3>
        <br />
        <div className="">
          <Carousel
            workSelected={this.state.component_gallery}
            css={"carousel-img-n"}
            autoPlay={true}
            speed={500}
            autoplaySpeed={3000}
          />
        </div>

        <h1 className="pt-5">Marketing</h1>
        <h3 className="py-3">
          Create relevant content for our target audience, distributing it for
          free to attract potential customers to our website. Convert our users
          into a mailing list to be able to maintain contact with them via email
          in order to share relevant content, promotions and ask for feedback on
          the tool.
        </h3>

        <h1 className="pt-3">From... a content strategy</h1>
        <h3 className="py-3">
          Creative processes are always connected with references. That’s why we
          are making a visual archive through a digital publication allowing all
          to know the process of creative people, and their development through
          references.
          <br />
          <br />
          For this reason, the referents are linked with the platform, taking
          advantage of the validation of the influencers of the creative
          industry.
        </h3>

        <video
          loop
          autoPlay
          muted
          className={"carousel-img-n"}
          src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Ffrom.mov?alt=media&token=2f64b7d1-da65-49d4-94a1-066ea4b926e2`}
          type="video/mov"
        ></video>

        <h1 className="pt-5">Conclusion</h1>
        <h3 className="py-3">
          Observing how our users worked with the information, made us see that
          the creative process is not organized or linear, but responds to the
          test of connections between different information in order to find an
          idea. For this reason we decided to create a flexible and open tool,
          to increase the possibilities for users to have the freedom to manage
          and create their own workspaces.
          <br />
          <br />
          This project has given us a critical and reflective spirit, which has
          helped us to enhance our thinking, our capacity for analysis and
          design, as well as our teamwork.
        </h3>

        <video
          controls
          className={"carousel-img-n"}
          src={`https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice%2Fvideo_itscircular.mp4?alt=media&token=25793355-60b5-479f-a93f-4b951ff0cd4f`}
          type="video/mov"
        ></video>
        <h1 className="pt-5">Rebranding</h1>
        <h3 className="py-3">
          The concept and imagination of the brand "It'sCircular" is far from
          the functionality of the tool so much that the user doesn't generate
          memorability with the current identity. Also, there is an SEO problem
          with the domain name, because the name does not start with Circular.
          <br />
          <br />
          That is why a new brand is created that evokes the basis of the
          platform, through a simple language that works in different sizes, so
          that it's better integrated with a memorable name and visual identity.
          <br />
          <br />
          The new logo has a much larger imaginary of applications that makes it
          possible to include similar functionalities of the tool under the same
          big brand umbrella.
        </h3>

        <div className="">
          <Carousel
            workSelected={this.state.rebrand_gallery}
            css={"carousel-img-n"}
            autoPlay={true}
            speed={500}
            autoplaySpeed={3000}
          />
        </div>

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

export default Practice;
