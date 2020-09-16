import React from "react";
import { Route, Switch } from "react-router-dom";

// General
import Home from "./components/Home";
import Works from "./components/works/Works";
import Cases from "./components/cases/Cases";
import About from "./components/About";

import Revolver from "./components/cases/Revolver";

// import Error from "./components/Error";

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/cases" component={Cases} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cases/practice" component={Revolver} />
        <Route exact path="/cases/revolver" component={Revolver} />
        {/*
        <Route exact path="/error" component={Error} />
        <Route path="*" component={Error} />*/}
      </Switch>
    </div>
  );
};
