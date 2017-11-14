import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import routes from '../constants/routes';

import Home from '../containers/Home';

/**
 * Router
 */
const RouterComponent = () => (
  <Router>
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Redirect from="*" to={routes.home} />
    </Switch>
  </Router>
);

export default RouterComponent;
