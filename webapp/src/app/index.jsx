import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';
import {render} from 'react-dom';
import {Router, RouteHandler, Route, IndexRoute, browserHistory} from 'react-router';

import HomePage from './home/HomePage.jsx';

var appBase = '/';

render((
  <Router history = {browserHistory}>
    <Route path = {appBase} component={HomePage}>
      <IndexRoute component = {HomePage} />
      <Route path = "*" component = {HomePage}/>
    </Route>
  </Router>
), document.getElementById('root'))

