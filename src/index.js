import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// Import components
import App from './App';
import './index.css';


const router = (
  <Router history={hashHistory}>
    <Route path="/"  component={App} />
  </Router>
);


ReactDOM.render(
  router,
  document.getElementById('root')
);
