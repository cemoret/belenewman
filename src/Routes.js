import React from "react";
import { Route, Switch } from "react-router-dom";

// General
import Home from "./components/Home";
import Error from "./components/Error";

import Apocalypse from "./components/Works/Apocalypse";
import GrandTour from "./components/Works/GranToour";
import Lumami from "./components/Works/Lumami";
import Revolver from "./components/Works/Revolver";
import Barra from "./components/Works/Barra";

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/cronology-of-the-apocalypse"
          component={Apocalypse}
        />
        <Route exact path="/grandtour" component={GrandTour} />
        <Route exact path="/lumami" component={Lumami} />
        <Route exact path="/revolver" component={Revolver} />
        <Route exact path="/barra" component={Barra} />
        <Route exact path="/error" component={Error} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
};
