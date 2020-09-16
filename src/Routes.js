import React from "react";
import { Route, Switch } from "react-router-dom";

// General
import Home from "./components/Home";
import Works from "./components/works/Works";

// import Error from "./components/Error";

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/cases" component={Home} />
        <Route exact path="/about" component={Home} />
        {/*
        <Route exact path="/error" component={Error} />
        <Route path="*" component={Error} />*/}
      </Switch>
    </div>
  );
};
