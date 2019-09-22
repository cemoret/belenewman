import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// Components
import UpperMenu from './Menu/upperMenu';
import MiddleMenu from './Menu/middleMenu';
import Footer from './Menu/Footer';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RRSS: {
        instagram: [{ name: 'Instagram', http: `${'https://www.instagram.com/cemoret/'}` }],
        twitter: [{ name: 'Twitter', http: `${'https://www.twitter.com/carlosmoret/'}` }],
        pinterest: [{ name: 'Pinterest', http: `${'https://www.pinterest.com/cemoret/'}` }],
        arena: [{ name: 'Are.na', http: `${'https://www.are.na/ce-moret/'}` }],
        github: [{ name: 'Github', http: `${'https://www.github.com/cemoret/'}` }]
      },
      Tech: {
        t1: [{ name: 'NodeJS', http: `${'https://nodejs.org/en/'}` }],
        t2: [{ name: 'Express', http: `${'https://expressjs.com/'}` }],
        t3: [{ name: 'MongoDB', http: `${'https://www.mongodb.com/'}` }],
        t4: [{ name: 'GraphQL', http: `${'https://graphql.org/'}` }],
        t5: [{ name: 'Stripe API', http: `${'https://stripe.com/docs/api'}` }],
        t6: [{ name: 'React', http: `${'https://reactjs.org/'}` }],
        t7: [{ name: 'Apollo Client', http: `${'https://www.apollographql.com/'}` }],
        t8: [{ name: 'NextJS', http: `${'https://nextjs.org/'}` }],
        t9: [{ name: 'CSS3', http: `${'https://www.w3schools.com/css/'}` }],
        t10: [{ name: 'HTML5', http: `${'https://www.w3schools.com/html/'}` }],
        t11: [
          {
            name: 'Google Maps API',
            http: `${'https://developers.google.com/maps/documentation/javascript/tutorial'}`
          }
        ],
        t12: [{ name: 'Atom', http: `${'https://atom.io/'}` }],
        t13: [{ name: 'Swift', http: `${'https://developer.apple.com/swift/'}` }]
      },
      Software: {
        t1: [{ name: 'Sketch App', http: `${'https://www.sketch.com'}` }],
        t2: [{ name: 'Figma', http: `${'https://www.figma.com/'}` }],
        t3: [{ name: 'Invision', http: `${'https://www.invisionapp.com/'}` }],
        t4: [{ name: 'Invision Studio', http: `${'https://www.invisionapp.com/studio'}` }],
        t5: [
          {
            name: 'Adobe Illustrator',
            http: `${'https://www.adobe.com/la/products/illustrator.html'}`
          }
        ],
        t6: [
          {
            name: 'Lightroom',
            http: `${'https://www.adobe.com/la/products/photoshop-lightroom.html'}`
          }
        ],
        t7: [
          {
            name: 'Xcode',
            http: `${'https://developer.apple.com/xcode/'}`
          }
        ]
      }
    };
  }

  render() {
    const { RRSS, Tech, Software } = this.state;
    return (
      <div>
        <div style={{ backgroundColor: '#F7F7F7' }} className="">
          <MiddleMenu color="black" />
          <UpperMenu color="black" backgroundColor="white" />
          <div className="container-center padding-large pt-5">
            <div className="row pt-5 m-0">
              <div className="col-md-3 col-12">
                <div className="">
                  <h4 className="bold pb-2">Bio</h4>
                  <h4 className="light">
                    Design something people want
                    <br />
                    <br />
                    Based in Barcelona and working worldwide, I focuses on all phases of a product,
                    from discovery to delivery and iteration, and helps brands to guide decisions
                    based on user-centered design.
                    <br />
                    <br />
                    I create experiences that are useful, useable, and beautiful, distinguishable by
                    a unique blending of art, design, and idealism, working to use visual
                    communication as a tool to transcend style and time.
                  </h4>
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className="">
                  <h4 className="bold pb-2">Services</h4>
                  <h4>
                    Art Direction
                    <br />Naming
                    <br />Branding
                    <br />Strategy
                    <br />Web Design and Development
                    <br />UX & UI
                    <br />Packaging
                    <br />Photography
                  </h4>

                  <h4 className="bold pt-4 pb-2">Social</h4>
                  <h4>
                    <a rel="noopener noreferrer" target="_blank" href={RRSS.instagram[0].http}>
                      <span className="underline text-nobrand">{RRSS.instagram[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={RRSS.twitter[0].http}>
                      <span className="underline text-nobrand">{RRSS.twitter[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={RRSS.pinterest[0].http}>
                      <span className="underline text-nobrand">{RRSS.pinterest[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={RRSS.arena[0].http}>
                      <span className="underline text-nobrand">{RRSS.arena[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={RRSS.github[0].http}>
                      <span className="underline text-nobrand">{RRSS.github[0].name}</span>
                    </a>
                  </h4>
                </div>
              </div>

              <div className="col-md-3 col-12">
                <div className="">
                  <h4 className="bold pb-2">Technologies</h4>
                  {/* <h4 className="light pb-2">
                  Text
                </h4> */}
                  <h4>
                    <a rel="noopener noreferrer" target="_blank" href={Tech.t1[0].http}>
                      <span className="underline text-nobrand">{Tech.t1[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Tech.t2[0].http}>
                      <span className="underline text-nobrand">{Tech.t2[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Tech.t3[0].http}>
                      <span className="underline text-nobrand">{Tech.t3[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Tech.t4[0].http}>
                      <span className="underline text-nobrand">{Tech.t4[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Tech.t5[0].http}>
                      <span className="underline text-nobrand">{Tech.t5[0].name}</span>
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href={Tech.t6[0].http}>
                      <span className="underline text-nobrand">{Tech.t6[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Tech.t7[0].http}>
                      <span className="underline text-nobrand">{Tech.t7[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Tech.t8[0].http}>
                      <span className="underline text-nobrand">{Tech.t8[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Tech.t9[0].http}>
                      <span className="underline text-nobrand">{Tech.t9[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Tech.t10[0].http}>
                      <span className="underline text-nobrand">{Tech.t10[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Tech.t11[0].http}>
                      <span className="underline text-nobrand">{Tech.t11[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Tech.t12[0].http}>
                      <span className="underline text-nobrand">{Tech.t12[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Tech.t13[0].http}>
                      <span className="underline text-nobrand">{Tech.t13[0].name}</span>
                    </a>
                  </h4>

                  <h4 className="bold pt-4 pb-2">Software</h4>
                  {/* <h4 className="light pb-2">
                  Text
                </h4> */}
                  <h4>
                    <a rel="noopener noreferrer" target="_blank" href={Software.t1[0].http}>
                      <span className="underline text-nobrand">{Software.t1[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Software.t2[0].http}>
                      <span className="underline text-nobrand">{Software.t2[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Software.t3[0].http}>
                      <span className="underline text-nobrand">{Software.t3[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Software.t4[0].http}>
                      <span className="underline text-nobrand">{Software.t4[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Software.t5[0].http}>
                      <span className="underline text-nobrand">{Software.t5[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Software.t6[0].http}>
                      <span className="underline text-nobrand">{Software.t6[0].name}</span>
                    </a>
                    <br />
                    <a rel="noopener noreferrer" target="_blank" href={Software.t7[0].http}>
                      <span className="underline text-nobrand">{Software.t7[0].name}</span>
                    </a>
                  </h4>
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className="">
                  <h4 className="bold pb-2">Representation</h4>
                  <h4>
                    Spain
                    <br />
                    <span className="bold">Belen Newman</span>
                    <br />belenewman@gmail.com
                    <br />+34 634 758 671
                    <br />
                    <br />France
                    <br />
                    <span className="bold">Tom Fabre</span>
                    <br />tomfabre@gmail.com
                    <br />+33 7 83 83 56 54
                    <br />
                    <br />US & Canada
                    <br />
                    <span className="bold">Diego Auvert</span>
                    <br />team@proyon.ca
                    <br />+1 (647) 648-2098
                    <br />
                    <br />Latam
                    <br />
                    <span className="bold">Juan Meriches</span>
                    <br />jmeriches@gmail.com
                    <br />+56 9 9997 8007
                    <br />
                    <br />
                    <span className="bold">General Inquiries</span>
                    <br />cemoret@gmail.com
                    <br />
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
