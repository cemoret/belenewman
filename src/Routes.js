import React from 'react';
import { Route, Switch } from 'react-router-dom';

// General
import Projects from './components/Projects';
import Branding from './components/Branding';
import About from './components/About';
import Shop from './components/Shop';

// Projects
import BarraChocolate from './components/Projects/barra-chocolate';
import FollowTheForest from './components/Projects/follow-the-forest';
import Nun from './components/Projects/nun';
import Hooleap from './components/Projects/hooleap';

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Projects} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/branding" component={Branding} />
        <Route exact path="/about" component={About} />
        <Route exact path="/shop" component={Shop} />
        {/* Projects */}
        <Route exact path="/projects/barra-chocolate" component={BarraChocolate} />
        <Route exact path="/projects/follow-the-forest" component={FollowTheForest} />
        <Route exact path="/projects/nun" component={Nun} />
        <Route exact path="/projects/hooleap" component={Hooleap} />
      </Switch>
    </div>
  );
};
