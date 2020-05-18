import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

// Components
import Footer from "./Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      text: "black",
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

  rederIndex() {
    return (
      <div>
        <div>Index</div>
      </div>
    );
  }

  rederWorks() {
    return (
      <div>
        <img
          src={`https://cms.belenewman.com/wp-content/uploads/2020/05/1.jpg`}
          className="img-content"
          alt="Smiley face"
        />
        <div className="row p-2">
          <div className="col-4">
            <h5>-></h5>
          </div>
          <div className="col-4">
            <h5>
              The first issue explores the human being or, rather, how the human
              figure has been represented and materialized in all kinds of
              objects with spiritual, mythological, emotional and social values.
            </h5>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }

  rederAbout() {
    const { RRSS } = this.state;
    return (
      <div>
        <h5>
          Bound is a biannual publication and digital platform that deals with
          the world of matter and explores the connections between objects and
          their owners. The project gives special importance to its
        </h5>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={RRSS.instagram[0].http}
        >
          <h5 className="d-inline text-nobrand underline  pt-5">
            {RRSS.instagram[0].name}
          </h5>
        </a>
      </div>
    );
  }

  render() {
    const { loading } = this.props.data;
    if (loading) {
      return <div>Loading...</div>;
    } else {
      const { title } = this.props.data.posts.nodes[0];
      return (
        <div className="content-box-lg">
          <div className="row m-0">
            <div className="col-12 p-2 pb-5">Title: {title}</div>
            <div className="col-3 p-2">{this.rederIndex()}</div>
            <div className="col-6 p-2">{this.rederWorks()}</div>
            <div className="col-3 p-2">{this.rederAbout()}</div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

const queryPost = gql`
  query MyQuery {
    posts {
      nodes {
        title
      }
    }
  }
`;

export default graphql(queryPost)(Home);
