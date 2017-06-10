import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Layout from './components/Layout.jsx';
import Body from './components/Body.jsx'
import HomePage from './components/HomePage.jsx'
import Root from './root.jsx';

import './style.scss';
const rootEl = document.getElementById('root');

ReactDOM.render(<Root />, rootEl);
