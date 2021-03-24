import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Auth from 'routes/Auth';
import About from 'routes/About';
import Home from 'routes/Home';
import Works from 'routes/Works';
import TopNavigation from 'components/TopNavigation';
import Admin from 'routes/Admin';

const Router = ({ isLoggedIn }) => {
  
  return (
    <HashRouter>
      <Switch>
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/works">
            <TopNavigation />
            <Works />
          </Route>
          <Route exact path="/about">
            <TopNavigation />
            <About />
          </Route>
          <Route exact path="/auth">
            {isLoggedIn ? (
              <Admin />
            ) : (
              <Auth />
            ) }
          </Route>
        </main>
      </Switch>
    </HashRouter>
  );
};

export default Router;