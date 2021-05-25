import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import App from './App';

export const Path = {
  app: '/',
};

const routes = (
  <Switch>
    <Route exact path={Path.app} component={App} />
    <Redirect to={Path.app} />
  </Switch>
);

export default routes;
