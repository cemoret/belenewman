import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Carousel from "../../components/works/Carousel";
import WorkList from "../../components/works/WorkList";

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null,
      listNumber: 0,
      works: [
        {
          name: "Practice",
          work: [
            {
              alt: "practice-work-1",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fpractice%2Fpractice%201.png?alt=media&token=f35faf07-265b-4f3d-a8d8-4200a9da87dd`
            },
            {
              alt: "practice-work-2",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fpractice%2Fpractice%202.png?alt=media&token=eb27e566-c9e6-4b94-a047-23881f7ccd58`
            },
            {
              alt: "practice-work-3",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fpractice%2Fpractice%203.png?alt=media&token=6a576a13-3a1e-4ff7-92b8-2aa060e7715e`
            },
            {
              alt: "practice-work-4",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fpractice%2Fpractice%204.png?alt=media&token=fd9d693f-31fc-4956-8bb5-a6a921382303`
            },
            {
              alt: "practice-work-5",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fpractice%2Fpractice%205.png?alt=media&token=2371bebb-e89f-434a-a520-f8267cfed70f`
            },
            {
              alt: "practice-work-6",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fpractice%2Fpractice%206.png?alt=media&token=741a88d0-222b-4855-91d0-68758e9feed1`
            },
            {
              alt: "practice-work-7",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fpractice%2Fpractice%207.png?alt=media&token=2b3cdb9b-aca7-4353-a9d6-5d3bea63a6ce`
            },
            {
              alt: "practice-work-8",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fpractice%2Fpractice%208.png?alt=media&token=93b3f68d-930d-40b9-b4ad-291279782e03`
            },
            {
              alt: "practice-work-9",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fpractice%2Fpractice%209.png?alt=media&token=4095680c-76a3-497e-80ba-002a43412fd4`
            },
            {
              alt: "practice-work-10",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fpractice%2Fpractice%2010.png?alt=media&token=feac4f5e-78d2-4f5a-8193-67629ef24b4e`
            },
            {
              alt: "practice-work-11",
              type: "video",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fpractice%2Fpractice.mov?alt=media&token=f2c1d9b4-5055-4cd6-a351-0845f8c187b9`
            }
          ]
        },
        {
          name: "From",
          work: [
            {
              alt: "from-practice-work-1",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Ffrom%2Ffrom%201.png?alt=media&token=fdf5e947-94a8-49ea-96b1-ba69c26a31d6`
            },
            {
              alt: "from-practice-work-2",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Ffrom%2Ffrom%202.png?alt=media&token=3babbaa7-fcec-4155-9b4c-541c9baed650`
            },
            {
              alt: "from-practice-work-3",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Ffrom%2Ffrom%203.png?alt=media&token=116c761d-73ad-49c8-8ad9-3b6b819ff907`
            },
            {
              alt: "from-practice-work-4",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Ffrom%2Ffrom%205.png?alt=media&token=b5bedd77-9e2f-446d-a11c-4ac9ecf4db62`
            },
            {
              alt: "from-practice-work-5",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Ffrom%2Ffrom%205.png?alt=media&token=b5bedd77-9e2f-446d-a11c-4ac9ecf4db62`
            },
            {
              alt: "from-practice-work-6",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Ffrom%2Ffrom%206.png?alt=media&token=39237ead-4f0c-406d-b806-71bae6d38725`
            },
            {
              alt: "from-practice-work-7",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Ffrom%2Ffrom%206.png?alt=media&token=39237ead-4f0c-406d-b806-71bae6d38725`
            },
            {
              alt: "from-practice-work-8",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Ffrom%2Ffrom%208.png?alt=media&token=eb1042de-a03a-4399-a1de-09e0f1a09dab`
            }
          ]
        },

        {
          name: "Revolver",
          work: [
            {
              alt: "revolver image work 1",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver1.png?alt=media&token=2a8c5a08-ac9c-490b-9995-ae85cb09290a`
            },
            {
              alt: "revolver image work 2",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver2.png?alt=media&token=019fceee-fd0d-42a4-a6c4-0a4811c632d7`
            },
            {
              alt: "revolver image work 3",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver3.png?alt=media&token=5ee7bcab-e2d5-47f4-950a-a9401a48ea94`
            },
            {
              alt: "revolver image work 4",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver4.png?alt=media&token=38997e79-530b-4058-bf88-449ff7d7d02a`
            },
            {
              alt: "revolver image work 5",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver5.png?alt=media&token=24971d65-e75a-4c06-b398-d1315edcc30f`
            },
            {
              alt: "revolver image work 6",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver6.png?alt=media&token=e4d6c3d6-f3b0-4aa1-becd-d812dd85c0bb`
            },
            {
              alt: "revolver image work 7",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver7.png?alt=media&token=14a7a81c-145c-4d95-82c1-adbbe599de05`
            },
            {
              alt: "revolver image work 8",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver8.png?alt=media&token=98a8a3a9-a3a3-404a-ae84-52f420284de0`
            },
            {
              alt: "revolver image work 9",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver9.png?alt=media&token=f4d55ec7-54d5-4f1d-8809-1a584b7a4a99`
            },
            {
              alt: "revolver image work 10",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver10.png?alt=media&token=5093a508-1366-42a4-ab6e-2934e396cdb4`
            }
          ]
        },
        {
          name: "Apocalypse",
          work: [
            {
              alt: "Apocalypse image work 1",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fapocalypse%2Fapocalypse%201.png?alt=media&token=6cbed1e2-4953-484d-927f-1f86e9d1141c`
            },
            {
              alt: "Apocalypse image work 2",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fapocalypse%2Fapocalypse%202.png?alt=media&token=f577de61-2a44-435e-8fa9-d2b593fc9e1b`
            },
            {
              alt: "Apocalypse image work 3",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fapocalypse%2Fapocalypse%203.png?alt=media&token=3e3e6cd7-4dc8-4e44-9da0-ca9a5d2ef933`
            },
            {
              alt: "Apocalypse image work 4",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fapocalypse%2Fapocalypse%204.png?alt=media&token=8882c37e-5402-44b8-901a-2ea719b59cff`
            },
            {
              alt: "Apocalypse image work 5",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fapocalypse%2Fapocalypse%205.png?alt=media&token=4bbb150f-0123-4211-bb49-51db34c245c5`
            },
            {
              alt: "Apocalypse image work 6",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fapocalypse%2Fapocalypse%206.png?alt=media&token=60cc8c3b-0eed-4592-bbe6-a1a419018f7b`
            },
            {
              alt: "Apocalypse image work 7",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fapocalypse%2Fapocalypse%207.png?alt=media&token=f6e52c7e-4275-4bab-9893-3c8b64c75231`
            },
            {
              alt: "Apocalypse image work 8",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fapocalypse%2Fapocalypse%208.png?alt=media&token=a38bf45c-4d4c-4953-8d8c-9b6088a95561`
            },
            {
              alt: "Apocalypse image work 9",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fapocalypse%2Fapocalypse%209.png?alt=media&token=30714f1f-2ba8-4888-b99e-b4063e1c80d6`
            },
            {
              alt: "Apocalypse image work 10",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fapocalypse%2Fapocalypse%2010.png?alt=media&token=241841f3-987d-49ea-991e-0ea7628287b9`
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  callbackFunction = childData => {
    this.setState({ listNumber: childData });
  };

  renderCarousel(works, listNumber) {
    var workSelected = works[listNumber];
    return (
      <div className="">
        <Carousel workSelected={workSelected} />
        <ul className="cover-list">
          <WorkList
            listNumber={listNumber}
            works={works}
            parentCallback={this.callbackFunction}
          />
        </ul>
      </div>
    );
  }

  renderMenu() {
    return (
      <div className="col-12">
        <div className="menu">
          <Link to={"/"}>
            <h4 className="text-center">Belen Newman</h4>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    const { works, listNumber } = this.state;

    return (
      <div className="content-box-lg">
        <div className="row m-0">
          <div className="col-md-11 col-12 px-0">
            {this.renderCarousel(works, listNumber)}
            {this.renderMenu()}
          </div>

          <div className="col-md-1 col-12 px-0">
            <div className="row m-0 fixed-md-botton">
              <div
                className="col-md-6 col-12 px-0 h100v"
                style={{ backgroundColor: "#EEEEEE" }}
              >
                <Link to={"/cases"}>
                  <h3 className="menu-v m-0">Cases</h3>
                </Link>
              </div>
              <div
                className="col-md-6 col-12 px-0 h100v"
                style={{ backgroundColor: "#E1E1E1" }}
              >
                <Link to={"/about"}>
                  <h3 className="menu-v m-0">About</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Works;
