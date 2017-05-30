import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Layout from './components/Layout.jsx';
import Body from './components/Body.jsx'
import HomePage from './components/HomePage.jsx'

import './style.scss';

const root = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout} >
      <Route path="sources" component={Body} />
      <IndexRoute component={HomePage} />
    </Route>
  </Router>,
  root
);
