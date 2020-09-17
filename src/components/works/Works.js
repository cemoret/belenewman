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
          name: "Practice  |  UX / UI",
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
          name: "From  |  Website",
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
              type: "video",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Ffrom%2Ffrom%204.mov?alt=media&token=70d5b097-e6ea-46a0-97fc-f107ec96d7b7`
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
              type: "video",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Ffrom%2Ffrom%207.mov?alt=media&token=16c010c3-68f6-47ee-ac41-5d5b7bc7a91b`
            },
            {
              alt: "from-practice-work-8",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Ffrom%2Ffrom%208.png?alt=media&token=eb1042de-a03a-4399-a1de-09e0f1a09dab`
            }
          ]
        },

        {
          name: "Revolver  |  Hospitality",
          work: [
            {
              alt: "revolver image work 1",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver1.png?alt=media&token=4a717f70-cc91-4e3d-8cc0-0e83a42325a5`
            },
            {
              alt: "revolver image work 2",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver2.png?alt=media&token=9eb4965a-6d14-41bd-9ffd-a31f63c76e37`
            },
            {
              alt: "revolver image work 3",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver3.png?alt=media&token=63a68d40-6914-40f9-ae6c-132ddaf07886`
            },
            {
              alt: "revolver image work 4",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver4.png?alt=media&token=23f5cb3b-e43f-40a9-81c1-443f98c0360d`
            },
            {
              alt: "revolver image work 5",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver5.png?alt=media&token=61202959-bfc1-4a4c-a0bb-9ebc55bd1ec5`
            },
            {
              alt: "revolver image work 6",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver6.png?alt=media&token=63aa1877-b5db-4a6f-8e5b-d408e07a3e28`
            },
            {
              alt: "revolver image work 7",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver7.png?alt=media&token=dc08dea9-7d79-479c-bb7e-3187c74685e9`
            },
            {
              alt: "revolver image work 8",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver8.png?alt=media&token=178a6f87-fd72-4450-833d-e029a32040d3`
            },
            {
              alt: "revolver image work 9",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver9.png?alt=media&token=00c6703f-02a7-46ef-a8a1-b3004ea558b7`
            },
            {
              alt: "revolver image work 10",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver10.png?alt=media&token=052ba748-347d-4dad-a4f9-4b80379c105e`
            },
            {
              alt: "revolver image work 11",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver11.png?alt=media&token=0909a07f-83b4-4afc-ac2a-ec79119eb599`
            },
            {
              alt: "revolver image work 12",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver12.png?alt=media&token=7c2219c3-990c-4f4e-8d72-ea0e9a4e72a0`
            },
            {
              alt: "revolver image work 13",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Frevolver%2Frevolver13.png?alt=media&token=7122a175-7272-42e1-9eca-e0aa1578fee7`
            }
          ]
        },
        {
          name: "Apocalypse  |  Book",
          work: [
            {
              alt: "Apocalypse image work 1",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fapocalypse%2Fapocalypse%201.png?alt=media&token=d1b123aa-77e2-4b24-b2c8-756628e45cfc`
            },
            {
              alt: "Apocalypse image work 2",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fapocalypse%2Fapocalypse%202.png?alt=media&token=9c4d5eef-92a9-45fc-937e-eca38eb51d29`
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
        },
        {
          name: "Grantour  |  Magazine",
          work: [
            {
              alt: "Grantour-work-1",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fgrantour%2Fgrantour%201.png?alt=media&token=e917f749-0e52-40f5-b0fb-2766e0bcacfd`
            },
            {
              alt: "Grantour-work-2",
              type: "video",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fgrantour%2Fgrantour%202%20.mov?alt=media&token=52d4e52c-edb0-43cc-9af1-8762a2cacaf6`
            },
            {
              alt: "Grantour-work-3",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fgrantour%2Fgrantour%203.png?alt=media&token=10608e3e-460c-43c1-bff1-0bd68da4ce3f`
            },
            {
              alt: "Grantour-work-4",
              type: "video",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fgrantour%2Fgrantour%204.mov?alt=media&token=d583b73a-e588-413b-b249-f0364616f0e1`
            },
            {
              alt: "Grantour-work-5",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fgrantour%2Fgrantour%205.png?alt=media&token=86bb7a5d-2f37-4fd3-9a1c-4a78925fff8c`
            },
            {
              alt: "Grantour-work-6",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fgrantour%2Fgrantour%206.png?alt=media&token=3a0dc2cb-55ce-41dc-a842-18f13be6a666`
            },
            {
              alt: "Grantour-work-7",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fgrantour%2Fgrantour%207.png?alt=media&token=bc323acb-612d-45fe-9c45-000c37ba9f75`
            },
            {
              alt: "Grantour-work-8",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fgrantour%2Fgrantour%208.png?alt=media&token=1102eed2-40a0-474b-9f29-8b25d5da13fd`
            },
            {
              alt: "Grantour-work-9",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fgrantour%2Fgrantour%209.png?alt=media&token=265d3116-d29b-48d3-9731-f5ae930af15a`
            },
            {
              alt: "Grantour-work-10",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fgrantour%2Fgrantour%2010.png?alt=media&token=1f09eb41-2753-4531-9cdf-a9d06bae0650`
            },
            {
              alt: "Grantour-work-11",
              type: "image",
              src: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/selected%2Fgrantour%2Fgrantour%2011.png?alt=media&token=36736e98-2363-435e-85bf-1894376f4e33`
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
    this.setState({ listNumber: childData, slickGoTo: 0 });
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
            autoPlay={false}
            speed={4000}
            autoplaySpeed={10}
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
                className="col-md-6 col-12 px-0"
                style={{ backgroundColor: "#EEEEEE" }}
              >
                <Link to={"/cases"}>
                  <div className="h100v">
                    <h3 className="menu-v m-0">Cases</h3>
                  </div>
                </Link>
              </div>
              <div
                className="col-md-6 col-12 px-0"
                style={{ backgroundColor: "#E1E1E1" }}
              >
                <Link to={"/about"}>
                  <div className="h100v">
                    <h3 className="menu-v m-0">About</h3>
                  </div>
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
