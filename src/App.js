import "./styles/styles.css";
import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
// import ScrollToTop from "./ScrollToTop";

const client = new ApolloClient({
  uri: "https://cms.belenewman.com/graphql"
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { prevPage: "" };
  }

  render() {
    return (
      <div>
        <ApolloProvider client={client}>
          <Router>
            <div>
              <Routes />
            </div>
          </Router>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
