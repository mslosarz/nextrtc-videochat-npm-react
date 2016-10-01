import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';
import {render} from 'react-dom';
import {Router, RouteHandler, Route, IndexRoute, browserHistory} from 'react-router';

import HomePage from './home/HomePage.jsx';
import JoinPage from './home/JoinPage.jsx';
import CreatePage from './home/CreatePage.jsx';
import ConversationPage from './conversation/ConversationPage.jsx';

var appBase = '/';

render((
  <Router history = {browserHistory}>
    <Route path = {appBase}>
      <IndexRoute component = {HomePage} />
      <Route path = "create" component = {CreatePage} />
      <Route path = "join" component = {JoinPage} />
      <Route path = "conversation/:conversationId" component = {ConversationPage} />
      <Route path = "*" component = {HomePage} />
    </Route>
  </Router>
), document.getElementById('root'));

