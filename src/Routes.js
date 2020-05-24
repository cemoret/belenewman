import React from "react";
import { Route, Switch } from "react-router-dom";

// General
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/error" component={Error} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
};
