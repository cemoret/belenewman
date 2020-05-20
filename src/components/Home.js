import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

// Components
import Carousel from "./Carousel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_index: null,
      RRSS: {
        instagram: [
          {
            name: "Instagram",
            http: `${"https://www.instagram.com/belennewman/"}`
          }
        ]
      }
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  listenScrollEvent = e => {
    if (window.scrollY > window.innerHeight) {
      this.setState({ color: "white", text: "black" });
    } else {
      this.setState({ color: "black", text: "white" });
    }
  };

  rederLeft() {
    return (
      <div className="row p-2">
        <div className="col-12 pb-5">
          <div className="float-left">
            <h4>B</h4>
          </div>
          <div className="float-right">
            <h4>Belen Newman</h4>
          </div>
        </div>
        <div className="col-12 pb-5">{this.renderIndex()}</div>
        <div className="col-12 pt-5">{this.rederAbout()}</div>
      </div>
    );
  }

  async onClickIndex(id) {
    await this.setState({ id_index: id });
    var element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  }

  renderIndex() {
    const { id_index } = this.state;
    const { nodes } = this.props.data.posts;
    return nodes.map(({ id, work }, index) => {
      const { title, number, date } = work;
      if(id_index === id) {
        return (
          <div
            key={index}
            className="row pb-3 index-selected"
            onClick={() => this.onClickIndex(id)}
          >
            <div className="col-2 pr-0" style={{ cursor: "pointer" }}>
              <h4>{number}</h4>
            </div>
            <div className="col-10 pl-0 index-link">
              <h4>{title}</h4>
              <h4>{date}</h4>
            </div>
          </div>
        );
      }
      return (
        <div
          key={index}
          className="row pb-3"
          onClick={() => this.onClickIndex(id)}
        >
          <div className="col-2 pr-0" style={{ cursor: "pointer" }}>
            <h4>{number}</h4>
          </div>
          <div className="col-10 pl-0 index-link">
            <h4>{title}</h4>
            <h4>{date}</h4>
          </div>
        </div>
      );
    });
  }

  rederRight() {
    return (
      <div>
        <div className="row p-2">
          <div className="col-12 pb-5">
            <div className="float-left">
              <h4>
                <a
                  className="link"
                  href="mailto:hola@belenewman.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hola@belenewman.com
                </a>
              </h4>
            </div>
          </div>
        </div>
        {this.rederWorks()}
      </div>
    );
  }

  rederWorks() {
    const { nodes } = this.props.data.posts;
    const { id_index } = this.state;
    return nodes.map(({ work, id }, index) => {
      if (id_index === id) {
        return (
          <div key={index} id={id} className="row pb-5">
            <div className="col-lg-9 col-12" >
              <Carousel gallery={work.gallery} />
            </div>
            <div className="col-lg-3 col-12">
              <div className="t-bottom">
                <h4>{work.description}</h4>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div key={index} className="row pb-5">
            <div className="col-lg-9 col-12">
              <Carousel gallery={work.gallery} />
            </div>
            <div className="col-lg-3 col-12"></div>
          </div>
        );
      }
    });
  }

  rederAbout() {
    const { RRSS } = this.state;
    return (
      <div className="row p-2">
        <div className="col-12">
          <h4>About</h4>
          <h4>
            Bound is a biannual publication and digital platform that deals with
            the world of matter and explores the connections between objects and
            their owners. The project gives special importance to its
          </h4>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={RRSS.instagram[0].http}
          >
            <h4 className="d-inline text-nobrand underline  pt-5">
              {RRSS.instagram[0].name}
            </h4>
          </a>
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.props.data;
    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="content-box-lg">
          <div className="row m-0">
            <div className="col-lg-3 col-12 p-2" id={"left"}>
              {this.rederLeft()}
            </div>
            <div className="col-lg-9 col-12 p-2" id={"right"}>
              {this.rederRight()}
            </div>
          </div>
        </div>
      );
    }
  }
}

const queryPost = gql`
  query MyQuery {
    posts {
      nodes {
        id
        title
        work {
          title
          number
          date
          description
          gallery {
            src: mediaItemUrl
          }
        }
      }
    }
  }
`;

export default graphql(queryPost)(Home);
