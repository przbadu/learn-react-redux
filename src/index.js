import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// css
import './index.css';

// Import components
import App from './App';
import About from './About';
import Repos from './Repos';



const router = (
  <Router history={hashHistory}>
    <Route path="/"  component={App} />
    <Route path="/repos" component={Repos} />
    <Route path="/about" component={About} />
  </Router>
);


ReactDOM.render(
  router,
  document.getElementById('root')
);
